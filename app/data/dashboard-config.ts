import { SaasDashboard } from '../components/widgets/saas-metrics';
import { DevDashboard } from '../components/widgets/dev-dashboard';
import { CryptoDashboard } from '../components/widgets/crypto-dashboard';
import { PersonalDashboard } from '../components/widgets/personal-dashboard';
import { HomeDashboard } from '../components/widgets/home-dashboard';
import { SocialDashboard } from '../components/widgets/social-dashboard';
import { ProductivityDashboard } from '../components/widgets/productivity-dashboard';

// Widget type matching bento-grid.tsx


export interface Widget {
  id: string;
  size: '1x1' | '2x1' | '2x2';
  component: React.ReactNode;
}


export type WidgetConfig = Widget & { name?: string };

// Main dashboard configs
export type DashboardLoader = () => Widget[];

export const dashboardConfigs: Record<string, DashboardLoader> = {
  saas: SaasDashboard,
  dev: DevDashboard,
  crypto: CryptoDashboard,
  personal: PersonalDashboard,
  home: HomeDashboard,
  social: SocialDashboard,
  productivity: ProductivityDashboard,
};



// Default widgets (fallback)


