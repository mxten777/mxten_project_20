# 🚀 Deployment Guide

## 배포 개요

VibeCoding MVP Portfolio는 **Vercel**을 통해 자동 배포되며, GitHub과 연동되어 CI/CD 파이프라인을 제공합니다.

## 배포 환경

### 프로덕션 환경
- **플랫폼**: Vercel
- **도메인**: https://mxten-project-20-8zn1yauz2-dongyeol-jungs-projects.vercel.app
- **GitHub 리포지토리**: https://github.com/mxten777/mxten_project_20
- **자동 배포**: main 브랜치 푸시 시 트리거

### 스테이징 환경
- **플랫폼**: Vercel Preview
- **도메인**: 각 PR마다 고유한 미리보기 URL 생성
- **용도**: 기능 검토 및 QA 테스트

## 배포 프로세스

### 1. 자동 배포 (권장)

#### GitHub Integration
```bash
# 1. 코드 변경 후 커밋
git add .
git commit -m "feat: 새로운 기능 추가"

# 2. main 브랜치에 푸시
git push origin main

# 3. Vercel에서 자동 빌드 및 배포 시작
# 4. 약 2-3분 후 배포 완료
```

#### Pull Request 미리보기
```bash
# 1. 기능 브랜치 생성
git checkout -b feature/new-feature

# 2. 개발 및 커밋
git add .
git commit -m "feat: 새 기능 구현"

# 3. 기능 브랜치 푸시
git push origin feature/new-feature

# 4. GitHub에서 Pull Request 생성
# 5. Vercel이 자동으로 미리보기 배포 생성
```

### 2. 수동 배포

#### Vercel CLI 사용
```bash
# Vercel CLI 설치 (글로벌)
npm install -g vercel

# 프로젝트 디렉토리에서 로그인
vercel login

# 개발 배포 (테스트용)
vercel

# 프로덕션 배포
vercel --prod
```

#### 로컬 빌드 테스트
```bash
# 프로덕션 빌드 생성
npm run build

# 빌드 결과 미리보기
npm run preview

# 빌드 성공 확인 후 배포 진행
```

## 환경 변수 설정

### Vercel 대시보드에서 설정

1. **Vercel 대시보드 접속**: https://vercel.com/dashboard
2. **프로젝트 선택**: mxten-project-20
3. **Settings** → **Environment Variables** 메뉴
4. 아래 변수들 추가:

```bash
# 필수 환경 변수
VITE_APP_TITLE="VibeCoding MVP Portfolio"
VITE_CONTACT_EMAIL="hello@vibecoding.com"

# 선택적 환경 변수
VITE_API_BASE_URL="https://api.vibecoding.com"
VITE_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
VITE_HOTJAR_ID="XXXXXXX"
```

### 환경별 설정

#### Production
```env
NODE_ENV=production
VITE_APP_ENV=production
VITE_API_BASE_URL=https://api.vibecoding.com
```

#### Preview (Staging)  
```env
NODE_ENV=production
VITE_APP_ENV=preview
VITE_API_BASE_URL=https://api-staging.vibecoding.com
```

#### Development
```env
NODE_ENV=development
VITE_APP_ENV=development
VITE_API_BASE_URL=http://localhost:3001
```

## 빌드 설정

### vercel.json 설정
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "regions": ["icn1", "hnd1", "sin1"],
  "functions": {
    "app/api/**/*.ts": {
      "runtime": "nodejs18.x"
    }
  },
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/home",
      "destination": "/",
      "permanent": true
    }
  ],
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/$1"
    }
  ]
}
```

### 빌드 최적화 설정
```typescript
// vite.config.ts - 프로덕션 최적화
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    target: 'es2020',
    minify: mode === 'production' ? 'terser' : false,
    sourcemap: mode === 'production' ? false : true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
}));
```

## 배포 모니터링

### Vercel Analytics
```typescript
// src/main.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>
);
```

### 배포 상태 확인
```bash
# Vercel CLI로 배포 상태 확인
vercel ls

# 특정 배포 로그 확인  
vercel logs [deployment-url]

# 도메인 상태 확인
vercel domains ls
```

## 성능 최적화

### 이미지 최적화
```typescript
// next/image와 유사한 최적화 (커스텀 구현)
const OptimizedImage = ({ src, alt, ...props }) => (
  <img
    {...props}
    src={`${src}?w=800&q=75&fm=webp`}
    loading="lazy"
    decoding="async"
    alt={alt}
  />
);
```

### 코드 스플리팅
```typescript
// 페이지 레벨 레이지 로딩
const HomePage = lazy(() => import('./pages/HomePage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));

// 라우터에서 Suspense 적용
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/portfolio" element={<PortfolioPage />} />
  </Routes>
</Suspense>
```

## 도메인 설정

### 커스텀 도메인 연결 (예정)

1. **DNS 설정**
```bash
# A Record
@ → 76.76.19.61

# CNAME Record  
www → cname.vercel-dns.com
```

2. **Vercel에서 도메인 추가**
```bash
# CLI로 도메인 추가
vercel domains add vibecoding.com

# 도메인 검증
vercel domains verify vibecoding.com
```

3. **SSL 인증서**
- Vercel에서 자동으로 Let's Encrypt SSL 인증서 발급
- HTTPS 강제 리디렉션 자동 설정

## 백업 및 복원

### GitHub 백업
```bash
# 저장소 클론 (백업)
git clone --mirror https://github.com/mxten777/mxten_project_20.git

# 백업에서 복원
git clone mxten_project_20.git
cd mxten_project_20
git remote set-url origin https://github.com/mxten777/mxten_project_20.git
```

### Vercel 프로젝트 백업
```bash
# 프로젝트 설정 내보내기
vercel project rm mxten-project-20 --yes

# 새 프로젝트로 복원
vercel --prod
```

## 트러블슈팅

### 일반적인 배포 오류

#### 1. 빌드 실패
```bash
# 에러 예시
Error: Command "npm run build" exited with 1

# 해결 방법
npm run build  # 로컬에서 빌드 테스트
npm run lint    # 린트 오류 확인
npm run type-check  # 타입 오류 확인
```

#### 2. 환경 변수 오류
```bash
# 에러 예시  
ReferenceError: process is not defined

# 해결 방법: vite.config.ts에 환경 변수 정의
export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }
});
```

#### 3. 라우팅 404 오류
```json
// vercel.json에 SPA 리라이팅 추가
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 성능 이슈 진단
```bash
# Lighthouse 성능 측정
npm install -g lighthouse
lighthouse https://your-domain.vercel.app --output html --output-path report.html

# 번들 분석
npm run build
npx vite-bundle-analyzer dist
```

## 배포 체크리스트

### 배포 전 확인사항
- [ ] 로컬 빌드 성공 (`npm run build`)
- [ ] 린트 검사 통과 (`npm run lint`)  
- [ ] 타입 검사 통과 (`npm run type-check`)
- [ ] 모든 환경 변수 설정 완료
- [ ] 테스트 케이스 통과 (해당 시)
- [ ] 브라우저 호환성 확인

### 배포 후 확인사항
- [ ] 사이트 접속 정상 동작
- [ ] 모든 페이지 라우팅 정상
- [ ] 이미지 로딩 정상
- [ ] 모바일 반응형 정상
- [ ] Core Web Vitals 점수 확인
- [ ] 에러 로그 확인

## 롤백 프로세스

### 즉시 롤백
```bash
# Vercel 대시보드에서
# 1. Deployments 탭 선택
# 2. 이전 성공 배포 선택  
# 3. "Promote to Production" 클릭

# CLI로 롤백
vercel rollback [previous-deployment-url] --prod
```

### Git 롤백
```bash
# 커밋 되돌리기
git revert HEAD

# 강제 롤백 (주의!)
git reset --hard HEAD~1
git push --force-with-lease origin main
```

## 보안 설정

### Headers 보안 강화
```json
// vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options", 
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ]
}
```

## 모니터링 및 알림

### Vercel 알림 설정
1. **Vercel 대시보드** → **Settings** → **Notifications**
2. **Slack/Discord 웹훅** 설정
3. **이메일 알림** 활성화

### 업타임 모니터링
```javascript
// Uptime Robot, Pingdom 등 외부 서비스 활용
// 또는 Vercel 기본 모니터링 사용
```

---

> **배포 관련 문의**  
> 배포 과정에서 문제가 발생하면 [GitHub Issues](https://github.com/mxten777/mxten_project_20/issues)에 문의하거나  
> hello@vibecoding.com으로 연락주세요.