import { Routes } from '@angular/router';
import { authGuard } from '@core/guards';

export const subjectRoutes: Routes = [
  {
    path: 'source-files',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@feature/subjects/pages/source-files/source-files.component').then(
        (m) => m.SourceFilesComponent,
      ),
  },
  {
    path: 'subjects',
    loadComponent: () =>
      import('@feature/subjects/pages/subjects-shell/subjects-shell.component').then(
        (m) => m.SubjectsShellComponent,
      ),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'english' },
      {
        path: 'english',
        loadComponent: () =>
          import('@feature/subjects/pages/subject-detail/subject-detail.component').then(
            (m) => m.SubjectDetailComponent,
          ),
      },
    ],
  },
];
