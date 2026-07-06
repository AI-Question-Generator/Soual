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
import { catchError, EMPTY, switchMap, takeWhile, timer } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { ProgressBarModule } from 'primeng/progressbar';
import { QuestionGenerationService } from '@feature/generation/services';
import { RequestStatus, type GenerationRequestResponse } from '@feature/generation/models';
import { QuestionCardComponent, RequestStatusBadgeComponent } from '@feature/generation/components';
import { ToastService } from '@shared/services';

const POLL_INTERVAL_MS = 5000;

@Component({
  selector: 'soual-request-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'container block py-6' },
  imports: [
    RouterLink,
    ButtonModule,
    MessageModule,
    ProgressBarModule,
    QuestionCardComponent,
    RequestStatusBadgeComponent,
  ],
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
            <div class="flex flex-col gap-1">
              <h2 class="text-lg font-bold text-slate-800">{{ request.projectName }}</h2>
              <span class="text-xs text-slate-500">{{ formatDate(request.requestedAt) }}</span>
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
            <p class="text-sm text-slate-500 text-center py-8">لم يتم توليد أي أسئلة لهذا الطلب</p>
          } @else {
            <section class="flex flex-col gap-4">
              <h3 class="text-base font-bold text-slate-800">
                الأسئلة المولدة ({{ questions().length }})
              </h3>
              @for (question of questions(); track question.id; let i = $index) {
                <soual-question-card [question]="question" [index]="i" />
              }
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

  protected formatDate(value: string): string {
    if (!value) return '—';
    return new Intl.DateTimeFormat('ar-EG', { dateStyle: 'medium', timeStyle: 'short' }).format(
      new Date(value),
    );
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
