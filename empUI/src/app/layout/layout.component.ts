import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

interface NavGroup {
  group: string;
  items: NavItem[];
}

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  sidebarCollapsed = signal(false);

  navGroups: NavGroup[] = [
    {
      group: 'Overview',
      items: [
        { label: 'Dashboard',       icon: 'dashboard',       route: '/dashboard' },
        { label: 'Staff Directory', icon: 'people',          route: '/directory' },
        { label: 'Departments',     icon: 'apartment',       route: '/departments' },
        { label: 'Announcements',   icon: 'campaign',        route: '/announcements' },
      ]
    },
    {
      group: 'Workforce',
      items: [
        { label: 'Onboarding',      icon: 'person_add',      route: '/onboarding' },
        { label: 'Attendance',      icon: 'schedule',        route: '/attendance' },
        { label: 'Shifts',          icon: 'swap_horiz',      route: '/shifts' },
        { label: 'Leave',           icon: 'event_busy',      route: '/leave' },
        { label: 'Overtime',        icon: 'more_time',       route: '/overtime' },
        { label: 'Holiday Calendar',icon: 'event',           route: '/holidays' },
      ]
    },
    {
      group: 'Compensation',
      items: [
        { label: 'Payroll',         icon: 'payments',        route: '/payroll' },
        { label: 'Salary Advance',  icon: 'account_balance_wallet', route: '/salary-advance' },
        { label: 'Commission',      icon: 'percent',         route: '/commission' },
        { label: 'Expense Reimbursement', icon: 'receipt_long', route: '/expenses' },
      ]
    },
    {
      group: 'Development',
      items: [
        { label: 'Performance',     icon: 'trending_up',     route: '/performance' },
        { label: 'HR Analytics',    icon: 'bar_chart',       route: '/hr-analytics' },
        { label: 'Grievance',       icon: 'gavel',           route: '/grievance' },
        { label: 'Staff Documents', icon: 'folder_open',     route: '/documents' },
      ]
    },
    {
      group: 'Administration',
      items: [
        { label: 'Role Management', icon: 'admin_panel_settings', route: '/roles' },
      ]
    }
  ];

  toggleSidebar(): void {
    this.sidebarCollapsed.update(v => !v);
  }
}
