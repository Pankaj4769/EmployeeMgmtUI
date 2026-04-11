import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthUser } from './auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  readonly STORAGE_KEY = 'kos_user';
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  get currentUser(): AuthUser | null {
    if (!this.isBrowser) return null;
    const raw = localStorage.getItem(this.STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  }

  get isLoggedIn(): boolean {
    return this.isBrowser && !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return this.isBrowser ? localStorage.getItem('token') : null;
  }
}
