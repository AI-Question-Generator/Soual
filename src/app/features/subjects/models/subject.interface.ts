import type { Project } from './project.interface';

export type SubjectName =
  | 'english'
  | 'arabic'
  | 'mathematics'
  | 'chemistry'
  | 'physics'
  | 'biology';

export interface Subject {
  name: string;
  slug: SubjectName;
}

export interface SubjectDetail {
  slug: SubjectName;
  name: string;
  projects: Project[];
}

export const Subjects: Subject[] = [
  { slug: 'arabic', name: 'اللغة العربية' },
  { slug: 'mathematics', name: 'الرياضيات' },
  { slug: 'chemistry', name: 'الكيمياء' },
  { slug: 'physics', name: 'الفيزياء' },
  { slug: 'biology', name: 'الأحياء' },
];
