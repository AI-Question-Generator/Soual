import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent, FeaturesComponent, FaqComponent } from './components';

@Component({
  selector: 'soual-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  templateUrl: './home.component.html',
  imports: [HeroComponent, FeaturesComponent, FaqComponent],
})
export class HomeComponent {}
