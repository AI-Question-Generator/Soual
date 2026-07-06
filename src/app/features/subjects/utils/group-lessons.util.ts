import type { LessonSummary, SectionGroup, UnitGroup } from '@feature/subjects/models';

interface SectionMeta {
  label: string;
  icon: string;
  order: number;
}

/** Display metadata for the known `section` values returned by the API. */
const SECTION_META: Record<string, SectionMeta> = {
  grammer: { label: 'القواعد', icon: 'pi-book', order: 0 },
  '1': { label: 'القسم الأول', icon: 'pi-book', order: 2 },
  '2': { label: 'القسم الثاني', icon: 'pi-book', order: 1 },
};

const FALLBACK_ORDER = 99;

function sectionMeta(section: string): SectionMeta {
  return SECTION_META[section] ?? { label: section, icon: 'pi-book', order: FALLBACK_ORDER };
}

/**
 * Purely presentational grouping: buckets lessons by `unitNumber`, then by
 * `section`, keeping lessons ordered by their `order`.
 */
export function groupLessonsByUnit(lessons: readonly LessonSummary[]): UnitGroup[] {
  const units = new Map<number, Map<string, LessonSummary[]>>();

  for (const lesson of lessons) {
    const sections = units.get(lesson.unitNumber) ?? new Map<string, LessonSummary[]>();
    const bucket = sections.get(lesson.section) ?? [];
    bucket.push(lesson);
    sections.set(lesson.section, bucket);
    units.set(lesson.unitNumber, sections);
  }

  return [...units.entries()]
    .map(([unitNumber, sectionMap]) => {
      const sections: SectionGroup[] = [...sectionMap.entries()]
        .map(([section, list]) => {
          const meta = sectionMeta(section);
          return {
            section,
            label: meta.label,
            icon: meta.icon,
            lessons: [...list].sort((a, b) => a.order - b.order),
          };
        })
        .sort((b, a) => sectionMeta(a.section).order - sectionMeta(b.section).order);

      const lessonCount = sections.reduce((total, group) => total + group.lessons.length, 0);
      return { unitNumber, sections, lessonCount };
    })
    .sort((a, b) => a.unitNumber - b.unitNumber);
}
