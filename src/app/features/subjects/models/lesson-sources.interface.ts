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

// QUESTIONS to the BE team:
// 1. By this source lessons model we have decided the UX to be the following: the user upload one big file
// and then split it using start/end page and the order, are we sure of this?
// There's another model that would be simpler, the user upload file per lesson, and then this lesson sources
// entity might not be needed at all!

// 2. What's sourceFieldId in the LessonSourceSummary? Is it the same as source_file
// or is it a different field?

// 3. What's extraction_config in the LessonSource model?

// 4. How the lessonSourceSummary has more fields than the lessonSource model?
// also it have all fields as required, while the lessonSource model has some optional fields.
// Is this correct?
