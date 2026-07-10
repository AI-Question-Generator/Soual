import { Routes } from '@angular/router';
import { authGuard } from '@core/guards';

export const sourceFilesRoutes: Routes = [
  {
    path: 'source-files',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@feature/source-files/pages/source-files/source-files.component').then(
        (m) => m.SourceFilesComponent,
      ),
  },
];
