import { Routes } from '@angular/router';

export const subjectRoutes: Routes = [
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
