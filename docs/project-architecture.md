# Soual — Project Architecture

## 1. Project Folder Structure

```
soual/
├── public/                         # Static assets (images, icons, etc.)
│   ├── icons/                      # SVG icons
│   └── images/                     # Image assets
│
├── src/
│   ├── app/
│   │   ├── core/                   # Non-reusable infrastructure
│   │   │   ├── components/         # Core UI components (header, side-menu)
│   │   │   ├── guards/             # Route guards (auth, no-auth)
│   │   │   ├── interceptors/       # HTTP interceptors
│   │   │   ├── layouts/            # Layout components
│   │   │   ├── models/             # Base models and interfaces
│   │   │   └── services/           # Core services (auth, localStorage, theme)
│   │   │
│   │   ├── features/               # Business-specific modules (lazy-loaded)
│   │   │   ├── auth/               # Authentication feature
│   │   │   └── home/               # Home feature
│   │   │       └── home.component.ts
│   │   │
│   │   ├── shared/                 # Reusable components and utilities
│   │   │   ├── components/         # Reusable UI components (table, breadcrumb, svg-icon)
│   │   │   ├── directives/         # Shared directives
│   │   │   ├── models/             # Shared interfaces and types
│   │   │   ├── pipes/              # Shared pipes
│   │   │   ├── services/           # Shared services
│   │   │   └── utilities/          # Helper functions
│   │   │
│   │   ├── app.component.*         # Root component
│   │   ├── app.routes.ts           # Main routing configuration
│   │   └── app.config.ts           # Application configuration
│   │
│   ├── index.html                  # Main HTML file
│   ├── main.ts                     # Application entry point
│   └── styles.css                  # Global styles
│
├── docs/                           # Project documentation
│   └── project-architecture.md     # This file
│
├── angular.json                    # Angular CLI configuration
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # Project readme
```

### Layer Descriptions

| Layer        | Purpose                                                               | Path Alias   |
| ------------ | --------------------------------------------------------------------- | ------------ |
| **core**     | Non-reusable infrastructure: layout shell, auth, guards, interceptors | `@core/*`    |
| **features** | Lazy-loaded business domains; each has own `*.routes.ts`              | `@feature/*` |
| **shared**   | Reusable UI, pipes, directives, utilities                             | `@shared/*`  |

### Key Conventions

- **Standalone Components**: All components are standalone (Angular 21 default)
- **Lazy Loading**: Feature modules are lazy-loaded for optimal performance
- **Barrel Exports**: Each folder uses `index.ts` for clean imports
- **Path Aliases**: Use `@core/*`, `@feature/*`, `@shared/*` for imports

### Static Assets

- Place static assets (images, icons) in `public/` folder
- Reference using absolute paths: `/images/logo.svg`
