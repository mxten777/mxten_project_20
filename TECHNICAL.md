# 🔧 Technical Documentation

## 아키텍처 개요

### 시스템 아키텍처
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Build System  │    │   Deployment    │
│   React + TS    │───▶│   Vite + ESLint │───▶│   Vercel        │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                        │                        │
        ▼                        ▼                        ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Styling       │    │   Bundling      │    │   CDN           │
│   TailwindCSS   │    │   Tree Shaking  │    │   Edge Network  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### 데이터 플로우
```
Static Data (projects.ts) → TypeScript Types → React Components → TailwindCSS → Optimized Build → Vercel CDN
```

## 컴포넌트 설계

### 컴포넌트 계층구조
```
App
├── Layout
│   ├── Header (Navigation)
│   ├── Main Content
│   │   ├── HomePage
│   │   │   ├── HeroSection
│   │   │   ├── StatsSection  
│   │   │   ├── ProjectsSection
│   │   │   ├── TechStackSection
│   │   │   └── CTASection
│   │   ├── PortfolioPage
│   │   │   ├── FilterBar
│   │   │   ├── SearchSort
│   │   │   └── ProjectGrid
│   │   ├── ProjectDetailPage
│   │   ├── AboutPage
│   │   └── ContactPage
│   └── Footer
└── Router (React Router DOM)
```

### 타입 시스템
```typescript
// Core Types
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  technologies: Technology[];
  duration: string;
  teamSize: number;
  completionRate: number;
  clientSatisfaction: number;
  features: string[];
  challenges: string[];
  outcomes: ProjectOutcome[];
  gallery: GalleryItem[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export type ProjectCategory = 
  | '기업/산업' 
  | '의료/헬스케어' 
  | '교육' 
  | 'AI/데이터' 
  | '공공/사회' 
  | '게임/엔터테인먼트';

export type ProjectStatus = '완료' | '진행중' | '계획중';

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'ai';
  proficiency: number; // 1-100
}
```

## 성능 최적화

### 번들 분석
```bash
# 번들 크기 분석
npm run build
npx vite-bundle-analyzer dist

# 현재 번들 크기 (압축 후)
- vendor.js: ~180KB (React, React Router, etc.)
- main.js: ~45KB (앱 로직)
- main.css: ~12KB (TailwindCSS 압축)
- 총합: ~237KB
```

### 코드 스플리팅 전략
```typescript
// 페이지 레벨 코드 스플리팅
const HomePage = lazy(() => import('./pages/HomePage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));

// 컴포넌트 레벨 최적화
const ProjectCard = memo(({ project }: { project: Project }) => {
  return (
    <div className="project-card">
      {/* 최적화된 렌더링 */}
    </div>
  );
});
```

### 이미지 최적화
```typescript
// 반응형 이미지 컴포넌트
interface ResponsiveImageProps {
  src: string;
  alt: string;
  sizes?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ 
  src, 
  alt, 
  sizes = "100vw" 
}) => {
  return (
    <img
      src={`${src}-640.webp`}
      srcSet={`
        ${src}-320.webp 320w,
        ${src}-640.webp 640w,
        ${src}-1280.webp 1280w
      `}
      sizes={sizes}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  );
};
```

## 스타일링 시스템

### TailwindCSS 커스텀 설정
```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6', 
          600: '#2563eb',
          900: '#1e3a8a',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
      }
    }
  }
}
```

### CSS 아키텍처
```css
/* 레이어 구조 */
@layer base {
  /* 기본 리셋 및 전역 스타일 */
}

@layer components {
  /* 재사용 가능한 컴포넌트 스타일 */
  .btn-primary { @apply px-6 py-3 bg-primary-600 text-white rounded-lg; }
  .card { @apply bg-white rounded-xl shadow-sm border; }
}

@layer utilities {
  /* 유틸리티 클래스 확장 */
  .glass { @apply bg-white/10 backdrop-blur-sm border border-white/20; }
}
```

## 반응형 브레이크포인트

### 그리드 시스템
```typescript
// 반응형 그리드 유틸리티
const getGridClasses = (columns: { 
  sm?: number; 
  md?: number; 
  lg?: number; 
  xl?: number; 
}) => {
  const classes = ['grid'];
  
  if (columns.sm) classes.push(`sm:grid-cols-${columns.sm}`);
  if (columns.md) classes.push(`md:grid-cols-${columns.md}`);
  if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`);
  if (columns.xl) classes.push(`xl:grid-cols-${columns.xl}`);
  
  return classes.join(' ');
};

// 사용 예시
<div className={getGridClasses({ sm: 2, md: 3, lg: 4, xl: 6 })}>
  {projects.map(project => <ProjectCard key={project.id} {...project} />)}
</div>
```

### 반응형 타이포그래피
```css
/* 타이포그래피 스케일 */
.text-responsive-xl {
  @apply text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl;
}

.text-responsive-lg {
  @apply text-xl sm:text-2xl md:text-3xl lg:text-4xl;
}

.text-responsive-md {
  @apply text-lg sm:text-xl md:text-2xl;
}
```

## 상태 관리

### 로컬 상태 패턴
```typescript
// 커스텀 훅을 통한 상태 관리
const useProjectFilters = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    search: '',
    sortBy: 'latest'
  });

  const filteredProjects = useMemo(() => {
    return projects
      .filter(project => filters.category === 'all' || project.category === filters.category)
      .filter(project => project.title.toLowerCase().includes(filters.search.toLowerCase()))
      .sort((a, b) => {
        switch (filters.sortBy) {
          case 'latest': return new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime();
          case 'popular': return b.clientSatisfaction - a.clientSatisfaction;
          case 'name': return a.title.localeCompare(b.title);
          default: return 0;
        }
      });
  }, [filters]);

  return { filters, setFilters, filteredProjects };
};
```

## 빌드 최적화

### Vite 설정
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5173,
    host: true
  }
});
```

### 배포 최적화
```json
// package.json scripts
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "type-check": "tsc --noEmit"
  }
}
```

## 테스팅 전략

### 단위 테스트 (준비 중)
```typescript
// __tests__/components/ProjectCard.test.tsx
import { render, screen } from '@testing-library/react';
import { ProjectCard } from '../components/ProjectCard';
import { mockProject } from '../__mocks__/projects';

describe('ProjectCard', () => {
  it('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText(mockProject.title)).toBeInTheDocument();
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
    expect(screen.getByText(mockProject.category)).toBeInTheDocument();
  });
});
```

### E2E 테스트 (준비 중)
```typescript
// e2e/portfolio.spec.ts
import { test, expect } from '@playwright/test';

test('portfolio filtering works correctly', async ({ page }) => {
  await page.goto('/portfolio');
  
  // 카테고리 필터 테스트
  await page.click('[data-testid="filter-ai"]');
  await expect(page.locator('[data-testid="project-card"]')).toHaveCount(5);
  
  // 검색 기능 테스트  
  await page.fill('[data-testid="search-input"]', 'ERP');
  await expect(page.locator('[data-testid="project-card"]')).toHaveCount(2);
});
```

## 보안 고려사항

### CSP (Content Security Policy)
```html
<!-- index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://vercel.live;
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
               font-src https://fonts.gstatic.com;
               img-src 'self' data: https:;
               connect-src 'self' https://vercel.live;">
```

### 의존성 보안
```bash
# 보안 취약점 검사
npm audit

# 자동 수정 가능한 취약점 해결  
npm audit fix

# 의존성 업데이트
npm update
```

## 모니터링 및 분석

### Vercel Analytics
```typescript
// 성능 모니터링
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Router>
        {/* 앱 컴포넌트 */}
      </Router>
      <Analytics />
    </>
  );
}
```

### Core Web Vitals 목표
- **LCP** (Largest Contentful Paint): < 2.5초
- **FID** (First Input Delay): < 100ms  
- **CLS** (Cumulative Layout Shift): < 0.1

## 환경 변수 관리

### 개발 환경
```bash
# .env.local
VITE_APP_TITLE="VibeCoding Portfolio"
VITE_API_BASE_URL="https://api.vibecoding.dev"
VITE_CONTACT_EMAIL="hello@vibecoding.com"
VITE_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

### 프로덕션 환경
```bash
# Vercel Environment Variables
VITE_APP_TITLE="VibeCoding MVP Portfolio"
VITE_API_BASE_URL="https://api.vibecoding.com" 
VITE_CONTACT_EMAIL="hello@vibecoding.com"
VITE_GA_MEASUREMENT_ID="G-YYYYYYYYYY"
```

## 브라우저 호환성

### 지원 브라우저
- **Chrome** 90+
- **Firefox** 88+  
- **Safari** 14+
- **Edge** 90+

### Polyfill 전략
```typescript
// main.tsx
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// 조건부 polyfill 로딩
if (!window.IntersectionObserver) {
  import('intersection-observer');
}
```

## 성능 메트릭

### 번들 크기 목표
- **초기 로딩**: < 250KB (gzipped)
- **페이지별 청크**: < 50KB
- **이미지 최적화**: WebP 형식, 압축률 85%

### 로딩 성능
- **TTFB** (Time to First Byte): < 200ms
- **FCP** (First Contentful Paint): < 1.5초
- **TTI** (Time to Interactive): < 3초

---

> 이 문서는 VibeCoding MVP Portfolio 프로젝트의 기술적 구현 세부사항을 다룹니다.  
> 추가 질문이나 개선사항이 있다면 [GitHub Issues](https://github.com/mxten777/mxten_project_20/issues)를 통해 문의해주세요.