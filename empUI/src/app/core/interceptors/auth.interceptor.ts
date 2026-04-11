import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { catchError, throwError } from 'rxjs';
import { EMPLOYEE_MGMT_URL } from '../../apiUrls';

// KOS UI login URL — redirect here when session is missing or expired
const KOS_LOGIN_URL = 'http://localhost:4200/login';

// Auth endpoints that are publicly accessible — don't redirect on missing token
const AUTH_PATHS = ['/auth/login', '/auth/register', '/auth/addStaff',
                   '/auth/resendTempPassword', '/auth/staff/'];

function isAuthEndpoint(url: string): boolean {
  return AUTH_PATHS.some(p => url.includes(p));
}

function redirectToLogin(): void {
  window.location.href = KOS_LOGIN_URL;
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);

  // Skip in SSR context
  if (!isPlatformBrowser(platformId)) {
    return next(req);
  }

  // Only intercept requests going to the EM backend
  if (!req.url.startsWith(EMPLOYEE_MGMT_URL)) {
    return next(req);
  }

  const token        = localStorage.getItem('token');
  const user         = JSON.parse(localStorage.getItem('kos_user') || 'null');
  const restaurantId = user?.restaurantId;

  // No token on a protected route → redirect to KOS login
  if (!token && !isAuthEndpoint(req.url)) {
    redirectToLogin();
    return throwError(() => new Error('No auth token — redirecting to login'));
  }

  const headers: Record<string, string> = {};
  if (token)        headers['Authorization']   = `Bearer ${token}`;
  if (restaurantId) headers['X-Restaurant-Id'] = String(restaurantId);

  const authReq = req.clone({ setHeaders: headers });

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401 && !isAuthEndpoint(req.url)) {
        // Token expired or invalid — clear session and send user back to KOS login
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('kos_user');
        redirectToLogin();
      }
      return throwError(() => err);
    })
  );
};
