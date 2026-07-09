export interface LessonSource {
  id: string;
  start_page?: number;
  end_page?: number;
  extraction_config?: Record<string, unknown>;
  order?: number;
  lesson: string;
  source_file: string;
}

export interface LessonSourceSummary {
  id: string;
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
  start_page?: number;
  end_page?: number;
  order?: number;
}
