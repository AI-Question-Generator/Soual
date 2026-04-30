import type { Unit } from '@feature/subjects/models';

export const ENGLISH_UNITS: Unit[] = [
  {
    name: 'الوحدة الأولى',
    subtitle: 'Tenses & Sentence Structure',
    lessons: [
      { id: 101, name: 'Present Simple & Present Continuous' },
      { id: 102, name: 'Past Simple & Past Continuous' },
      { id: 103, name: 'Present Perfect vs Past Simple' },
      { id: 104, name: 'Future Forms — will, going to, shall' },
    ],
  },
  {
    name: 'الوحدة الثانية',
    subtitle: 'Reading Comprehension',
    lessons: [
      { id: 201, name: 'Skimming & Scanning' },
      { id: 202, name: 'Inference & Context Clues' },
      { id: 203, name: 'Main Idea & Supporting Details' },
    ],
  },
  {
    name: 'الوحدة الثالثة',
    subtitle: 'Vocabulary in Context',
    lessons: [
      { id: 301, name: 'Synonyms & Antonyms' },
      { id: 302, name: 'Word Formation — Prefixes & Suffixes' },
      { id: 303, name: 'Phrasal Verbs' },
      { id: 304, name: 'Collocations' },
    ],
  },
  {
    name: 'الوحدة الرابعة',
    subtitle: 'Writing Skills',
    lessons: [
      { id: 401, name: 'Paragraph Structure' },
      { id: 402, name: 'Formal vs Informal Letters' },
      { id: 403, name: 'Essay Writing — Opinion & Argument' },
    ],
  },
  {
    name: 'الوحدة الخامسة',
    subtitle: 'Literature & Novel',
    lessons: [
      { id: 501, name: 'The Prisoner of Zenda — Plot & Characters' },
      { id: 502, name: 'Themes & Symbolism' },
      { id: 503, name: 'Quotations & Analysis' },
      { id: 504, name: 'Chapter Summaries' },
    ],
  },
];
