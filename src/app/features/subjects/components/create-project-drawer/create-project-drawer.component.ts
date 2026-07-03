import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface CreateProjectPayload {
  name: string;
  description: string;
}

@Component({
  selector: 'soual-create-project-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'contents' },
  imports: [],
  template: ``,
})
export class CreateProjectDrawerComponent {}
