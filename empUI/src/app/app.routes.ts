import { Routes } from '@angular/router';
import { StaffDirectoryComponent } from './staff/components/staff-directory/staff-directory.component';

export const routes: Routes = [
  { path: '', redirectTo: 'staff', pathMatch: 'full' },
  { path: 'staff', component: StaffDirectoryComponent }
];
