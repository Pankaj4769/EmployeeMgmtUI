import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />'
})
export class App implements OnInit {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  ngOnInit(): void {
    if (!this.isBrowser) return;

    // Seed localStorage from URL params passed by the KOS sidebar
    const params  = new URLSearchParams(window.location.search);
    const token   = params.get('token');
    const userB64 = params.get('user');

    if (token)   localStorage.setItem('token', token);
    if (userB64) {
      try { localStorage.setItem('kos_user', atob(userB64)); } catch { /* ignore bad base64 */ }
    }

    // Strip sensitive params from URL without re-triggering navigation
    if (token || userB64) {
      window.history.replaceState({}, '', window.location.pathname + '?mode=em');
    }
  }
}
