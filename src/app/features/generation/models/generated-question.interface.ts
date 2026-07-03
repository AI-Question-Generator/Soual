export interface GeneratedQuestion {
  id: string;
  lessonId: string;
  generationRequestId: string;
  questionType: string;
  questionTypeId: string;
  content: string;
  correct_answer: string;
  distractors: string[];
  explanation: string;
  createdAt: string;
  chunk_hash: string;
}
