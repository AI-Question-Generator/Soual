import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { MessageService } from 'primeng/api';

import { routes } from './app.routes';
import { definePreset } from '@primeuix/themes';

const SoualPreset = definePreset(Aura, {
  semantic: {
    primary: {
      // Map PrimeNG's internal logic to Tailwind variables
      50: 'var(--color-main-50)',
      100: 'var(--color-main-100)',
      200: 'var(--color-main-200)',
      300: 'var(--color-main-300)',
      400: 'var(--color-main-400)',
      500: 'var(--color-main-500)',
      600: 'var(--color-main-600)',
      700: 'var(--color-main-700)',
      800: 'var(--color-main-800)',
      900: 'var(--color-main-900)',
      950: 'var(--color-main-950)',
    },
    secondary: {
      50: 'var(--color-secondary-50)',
      100: 'var(--color-secondary-100)',
      200: 'var(--color-secondary-200)',
      300: 'var(--color-secondary-300)',
      400: 'var(--color-secondary-400)',
      500: 'var(--color-secondary-500)',
      600: 'var(--color-secondary-600)',
      700: 'var(--color-secondary-700)',
      800: 'var(--color-secondary-800)',
      900: 'var(--color-secondary-900)',
      950: 'var(--color-secondary-950)',
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    MessageService,
    providePrimeNG({
      theme: {
        preset: SoualPreset,
        options: {
          darkModeSelector: '.app-dark',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng, utility',
          },
        },
      },
    }),
  ],
};
