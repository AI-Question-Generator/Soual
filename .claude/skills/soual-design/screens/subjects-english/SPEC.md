# Screen Spec — Subjects / English (موادي)

This is the primary browsing surface of Soual. A student lands here from the home
page to pick what they want generated into questions. English is the only
subject currently wired to real backend content; every other tab is a locked
"coming soon" placeholder.

**Source of truth for visuals:** `prototype.html` in this folder.
**RTL:** entire screen is `dir="rtl"` with Arabic copy. Treat every
left/right-coded style as logical (inline-start / inline-end).

---

## 1. Purpose & user goal

A student needs to:

1. Pick a **subject** (English by default — the only ready one).
2. Pick a **project context** — either the default textbook curriculum or one
   of their custom projects.
3. Pick one or more **lessons** inside that project.
4. Hit **Generate Questions** to produce a practice set from the selected
   lessons.

The selection is the whole point of the page. Everything else (tabs, rail,
identity tile) exists to frame that selection.

---

## 2. Page anatomy (top to bottom)

### 2.1 Navbar (sticky)

- Brand mark (gradient circle with ? glyph) + wordmark "سؤال".
- Links: **موادي** (active), بنك الأسئلة, الاختبارات.
- Avatar initials on the inline-end.
- Sticky to the top; white background, 1px bottom border.

### 2.2 Subject tabs (sticky under navbar)

- Horizontal scroll row, pill-shaped buttons.
- **Order is fixed:** English → Arabic → Math → Physics → Chemistry → Biology.
- English is `active` by default and is the **only clickable tab** right now.
- Locked tabs render with a small lock icon and are visually muted + non-interactive.
- Each tab: icon + Arabic label. Active tab is brand-blue filled.

### 2.3 Subject identity tile

- Full-width blue gradient card with decorative circular line pattern on the
  inline-end.
- Left side: icon badge, kicker ("الثانوية العامة · الصف الثالث"), subject
  title ("اللغة الإنجليزية"), one-line lede.
- Right side: **stat strip** (monospace, LTR) — UNITS, LESSONS, PROJECTS, and
  a SELECTED stat that appears in green only when `selectedCount > 0`.
- On mobile the stats wrap under the title.

Locked subjects do NOT render the identity tile. They render the locked-state
card instead (see §5).

### 2.4 Two-column layout

| Rail (inline-start, 300px) | Main panel (flexible)          |
| -------------------------- | ------------------------------ |
| Projects navigation        | Default/custom project content |

Collapses to a single column on mobile; rail becomes a horizontal
scroll row above the main panel.

### 2.5 Generate bar (sticky bottom)

- Fixed to the viewport bottom, full width, white with top border + subtle
  shadow.
- Only visible when `selectedCount > 0`.
- Slides up from the bottom on first selection.
- Contents: count badge + "تم اختيار N دروس" + secondary "إلغاء التحديد" +
  primary "توليد الأسئلة".

---

## 3. Project rail (inline-start column)

Vertical list of buttons, each is a project.

### 3.1 "Create new project" entry

- Dashed brand-blue border, sits at the **top** of the rail.
- `+` icon + "إنشاء مشروع جديد" + small subtitle "اختر دروسك الخاصة".
- Click → opens the create-project drawer (§6).
- This is visually the most prominent thing in the rail — the user should be
  nudged to create projects.

### 3.2 Default project (الكتاب المدرسي)

- Single item, always present, always first after the create button.
- Book icon, title "الكتاب المدرسي", subtitle "المنهج الرسمي · 2026".
- Small lock icon in the title to signal it is read-only (can't be deleted or
  renamed).
- Selected by default on page load.

### 3.3 Divider label

- "مشاريع مخصصة" — monospace caps, small, with a line to its inline-start.
- Separates the default project from user projects.

### 3.4 Custom project items

- Folder icon, project title, subtitle showing lesson count ("N دروس").
- User-created; can be active. When active: blue-tinted background, brand-blue
  icon badge.
- Empty state: show "لا توجد مشاريع مخصصة بعد" in muted type when the user has
  none.

### 3.5 Interaction

- Click = make that project active in the main panel.
- Switching project **clears the current lesson selection** (selection is
  per-project, not global).

---

## 4. Main panel — unit timeline + lesson rows

The main panel renders the ACTIVE project's content.

### 4.1 Header

- Project icon (brand for default, muted for custom) + title + subtitle.
- "افتراضي" success pill for the default project.
- Monospace selection counter: `N / total` محدد.
- "تحديد الكل" / "إلغاء الكل" ghost button — toggles based on current state.

### 4.2 Unit timeline

Vertical timeline with a connecting line and numbered bullets:

- **Bullet** — 30px circle, numbered 1..N.
  - Default: white with brand-blue border, number in muted type.
  - When the unit has selections: filled brand-blue with white number showing
    **how many lessons are selected in this unit** (replaces the unit number).
- **Line** — 1.5px brand-tinted, connects consecutive bullets.
- **Unit header** — clickable, expands/collapses the unit body.
  - Unit Arabic label ("الوحدة الأولى") + English subtitle (e.g., "Tenses &
    Sentence Structure").
  - Lesson count pill on the inline-end + chevron that rotates 180° when open.
  - **Unit 1 is open by default**, others collapsed. Expand state is local to
    the session (not persisted).

### 4.3 Lesson rows (inside an open unit)

- Contained in a slate-50 card with rounded corners.
- Top action: small tiny-button "تحديد الوحدة كلها" / "إلغاء تحديد الوحدة".
- Each lesson row:
  - Custom checkbox (19px, 1.5px border; brand-blue fill + white check when on).
  - **Lesson name only** — no numbering, no duplication. The name is the
    English concept title (e.g., "Present Simple & Present Continuous").
  - Hover: white background. Selected: white + brand-tinted border + brand
    text color + heavier weight.

### 4.4 Selection model

- Selection is a `Set<lessonId>`.
- Lesson click toggles one id.
- "تحديد الوحدة كلها" adds/removes all lessons in that unit.
- "تحديد الكل" adds/removes all lessons across all units.
- Changing the active subject OR active project **resets** the set.

---

## 5. Locked subject state (non-English tabs)

When the active tab is a not-ready subject:

- Hide the identity tile, rail, and main panel entirely.
- Centered card, ~460px wide: large icon badge, subject title, two-line body
  explaining the subject is being prepared, and a muted "قريبًا" pill with a
  clock icon.
- Copy: "هذه المادة قيد الإعداد. نعمل حاليًا على إضافة محتوى المنهج والأسئلة
  المتوافقة معه. ستكون متاحة قريبًا بإذن الله."
- No navigation into the subject is possible.

---

## 6. Create-project drawer

Opens from `+ إنشاء مشروع جديد` in the rail.

### 6.1 Shell

- Full-height drawer slides in from the inline-start (LTR) / visually covers
  the inline-end side in RTL. 460px wide max, full-width on mobile.
- Dark scrim (rgba(15,23,42,.35)) behind it; click scrim to dismiss.

### 6.2 Header

- Kicker "مشروع جديد" in brand blue, monospace caps.
- Title "ابدأ مشروعًا مخصصًا".
- Close (×) icon button.

### 6.3 Body

- **Name field** — required. Label "اسم المشروع", placeholder "مثل: مراجعة
  امتحان منتصف الفصل". Focus ring is brand blue.
- **Description field** — optional. Label "وصف مختصر" with a small "اختياري"
  tag. Multiline textarea.
- Info hint below: blue-tinted banner — "يمكنك إضافة الدروس بعد إنشاء المشروع
  من صفحة المادة."

### 6.4 Footer

- Ghost "إلغاء" button (dismiss).
- Primary "إنشاء المشروع" button with an arrow icon. **Disabled until name is
  non-empty**.

### 6.5 On submit

- Close drawer.
- Append the new project to the user's custom projects list.
- **Make it the active project** in the rail.
- Show a success toast: "تم إنشاء المشروع. أضف دروسًا إليه من الكتاب المدرسي."

---

## 7. Toast

Used for lightweight confirmations (create, generate). Slate-900 background,
white text, green check icon on the inline-start, slides up from the bottom
(above the generate bar), auto-dismiss after ~3.2s.

---

## 8. Generate flow (not yet built)

Clicking "توليد الأسئلة" currently shows a toast. The real flow is the next
handoff:

1. Lock the selection → navigate or transition to a "generating" state.
2. Show progress (lesson-by-lesson or aggregate).
3. Present the generated question set.

Out of scope for this spec.

---

## 9. States matrix

| State                              | What renders                                                                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Initial (English, default project) | Identity tile + rail + main panel, unit 1 open, nothing selected                                                                |
| Subject = locked                   | Identity tile hidden; locked card only                                                                                          |
| Project = custom, empty            | Main panel shows custom project header; timeline still renders English units (user adds lessons from the default project in v1) |
| Selection > 0                      | SELECTED stat appears in identity tile + generate bar slides up                                                                 |
| All lessons selected               | "تحديد الكل" button flips to "إلغاء الكل"                                                                                       |
| Unit has N selected                | Unit bullet shows N (filled) instead of the unit index                                                                          |
| Drawer open                        | Scrim + drawer over everything                                                                                                  |
| Toast visible                      | Bottom-inline-start, above generate bar, auto-dismisses                                                                         |

---

## 10. Responsive behavior (≤820px)

- Navbar: hide secondary links (بنك الأسئلة, الاختبارات); keep avatar.
- Tabs: horizontal scroll.
- Identity tile: stats wrap under title, title shrinks to 22px.
- Layout: single column; rail becomes a horizontal scroll of minimum-width
  cards (220px each). "Create project" is still the first card.
- Generate bar: buttons go full-width, wrap if needed.
- Drawer: full screen width.

---

## 11. Copy inventory (Arabic)

Strings the coding agent should use verbatim:

- Tabs: `اللغة الإنجليزية`, `اللغة العربية`, `الرياضيات`, `الفيزياء`,
  `الكيمياء`, `الأحياء`
- Identity kicker: `الثانوية العامة · الصف الثالث`
- Identity lede: `اختر درسًا أو أكثر لتوليد أسئلة متوافقة مع المنهج`
- Rail label: `Projects` (kept English, monospace)
- Create CTA: `إنشاء مشروع جديد` / sub: `اختر دروسك الخاصة`
- Default project: `الكتاب المدرسي` / sub: `المنهج الرسمي · 2026`
- Divider: `مشاريع مخصصة`
- Default-pill: `افتراضي`
- Counter suffix: `محدد`
- Select-all: `تحديد الكل` / `إلغاء الكل`
- Per-unit select: `تحديد الوحدة كلها` / `إلغاء تحديد الوحدة`
- Unit meta: `N دروس`
- Generate bar: `تم اختيار N دروس` (use `درس` for N=1) /
  sub: `جاهز لتوليد أسئلة من المحتوى المحدد` /
  buttons: `إلغاء التحديد`, `توليد الأسئلة`
- Locked: `هذه المادة قيد الإعداد. نعمل حاليًا على إضافة محتوى المنهج والأسئلة
المتوافقة معه. ستكون متاحة قريبًا بإذن الله.` / pill: `قريبًا`
- Drawer: kicker `مشروع جديد` / title `ابدأ مشروعًا مخصصًا` /
  field labels `اسم المشروع`, `وصف مختصر` / optional tag `اختياري` /
  name placeholder `مثل: مراجعة امتحان منتصف الفصل` /
  desc placeholder `ما الغرض من هذا المشروع؟` /
  hint `يمكنك إضافة الدروس بعد إنشاء المشروع من صفحة المادة.` /
  buttons `إلغاء`, `إنشاء المشروع`
- Success toast: `تم إنشاء المشروع. أضف دروسًا إليه من الكتاب المدرسي.`
- Empty rail: `لا توجد مشاريع مخصصة بعد`

---

## 12. Design tokens to pull from

Everything visual maps to the design system (`colors_and_type.css`):

- Brand blue → `--color-main-500` / `600` / `700` and `--color-main-50` /
  `100` / `200` / `300` for backgrounds and borders.
- Identity tile gradient → `linear-gradient(135deg, #1e40af 0%, #2563eb 55%, #3b82f6 100%)`.
- Success green (SELECTED stat, default pill) → `--color-secondary-*`.
- Neutrals (cards, borders, muted text) → `--color-slate-*`, `--fg-*`,
  `--border-*`.
- Radii → `--radius-md` / `-lg` / `-xl` / `-2xl` / `-full` (pills use full).
- Shadows → `--shadow-xs` (rail items), `--shadow-sm` (main panel),
  `--shadow-primary` (brand elevations), `--shadow-lg` (identity tile, drawer).
- Fonts → `--font-sans` for UI, `--font-mono` for numeric stats and short
  English labels (direction: ltr where used).

Do **not** introduce new hex values; everything in this screen is expressible
with existing tokens.

---

## 13. Accessibility notes

- Locked tabs are `disabled` and not focusable via keyboard beyond visual
  indication — keep them tab-skippable.
- Checkboxes: whole row is clickable; the visual check is decorative. Provide
  a real `role="checkbox"` + `aria-checked` or use a real input + label.
- Counter: announce selection changes via an `aria-live="polite"` region
  (nice-to-have).
- Drawer: trap focus inside when open; return focus to the create button on
  close; `Esc` dismisses.
- Generate bar: mark as `role="region"` with a label; keep out of tab order
  when hidden.

---

## 14. Not in scope for this screen

- Editing or deleting custom projects.
- Adding lessons to custom projects (v1 assumes they pick from the default
  textbook, which is why the main panel always renders the English units).
- Search / filter of lessons.
- Question-generation states (progress, results).
- Dark mode.

These will each be separate specs.
