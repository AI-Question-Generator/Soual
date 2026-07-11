import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '@core/services/auth/auth.service';
import { HeroPreviewsComponent } from './hero-previews/hero-previews.component';

@Component({
  selector: 'soual-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule, HeroPreviewsComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  startNow(): void {
    this.router.navigate([this.authService.isAuthenticated() ? '/subjects' : '/register']);
  }

  scrollToFeatures(): void {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  }
}
