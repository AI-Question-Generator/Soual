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
}
