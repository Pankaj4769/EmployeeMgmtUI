export type UserRole =
  'ADMIN' | 'OWNER' | 'MANAGER' | 'CASHIER' |
  'BILLING_ASSISTANT' | 'CHEF' | 'WAITER';

export type SubscriptionPlan = 'STARTER' | 'GROWTH' | 'PRO' | 'ENTERPRISE';

export type OnboardingStatus =
  'NEW' | 'PENDING' | 'COMPLETED' | 'SETUP_COMPLETE';

export interface AuthUser {
  staffId: string;
  name: string;
  username: string;
  email?: string;
  mobile?: string;
  role: UserRole;
  token: string;
  isFirstTime: boolean;
  onboardingStatus: OnboardingStatus;
  subscriptionPlan?: SubscriptionPlan;
  restaurantId?: string;
  mustResetPassword?: boolean;
}
