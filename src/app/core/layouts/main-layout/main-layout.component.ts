import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@core/components';

@Component({
  selector: 'soual-main-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  imports: [NavbarComponent, RouterOutlet],
  template: `
    <soual-navbar />
    <router-outlet />
  `,
})
export class MainLayoutComponent {}
