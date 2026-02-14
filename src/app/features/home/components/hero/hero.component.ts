import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HeroPreviewsComponent } from './hero-previews/hero-previews.component';

@Component({
  selector: 'soual-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule, HeroPreviewsComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {}
