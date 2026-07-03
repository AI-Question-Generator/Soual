import { inject, Injectable, signal, computed } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Router } from '@angular/router';
import { SKIP_AUTH_CTX } from '@core/interceptors';
import { environment } from '../../../../environments/environment';
import { LocalStorageService } from '../local-storage.service';
import {
  AuthUser,
  EditUserResponse,
  LoginCredentials,
  RegisterCredentials,
  RegisterResponse,
} from '@core/models';
import { Subject } from 'rxjs/internal/Subject';
import { retry, tap, finalize, throwError } from 'rxjs';

interface LoginResponse {
  refresh: string;
  access: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API = `${environment.apiBaseUrl}/api/auth`;

  private readonly TOKEN_KEY = 'soual-access-token';
  private readonly REFRESH_TOKEN_KEY = 'soual-refresh-token';
  private readonly _localStorage = inject(LocalStorageService);
  private readonly _httpClient = inject(HttpClient);
  private readonly _router = inject(Router);

  currentUser = signal<AuthUser | null>(null);
  isAuthenticated = computed(() => this.currentUser() !== null);

  private _isTokenRefreshing = signal(false);
  isTokenRefreshing = this._isTokenRefreshing.asReadonly();

  private _tokenRefresh$ = new Subject<void>();
  get tokenRefresh$() {
    return this._tokenRefresh$.asObservable();
  }

  get jwtAccessToken() {
    return this._localStorage.getItem<string>(this.TOKEN_KEY);
  }

  get jwtRefreshToken() {
    return this._localStorage.getItem<string>(this.REFRESH_TOKEN_KEY);
  }

  login(credentials: LoginCredentials) {
    return this._httpClient.post<LoginResponse>(`${this.API}/login/`, credentials, {
      context: new HttpContext().set(SKIP_AUTH_CTX, true),
    });
  }

  register(credentials: RegisterCredentials) {
    return this._httpClient.post<RegisterResponse>(`${this.API}/register/`, credentials, {
      context: new HttpContext().set(SKIP_AUTH_CTX, true),
    });
  }

  getProfile() {
    return this._httpClient
      .get<AuthUser>(`${this.API}/profile/`)
      .pipe(tap((user) => this.currentUser.set(user)));
  }

  editProfile(data: Partial<Pick<AuthUser, 'first_name' | 'last_name' | 'email'>>) {
    return this._httpClient
      .put<EditUserResponse>(`${this.API}/profile/update/`, data)
      .pipe(
        tap((response) =>
          this.currentUser.update((current) =>
            current ? { ...current, ...response.user } : current,
          ),
        ),
      );
  }

  /**
   * Refresh Expired JWT Token using pleny refresh token
   * @returns JWT Token new access token
   */
  refreshJwtToken() {
    const refreshToken = this.jwtRefreshToken;
    if (!refreshToken) {
      return throwError(() => 'Refresh token is not set');
    }
    this._isTokenRefreshing.set(true);
    return this._httpClient
      .post<LoginResponse>(
        `${this.API}/token/refresh/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
          context: new HttpContext().set(SKIP_AUTH_CTX, true),
        },
      )
      .pipe(
        tap((res) => this.storeAuthTokens(res)),
        finalize(() => {
          this._isTokenRefreshing.set(false);
          this._tokenRefresh$.next();
        }),
      );
  }

  storeAuthTokens(data: LoginResponse) {
    try {
      this._localStorage.setItem(this.REFRESH_TOKEN_KEY, data.refresh);
      this._localStorage.setItem(this.TOKEN_KEY, data.access);
    } catch (error) {
      console.error('Failed to persist auth tokens:', error);
    }
  }

  /**
   * Log out user by clearing Local Storage and auth state
   * @returns Observable that emits when the logout request is complete
   */
  logout() {
    return this._httpClient.post<never>(`${this.API}/logout/`, {}).pipe(
      retry(1), // retry once if the request fails
      tap(() => this._router.navigate(['/login'], { replaceUrl: true })),
      finalize(() => this.clearAuthenticatedUser()),
    );
  }

  /**
   * Clear authenticated user from Local Storage and auth state
   */
  clearAuthenticatedUser() {
    this._localStorage.removeItem(this.TOKEN_KEY);
    this._localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    this.currentUser.set(null);
  }
}
