import { Injectable } from '@angular/core';
import { AlignmentType, Document, HeadingLevel, Packer, Paragraph, TextRun } from 'docx';
import type { GenerationRequestResponse } from '@feature/generation/models';
import { choiceLetter, formatQuestionType, orderedChoices } from '@feature/generation/utils';
import { downloadBlob, formatDate } from '@shared/utilities';

interface ExportOptions {
  /** When true, reveal the correct answer and explanation (answer key). */
  includeAnswers: boolean;
}

interface ExportChoice {
  letter: string;
  text: string;
  isCorrect: boolean;
}

interface ExportQuestion {
  number: number;
  content: string;
  typeLabel: string;
  choices: ExportChoice[];
  correctAnswer: string;
  explanation: string;
}

interface ExportModel {
  title: string;
  subtitle: string;
  versionLabel: string;
  includeAnswers: boolean;
  questions: ExportQuestion[];
}

@Injectable({ providedIn: 'root' })
export class QuestionExportService {
  /** Builds a real .docx file and triggers a download. */
  async exportWord(request: GenerationRequestResponse, options: ExportOptions): Promise<void> {
    const model = this.buildModel(request, options);
    const blob = await Packer.toBlob(this.buildWordDocument(model));
    downloadBlob(blob, `${model.title} - ${model.versionLabel}.docx`);
  }

  private buildModel(
    request: GenerationRequestResponse,
    { includeAnswers }: ExportOptions,
  ): ExportModel {
    const questions = (request.generatedQuestions ?? []).map<ExportQuestion>((question, index) => {
      const ordered = orderedChoices(question);
      const choices =
        ordered.length > 1
          ? ordered.map<ExportChoice>((text, i) => ({
              letter: choiceLetter(i),
              text,
              isCorrect: text === question.correct_answer,
            }))
          : [];

      return {
        number: index + 1,
        content: question.content,
        typeLabel: formatQuestionType(question.questionType),
        choices,
        correctAnswer: question.correct_answer,
        explanation: question.explanation ?? '',
      };
    });

    return {
      title: request.projectName,
      subtitle: `${formatDate(request.requestedAt)} • ${questions.length} سؤال`,
      versionLabel: includeAnswers ? 'نموذج الإجابة' : 'نسخة الطالب',
      includeAnswers,
      questions,
    };
  }

  // ---- Word (docx) ------------------------------------------------------

  private buildWordDocument(model: ExportModel): Document {
    const children: Paragraph[] = [
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        bidirectional: true,
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: model.title, rightToLeft: true })],
      }),
      this.rtlLine(`${model.subtitle} — ${model.versionLabel}`, { color: '64748B', size: 20 }),
      new Paragraph({ text: '' }),
    ];

    for (const question of model.questions) {
      // Question text is English → lay it out left-to-right.
      children.push(
        new Paragraph({
          alignment: AlignmentType.LEFT,
          spacing: { before: 200 },
          children: [
            new TextRun({ text: `${question.number}. `, bold: true }),
            new TextRun({ text: question.content, bold: true }),
            new TextRun({ text: `   [${question.typeLabel}]`, color: '94A3B8', size: 18 }),
          ],
        }),
      );

      for (const choice of question.choices) {
        const highlight = model.includeAnswers && choice.isCorrect;
        children.push(
          new Paragraph({
            alignment: AlignmentType.LEFT,
            indent: { start: 360 },
            children: [
              new TextRun({ text: `${choice.letter}. `, bold: true }),
              new TextRun({
                text: choice.text,
                bold: highlight,
                color: highlight ? '166534' : undefined,
              }),
              ...(highlight ? [new TextRun({ text: '  ✔', color: '166534' })] : []),
            ],
          }),
        );
      }

      if (model.includeAnswers) {
        if (question.choices.length === 0) {
          children.push(
            this.ltrLine(`الإجابة الصحيحة: ${question.correctAnswer}`, {
              color: '166534',
              bold: true,
            }),
          );
        }
        if (question.explanation) {
          children.push(this.ltrLine(`التفسير: ${question.explanation}`, { color: '1E40AF' }));
        }
      }
    }

    return new Document({ sections: [{ children }] });
  }

  private rtlLine(
    text: string,
    run: { color?: string; bold?: boolean; size?: number } = {},
  ): Paragraph {
    return new Paragraph({
      bidirectional: true,
      alignment: AlignmentType.RIGHT,
      children: [new TextRun({ text, rightToLeft: true, ...run })],
    });
  }

  private ltrLine(
    text: string,
    run: { color?: string; bold?: boolean; size?: number } = {},
  ): Paragraph {
    return new Paragraph({
      alignment: AlignmentType.LEFT,
      children: [new TextRun({ text, ...run })],
    });
  }
}
