import { LessonSourceSummary, LessonSourceWrite } from './lesson-sources.interface';

export type DomainEnum =
  | 'english_vocab'
  | 'english_syn_ant'
  | 'english_def_der_col'
  | 'english_exp_idi_prep'
  | 'english_grammar';

export interface Lesson {
  id: string;
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
  unitNumber: number;
  order: number;
  section: string;
}

export interface DomainChoice {
  value: string;
  label: string;
}

export interface LessonWrite {
  title: string;
  description?: string;
  domain?: DomainEnum;
  sources: LessonSourceWrite[];
}
