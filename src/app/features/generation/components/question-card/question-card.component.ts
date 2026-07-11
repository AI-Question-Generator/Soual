import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import type { GeneratedQuestion } from '@feature/generation/models';
import { choiceLetter, formatQuestionType, orderedChoices } from '@feature/generation/utils';

@Component({
  selector: 'soual-question-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  imports: [ButtonModule, TagModule],
  template: `
    <article
      dir="ltr"
      class="rounded-2xl bg-white border border-slate-100 shadow-xs p-5 flex flex-col gap-4"
    >
      <header class="flex items-start gap-3">
        <span
          class="flex-center size-7 shrink-0 rounded-lg bg-main-50 border border-main-100 text-main-700 font-bold text-sm"
        >
          {{ index() + 1 }}
        </span>
        <p class="flex-1 text-base font-medium text-slate-800 leading-relaxed">
          {{ question().content }}
        </p>
        <p-tag severity="secondary" [value]="typeLabel()" />
      </header>

      @if (showChoices()) {
        <ul class="flex flex-col gap-2">
          @for (choice of choices(); track choice; let i = $index) {
            <li [class]="optionClasses()(choice)">
              <span class="font-bold">{{ letterFor(i) }}.</span>
              <span class="flex-1">{{ choice }}</span>
              @if (revealed() && choice === question().correct_answer) {
                <i class="pi pi-check-circle text-green-600"></i>
              }
            </li>
          }
        </ul>
      }

      <footer class="flex flex-col gap-3">
        <div>
          <p-button
            size="small"
            [label]="revealed() ? 'إخفاء الإجابة' : 'إظهار الإجابة'"
            [icon]="revealed() ? 'pi pi-eye-slash' : 'pi pi-eye'"
            [text]="true"
            (onClick)="revealed.set(!revealed())"
          />
        </div>

        @if (revealed() && !showChoices()) {
          <div class="rounded-lg bg-green-50 border border-green-200 px-4 py-3">
            <span class="text-xs font-bold text-green-700 block mb-1">الإجابة الصحيحة</span>
            <p class="text-sm text-green-800 leading-relaxed">{{ question().correct_answer }}</p>
          </div>
        }

        @if (revealed() && question().explanation) {
          <div class="rounded-lg bg-main-50 border border-main-200 px-4 py-3">
            <span class="text-xs font-bold text-main-700 block mb-1">التفسير</span>
            <p class="text-sm text-slate-700 leading-relaxed">{{ question().explanation }}</p>
          </div>
        }
      </footer>
    </article>
  `,
})
export class QuestionCardComponent {
  question = input.required<GeneratedQuestion>();
  index = input<number>(0);

  protected readonly revealed = signal(false);

  protected readonly typeLabel = computed(() => formatQuestionType(this.question().questionType));

  protected readonly choices = computed(() => orderedChoices(this.question()));

  // A single option gives the answer away (e.g. short answer without distractors)
  protected readonly showChoices = computed(() => this.choices().length > 1);

  protected letterFor(index: number): string {
    return choiceLetter(index);
  }

  protected readonly optionClasses = computed(() => {
    const isRevealed = this.revealed();
    const correct = this.question().correct_answer;
    const base =
      'flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm leading-snug transition-colors';

    return (choice: string): string =>
      isRevealed && choice === correct
        ? `${base} border-green-400 bg-green-50 text-green-800`
        : `${base} border-slate-200 bg-slate-50 text-slate-700`;
  });
}
