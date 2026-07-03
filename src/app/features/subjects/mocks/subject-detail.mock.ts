import type { LessonSummary, Project, SubjectName } from '@feature/subjects/models';

/**
 * The shapes match `Project` / `LessonSummary`
 * exactly, so swapping this for `ProjectService.getProjects()` is a drop-in.
 */

let lessonSeq = 1;

function lesson(name: string, sourceCount = 2): LessonSummary {
  return {
    id: lessonSeq++,
    name,
    sourceCount,
    createdAt: '2026-06-01T00:00:00.000Z',
    sources: [],
  };
}

/** Lesson titles per subject for the default "all lessons" project. */
const LESSON_TITLES: Record<SubjectName, string[]> = {
  english: [
    'Unit 1: Learning & Studying',
    'Unit 2: Work & Career',
    'Unit 3: Communication',
    'Unit 4: Science & Technology',
    'Unit 5: Travel & Tourism',
    'Unit 6: Health & Fitness',
  ],
  arabic: [
    'النصوص الأدبية',
    'القراءة المتحررة',
    'النحو والصرف',
    'البلاغة',
    'الأدب والنصوص',
    'التعبير والإنشاء',
  ],
  mathematics: [
    'التفاضل والتكامل',
    'الجبر والهندسة الفراغية',
    'الاستاتيكا',
    'الديناميكا',
    'المتغيرات العشوائية',
  ],
  'social-studies': [
    'الجغرافيا السياسية',
    'التاريخ الحديث',
    'الجغرافيا الاقتصادية',
    'القضايا السكانية',
  ],
  chemistry: [
    'الكيمياء الحرارية',
    'الاتزان الكيميائي',
    'الكيمياء الكهربية',
    'كيمياء عناصر الانتقال',
    'الكيمياء العضوية',
  ],
  physics: [
    'التيار الكهربي',
    'المجال المغناطيسي',
    'الحث الكهرومغناطيسي',
    'الفيزياء الحديثة',
    'أشباه الموصلات',
  ],
  biology: ['الدعامة والحركة', 'التنسيق الهرموني', 'التكاثر', 'المناعة', 'الوراثة والتطور'],
};

export function mockProjectsFor(slug: SubjectName): Project[] {
  const titles = LESSON_TITLES[slug];
  const allLessons = titles.map((title) => lesson(title));

  const defaultProject: Project = {
    id: `${slug}-default`,
    name: 'كل الدروس',
    description: 'جميع دروس المنهج المقرر',
    isDefault: true,
    lessonCount: allLessons.length,
    createdAt: '2026-05-01T00:00:00.000Z',
    lessons: allLessons,
  };

  const revisionLessons = allLessons.slice(0, Math.min(3, allLessons.length));
  const revisionProject: Project = {
    id: `${slug}-revision`,
    name: 'مراجعة نهائية',
    description: 'أهم الدروس قبل الامتحان',
    isDefault: false,
    lessonCount: revisionLessons.length,
    createdAt: '2026-06-15T00:00:00.000Z',
    lessons: revisionLessons,
  };

  return [defaultProject, revisionProject];
}
