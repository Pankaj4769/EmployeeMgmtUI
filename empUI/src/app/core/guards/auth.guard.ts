import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { AuthService } from '../auth/auth.service';

const KOS_LOGIN_URL = 'http://localhost:4200/login';

export const authGuard: CanActivateFn = () => {
  const platformId = inject(PLATFORM_ID);

  // SSR — allow; actual auth check happens in browser
  if (!isPlatformBrowser(platformId)) return true;

  const auth = inject(AuthService);

  if (auth.isLoggedIn) return true;

  window.location.href = KOS_LOGIN_URL;
  return false;
};
