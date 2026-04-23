---
name: soual-design
description: Use this skill to generate well-branded interfaces and assets for Soual (سؤال) — an Arabic-first AI question-generation platform for Egyptian Thanawya 3ama students and teachers. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Soual is Arabic-first: every interface you produce must default to `<html lang="ar" dir="rtl">`, use Rubik, and write UI copy in MSA Arabic. Never use emoji — use PrimeIcons (`pi pi-*`) loaded via `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/primeicons@7.0.0/primeicons.css">`.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy the assets and tokens out of this skill and create static HTML files for the user to view. Start from `colors_and_type.css`. If working on production code inside the Soual Angular repo, you can read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions about audience (teachers vs students), surface (landing, auth, or authenticated-app — note the authenticated app isn't spec'd yet), and variations they want — then act as an expert designer who outputs HTML artifacts or production code, depending on the need.
