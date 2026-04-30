import type { Project } from '@feature/subjects/models';

export const DEFAULT_PROJECT: Project = {
  id: 'default',
  name: 'الكتاب المدرسي',
  description: 'المنهج الرسمي · وزارة التربية والتعليم · 2026',
  isDefault: true,
  lessonCount: 18,
};

export const INITIAL_CUSTOM_PROJECTS: Project[] = [
  {
    id: 'p-mid-term',
    name: 'مراجعة منتصف الفصل',
    description: '',
    isDefault: false,
    lessonCount: 6,
  },
  {
    id: 'p-writing',
    name: 'أسئلة الكتابة فقط',
    description: '',
    isDefault: false,
    lessonCount: 8,
  },
  {
    id: 'p-zenda',
    name: 'The Prisoner of Zenda — مراجعة',
    description: '',
    isDefault: false,
    lessonCount: 4,
  },
];
