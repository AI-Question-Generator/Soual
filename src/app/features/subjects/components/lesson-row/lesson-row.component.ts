import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { LessonSummary } from '@feature/subjects/models';
import { LessonSelectionService } from '@feature/subjects/services/lesson-selection.service';

@Component({
  selector: 'soual-lesson-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, CheckboxModule],
  templateUrl: './lesson-row.component.html',
})
export class LessonRowComponent {
  lesson = input.required<LessonSummary>();

  private readonly selectionService = inject(LessonSelectionService);
  protected readonly selected = computed(() => this.selectionService.isSelected(this.lesson().id));

  protected toggle(): void {
    this.selectionService.toggle(this.lesson().id);
  }

  protected readonly cardClasses = computed(
    () =>
      `group flex items-center gap-3 rounded-xl border p-2.5 cursor-pointer transition-all duration-150 ${
        this.selected()
          ? 'bg-main-50 border-main-300 shadow-sm'
          : 'bg-white border-slate-200 hover:border-main-200 hover:bg-slate-50'
      }`,
  );
}
