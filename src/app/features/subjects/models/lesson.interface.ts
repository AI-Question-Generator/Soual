import { LessonSourceSummary, LessonSourceWrite } from './lesson-sources.interface';

export interface Lesson {
  id: number;
  title: string;
  description?: string;
  createdAt: string;
  project: string;
}

export type LessonDto = Pick<Lesson, 'title' | 'description' | 'project'>;
export type LessonPatchDto = Partial<LessonDto>;

export interface LessonSummary {
  id: number;
  name: string;
  description?: string;
  sourceCount: number;
  createdAt: string;
  sources: LessonSourceSummary[];
}

export interface LessonWrite {
  title: string;
  description?: string;
  sources: LessonSourceWrite[];
}
