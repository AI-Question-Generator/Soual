import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '@core/components';
import { HeroComponent } from './components';

@Component({
  selector: 'soual-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  templateUrl: './home.component.html',
  imports: [NavbarComponent, HeroComponent],
})
export class HomeComponent {}
