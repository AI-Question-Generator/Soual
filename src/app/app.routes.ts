import { Routes } from '@angular/router';
import { authGuard } from '@core/guards';
import { subjectRoutes } from '@feature/subjects/subjects.routes';
import { generationRoutes } from '@feature/generation/generation.routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@core/layouts').then((m) => m.MainLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('@feature/home').then((m) => m.HomeComponent),
      },
      {
        path: 'user-profile',
        canActivate: [authGuard],
        loadComponent: () =>
          import('@feature/profile/profile.component').then((m) => m.ProfileComponent),
      },
      ...subjectRoutes,
      ...generationRoutes,
    ],
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
];
