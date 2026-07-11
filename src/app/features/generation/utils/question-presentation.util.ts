import type { GeneratedQuestion } from '@feature/generation/models';

const CHOICE_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f'];

const TYPE_LABELS: Record<string, string> = {
  mcq: 'MCQ',
  short_answer: 'Short Answer',
  true_false: 'TF',
  tf: 'TF',
};

function choiceHash(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  return hash;
}

function isTrueFalse(type: string): boolean {
  const normalized = type.toLowerCase();
  return normalized === 'true_false' || normalized === 'tf';
}

function trueFalseCounterpart(correct: string): string | null {
  const normalized = correct.trim().toLowerCase();
  if (normalized !== 'true' && normalized !== 'false') return null;
  const counterpart = normalized === 'true' ? 'false' : 'true';
  if (correct === correct.toUpperCase()) return counterpart.toUpperCase();
  if (correct.charAt(0) === correct.charAt(0).toUpperCase()) {
    return counterpart.charAt(0).toUpperCase() + counterpart.slice(1);
  }
  return counterpart;
}

function trueFalseRank(choice: string): number {
  return choice.trim().toLowerCase() === 'true' ? 0 : 1;
}

/** Choices in the same stable display order used by the question card. */
export function orderedChoices(question: GeneratedQuestion): string[] {
  const all = [question.correct_answer, ...(question.distractors ?? [])];

  if (isTrueFalse(question.questionType)) {
    if (all.length < 2) {
      const counterpart = trueFalseCounterpart(question.correct_answer);
      if (counterpart) all.push(counterpart);
    }
    // Conventional fixed order: True first, then False
    return [...all].sort((a, b) => trueFalseRank(a) - trueFalseRank(b));
  }

  return [...all].sort(
    (a, b) => choiceHash(`${question.id}:${a}`) - choiceHash(`${question.id}:${b}`),
  );
}

/** Human-readable label for a question type code (e.g. `short_answer` → `Short Answer`). */
export function formatQuestionType(type: string): string {
  return (
    TYPE_LABELS[type] ??
    type
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  );
}

/** Letter for a choice index (`0` → `a`), falling back to a 1-based number. */
export function choiceLetter(index: number): string {
  return CHOICE_LETTERS[index] ?? `${index + 1}`;
}
