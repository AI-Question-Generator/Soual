export interface LessonSource {
  id: number;
  startPage?: number;
  endPage?: number;
  extraction_config?: string;
  order?: number;
  lesson: string;
  source_file: string;
}

export interface LessonSourceSummary {
  id: number;
  sourceFieldId: number;
  fileName: string;
  fileUrl: string;
  startPage: number;
  endPage: number;
  order: number;
}

export type LessonSourceDto = Omit<LessonSource, 'id'>;

export type LessonSourcePatchDto = Partial<LessonSourceDto>;

export interface LessonSourceWrite {
  source_file: string;
  startPage?: number;
  endPage?: number;
  order?: number;
}
