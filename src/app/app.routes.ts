import { Routes } from '@angular/router';
import { subjectRoutes } from '@feature/subjects/subjects.routes';

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
  ...subjectRoutes,
];
