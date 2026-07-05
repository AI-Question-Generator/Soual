import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LessonSummary } from '@feature/subjects/models';
import { LessonSelectionService } from '@feature/subjects/services/lesson-selection.service';

@Component({
  selector: 'soual-selection-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  imports: [ButtonModule],
  template: `
    <section class="rounded-2xl border border-slate-200 shadow-sm p-3">
      <header class="flex items-center justify-between gap-2 mb-3">
        <div class="flex items-center gap-2">
          <h3 class="text-base font-bold text-slate-800">الدروس المختارة</h3>
          @if (lessons().length > 0) {
            <span
              class="flex-center h-5 min-w-5 rounded-full bg-main-50 px-1.5 text-xs font-bold text-main-700"
            >
              {{ lessons().length }}
            </span>
          }
        </div>
        @if (lessons().length > 0) {
          <p-button
            label="مسح الكل"
            size="small"
            severity="secondary"
            [text]="true"
            (onClick)="selection.clear()"
          />
        }
      </header>

      @if (lessons().length === 0) {
        <div class="rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-3 py-6">
          <p class="text-xs text-slate-500 leading-relaxed text-center">
            لم تختر أي درس بعد — علّم على الدروس من القائمة لتظهر هنا
          </p>
        </div>
      } @else {
        <ul class="flex flex-col gap-1.5 max-h-72 overflow-y-auto pe-0.5">
          @for (lesson of lessons(); track lesson.id) {
            <li
              class="flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-100 ps-3 pe-1 py-1"
            >
              <div class="flex-1 min-w-0 flex flex-col py-1">
                <span class="text-xs font-semibold text-slate-700 truncate">
                  {{ lesson.name }}
                </span>
                <span class="text-[10px] font-medium text-slate-400">
                  الوحدة {{ lesson.unitNumber }}
                </span>
              </div>
              <p-button
                text
                icon="pi pi-times"
                size="small"
                severity="secondary"
                [rounded]="true"
                (onClick)="selection.toggle(lesson.id)"
              />
            </li>
          }
        </ul>
      }
    </section>
  `,
})
export class SelectionSummaryComponent {
  lessons = input.required<LessonSummary[]>();

  protected readonly selection = inject(LessonSelectionService);
}
