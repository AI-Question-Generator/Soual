import { Routes } from '@angular/router';
import { authGuard } from '@core/guards';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('@feature/home').then((m) => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@feature/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('@feature/auth/register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: 'user-profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@feature/profile/profile.component').then((m) => m.ProfileComponent),
  },
];
