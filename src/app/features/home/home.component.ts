import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '@core/components';
import { HeroComponent, FeaturesComponent, FaqComponent } from './components';

@Component({
  selector: 'soual-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  templateUrl: './home.component.html',
  imports: [NavbarComponent, HeroComponent, FeaturesComponent, FaqComponent],
})
export class HomeComponent {}
