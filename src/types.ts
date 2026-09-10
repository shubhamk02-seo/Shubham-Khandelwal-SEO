export interface MetricItem {
  id: string;
  value: string;
  numericTarget: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
}

export interface ExperienceRole {
  id: string;
  role: string;
  company: string;
  companyContext?: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
}

export interface EarlyCareerRole {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface AICardItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  workflowStep: string;
  practicalApplication: string;
}

export interface ExpertiseCategory {
  id: string;
  title: string;
  badge: string;
  description: string;
  items: string[];
}

export interface ImpactDashboardTab {
  id: 'traffic' | 'rankings' | 'technical' | 'content' | 'ai';
  title: string;
  icon: string;
  metrics: {
    label: string;
    value: string;
    changeLabel: string;
    subtext: string;
  }[];
  details: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  period?: string;
  credentialType: string;
  verifiedTopics: string[];
}
