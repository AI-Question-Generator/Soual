import { Routes } from '@angular/router';
import { subjectRoutes } from '@feature/subjects/subjects.routes';

export const routes: Routes = [
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
    path: '',
    loadComponent: () =>
      import('@core/layouts/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('@feature/home').then((m) => m.HomeComponent),
      },
      ...subjectRoutes,
    ],
  },
];
