export type SubjectName =
  | 'english'
  | 'arabic'
  | 'mathematics'
  | 'social-studies'
  | 'chemistry'
  | 'physics'
  | 'biology';

export interface Subject {
  name: string;
  slug: SubjectName;
}

export const Subjects: Subject[] = [
  { slug: 'english', name: 'اللغة الانجليزية' },
  { slug: 'arabic', name: 'اللغة العربية' },
  { slug: 'mathematics', name: 'الرياضيات' },
  { slug: 'social-studies', name: 'الدراسات الاجتماعية ' },
  { slug: 'chemistry', name: 'الكيمياء' },
  { slug: 'physics', name: 'الفيزياء' },
  { slug: 'biology', name: 'الأحياء' },
];
