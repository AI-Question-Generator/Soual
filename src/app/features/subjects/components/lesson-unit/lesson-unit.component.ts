import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import type { UnitGroup } from '@feature/subjects/models';
import { LessonRowComponent } from '../lesson-row/lesson-row.component';

@Component({
  selector: 'soual-lesson-unit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  imports: [AccordionModule, LessonRowComponent],
  template: `
    <p-accordion [value]="openSections()" [multiple]="true">
      @for (group of unit().sections; track group.section) {
        <p-accordion-panel [value]="group.section">
          <p-accordion-header>
            <div class="flex items-center gap-2.5 flex-1 min-w-0">
              <i class="pi {{ group.icon }} text-main-500 text-xs"></i>
              <span class="text-sm font-semibold text-slate-700">{{ group.label }}</span>
              <span class="text-[11px] font-medium text-slate-400">
                {{ group.lessons.length }} درس
              </span>
            </div>
          </p-accordion-header>
          <p-accordion-content>
            <div class="flex flex-col gap-2 pt-1">
              @for (lesson of group.lessons; track lesson.id) {
                <soual-lesson-row [lesson]="lesson" />
              }
            </div>
          </p-accordion-content>
        </p-accordion-panel>
      }
    </p-accordion>
  `,
})
export class LessonUnitComponent {
  unit = input.required<UnitGroup>();

  protected readonly openSections = computed(() =>
    this.unit().sections.map((group) => group.section),
  );
}
