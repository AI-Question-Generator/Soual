# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Soual (سؤال)** is an Arabic-first educational platform for Egyptian Thanawya 3ama (high school) students to generate and practice AI-powered exam questions. Built with Angular 21, PrimeNG 21, and Tailwind CSS v4.

## Commands

| Task | Command |
|---|---|
| Dev server | `npm start` |
| Build | `npm run build` |
| Unit tests (Vitest) | `npm test` |
| Lint | `npm run lint` |
| Lint & auto-fix | `npm run lint:fix` |

## Architecture

Three-layer architecture with TypeScript path aliases:

| Layer | Purpose | Alias |
|---|---|---|
| `src/app/core/` | Non-reusable infrastructure: auth, guards, interceptors, layouts | `@core/*` |
| `src/app/features/` | Lazy-loaded business domains, each with own `*.routes.ts` | `@feature/*` |
| `src/app/shared/` | Reusable UI components, pipes, directives, validators, utilities | `@shared/*` |

**Key files:**
- `src/app/app.routes.ts` — root routing (lazy `loadComponent` for all routes)
- `src/app/app.config.ts` — providers and PrimeNG Aura theme setup
- `src/app/core/services/auth/auth.service.ts` — auth with signals (`isLoggedIn`, `user`)
- `src/app/core/services/local-storage.service.ts` — typed localStorage with cross-tab sync via `storage` events

## Component Conventions

All components must follow these rules:

```ts
@Component({
  selector: 'soual-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' }, // NOT @HostBinding
  template: `...`,
})
export class ExampleComponent {
  data = input.required<string>(); // NOT @Input()
  clicked = output<void>();        // NOT @Output()
  private svc = inject(SomeService); // NOT constructor DI

  private state = signal<State>(initialState);
  readonly derived = computed(() => this.state().value);
}
```

- Standalone components (no `standalone: true` needed — default in Angular 19+)
- `ChangeDetectionStrategy.OnPush` everywhere
- `input()`/`output()` functions, not decorators
- `inject()` for DI, not constructor injection
- Native control flow (`@if`, `@for`, `@switch`), not structural directives
- `[class.foo]` bindings, not `ngClass`/`ngStyle`
- `host` object in decorator, not `@HostBinding`/`@HostListener`
- `NgOptimizedImage` for static images
- `trackBy` in `@for` loops

## State Management

Use Angular signals. Never use `mutate()`.

```ts
private items = signal<Item[]>([]);
readonly selected = computed(() => this.items().find(...));
addItem(item: Item) { this.items.update(current => [...current, item]); }
```

## Routing Pattern

Each feature exports a `Routes` array spread into the parent:

```ts
// feature.routes.ts
export const featureRoutes: Routes = [{
  path: 'path',
  loadComponent: () => import('./feature.component').then(m => m.FeatureComponent),
}];

// app.routes.ts
export const routes: Routes = [...featureRoutes];
```

## Services Pattern

```ts
@Injectable({ providedIn: 'root' })
export class BrandService {
  private http = inject(HttpClient);
  private readonly API = 'brands/admin/brands';
  getBrands(): Observable<BaseListResponse<Brand>> {
    return this.http.get<BaseListResponse<Brand>>(this.API);
  }
}
```

## Testing

Vitest + Playwright browser mode. Spec files live next to source (`*.spec.ts`). Follow AAA pattern.

## Styling

- **Tailwind CSS v4** with custom CSS variables for brand colors (main = blue, secondary = teal)
- **PrimeNG 21** with Aura theme, customized in `app.config.ts`
- Font: Rubik (Google Fonts)
- Custom utilities in `src/styles.css`: `.container`, `.flex-center`, `.flex-between`, `.flex-col-center`, `.animate-float`
- Place static assets in `public/`, not `src/assets/`. Reference as `/images/logo.svg`

## Language & Localization (Critical)

- **All UI text, headings, buttons, placeholders must be in Arabic** unless explicitly requested otherwise
- **RTL layouts everywhere** — `<html lang="ar" dir="rtl">`
- Educational, neutral tone — no marketing-heavy or slang-heavy text in UI
- Avoid English placeholders ("Title", "Submit", "Description")
- Technical terms may remain in English when no good Arabic equivalent exists
