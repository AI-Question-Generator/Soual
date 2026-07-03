import { GeneratedQuestion } from './generated-question.interface';
import { GenerationRequestQuestionConfig } from './generation-request-question-config.interface';

export type RequestStatus =
  | 'PENDING'
  | 'PROCESSING'
  | 'COMPLETED'
  | 'COMPLETED_WITH_ERRORS'
  | 'FAILED';

export interface LessonQuestionType {
  question_type_id: string;
  num_questions: number;
}

export interface LessonGenerationConfig {
  lesson_id: string;
  question_types: LessonQuestionType[];
}

export interface GenerationRequest {
  project: string;
  lessons: LessonGenerationConfig[];
}

export interface GenerationRequestResponse {
  id: string;
  status: RequestStatus;
  projectId: string;
  projectName: string;
  userId: string;
  requestedAt: string;
  completedAt: string;
  errorLog: string;
  lessonIds: string[];
  questionConfigs: GenerationRequestQuestionConfig[];
  generatedQuestions: GeneratedQuestion[];
  progress: string;
}

export interface GenerationRequestStatus {
  id: string;
  status: RequestStatus;
  errorLog: string;
  completedAt: string;
  progress: string;
}
