import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Lesson } from '@feature/subjects/models';
import { LessonSelectionService } from '@feature/subjects/services/lesson-selection.service';

@Component({
  selector: 'soual-lesson-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(click)': 'toggle()',
  },
  template: `
    <div
      class="flex items-center gap-3 rounded-lg border px-3 py-2.5 cursor-pointer transition-colors"
      [class]="containerClasses()"
    >
      <span
        class="flex-center w-5 h-5 rounded border-2 transition-colors shrink-0"
        [class]="checkboxClasses()"
      >
        @if (selected()) {
          <i class="pi pi-check text-white text-xs"></i>
        }
      </span>

      <span class="flex-1 text-sm text-slate-700 leading-snug">
        {{ lesson().name }}
      </span>
    </div>
  `,
})
export class LessonRowComponent {
  lesson = input.required<Lesson>();

  private readonly selectionService = inject(LessonSelectionService);
  protected readonly selected = computed(() => this.selectionService.isSelected(this.lesson().id));

  protected readonly containerClasses = computed(() =>
    this.selected() ? 'bg-main-50 border-main-300' : 'bg-slate-50 border-slate-200',
  );

  protected readonly checkboxClasses = computed(() =>
    this.selected() ? 'bg-main-500 border-main-500' : 'border-slate-300',
  );

  protected toggle(): void {
    this.selectionService.toggle(this.lesson().id);
  }
}
