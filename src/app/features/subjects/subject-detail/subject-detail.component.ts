import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SubjectName } from '@feature/subjects/models';

@Component({
  selector: 'soual-subject-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'mt-3' },
  imports: [],
  template: ``,
})
export class SubjectDetailComponent {
  slug = input.required<SubjectName>();
  name = input.required<string>();
}
