import type { Project, Technology, CategoryInfo } from '../types/project';

// 기술 스택 데이터
export const technologies: Technology[] = [
  { name: 'React', icon: '⚛️', category: 'frontend', color: '#61DAFB' },
  { name: 'Next.js', icon: '▲', category: 'frontend', color: '#000000' },
  { name: 'Vue.js', icon: '💚', category: 'frontend', color: '#4FC08D' },
  { name: 'TypeScript', icon: '📘', category: 'frontend', color: '#3178C6' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'frontend', color: '#06B6D4' },
  { name: 'SCSS', icon: '💅', category: 'frontend', color: '#CF649A' },
  { name: 'Node.js', icon: '🟢', category: 'backend', color: '#339933' },
  { name: 'Express', icon: '🚂', category: 'backend', color: '#000000' },
  { name: 'Python', icon: '🐍', category: 'backend', color: '#3776AB' },
  { name: 'Django', icon: '🎯', category: 'backend', color: '#092E20' },
  { name: 'FastAPI', icon: '⚡', category: 'backend', color: '#009688' },
  { name: 'Spring Boot', icon: '🍃', category: 'backend', color: '#6DB33F' },
  { name: 'PostgreSQL', icon: '🐘', category: 'database', color: '#336791' },
  { name: 'MongoDB', icon: '🍃', category: 'database', color: '#47A248' },
  { name: 'Redis', icon: '🔴', category: 'database', color: '#DC382D' },
  { name: 'MySQL', icon: '🐬', category: 'database', color: '#4479A1' },
  { name: 'AWS', icon: '☁️', category: 'cloud', color: '#FF9900' },
  { name: 'Docker', icon: '🐳', category: 'devops', color: '#2496ED' },
  { name: 'Kubernetes', icon: '⚓', category: 'devops', color: '#326CE5' },
  { name: 'Vercel', icon: '▲', category: 'cloud', color: '#000000' },
  { name: 'TensorFlow', icon: '🧠', category: 'ai-ml', color: '#FF6F00' },
  { name: 'PyTorch', icon: '🔥', category: 'ai-ml', color: '#EE4C2C' },
  { name: 'OpenAI', icon: '🤖', category: 'ai-ml', color: '#412991' },
  { name: 'React Native', icon: '📱', category: 'mobile', color: '#61DAFB' },
  { name: 'Flutter', icon: '🦋', category: 'mobile', color: '#02569B' },
  { name: 'Figma', icon: '🎨', category: 'design', color: '#F24E1E' },
  { name: 'Adobe XD', icon: '🎯', category: 'design', color: '#FF61F6' },
];

// 카테고리 데이터
export const categories: CategoryInfo[] = [
  { id: 'enterprise', name: '기업/산업', description: '기업용 솔루션과 산업별 특화 시스템', icon: '🏢', color: '#3B82F6', count: 7 },
  { id: 'industry', name: '산업', description: '산업용 애플리케이션과 스마트 팩토리 솔루션', icon: '�', color: '#0284C7', count: 2 },
  { id: 'education', name: '교육', description: '학습자와 교육자를 위한 혁신적인 교육 플랫폼', icon: '📚', color: '#8B5CF6', count: 4 },
  { id: 'entertainment', name: '엔터테인먼트', description: '게임 및 엔터테인먼트 프로젝트', icon: '🎮', color: '#EC4899', count: 3 },
  { id: 'public', name: '공공/사회', description: '사회적 가치를 창출하는 공공 서비스 플랫폼', icon: '🏛️', color: '#EF4444', count: 4 },
  { id: 'job', name: '일자리', description: '일자리 및 고용 관련 서비스', icon: '💼', color: '#F59E0B', count: 2 },
  { id: 'welfare', name: '복지', description: '복지/돌봄 관련 플랫폼', icon: '❤️‍🩹', color: '#10B981', count: 6 },
  { id: 'meta', name: '메타', description: '포트폴리오/데모/메타 프로젝트', icon: '🗂️', color: '#9CA3FF', count: 2 },
  { id: 'personal', name: '개인', description: '개인사업자/프리랜서 프로젝트', icon: '👤', color: '#A78BFA', count: 1 },
  { id: 'healthcare', name: '의료/헬스케어', description: '의료진과 환자를 위한 디지털 헬스케어 솔루션', icon: '�', color: '#10B981', count: 5 }
];

// 포트폴리오 프로젝트 리스트 (36개)
export const projects: Project[] = [
  // --- AUTO-GENERATED PLACEHOLDERS FROM public/images (generated 2025-10-25) ---
  // These entries were created to surface images in the portfolio. Titles and links set from user's mapping (2025-10-25).
  { id: 'dbinfo-final', title: '디비인포 홈페이지', category: 'enterprise', date: '250830', link: 'https://dbinfo-final.vercel.app/', tags: ['auto-generated', '기업', '홈페이지'], images: [ { id: 'dbinfo-final-main', url: '/images/dbinfo_final.jpg', alt: '디비인포 홈페이지', type: 'screenshot', featured: true } ] },
  { id: 'dbinfo-final-admin', title: '디비인포 홈페이지 관리자 모드', category: 'enterprise', date: '251025', link: 'https://dbinfo-final.vercel.app/admin/', tags: ['auto-generated', '기업', '관리자'], images: [ { id: 'dbinfo-final-admin-main', url: '/images/dbinfo_final_admin.jpg', alt: '디비인포 관리자 모드', type: 'screenshot', featured: true } ] },
  { id: 'fuel-project-05', title: 'AI 주유소', category: 'industry', date: '250825', link: 'https://fuel-project-05.vercel.app/', tags: ['auto-generated', '산업', 'AI', '주유소'], images: [ { id: 'fuel-project-05-main', url: '/images/fuel_project_05.jpg', alt: 'AI 주유소', type: 'screenshot', featured: true } ] },
  { id: 'jdx-project-01', title: 'AI 기반 맞춤형 교육플랫폼 (바이브에듀)', category: 'education', date: '250906', link: 'https://jdx-project-01.vercel.app/', tags: ['auto-generated', '교육', 'AI'], images: [ { id: 'jdx-project-01-main', url: '/images/jdx_project_01.jpg', alt: '바이브에듀', type: 'screenshot', featured: true } ] },
  { id: 'jdx-project-02', title: '직장인을 위한 AI교육 플랫폼', category: 'education', date: '250924', link: 'https://jdx-project-02.vercel.app/', tags: ['auto-generated', '교육', 'AI'], images: [ { id: 'jdx-project-02-main', url: '/images/jdx_project_02.jpg', alt: '직장인 AI교육', type: 'screenshot', featured: true } ] },
  { id: 'jdx-project-05', title: '공정한 팀 배정 웹앱', category: 'entertainment', date: '250901', link: 'https://jdx-project-05.vercel.app/', tags: ['auto-generated', '엔터테인먼트', '팀배정'], images: [ { id: 'jdx-project-05-main', url: '/images/jdx_project_05.jpg', alt: 'JDX 팀 배정', type: 'screenshot', featured: true } ] },
  { id: 'jdx-project-10', title: '추억 만지기 웹앱', category: 'entertainment', date: '250914', link: 'https://jdx-project-10.vercel.app/', tags: ['auto-generated', '엔터테인먼트', '추억'], images: [ { id: 'jdx-project-10-main', url: '/images/jdx_project_10.jpg', alt: 'JDX 추억 만지기', type: 'screenshot', featured: true } ] },
  { id: 'law-maker', title: '국회의원 랜딩페이지 MVP', category: 'public', date: '251009', link: 'https://lawmaker-landing.vercel.app/', tags: ['auto-generated', '공공', '랜딩페이지'], images: [ { id: 'law-maker-main', url: '/images/law_maker.jpg', alt: '국회의원 랜딩페이지', type: 'screenshot', featured: true } ] },
  { id: 'music-project-01', title: 'AI 작사·작곡 도우미 플랫폼', category: 'education', date: '250927', link: 'https://music-project-01.vercel.app/', tags: ['auto-generated', '교육', '음악', 'AI'], images: [ { id: 'music-project-01-main', url: '/images/music_project_01.jpg', alt: 'AI 작사·작곡 도우미', type: 'screenshot', featured: true } ] },
  { id: 'mvp-project-03', title: '한국코프론 홈페이지', category: 'enterprise', date: '250828', link: 'https://mvp-project-03.vercel.app/', tags: ['auto-generated', '기업', '홈페이지'], images: [ { id: 'mvp-project-03-main', url: '/images/mvp_project_03.jpg', alt: '한국코프론 홈페이지', type: 'screenshot', featured: true } ] },
  { id: 'mvp-project-04', title: '바이칼시스템즈 홈페이지', category: 'enterprise', date: '250910', link: 'https://mvp-project-04.vercel.app/', tags: ['auto-generated', '기업', '홈페이지'], images: [ { id: 'mvp-project-04-main', url: '/images/mvp_project_04.jpg', alt: '바이칼시스템즈 홈페이지', type: 'screenshot', featured: true } ] },
  { id: 'mvp-project-06', title: 'AI 중장년 일자리 플랫폼', category: 'job', date: '250922', link: 'https://mvp-project-06.vercel.app/', tags: ['auto-generated', '일자리', '중장년', 'AI'], images: [ { id: 'mvp-project-06-main', url: '/images/mvp_project_06.jpg', alt: 'AI 중장년 일자리 플랫폼', type: 'screenshot', featured: true } ] },
  { id: 'mvp-project-08', title: '시니어 복지정보 알림', category: 'welfare', date: '250903', link: 'https://mvp-project-08.vercel.app/', tags: ['auto-generated', '시니어', '복지'], images: [ { id: 'mvp-project-08-main', url: '/images/mvp_project_08.jpg', alt: '시니어 복지정보 알림', type: 'screenshot', featured: true } ] },
  { id: 'mvp-project-09', title: '만송시스템 홈페이지(버전1)', category: 'enterprise', date: '251016', link: 'https://mvp-project-09.vercel.app/', tags: ['auto-generated', '기업', '홈페이지'], images: [ { id: 'mvp-project-09-main', url: '/images/mvp_project_09.jpg', alt: '만송시스템 홈페이지 v1', type: 'screenshot', featured: true } ] },
  { id: 'mvp-project-10', title: '약 복용관리 플랫폼', category: 'job', date: '251021', link: 'https://mvp-project-10.vercel.app/', tags: ['auto-generated', '헬스케어', '복약관리', '건강'], images: [ { id: 'mvp-project-10-main', url: '/images/mvp_project_10.jpg', alt: '약 복용관리 플랫폼', type: 'screenshot', featured: true } ] },
  { id: 'mvp-project-12', title: 'AI 간편장부 앱', category: 'education', date: '251003', link: 'https://mvp-project-12.vercel.app/', tags: ['auto-generated', '교육', '회계', '간편장부'], images: [ { id: 'mvp-project-12-main', url: '/images/mvp_project_12.jpg', alt: 'AI 간편장부 앱', type: 'screenshot', featured: true } ] },
  { id: 'mvp-project-14', title: '시군구 RPA 통합 플랫폼 앱', category: 'public', date: '250918', link: 'https://mvp-project-14.vercel.app/', tags: ['auto-generated', '공공', 'RPA'], images: [ { id: 'mvp-project-14-main', url: '/images/mvp_project_14.jpg', alt: 'RPA 통합 플랫폼', type: 'screenshot', featured: true } ] },
  { id: 'mvp-project-16', title: '재가 복지 센터 통합 관리 시스템', category: 'welfare', date: '251005', link: 'https://caring-plus.vercel.app/login', tags: ['auto-generated', '복지', '재가복지', '관리시스템'], images: [ { id: 'mvp-project-16-main', url: '/images/mvp_project_16.jpg', alt: '재가 복지 센터 통합 관리', type: 'screenshot', featured: true } ] },
  { id: 'mvp-project-18', title: '바이칼 재가복지센터 홈페이지', category: 'welfare', date: '250927', link: 'https://mvp-project-18.vercel.app', tags: ['auto-generated', '복지', '홈페이지', '재가복지센터'], images: [ { id: 'mvp-project-18-main', url: '/images/mvp_project_18.jpg', alt: '바이칼 재가복지센터 홈페이지', type: 'screenshot', featured: true } ] },
  { id: 'mvp-project-20', title: '복지 서비스 추천 앱', category: 'welfare', date: '250909', link: 'https://mvp-project-20.vercel.app/', tags: ['auto-generated', '복지', '추천', '서비스'], images: [ { id: 'mvp-project-20-main', url: '/images/mvp_project_20.jpg', alt: '복지 서비스 추천 앱', type: 'screenshot', featured: true } ] },
  { id: 'mvp-project-26', title: '바이칼 리조트 홈페이지 및 예약시스템', category: 'enterprise', date: '250827', link: 'https://mvp-project-26.vercel.app/', tags: ['auto-generated', '기업', '리조트', '예약'], images: [ { id: 'mvp-project-26-main', url: '/images/mvp_project_26.jpg', alt: '바이칼 리조트', type: 'screenshot', featured: true } ] },
  { id: 'mvp-project-28', title: '공공시설 예약 통합 플랫폼', category: 'public', date: '251012', link: 'https://mvp-project-28.vercel.app/', tags: ['auto-generated', '공공', '예약', '플랫폼'], images: [ { id: 'mvp-project-28-main', url: '/images/mvp_project_28.jpg', alt: '공공시설 예약 통합 플랫폼', type: 'screenshot', featured: true } ] },
  { id: 'mvp-project-30', title: '주민 제보·민원 실시간 처리웹앱', category: 'public', date: '251024', link: 'https://mvp-project-30.vercel.app/', tags: ['auto-generated', '공공', '민원', '실시간'], images: [ { id: 'mvp-project-30-main', url: '/images/mvp_project_30.jpg', alt: '주민 제보·민원 실시간 처리웹앱', type: 'screenshot', featured: true } ] },
  { id: 'mvp-project-32', title: '대여서비스플랫폼', category: 'welfare', date: '250916', link: 'https://mvp-project-32.vercel.app/', tags: ['auto-generated', '복지', '대여서비스'], images: [ { id: 'mvp-project-32-main', url: '/images/mvp_project_32.jpg', alt: '대여서비스플랫폼', type: 'screenshot', featured: true } ] },
  { id: 'mxten-project-06', title: '모바일/태블릿 기반 디지털 작업지시서', category: 'industry', date: '251020', link: 'https://mxten-project-06.vercel.app/', tags: ['auto-generated', '산업', '작업지시서', '모바일'], images: [ { id: 'mxten-project-06-main', url: '/images/mxten_project_06.jpg', alt: '디지털 작업지시서', type: 'screenshot', featured: true } ] },
  { id: 'mxten-project-10', title: '슬롯머신형 일본 파칭코 웹', category: 'entertainment', date: '250831', link: 'https://mxten-project-10.vercel.app/', tags: ['auto-generated', '엔터테인먼트', '게임', '파칭코'], images: [ { id: 'mxten-project-10-main', url: '/images/mxten_project_10.jpg', alt: '파칭코 웹', type: 'screenshot', featured: true } ] },
  { id: 'mxten-project-15', title: '바이브 코딩 MVP 소개자료(포트폴리오) 웹앱', category: 'meta', date: '250912', link: 'http://baikalsys.kr/', tags: ['auto-generated', '포트폴리오', 'MVP'], images: [ { id: 'mxten-project-15-main', url: '/images/mxten_project_15.jpg', alt: '바이브 코딩 포트폴리오', type: 'screenshot', featured: true } ] },
  { id: 'mxten-project-20', title: '바이브코딩 MVP 포트폴리오2(상세)', category: 'meta', date: '250904', link: 'https://mxten-project-20.vercel.app/', tags: ['auto-generated', '포트폴리오', 'MVP'], images: [ { id: 'mxten-project-20-main', url: '/images/mxten_project_20.jpg', alt: '바이브코딩 포트폴리오2', type: 'screenshot', featured: true } ] },
  { id: 'mxten-project-30', title: '만송시스템 홈페이지(버전2)', category: 'enterprise', date: '250920', link: 'https://mxten-project-30.vercel.app/', tags: ['auto-generated', '기업', '홈페이지'], images: [ { id: 'mxten-project-30-main', url: '/images/mxten_project_30.jpg', alt: '만송시스템 홈페이지 v2', type: 'screenshot', featured: true } ] },
  { id: 'new-project-02', title: '아이뜨락 어린이집 홈페이지', category: 'welfare', date: '250925', link: 'https://new-project-02.vercel.app/', tags: ['auto-generated', '어린이집', '복지', '홈페이지'], images: [ { id: 'new-project-02-main', url: '/images/new_project_02.jpg', alt: '아이뜨락 어린이집', type: 'screenshot', featured: true } ] },
  { id: 'new-project-04', title: '박신환 행정사 홈페이지', category: 'personal', date: '251001', link: 'https://new-project-04.vercel.app/', tags: ['auto-generated', '개인', '행정사', '홈페이지'], images: [ { id: 'new-project-04-main', url: '/images/new_project_04.jpg', alt: '박신환 행정사 홈페이지', type: 'screenshot', featured: true } ] },
  { id: 'new-project-20', title: '박영진치과 홈페이지', category: 'healthcare', date: '250908', link: 'https://new-project-20.vercel.app/', tags: ['auto-generated', '의료', '치과', '홈페이지'], images: [ { id: 'new-project-20-main', url: '/images/new_project_20.jpg', alt: '박영진치과 홈페이지', type: 'screenshot', featured: true } ] },
  { id: 'new-project-30', title: '선우 이비인후과 홈페이지', category: 'healthcare', date: '251008', link: 'https://new-project-30.vercel.app/', tags: ['auto-generated', '의료', '이비인후과', '홈페이지'], images: [ { id: 'new-project-30-main', url: '/images/new_project_30.jpg', alt: '선우 이비인후과 홈페이지', type: 'screenshot', featured: true } ] },
  { id: 'new-project-40', title: '성혜 정형외과 의원', category: 'healthcare', date: '251011', link: 'https://new-project-40.vercel.app/', tags: ['auto-generated', '의료', '정형외과', '홈페이지'], images: [ { id: 'new-project-40-main', url: '/images/new_project_40.jpg', alt: '성혜 정형외과 의원', type: 'screenshot', featured: true } ] },
  { id: 'new-project-40-ai', title: '성혜 정형외과 의원 (AI 진단)', category: 'healthcare', date: '250826', link: 'https://new-project-40.vercel.app/ai-symptom-check/', tags: ['auto-generated', '의료', '정형외과', 'AI'], images: [ { id: 'new-project-40-ai-main', url: '/images/new_project_40_ai.jpg', alt: '성혜 정형외과 AI 진단', type: 'screenshot', featured: true } ] },
  { id: 'new-project-40-app', title: '성혜 정형외과 의원 (실시간 예약)', category: 'healthcare', date: '251023', link: 'https://new-project-40.vercel.app/appointment/', tags: ['auto-generated', '의료', '정형외과', '예약'], images: [ { id: 'new-project-40-app-main', url: '/images/new_project_40_app.jpg', alt: '성혜 정형외과 실시간 예약', type: 'screenshot', featured: true } ] },
];

// 검색 함수
export const searchProjects = (projects: Project[], query: string): Project[] => {
  const lowercaseQuery = query.toLowerCase();
  return projects.filter(project =>
    project.title.toLowerCase().includes(lowercaseQuery) ||
    (project.description && project.description.toLowerCase().includes(lowercaseQuery)) ||
    (project.tags && project.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
  );
};

// 카테고리별 필터 함수
export const filterByCategory = (projects: Project[], category: string): Project[] => {
  if (!category || category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// 추천 프로젝트 가져오기
export const getFeaturedProjects = (projects: Project[]): Project[] => {
  return projects.filter(project => project.featured);
};

// 관련 프로젝트 가져오기
export const getRelatedProjects = (projects: Project[], currentProject: Project): Project[] => {
  return projects.filter(project =>
    project.id !== currentProject.id &&
    currentProject.relatedProjects && currentProject.relatedProjects.includes(project.id)
  );
};