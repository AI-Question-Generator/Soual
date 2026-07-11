import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { MessageService } from 'primeng/api';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { soualAuthInterceptor } from '@core/interceptors';
import { AuthService } from '@core/services/auth/auth.service';
import { SoualPreset } from '@theme/index';
import { catchError, of } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAppInitializer(() => {
      const auth = inject(AuthService);
      if (auth.jwtAccessToken) {
        auth
          .getProfile()
          .pipe(catchError(() => of(null)))
          .subscribe();
      }
    }),
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([soualAuthInterceptor])),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
    ),
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
