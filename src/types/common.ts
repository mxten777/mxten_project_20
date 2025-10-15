export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  founded: string;
  location: string;
  team: TeamMember[];
  services: Service[];
  process: ProcessStep[];
  contact: ContactInfo;
  social: SocialLink[];
  stats: CompanyStats;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
  social: SocialLink[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  businessHours: string;
  timezone: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface CompanyStats {
  projectsCompleted: number;
  clientsSatisfied: number;
  yearsExperience: number;
  technologiesUsed: number;
  awardsWon: number;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  agreeToTerms: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export type ThemeMode = 'light' | 'dark' | 'system';