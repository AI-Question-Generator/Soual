import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'soual-navbar',
  imports: [ButtonModule, DrawerModule, RouterLink],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class NavbarComponent {
  menuOpen = false;
  authService = inject(AuthService);
  private router = inject(Router);

  navigateToLogin() {
    this.menuOpen = false;
    this.router.navigate(['/login']);
  }

  logout() {
    this.menuOpen = false;
    this.authService.logout();
  }
}
