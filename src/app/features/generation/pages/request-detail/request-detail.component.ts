import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
  untracked,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  moveItemInArray,
  type CdkDragDrop,
} from '@angular/cdk/drag-drop';
import { catchError, EMPTY, switchMap, takeWhile, timer } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { ProgressBarModule } from 'primeng/progressbar';
import type { MenuItem } from 'primeng/api';
import { QuestionExportService, QuestionGenerationService } from '@feature/generation/services';
import {
  RequestStatus,
  type GeneratedQuestion,
  type GenerationRequestResponse,
} from '@feature/generation/models';
import { QuestionCardComponent, RequestStatusBadgeComponent } from '@feature/generation/components';
import { ToastService } from '@shared/services';
import { formatDate } from '@shared/utilities';

const POLL_INTERVAL_MS = 5000;

@Component({
  selector: 'soual-request-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'container block py-6' },
  imports: [
    RouterLink,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
    ButtonModule,
    MenuModule,
    MessageModule,
    ProgressBarModule,
    QuestionCardComponent,
    RequestStatusBadgeComponent,
  ],
  styles: `
    .cdk-drag-placeholder {
      opacity: 0.4;
      border: 2px dashed var(--p-primary-color, #3b82f6);
      border-radius: 1rem;
    }
    .cdk-drag-animating {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
    .questions-drop-list.cdk-drop-list-dragging > *:not(.cdk-drag-placeholder) {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
  `,
  template: `
    <div class="flex flex-col gap-6">
      <p-button
        text
        label="كل الطلبات"
        icon="pi pi-arrow-right"
        size="small"
        routerLink="/generation/requests"
      />

      @if (loadError()) {
        <p-message severity="error" content="تعذر توليد الأسئلة — حاول مرة أخرى" />
      } @else if (request(); as request) {
        <section
          class="rounded-2xl bg-white border border-slate-200 shadow-sm p-5 flex flex-col gap-4"
        >
          <header class="flex items-center justify-between gap-3 flex-wrap">
            <div class="flex flex-col gap-2">
              <h2 class="text-lg font-bold text-slate-800">{{ request.projectName }}</h2>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs text-slate-500">{{ formatDate(request.requestedAt) }}</span>
                <span
                  class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600"
                >
                  {{ request.lessonIds.length }} درس
                </span>
                <span
                  class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600"
                >
                  {{ totalRequested() }} سؤال
                </span>
              </div>
            </div>
            <soual-request-status-badge [status]="currentStatus()" />
          </header>

          @if (isActive()) {
            <div class="flex flex-col gap-2">
              <p-progressbar mode="indeterminate" [style]="{ height: '4px' }" />
              <span class="text-sm text-slate-500">جاري توليد الأسئلة.</span>
            </div>
          }

          @if (errorLog(); as log) {
            <p-message [severity]="currentStatus() === 'FAILED' ? 'error' : 'warn'">{{
              log
            }}</p-message>
          }
        </section>

        @if (!isActive()) {
          @if (questions().length === 0) {
            <div
              class="flex-col-center gap-4 rounded-2xl border border-dashed border-slate-200 bg-white py-14 text-center"
            >
              <span class="flex-center h-14 w-14 rounded-2xl bg-main-50 text-main-400">
                <i class="pi pi-inbox text-3xl"></i>
              </span>
              <p class="max-w-xs text-sm leading-relaxed text-slate-500">
                لم يتم توليد أي أسئلة لهذا الطلب
              </p>
            </div>
          } @else {
            <section class="flex flex-col gap-4">
              <div class="flex items-center gap-2.5">
                <h3 class="text-base font-bold text-slate-800">الأسئلة المولدة</h3>
                <span
                  class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600"
                >
                  {{ questions().length }} سؤال
                </span>
                <p-menu
                  #exportMenu
                  appendTo="body"
                  [model]="exportItems"
                  [popup]="true"
                  [pt]="{ root: 'mt-1' }"
                />
                <p-button
                  class="ms-auto"
                  size="small"
                  outlined
                  icon="pi pi-file-word"
                  label="تصدير Word"
                  (onClick)="exportMenu.toggle($event)"
                />
              </div>
              <div
                cdkDropList
                class="questions-drop-list flex flex-col gap-4"
                [cdkDropListData]="questions()"
                (cdkDropListDropped)="onQuestionDrop($event)"
              >
                @for (question of questions(); track question.id; let i = $index) {
                  <div cdkDrag class="flex items-stretch gap-2">
                    <p-button
                      cdkDragHandle
                      text
                      severity="secondary"
                      icon="pi pi-bars"
                      class="shrink-0 self-center cursor-move"
                      ariaLabel="اسحب لإعادة ترتيب السؤال"
                    />
                    <soual-question-card class="flex-1" [question]="question" [index]="i" />
                  </div>
                }
              </div>
            </section>
          }
        }
      } @else {
        <div class="flex flex-col gap-2">
          <p-progressbar mode="indeterminate" [style]="{ height: '4px' }" />
          <span class="text-sm text-slate-500 text-center">جاري تحميل الطلب...</span>
        </div>
      }
    </div>
  `,
})
export class RequestDetailComponent {
  id = input.required<string>();

  private readonly generationService = inject(QuestionGenerationService);
  private readonly exportService = inject(QuestionExportService);
  private readonly toast = inject(ToastService);

  protected readonly request = signal<GenerationRequestResponse | null>(null);
  protected readonly loadError = signal(false);

  private readonly polledStatus = toSignal(
    toObservable(this.id).pipe(
      switchMap((id) =>
        timer(0, POLL_INTERVAL_MS).pipe(
          switchMap(() => this.generationService.getRequestStatus(id)),
          takeWhile((status) => !this.isTerminalStatus(status.status), true),
        ),
      ),
      catchError(() => {
        this.loadError.set(true);
        return EMPTY;
      }),
    ),
  );

  protected readonly currentStatus = computed(
    () => this.polledStatus()?.status ?? this.request()?.status ?? 'PENDING',
  );
  protected readonly isActive = computed(() => !this.isTerminalStatus(this.currentStatus()));
  protected readonly errorLog = computed(
    () => this.polledStatus()?.errorLog || this.request()?.errorLog || '',
  );
  protected readonly questions = computed(() => this.request()?.generatedQuestions ?? []);
  protected readonly totalRequested = computed(() =>
    (this.request()?.questionConfigs ?? []).reduce((sum, config) => sum + config.numQuestions, 0),
  );

  protected readonly exportItems: MenuItem[] = [
    {
      label: 'نموذج الإجابة',
      icon: 'pi pi-file-word',
      command: () => this.exportWord(true),
    },
    {
      label: 'نسخة الطالب',
      icon: 'pi pi-file-word',
      command: () => this.exportWord(false),
    },
  ];

  constructor() {
    effect(() => {
      const polled = this.polledStatus();
      if (!polled) return;
      const current = untracked(this.request);
      const reachedTerminal =
        this.isTerminalStatus(polled.status) &&
        (!current || !this.isTerminalStatus(current.status));
      if (!current || reachedTerminal) {
        untracked(() => this.fetchRequest());
      }
    });
  }

  protected readonly formatDate = (value: string) => formatDate(value, true);

  // Local-only reorder: mutates the request signal; not persisted to the backend.
  protected onQuestionDrop(event: CdkDragDrop<GeneratedQuestion[]>): void {
    if (event.previousIndex === event.currentIndex) return;
    this.request.update((current) => {
      if (!current) return current;
      const generatedQuestions = [...current.generatedQuestions];
      moveItemInArray(generatedQuestions, event.previousIndex, event.currentIndex);
      return { ...current, generatedQuestions };
    });
  }

  private exportWord(includeAnswers: boolean): void {
    const request = this.request();
    if (!request) return;
    this.exportService.exportWord(request, { includeAnswers }).catch(() => {
      this.toast.error('تعذر التصدير', 'حدث خطأ أثناء إنشاء ملف Word');
    });
  }

  private fetchRequest(): void {
    this.generationService.getRequestById(this.id()).subscribe({
      next: (request) => this.request.set(request),
      error: () => {
        this.loadError.set(true);
        this.toast.error('تعذر تحميل الطلب', 'حدث خطأ أثناء تحميل تفاصيل الطلب');
      },
    });
  }

  private isTerminalStatus(status: RequestStatus): boolean {
    return status === 'COMPLETED' || status === 'COMPLETED_WITH_ERRORS' || status === 'FAILED';
  }
}
