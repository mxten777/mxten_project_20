export type ProjectCategory =
  | 'enterprise'
  | 'healthcare'
  | 'education'
  | 'ai-data'
  | 'public'
  | 'gaming'
  | 'entertainment'
  | 'welfare'
  | 'industry'
  | 'personal'
  | 'job'
  | 'meta';

export type ProjectStatus =
  | 'completed'
  | 'in-progress'
  | 'beta'
  | 'prototype'
  | 'planning';

export type ProjectDifficulty =
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'expert';

export type TechCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'cloud'
  | 'mobile'
  | 'ai-ml'
  | 'devops'
  | 'design';

export interface Technology {
  name: string;
  icon: string;
  category: TechCategory;
  color: string;
}

export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  type: 'screenshot' | 'diagram' | 'demo' | 'mockup';
  featured: boolean;
}

export interface ProjectLink {
  type: 'demo' | 'github' | 'figma' | 'docs' | 'other';
  url: string;
  label: string;
}

export interface ProjectMetrics {
  completionRate: number;
  performanceScore?: number;
  userFeedback?: number;
  codeQuality?: number;
}

export interface Challenge {
  title: string;
  description: string;
  solution: string;
  impact: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  // 상세 프로젝트에만 필요한 속성 (필요시만 사용)
  subtitle?: string;
  description?: string;
  longDescription?: string;
  status?: ProjectStatus;
  difficulty?: ProjectDifficulty;
  featured?: boolean;
  technologies?: Technology[];
  images?: ProjectImage[];
  links?: ProjectLink[];
  timeline?: {
    start?: string;
    end?: string;
    duration?: string;
  };
  metrics?: ProjectMetrics;
  challenges?: Challenge[];
  learnings?: string[];
  tags?: string[];
  relatedProjects?: string[];
  createdAt?: string;
  updatedAt?: string;
  // 포트폴리오 리스트용 추가 속성
  date?: string;
  link?: string;
}

export interface CategoryInfo {
  id: ProjectCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
  count: number;
}

export interface FilterOptions {
  category?: ProjectCategory;
  status?: ProjectStatus;
  difficulty?: ProjectDifficulty;
  technologies?: string[];
  featured?: boolean;
  search?: string;
}

export interface SortOption {
  key: 'title' | 'createdAt' | 'completionRate' | 'featured';
  direction: 'asc' | 'desc';
  label: string;
}