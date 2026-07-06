import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  model,
  output,
  signal,
  untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { QuestionGenerationService } from '@feature/generation/services';
import type { LessonGenerationConfig, QuestionType } from '@feature/generation/models';
import type { LessonSummary } from '@feature/subjects/models';
import { ToastService } from '@shared/services';

const DEFAULT_NUM_QUESTIONS = 3;

@Component({
  selector: 'soual-generation-config-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    DialogModule,
    AccordionModule,
    CheckboxModule,
    InputNumberModule,
    ButtonModule,
    TagModule,
  ],
  template: `
    <p-dialog
      header="إعدادات توليد الأسئلة"
      [modal]="true"
      [draggable]="false"
      [style]="{ width: '42rem', maxWidth: '95vw' }"
      [(visible)]="visible"
    >
      <p class="text-sm text-slate-500 mb-4">حدد أنواع الأسئلة وعددها لكل درس من الدروس المختارة</p>

      @if (questionTypes(); as types) {
        <p-accordion [value]="0">
          @for (lesson of lessons(); track lesson.id; let index = $index) {
            <p-accordion-panel [value]="index">
              <p-accordion-header>
                <div class="flex items-center gap-3 flex-1 min-w-0">
                  <span class="truncate">{{ lesson.name }}</span>
                  @if (lessonTotal(lesson.id) > 0) {
                    <p-tag severity="info" [value]="lessonTotalLabel(lesson.id)" />
                  }
                </div>
              </p-accordion-header>
              <p-accordion-content>
                <div class="flex flex-col gap-2">
                  @for (type of types; track type.id) {
                    <div
                      class="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2"
                    >
                      <p-checkbox
                        [binary]="true"
                        [inputId]="controlId(lesson.id, type.id)"
                        [ngModel]="isTypeSelected(lesson.id, type.id)"
                        (ngModelChange)="toggleType(lesson.id, type.id)"
                      />
                      <label
                        class="flex-1 text-sm text-slate-700 cursor-pointer"
                        [for]="controlId(lesson.id, type.id)"
                      >
                        {{ type.name }}
                      </label>
                      <p-inputnumber
                        buttonLayout="horizontal"
                        incrementButtonIcon="pi pi-plus"
                        decrementButtonIcon="pi pi-minus"
                        [ngModel]="countFor(lesson.id, type.id)"
                        [disabled]="!isTypeSelected(lesson.id, type.id)"
                        [min]="1"
                        [max]="20"
                        [showButtons]="true"
                        [inputStyle]="{ width: '2.5rem', textAlign: 'center' }"
                        (ngModelChange)="setCount(lesson.id, type.id, $event)"
                      />
                    </div>
                  }

                  @if (lessons().length > 1) {
                    <div>
                      <p-button
                        text
                        label="تطبيق على باقي الدروس"
                        icon="pi pi-clone"
                        size="small"
                        [disabled]="lessonTotal(lesson.id) === 0"
                        (onClick)="applyToAll(lesson.id)"
                      />
                    </div>
                  }
                </div>
              </p-accordion-content>
            </p-accordion-panel>
          }
        </p-accordion>
      } @else {
        <p class="text-sm text-slate-500 text-center py-6">جاري تحميل أنواع الأسئلة.</p>
      }

      <ng-template #footer>
        <div class="flex items-center justify-between gap-3 w-full">
          <span class="text-sm text-slate-600">
            @if (totalQuestions() > 0) {
              الإجمالي: {{ totalQuestions() }} سؤال
            }
          </span>
          <div class="flex items-center gap-2">
            <p-button
              label="إلغاء"
              severity="secondary"
              [outlined]="true"
              (onClick)="visible.set(false)"
            />
            <p-button label="توليد" [disabled]="!allLessonsConfigured()" (onClick)="confirm()" />
          </div>
        </div>
      </ng-template>
    </p-dialog>
  `,
})
export class GenerationConfigDialogComponent {
  visible = model<boolean>(false);
  lessons = input.required<LessonSummary[]>();
  readonly confirmed = output<LessonGenerationConfig[]>();

  private readonly generationService = inject(QuestionGenerationService);
  private readonly toast = inject(ToastService);

  protected readonly questionTypes = signal<QuestionType[] | null>(null);
  private readonly configs = signal<ReadonlyMap<number, ReadonlyMap<string, number>>>(new Map());

  protected readonly totalQuestions = computed(() => {
    let total = 0;
    for (const lessonConfig of this.configs().values()) {
      for (const count of lessonConfig.values()) total += count;
    }
    return total;
  });

  protected readonly allLessonsConfigured = computed(() => {
    const configs = this.configs();
    return (
      this.lessons().length > 0 &&
      this.lessons().every((lesson) => (configs.get(lesson.id)?.size ?? 0) > 0)
    );
  });

  constructor() {
    effect(() => {
      if (!this.visible()) return;
      untracked(() => {
        this.configs.set(new Map());
        if (this.questionTypes() === null) this.loadQuestionTypes();
      });
    });
  }

  protected isTypeSelected(lessonId: number, typeId: string): boolean {
    return this.configs().get(lessonId)?.has(typeId) ?? false;
  }

  protected countFor(lessonId: number, typeId: string): number {
    return this.configs().get(lessonId)?.get(typeId) ?? DEFAULT_NUM_QUESTIONS;
  }

  protected lessonTotalLabel(lessonId: number): string {
    return `${this.lessonTotal(lessonId)} أسئلة`;
  }

  protected controlId(lessonId: number, typeId: string): string {
    return `${lessonId}-${typeId}`;
  }

  protected lessonTotal(lessonId: number): number {
    let total = 0;
    for (const count of (this.configs().get(lessonId) ?? new Map()).values()) total += count;
    return total;
  }

  protected toggleType(lessonId: number, typeId: string): void {
    this.configs.update((configs) => {
      const lessonConfig = new Map(configs.get(lessonId) ?? []);
      if (lessonConfig.has(typeId)) {
        lessonConfig.delete(typeId);
      } else {
        lessonConfig.set(typeId, DEFAULT_NUM_QUESTIONS);
      }
      return new Map(configs).set(lessonId, lessonConfig);
    });
  }

  protected setCount(lessonId: number, typeId: string, count: number | null): void {
    if (count === null || !this.isTypeSelected(lessonId, typeId)) return;
    this.configs.update((configs) => {
      const lessonConfig = new Map(configs.get(lessonId) ?? []);
      lessonConfig.set(typeId, count);
      return new Map(configs).set(lessonId, lessonConfig);
    });
  }

  protected applyToAll(sourceLessonId: number): void {
    this.configs.update((configs) => {
      const source = configs.get(sourceLessonId);
      if (!source || source.size === 0) return configs;
      const next = new Map(configs);
      for (const lesson of this.lessons()) {
        next.set(lesson.id, new Map(source));
      }
      return next;
    });
  }

  protected confirm(): void {
    const configs = this.configs();
    const payload: LessonGenerationConfig[] = this.lessons().map((lesson) => ({
      lesson_id: String(lesson.id),
      question_types: [...(configs.get(lesson.id) ?? new Map()).entries()].map(
        ([questionTypeId, numQuestions]) => ({
          question_type_id: questionTypeId,
          num_questions: numQuestions,
        }),
      ),
    }));
    this.visible.set(false);
    this.confirmed.emit(payload);
  }

  private loadQuestionTypes(): void {
    this.generationService.getQuestionTypes().subscribe({
      next: (types) => this.questionTypes.set(types.filter((type) => type.is_active)),
      error: () => {
        this.toast.error('تعذر تحميل أنواع الأسئلة', 'حدث خطأ أثناء تحميل أنواع الأسئلة');
        this.visible.set(false);
      },
    });
  }
}
