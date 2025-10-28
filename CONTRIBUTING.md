# 🤝 Contributing Guide

VibeCoding MVP Portfolio 프로젝트에 기여해주셔서 감사합니다! 이 가이드는 프로젝트에 효과적으로 기여하는 방법을 설명합니다.

## 📋 목차

- [기여 방법](#기여-방법)
- [개발 환경 설정](#개발-환경-설정)
- [코드 스타일](#코드-스타일)
- [커밋 컨벤션](#커밋-컨벤션)
- [Pull Request 프로세스](#pull-request-프로세스)
- [이슈 리포팅](#이슈-리포팅)
- [코드 리뷰](#코드-리뷰)

## 기여 방법

### 🐛 버그 리포트
버그를 발견하면 [GitHub Issues](https://github.com/mxten777/mxten_project_20/issues)에 다음 정보와 함께 리포트해주세요:

- **환경 정보**: OS, 브라우저, 버전
- **재현 단계**: 버그를 재현할 수 있는 단계별 설명
- **예상 결과**: 어떤 결과를 예상했는지
- **실제 결과**: 실제로 어떤 일이 발생했는지
- **스크린샷**: 가능하다면 스크린샷이나 GIF 첨부

### ✨ 기능 제안
새로운 기능을 제안하려면:

1. **GitHub Discussions**에서 먼저 논의
2. 커뮤니티 피드백 수집
3. 승인되면 Issue로 등록
4. 구현 계획 수립

### 📝 문서 개선
문서 개선도 환영합니다:

- README.md 개선
- 코드 주석 추가
- API 문서 작성
- 사용 예제 추가

## 개발 환경 설정

### 필수 요구사항
- **Node.js** 18.0.0 이상
- **npm** 9.0.0 이상
- **Git** 최신 버전

### 저장소 포크 및 클론
```bash
# 1. GitHub에서 저장소 포크
# 2. 포크한 저장소 클론
git clone https://github.com/[YOUR_USERNAME]/mxten_project_20.git
cd mxten_project_20

# 3. 원본 저장소를 upstream으로 추가
git remote add upstream https://github.com/mxten777/mxten_project_20.git

# 4. 의존성 설치
npm install

# 5. 개발 서버 실행
npm run dev
```

### 개발 도구 설정
```bash
# ESLint 확장 설치 (VS Code)
code --install-extension dbaeumer.vscode-eslint

# Prettier 확장 설치
code --install-extension esbenp.prettier-vscode

# TypeScript 지원
code --install-extension ms-vscode.vscode-typescript-next
```

## 코드 스타일

### ESLint 설정
프로젝트는 ESLint를 사용하여 코드 품질을 관리합니다:

```bash
# 린트 검사
npm run lint

# 자동 수정 가능한 문제 해결
npm run lint:fix
```

### TypeScript 가이드라인
```typescript
// ✅ Good: 명확한 타입 정의
interface ProjectCardProps {
  project: Project;
  onSelect?: (projectId: number) => void;
}

// ❌ Avoid: any 타입 사용
const handleClick = (event: any) => { ... }

// ✅ Good: 구체적인 타입 사용
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => { ... }
```

### React 컴포넌트 가이드라인
```typescript
// ✅ Good: 함수형 컴포넌트 + TypeScript
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick 
}) => {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
```

### CSS/TailwindCSS 가이드라인
```typescript
// ✅ Good: 의미있는 클래스명 조합
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">

// ✅ Good: 반응형 디자인
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// ❌ Avoid: 인라인 스타일
<div style={{ display: 'flex', padding: '16px' }}>
```

## 커밋 컨벤션

### 커밋 메시지 형식
```
<type>(<scope>): <subject>

<body>

<footer>
```

### 타입 (Type)
- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **docs**: 문서 변경
- **style**: 코드 포맷팅 (기능 변경 없음)
- **refactor**: 코드 리팩토링
- **test**: 테스트 추가/수정
- **chore**: 빌드 과정, 보조 도구 변경

### 스코프 (Scope) - 선택사항
- **components**: 컴포넌트 관련
- **pages**: 페이지 관련
- **styles**: 스타일 관련
- **config**: 설정 관련
- **deps**: 의존성 관련

### 예시
```bash
# 좋은 커밋 메시지
feat(components): add ProjectCard hover animation
fix(pages): resolve portfolio filtering bug
docs: update installation guide
style: format code with prettier
refactor(components): optimize ProjectGrid performance

# 나쁜 커밋 메시지
update stuff
fix bug
changes
WIP
```

## Pull Request 프로세스

### 1. 브랜치 생성
```bash
# 최신 코드 동기화
git checkout main
git pull upstream main

# 새 브랜치 생성
git checkout -b feature/project-search
git checkout -b fix/portfolio-filtering
git checkout -b docs/contributing-guide
```

### 2. 개발 및 테스트
```bash
# 개발 진행
# ...

# 코드 품질 검사
npm run lint
npm run type-check

# 빌드 테스트
npm run build

# 개발 서버 테스트
npm run dev
```

### 3. 커밋 및 푸시
```bash
# 변경사항 스테이징
git add .

# 커밋 (컨벤션 준수)
git commit -m "feat(components): add project search functionality"

# 포크 저장소에 푸시
git push origin feature/project-search
```

### 4. Pull Request 생성
GitHub에서 Pull Request 생성 시 다음을 포함:

```markdown
## 📝 변경 사항
- 프로젝트 검색 기능 추가
- 실시간 필터링 구현
- 검색 결과 하이라이팅

## 🧪 테스트
- [ ] 검색 기능 정상 동작 확인
- [ ] 필터링과 검색의 조합 테스트
- [ ] 모바일 환경 테스트

## 📷 스크린샷
![검색 기능 스크린샷](screenshot.png)

## 🔗 관련 Issue
Closes #123
```

### 5. 코드 리뷰 대응
- 리뷰어의 피드백에 적극적으로 응답
- 요청된 변경사항 반영
- 추가 커밋으로 수정사항 푸시

## 이슈 리포팅

### 버그 리포트 템플릿
```markdown
## 🐛 버그 설명
간단하고 명확한 버그 설명

## 🔄 재현 단계
1. '...' 페이지로 이동
2. '...' 버튼 클릭
3. '...' 입력
4. 오류 발생

## ✅ 예상 결과
어떤 결과를 예상했는지

## ❌ 실제 결과
실제로 어떤 일이 발생했는지

## 🖥️ 환경 정보
- OS: [e.g. Windows 11]
- 브라우저: [e.g. Chrome 119]
- 디바이스: [e.g. Desktop, Mobile]
- 화면 크기: [e.g. 1920x1080]

## 📎 추가 정보
스크린샷, 에러 로그, 관련 파일 등
```

### 기능 요청 템플릿
```markdown
## 🚀 기능 요청
요청하고 싶은 기능에 대한 설명

## 🎯 해결하고자 하는 문제
현재 어떤 문제가 있는지

## 💡 제안하는 솔루션
어떤 방식으로 해결할 수 있는지

## 🔄 대안
고려해본 다른 방법들

## 📋 추가 컨텍스트
관련 스크린샷, 참고 자료 등
```

## 코드 리뷰

### 리뷰 기준
- **기능성**: 요구사항을 정확히 구현했는가?
- **코드 품질**: 읽기 쉽고 유지보수 가능한가?
- **성능**: 성능상 문제는 없는가?
- **보안**: 보안 취약점은 없는가?
- **테스트**: 적절한 테스트가 포함되어 있는가?

### 리뷰 가이드라인

#### 리뷰어를 위한 가이드
- 건설적이고 친근한 피드백 제공
- 구체적인 개선 제안 포함
- 코드의 좋은 부분도 언급
- 질문을 통해 학습 기회 제공

#### 작성자를 위한 가이드
- 피드백을 감사하게 받아들이기
- 모르는 것은 적극적으로 질문하기
- 요청된 변경사항 신속히 반영
- 리뷰 과정에서 배운 점 기록하기

## 브랜치 전략

### 브랜치 네이밍
```bash
# 기능 개발
feature/project-search
feature/mobile-navigation
feature/project-detail-page

# 버그 수정
fix/portfolio-filtering
fix/mobile-layout-issue
fix/search-performance

# 문서 작업
docs/api-documentation
docs/deployment-guide
docs/contributing-update

# 리팩토링
refactor/component-structure
refactor/state-management
refactor/performance-optimization
```

### 브랜치 수명주기
1. **생성**: main에서 새 브랜치 생성
2. **개발**: 기능 구현 및 테스트
3. **PR**: Pull Request 생성
4. **리뷰**: 코드 리뷰 및 피드백 반영
5. **머지**: main 브랜치에 병합
6. **정리**: 브랜치 삭제

## 릴리즈 프로세스

### 버전 관리
```bash
# 버전 태그 생성
git tag -a v1.0.0 -m "Release version 1.0.0"
git push upstream --tags

# 릴리즈 노트 작성 (GitHub)
# - 새로운 기능
# - 버그 수정
# - 주요 변경사항
# - 업그레이드 가이드
```

## 커뮤니티 가이드라인

### 행동 강령
- **존중**: 모든 기여자를 존중하고 배려
- **포용**: 다양한 배경과 경험을 환영
- **건설적**: 건설적인 피드백과 토론 지향
- **협력**: 함께 더 나은 프로덕트 만들기

### 소통 채널
- **GitHub Issues**: 버그 리포트, 기능 요청
- **GitHub Discussions**: 일반적인 질문, 아이디어 논의
- **이메일**: hello@vibecoding.com (긴급한 사안)

## 인정과 감사

기여해주신 모든 분들의 노력을 인정하고 감사드립니다:

- 코드 기여자
- 문서 개선자
- 버그 리포터
- 기능 제안자
- 코드 리뷰어

기여자 목록은 [Contributors](https://github.com/mxten777/mxten_project_20/graphs/contributors) 페이지에서 확인할 수 있습니다.

---

## 질문이나 도움이 필요하다면

- 📧 **이메일**: hello@vibecoding.com
- 🐙 **GitHub**: [Issues](https://github.com/mxten777/mxten_project_20/issues) 또는 [Discussions](https://github.com/mxten777/mxten_project_20/discussions)

다시 한 번 기여에 감사드리며, 함께 훌륭한 프로덕트를 만들어가요! 🚀