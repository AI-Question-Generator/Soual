import type { Lesson } from './lesson.interface';

export interface Unit {
  name: string;
  subtitle: string;
  lessons: Lesson[];
}
