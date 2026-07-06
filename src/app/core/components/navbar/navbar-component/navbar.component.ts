import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule, MenuPassThrough } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'soual-navbar',
  imports: [ButtonModule, DrawerModule, AvatarModule, MenuModule, RouterLink],
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

  readonly displayName = computed(() => {
    const user = this.authService.currentUser();
    if (!user) return '';
    const fullName = [user.first_name, user.last_name].filter(Boolean).join(' ').trim();
    return user.username || fullName;
  });

  get initials() {
    const user = this.authService.currentUser();
    if (!user) return '';
    const name = [user.first_name, user.last_name].filter(Boolean).join(' ') || user.username;
    const [first, last] = name.trim().split(/\s+/);
    return (last ? first[0] + last[0] : (first[0] ?? '')).toUpperCase();
  }

  readonly userMenuItems: MenuItem[] = [
    {
      label: 'الملف الشخصي',
      icon: 'pi pi-user',
      command: () => this.goToProfile(),
    },
    {
      label: 'أسئلتي',
      icon: 'pi pi-list',
      command: () => this.goToGenerationRequests(),
    },
    { separator: true },
    {
      label: 'تسجيل الخروج',
      icon: 'pi pi-sign-out',
      command: () => this.logout(),
    },
  ];

  navigateToLogin() {
    this.menuOpen = false;
    this.router.navigate(['/login']);
  }

  goToProfile() {
    this.menuOpen = false;
    this.router.navigate(['/user-profile']);
  }

  goToGenerationRequests() {
    this.menuOpen = false;
    this.router.navigate(['/generation/requests']);
  }

  logout() {
    this.menuOpen = false;
    this.authService.logout().subscribe();
  }

  readonly pt: MenuPassThrough = {
    root: 'mt-1',
  };
}
