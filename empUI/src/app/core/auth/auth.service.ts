import { Injectable } from '@angular/core';
import { AuthUser } from './auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  readonly STORAGE_KEY = 'kos_user';

  get currentUser(): AuthUser | null {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
