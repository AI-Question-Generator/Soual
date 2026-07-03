import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'soual-subject-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'mt-3' },
  imports: [],
  template: ``,
})
export class SubjectDetailComponent {
  name = input.required<string>();
}
