import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./staff/components/em-dashboard/em-dashboard.component')
          .then(m => m.EmDashboardComponent)
      },
      {
        path: 'directory',
        loadComponent: () => import('./staff/components/staff-directory/staff-directory.component')
          .then(m => m.StaffDirectoryComponent)
      },
      {
        path: 'departments',
        loadComponent: () => import('./staff/components/department-management/department-management.component')
          .then(m => m.DepartmentManagementComponent)
      },
      {
        path: 'announcements',
        loadComponent: () => import('./staff/components/announcements/announcements.component')
          .then(m => m.AnnouncementsComponent)
      },
      {
        path: 'onboarding',
        loadComponent: () => import('./staff/components/onboarding/onboarding.component')
          .then(m => m.OnboardingComponent)
      },
      {
        path: 'attendance',
        loadComponent: () => import('./staff/components/attendance/attendance.component')
          .then(m => m.AttendanceComponent)
      },
      {
        path: 'shifts',
        loadComponent: () => import('./staff/components/shift-management/shift-management.component')
          .then(m => m.ShiftManagementComponent)
      },
      {
        path: 'leave',
        loadComponent: () => import('./staff/components/leave-management/leave-management.component')
          .then(m => m.LeaveManagementComponent)
      },
      {
        path: 'overtime',
        loadComponent: () => import('./staff/components/overtime/overtime.component')
          .then(m => m.OvertimeComponent)
      },
      {
        path: 'holidays',
        loadComponent: () => import('./staff/components/holiday-calendar/holiday-calendar.component')
          .then(m => m.HolidayCalendarComponent)
      },
      {
        path: 'payroll',
        loadComponent: () => import('./staff/components/payroll/payroll.component')
          .then(m => m.PayrollComponent)
      },
      {
        path: 'salary-advance',
        loadComponent: () => import('./staff/components/salary-advance/salary-advance.component')
          .then(m => m.SalaryAdvanceComponent)
      },
      {
        path: 'commission',
        loadComponent: () => import('./staff/components/commission/commission.component')
          .then(m => m.CommissionComponent)
      },
      {
        path: 'expenses',
        loadComponent: () => import('./staff/components/expense-reimbursement/expense-reimbursement.component')
          .then(m => m.ExpenseReimbursementComponent)
      },
      {
        path: 'performance',
        loadComponent: () => import('./staff/components/performance/performance.component')
          .then(m => m.PerformanceComponent)
      },
      {
        path: 'hr-analytics',
        loadComponent: () => import('./staff/components/hr-analytics/hr-analytics.component')
          .then(m => m.HrAnalyticsComponent)
      },
      {
        path: 'grievance',
        loadComponent: () => import('./staff/components/grievance/grievance.component')
          .then(m => m.GrievanceComponent)
      },
      {
        path: 'documents',
        loadComponent: () => import('./staff/components/staff-documents/staff-documents.component')
          .then(m => m.StaffDocumentsComponent)
      },
      {
        path: 'roles',
        loadComponent: () => import('./staff/pages/role-management.component')
          .then(m => m.RoleManagementComponent)
      },
    ]
  }
];
