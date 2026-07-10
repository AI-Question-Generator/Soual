import { LessonSummary } from '@feature/projects/models';

export interface SectionGroup {
  section: string;
  label: string;
  icon: string;
  lessons: LessonSummary[];
}

export interface UnitGroup {
  unitNumber: number;
  sections: SectionGroup[];
  lessonCount: number;
}
