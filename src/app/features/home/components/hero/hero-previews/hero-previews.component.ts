import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroPreviewPhysicsComponent } from '../hero-preview-physics/hero-preview-physics.component';
import { HeroPreviewAiGeneratorComponent } from '../hero-preview-ai-generator/hero-preview-ai-generator.component';

@Component({
  selector: 'soual-hero-previews',
  imports: [HeroPreviewPhysicsComponent, HeroPreviewAiGeneratorComponent],
  templateUrl: './hero-previews.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPreviewsComponent {}
