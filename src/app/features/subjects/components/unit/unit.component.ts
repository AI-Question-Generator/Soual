import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { Unit } from '@feature/subjects/models';
import { LessonRowComponent } from '@feature/subjects/components/lesson-row/lesson-row.component';
import { LessonSelectionService } from '@feature/subjects/services/lesson-selection.service';

@Component({
  selector: 'soual-unit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  imports: [LessonRowComponent],
  template: `
    <section class="rounded-xl border border-slate-200 bg-white shadow-sm">
      <header
        class="flex items-center justify-between gap-4 px-4 py-3 cursor-pointer"
        (click)="toggleExpanded()"
      >
        <div class="flex flex-col min-w-0">
          <h4 class="font-bold text-base text-slate-800 leading-tight">{{ unit().name }}</h4>
          <span class="text-xs text-slate-500 mt-0.5">{{ unit().subtitle }}</span>
        </div>

        <div class="flex items-center gap-3 shrink-0">
          <span class="text-xs font-semibold rounded-md px-2 py-1 bg-slate-100 text-slate-600">
            {{ selectedCountInUnit() }} / {{ unit().lessons.length }}
          </span>
          <i
            class="pi pi-chevron-down text-xs text-slate-400 transition-transform"
            [class.rotate-180]="expanded()"
          ></i>
        </div>
      </header>

      @if (expanded()) {
        <div class="flex flex-col gap-2 px-4 pb-4 pt-1">
          @for (lesson of unit().lessons; track lesson.id) {
            <soual-lesson-row [lesson]="lesson" />
          }
        </div>
      }
    </section>
  `,
})
export class UnitComponent {
  unit = input.required<Unit>();

  private readonly selectionService = inject(LessonSelectionService);

  protected readonly expanded = signal(true);

  protected readonly selectedCountInUnit = computed(() => {
    const ids = this.selectionService.ids();
    return this.unit().lessons.filter((l) => ids.has(l.id)).length;
  });

  protected toggleExpanded() {
    this.expanded.update((v) => !v);
  }
}
