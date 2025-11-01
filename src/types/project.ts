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

// 컬러 시스템 일관성: 카테고리 메인 컬러(color), 프리미엄 포인트 컬러(pointColor) 등 명확히 분리
export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  // 컬러 시스템(카테고리 메인/포인트 컬러)
  color?: string; // 카테고리 메인 컬러(예: '#1A237E')
  pointColor?: string; // 프리미엄 포인트/골드 컬러(예: '#FFD700')
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

// 카테고리별 컬러 시스템 세분화(메인/포인트/다크/라이트 등)
export interface CategoryInfo {
  id: ProjectCategory;
  name: string;
  description: string;
  icon: string;
  color: string; // 메인 컬러
  pointColor?: string; // 프리미엄 포인트/골드 컬러
  darkColor?: string; // 다크 모드용 컬러
  lightColor?: string; // 라이트 모드용 컬러
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