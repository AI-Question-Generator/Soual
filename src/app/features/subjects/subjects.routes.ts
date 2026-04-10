import { Routes } from '@angular/router';
import { Subjects } from '@feature/subjects/models';

export const subjectRoutes: Routes = [
  {
    path: 'subjects',
    loadComponent: () =>
      import('./subjects-shell/subjects-shell.component').then((m) => m.SubjectsShellComponent),
    children: Subjects.map((subject) => ({
      path: subject.slug,
      loadComponent: () =>
        import('@feature/subjects/subject-detail/subject-detail.component').then(
          (m) => m.SubjectDetailComponent,
        ),
      data: subject,
    })),
  },
];
