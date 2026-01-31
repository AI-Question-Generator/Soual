import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'soual-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <div class="p-4">
      <h1 class="text-2xl font-bold">Welcome to Soual</h1>
    </div>
  `,
})
export class HomeComponent {}
