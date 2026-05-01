import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Unit } from '@feature/subjects/models';
import { UnitComponent } from '@feature/subjects/components/unit/unit.component';

@Component({
  selector: 'soual-main-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  imports: [UnitComponent],
  template: `
    @if (units().length === 0) {
      <div class="py-16 flex-center rounded-xl border border-dashed border-slate-300">
        <p class="text-lg text-slate-500">لا توجد وحدات متاحة لهذه المادة بعد.</p>
      </div>
    } @else {
      <div class="flex flex-col gap-3">
        @for (unit of units(); track unit.name) {
          <soual-unit [unit]="unit" />
        }
      </div>
    }
  `,
})
export class MainPanelComponent {
  units = input.required<Unit[]>();
}
