import { HttpContextToken, HttpErrorResponse, type HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { throwError, catchError, take, switchMap } from 'rxjs';

export const SKIP_AUTH_CTX = new HttpContextToken(() => false);

export const soualAuthInterceptor: HttpInterceptorFn = (req, next) => {
  // Skip authentication for certain requests
  const skipAuth = req.context.get(SKIP_AUTH_CTX);
  if (skipAuth) return next(req);

  const router = inject(Router);
  const auth = inject(AuthService);

  // Utility method to Attach JWT access token to request headers
  const attachAuthHeader = () => {
    const jwtAccessToken = auth.jwtAccessToken;
    if (!jwtAccessToken) return;
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtAccessToken}`,
      },
    });
  };

  const authRequest = attachAuthHeader();
  if (!authRequest) return throwError(() => new Error('No JWT access token found'));

  return next(authRequest).pipe(
    catchError((err: HttpErrorResponse) => {
      console.log(err);
      if (err.status === 401) {
        if (auth.isTokenRefreshing()) {
          console.log('Refreshing token, waiting for new token');
          return auth.tokenRefresh$.pipe(
            take(1),
            switchMap(() => {
              const retryRequest = attachAuthHeader();
              if (!retryRequest)
                return throwError(
                  () => new Error('Failed to attach JWT access token after refresh'),
                );
              console.log('Retrying request with new token');
              return next(retryRequest);
            }),
          );
        } else {
          console.log('Refreshing token');
          return auth.refreshJwtToken().pipe(
            switchMap(() => {
              const retryRequest = attachAuthHeader();
              if (!retryRequest)
                return throwError(
                  () => new Error('Failed to attach JWT access token after refresh'),
                );
              console.log('Retrying request with new token');
              return next(retryRequest);
            }),
            catchError((err) => {
              console.log('Failed to refresh token', err);
              auth.clearAuthenticatedUser();
              router.navigate(['/login'], { replaceUrl: true });
              return throwError(() => err);
            }),
          );
        }
      }
      return throwError(() => err);
    }),
  );
};
