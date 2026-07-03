import { LessonSummary, LessonWrite } from './lesson.interface';

export interface Project {
  id: string;
  name: string;
  description?: string;
  isDefault: boolean;
  lessonCount: number;
  createdAt: string;
  lessons: LessonSummary[];
}

export interface ProjectDto {
  name: string;
  description?: string;
  isDefault: boolean;
  lessons: LessonWrite[];
}

export type ProjectPatchDto = Partial<ProjectDto>;
