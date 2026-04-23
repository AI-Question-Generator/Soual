# Soual Design System — سؤال

**Soual (سؤال)** is an Arabic-first educational platform for Egyptian Thanawya 3ama (high school) students and teachers. It generates, organizes, and delivers AI-powered exam questions from source material (PDF, pasted text, YouTube links) with configurable difficulty levels and question types.

## Sources used to build this system

- **Codebase:** `AI-Question-Generator/Soual` (branch `main`) — Angular 21 + PrimeNG 21 (Aura theme preset) + Tailwind CSS v4.
  - Imported files live under `src/` (templates) and `assets/` (logos, hero imagery).
  - Key files read: `src/styles.css`, `src/app/app.config.ts` (PrimeNG theme preset), the home feature components (hero, features, how-it-works, faq, footer), the auth pages (login, register), and the navbar.
- **Docs:** `docs/project-architecture.md`, `CLAUDE.md` from the repo.
- No Figma file was provided. All visual decisions are sourced from the running Angular templates and Tailwind tokens.

## Index / manifest

| File / folder         | What's in it                                                                                                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `README.md`           | This file — product context, content fundamentals, visual foundations, iconography.                                                                                                                       |
| `colors_and_type.css` | Single source of truth for CSS variables: color scales, type scale, radii, shadows, spacing, and the helper classes (`.soual-h1`, `.soual-lede`, `.soual-eyebrow`, `.soual-highlight`, `.soual-bg-grid`). |
| `SKILL.md`            | Agent Skills entry-point.                                                                                                                                                                                 |
| `assets/`             | Imported raster assets — the three "AI assistant robot" hero images (`robot-home.jpeg`, `robot-login.png`, `robot-register.jpeg`) and the favicon.                                                        |
| `preview/`            | Small HTML cards used by the Design System tab (colors, type, components, etc.).                                                                                                                          |
| `ui_kits/web/`        | React-JSX recreation of Soual's marketing web product: navbar, hero with stacked floating previews, features grid, how-it-works steps, FAQ, footer, plus the login screen.                                |
| `src/`                | Original Angular templates/components imported from the repo — read-only reference.                                                                                                                       |

## Content fundamentals

**Language.** Arabic (Modern Standard Arabic / فصحى) is the default. `<html lang="ar" dir="rtl">` is set at the root. Technical terms stay in English only when no clean Arabic equivalent exists (`PDF`, `YouTube`). Numbers stay Western-Arabic (`2`, `10Ω`, `40W`) — not Arabic-Indic.

**Voice & tone.** Educational, calm, matter-of-fact. Soual speaks to teachers and students as a capable assistant — never hypey. There are no exclamation marks in body copy; they show up sparingly in welcomes and CTAs only.

- Welcomes use warm, short phrases: _«مرحبًا بعودتك!»_ / _«ابدأ رحلتك مع سؤال!»_
- Headlines state a concrete benefit in one line: _«حوّل المحتوى التعليمي إلى أسئلة ذكية وتفاعلية.»_
- Section ledes are one calm sentence that frames what follows, not pitch copy.

**Person / address.** Soual addresses the user directly with second-person imperatives — _ارفع، أنشئ، اختر، شارك_ — and describes itself in third-person or as "the platform" (_المنصة_). It does not use «نحن».

**Casing / punctuation.**

- Arabic doesn't use case. Emphasis comes from weight (bold `700` / extrabold `800`) and the blue highlight word treatment, not ALL CAPS.
- Dates/timers use ASCII digits and a monospace face (`0:45`, `© 2026`). Formulas stay Latin (`P = I² × R`).
- The "©" year in the footer is rendered in `font-mono` class — a deliberate mono accent in an otherwise sans system.

**I vs you.** Second-person _أنت / commands_ dominate. Never first-person singular. Use "I" never; use "we/us" only in rare brand-level statements.

**Emoji.** Not used anywhere in product copy. All pictograms are **PrimeIcons** (`pi pi-*`). Unicode-emoji chrome (✨, 🔥) would read off-brand.

**Representative copy samples from the live product.**

- Badge: _«يعمل بالذكاء الاصطناعي»_ — "Powered by AI"
- Badge: _«متوافق مع منهج الثانوية العامة»_ — "Aligned with the Thanawya 3ama curriculum"
- Lede: _«سؤال يساعد المعلمين على إنشاء بنوك أسئلة واختبارات تفاعلية، ويساعد الطلاب على التدريب والفهم من خلال تجربة تعليمية واضحة، سريعة، ومصممة للمنهج العربي.»_
- Step: _«أدخل المحتوى» → «اختر الإعدادات» → «توليد ذكي» → «تصدير ومشاركة»_ — verbs first, present-tense.
- FAQ heading: _«الأسئلة الشائعة»_
- Footer copyright uses the `©` glyph + year in mono.

## Visual foundations

**Palette.** Two hand-mixed scales (`main`, `secondary`) built on neutral **slate**.

- `main` is a cool royal blue — primary CTAs, links, emphasized words, numbered badges. `main-500 (#2563eb)` is the API primary; `main-600 (#1d4ed8)` carries most of the visible weight (button fills, icon tint, highlighted headline words); `main-700 (#1e40af)` appears on press and on dark backgrounds inside the hero physics card.
- `secondary` is an emerald teal — reserved for success/trust affordances: "verified" badges, check-marks in trust indicators, the small "AI sparkle" icon chip in the hero preview.
- Neutral UI is **Tailwind slate** end-to-end: `slate-900` for headings, `slate-700` for body, `slate-500` for secondary text, `slate-200` for borders, `slate-100` for quiet fills, `slate-50` for field backgrounds.
- The footer and the login-page left panel use `slate-900/950` for a deep, near-black chrome.
- Feedback uses standard Tailwind `red-*` for errors and `green-500` for inline confirmations.

**Typography.** **Rubik** (Google Fonts, weights 300–900) is the only family; Rubik's regionally-designed Arabic glyphs are the reason the product doesn't ship a separate Arabic face. Hierarchy:

- Hero H1: ~`text-5xl`, `font-extrabold (800)`, `leading-tight`, `slate-900` body + `main-600` highlight phrase.
- Section H2: `text-4xl`–`text-5xl`, `font-bold (700)`, with a short lede in `text-xl font-light text-slate-500`.
- Card H3: `text-xl font-bold text-slate-900`.
- Body: `text-base` / `text-lg`, `leading-relaxed`, `slate-500`–`slate-600`.
- Ultra-small meta (file size, counts): `text-[10px]`, `text-slate-500`.
- Rubik's `font-light (300)` is deliberately used for hero/section ledes to contrast the extra-bold headlines.

**Spacing.** Tailwind's 4-px base scale. Section vertical rhythm is `py-16 lg:py-22` / `py-24`. Cards pad `p-5`/`p-8`. Headers inside sections use `max-w-3xl mx-auto` with `mb-16 lg:mb-20` breathing room.

**Backgrounds.**

- **Signature motif:** a faint 80-px slate grid (`.soual-bg-grid`) masked with a radial gradient from the bottom center — it pops the hero up into the page and fades to white at the edges. This is the one repeating texture used anywhere.
- Soft, blurred brand "blob" fills (`bg-main-400/10 blur-3xl`) are parked off-canvas on auth pages with `mix-blend-multiply` and a slow float animation.
- Section backgrounds alternate plain white and `slate-50` — the How-It-Works section lifts on `slate-50`, features and FAQ sit on white.
- No gradients in body copy areas. Gradients are used only on: (a) the footer brand-mark tile (`main-600 → main-700`), (b) the progress bar fill inside the AI generator preview (`main-500 → main-400`), (c) the dark overlay on the login image (`slate-900/90 → transparent`).

**Imagery.** Exactly three hero images ship with the product today — all renders of a friendly blue-lit "AI assistant robot" holding/pointing at content. They are used full-bleed on the left half of the login and register screens, behind a slate-900 gradient that fades up from the bottom. Mood is cool-blue, slightly painterly, clean studio lighting. Pictograms and iconography do the rest.

**Borders.** `1px solid` almost everywhere. Default `slate-200`; on hover `slate-300` or `main-200`. Input fields default to `slate-200` on a `slate-50` fill, swapping to `main-500` on focus.

**Radii.** Clear tiers:

- `rounded-md` (6 px) — tiny chips like the timer "0:45" pill.
- `rounded-lg` (8 px) — inputs, icon tiles (9×9).
- `rounded-xl` (12 px) — buttons, answer options, cards, error/success banners.
- `rounded-2xl` (16–20 px) — hero preview cards, drawer brand tile.
- `rounded-full` — badges, notification dots, numbered step chips, social icon buttons.

**Shadows.** Restrained, very soft; never dramatic.

- `shadow-sm` on resting cards.
- `shadow-lg shadow-main-500/25` under filled primary buttons and sparkle-icon tiles (coloured shadow is a Soual tell).
- `shadow-xl` on hovered feature cards (`hover:shadow-slate-200/40`).
- The only "inner shadow" patterns come from borders with `bg-main-700/40 border-main-400/20` translucent layers (seen in the physics preview).

**Protection gradients.** The login/register image panel uses a vertical `from-slate-900/90 via-slate-900/40 to-transparent` wash so dark panel chrome can read against any crop of the robot artwork. No capsules/scrims anywhere else.

**Animation.** Utility and calm. Almost every animated element uses `transition-all duration-200`/`duration-300` with the CSS default ease-in-out. Named keyframes live in `styles.css`:

- `float` — 4 s, −12 px amplitude, eased — on the AI-generator hero card.
- `float-slow` — 5 s, −8 px amplitude — on the physics hero card and on the auth-page blurred blobs.
- `animate-fade-in` on error banners.
- `animate-bounce` on a lone mobile down-arrow in the how-it-works section.
- `animate-pulse` on the in-progress AI progress bar only.

**Hover / press states.**

- Buttons, links: color shift one step darker (`main-600 → main-700`), plus `hover:underline` on inline links. Filled primary buttons also deepen their coloured shadow (`hover:shadow-main-300`).
- Cards: `hover:-translate-y-2` _or_ `hover:shadow-xl` _or_ a top-border reveal (`scale-x-0 → scale-x-100` left-origin). Never all three at once.
- Group hover choreography: icon tile changes tint (`bg-slate-50 → bg-main-50`), number ornament fades in (`opacity-0 → opacity-100`), and a "اقرأ المزيد" link slides up `translate-y-2 → 0`.
- Press: `active:scale-95` on the physics quiz answer buttons. No color shift on press.

**Transparency / blur.** Used intentionally and rarely.

- `bg-white/10`, `bg-white/20`, `bg-main-700/40` — only inside the blue physics hero card to create tinted chips on the dark background.
- `blur-3xl` — only on the decorative off-canvas brand blobs on auth pages.
- No glass/frosted panels in the main marketing site.

**Layout rules.**

- Page container: `.container { padding-inline: 1.5–3rem; margin-inline: auto; }` — responsive padding, NO fixed `max-width`. Child content uses `max-w-3xl`/`max-w-4xl mx-auto` inside for readable measures.
- RTL flex/grid throughout. Icons that carry direction (`pi-arrow-left`, `pi-arrow-up-left`) are chosen for their RTL reading, not mirrored in CSS.
- Auth pages split `lg:w-1/2 : lg:w-1/2` with the form on the right (the reading-start side in RTL).

**Card anatomy.** A "Soual card" is: white background, `rounded-xl`/`rounded-2xl`, `border border-slate-100/200`, `shadow-sm` at rest, `p-5`/`p-8` padding. Hover: border deepens to `main-200`, shadow grows to `xl`, optional top-edge accent line reveals.

## Iconography

Soual standardises on **PrimeIcons 7.0.0** (`pi pi-*`) — loaded globally in `src/styles.css` via `@import 'primeicons/primeicons.css';`. It's a monoline, filled-ish, consistent-weight icon font shipped with PrimeNG; every icon in the product comes from it.

**How icons are used.**

- Inside a rounded tile (`w-9 h-9`/`w-14 h-14`), tinted `text-main-600` on a `bg-slate-50`/`bg-main-50` fill — this is the default framing for features, nav drawer items, how-it-works steps.
- Inline with labels, `me-2`/`gap-2`, same weight as the surrounding text, one size down (`text-xs` with `text-base` label).
- As stand-alone "status" marks: `pi-check-circle` in `secondary-500` (trust), `pi-verified` in `secondary-500` (compliance), `pi-exclamation-circle` in red (error banners).
- Directional affordances use `pi-arrow-left` (RTL "forward"), `pi-arrow-up-left` (inline "go there"), `pi-chevron-down` (accordion).

**Mapping — PrimeIcons actually referenced in the codebase:**
`pi-sparkles`, `pi-verified`, `pi-bolt`, `pi-external-link`, `pi-check-circle`, `pi-sign-in`, `pi-bars`, `pi-box`, `pi-home`, `pi-star`, `pi-tag`, `pi-envelope`, `pi-microchip-ai`, `pi-database`, `pi-stopwatch`, `pi-book`, `pi-chart-bar`, `pi-mobile`, `pi-file-import`, `pi-sliders-h`, `pi-share-alt`, `pi-file-pdf`, `pi-arrow-down`, `pi-arrow-left`, `pi-arrow-up-left`, `pi-chevron-down`, `pi-exclamation-circle`, `pi-question-circle`, `pi-spinner`, `pi-check`, `pi-spin`.

**Social icons** (footer) also use `pi-*` — `pi-twitter`, `pi-facebook`, `pi-linkedin`, `pi-youtube` style set.

**No SVG sprites. No custom-drawn icons. No Lucide/Heroicons.** Adding a one-off icon means either (a) finding the closest `pi-*` equivalent, or (b) importing a lightweight SVG and matching PrimeIcons' stroke presence (roughly 1.5–2 px visual weight). **No emoji.** **No Unicode dingbats.**

**Logo.** The product does not ship a bitmap/vector logo mark; the brand is set as the Arabic word-mark **«سؤال»** in Rubik extrabold at `text-2xl` `text-main-600`. The footer adds a 40×40 `rounded-xl` gradient tile with `pi-question-circle` as a companion bug. UI-kit logo recreations follow that exact convention.

## Caveats

- No Figma file was linked, so all tokens are reverse-engineered from the Tailwind CSS + Angular templates.
- The repo references a logo as _«سؤال»_ typography only — no standalone vector logo file exists. If one is produced later, drop it into `assets/` as `soual-logo.svg`.
- Rubik is loaded from Google Fonts CDN (the same CDN the product uses). No local `.ttf` files are bundled.
- Only the public marketing site + auth screens exist in the codebase today; the authenticated app (editor, bank, analytics) is not built yet, so this design system doesn't fabricate those screens.
