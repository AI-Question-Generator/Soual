import { Routes } from '@angular/router';
import { authGuard } from '@core/guards';

export const generationRoutes: Routes = [
  {
    path: 'generation',
    canActivate: [authGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'requests' },
      {
        path: 'requests',
        loadComponent: () =>
          import('@feature/generation/pages/requests-list/requests-list.component').then(
            (m) => m.RequestsListComponent,
          ),
      },
      {
        path: 'requests/:id',
        loadComponent: () =>
          import('@feature/generation/pages/request-detail/request-detail.component').then(
            (m) => m.RequestDetailComponent,
          ),
      },
    ],
  },
];
