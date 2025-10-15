import type { Project, Technology, CategoryInfo } from '../types/project';

export const technologies: Technology[] = [
  // Frontend
  { name: 'React', icon: '⚛️', category: 'frontend', color: '#61DAFB' },
  { name: 'Next.js', icon: '▲', category: 'frontend', color: '#000000' },
  { name: 'Vue.js', icon: '💚', category: 'frontend', color: '#4FC08D' },
  { name: 'TypeScript', icon: '📘', category: 'frontend', color: '#3178C6' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'frontend', color: '#06B6D4' },
  { name: 'SCSS', icon: '💅', category: 'frontend', color: '#CF649A' },
  
  // Backend
  { name: 'Node.js', icon: '🟢', category: 'backend', color: '#339933' },
  { name: 'Express', icon: '🚂', category: 'backend', color: '#000000' },
  { name: 'Python', icon: '🐍', category: 'backend', color: '#3776AB' },
  { name: 'Django', icon: '🎯', category: 'backend', color: '#092E20' },
  { name: 'FastAPI', icon: '⚡', category: 'backend', color: '#009688' },
  { name: 'Spring Boot', icon: '🍃', category: 'backend', color: '#6DB33F' },
  
  // Database
  { name: 'PostgreSQL', icon: '🐘', category: 'database', color: '#336791' },
  { name: 'MongoDB', icon: '🍃', category: 'database', color: '#47A248' },
  { name: 'Redis', icon: '🔴', category: 'database', color: '#DC382D' },
  { name: 'MySQL', icon: '🐬', category: 'database', color: '#4479A1' },
  
  // Cloud & DevOps
  { name: 'AWS', icon: '☁️', category: 'cloud', color: '#FF9900' },
  { name: 'Docker', icon: '🐳', category: 'devops', color: '#2496ED' },
  { name: 'Kubernetes', icon: '⚓', category: 'devops', color: '#326CE5' },
  { name: 'Vercel', icon: '▲', category: 'cloud', color: '#000000' },
  
  // AI/ML
  { name: 'TensorFlow', icon: '🧠', category: 'ai-ml', color: '#FF6F00' },
  { name: 'PyTorch', icon: '🔥', category: 'ai-ml', color: '#EE4C2C' },
  { name: 'OpenAI', icon: '🤖', category: 'ai-ml', color: '#412991' },
  
  // Mobile
  { name: 'React Native', icon: '📱', category: 'mobile', color: '#61DAFB' },
  { name: 'Flutter', icon: '🦋', category: 'mobile', color: '#02569B' },
  
  // Design
  { name: 'Figma', icon: '🎨', category: 'design', color: '#F24E1E' },
  { name: 'Adobe XD', icon: '🎯', category: 'design', color: '#FF61F6' },
];

export const categories: CategoryInfo[] = [
  {
    id: 'enterprise',
    name: '기업/산업',
    description: '기업용 솔루션과 산업별 특화 시스템',
    icon: '🏢',
    color: '#3B82F6',
    count: 8
  },
  {
    id: 'healthcare',
    name: '의료/헬스케어',
    description: '의료진과 환자를 위한 디지털 헬스케어 솔루션',
    icon: '🏥',
    color: '#10B981',
    count: 5
  },
  {
    id: 'education',
    name: '교육',
    description: '학습자와 교육자를 위한 혁신적인 교육 플랫폼',
    icon: '📚',
    color: '#8B5CF6',
    count: 4
  },
  {
    id: 'ai-data',
    name: 'AI/데이터',
    description: '인공지능과 데이터 분석을 활용한 스마트 솔루션',
    icon: '🤖',
    color: '#F59E0B',
    count: 6
  },
  {
    id: 'public',
    name: '공공/사회',
    description: '사회적 가치를 창출하는 공공 서비스 플랫폼',
    icon: '🏛️',
    color: '#EF4444',
    count: 3
  },
  {
    id: 'gaming',
    name: '게임/엔터테인먼트',
    description: '재미있고 몰입감 있는 게임과 엔터테인먼트 콘텐츠',
    icon: '🎮',
    color: '#EC4899',
    count: 2
  }
];

export const mockProjects: Project[] = [
  // 기업/산업 (8개)
  {
    id: 'erp-system',
    title: '스마트 ERP 시스템',
    subtitle: '중소기업을 위한 통합 비즈니스 관리 플랫폼',
    description: '재고관리, 회계, HR을 하나로 통합한 클라우드 기반 ERP 솔루션',
    longDescription: '중소기업의 복잡한 비즈니스 프로세스를 단순화하고 효율성을 극대화하기 위해 개발된 통합 ERP 시스템입니다. 실시간 대시보드, 자동화된 워크플로우, 그리고 직관적인 사용자 인터페이스를 통해 기업의 생산성을 혁신적으로 향상시킵니다.',
    category: 'enterprise',
    status: 'completed',
    difficulty: 'advanced',
    featured: true,
    technologies: [
      technologies.find(t => t.name === 'React')!,
      technologies.find(t => t.name === 'Node.js')!,
      technologies.find(t => t.name === 'PostgreSQL')!,
      technologies.find(t => t.name === 'AWS')!,
    ],
    images: [
      {
        id: 'erp-1',
        url: '/images/projects/erp-dashboard.jpg',
        alt: 'ERP 대시보드 스크린샷',
        caption: '실시간 비즈니스 인사이트를 제공하는 메인 대시보드',
        type: 'screenshot',
        featured: true
      }
    ],
    links: [
      { type: 'demo', url: 'https://erp-demo.vibecoding.com', label: '라이브 데모 보기' },
      { type: 'github', url: 'https://github.com/vibecoding/smart-erp', label: '소스 코드' }
    ],
    timeline: {
      start: '2024-01-15',
      end: '2024-06-30',
      duration: '5.5개월'
    },
    metrics: {
      completionRate: 100,
      performanceScore: 95,
      userFeedback: 4.8,
      codeQuality: 92
    },
    challenges: [
      {
        title: '대용량 데이터 처리 최적화',
        description: '수십만 건의 거래 데이터를 실시간으로 처리해야 하는 성능 이슈',
        solution: 'Redis 캐싱과 데이터베이스 인덱싱 최적화, 페이지네이션 구현',
        impact: '조회 속도 75% 향상, 사용자 만족도 대폭 증가'
      }
    ],
    learnings: [
      '대규모 엔터프라이즈 애플리케이션의 아키텍처 설계 경험',
      '복잡한 비즈니스 로직의 모듈화 및 테스트 방법론 습득',
      '사용자 중심의 UX/UI 설계의 중요성 인식'
    ],
    tags: ['ERP', '비즈니스', '클라우드', '대시보드', '자동화'],
    relatedProjects: ['inventory-manager', 'hr-platform'],
    createdAt: '2024-01-15',
    updatedAt: '2024-06-30'
  },
  
  {
    id: 'inventory-manager',
    title: '스마트 재고 관리 시스템',
    subtitle: 'AI 기반 재고 예측 및 자동 발주 시스템',
    description: '머신러닝을 활용한 재고 최적화와 자동 발주 기능이 포함된 차세대 재고관리 솔루션',
    longDescription: '전통적인 재고관리의 한계를 뛰어넘어 AI가 판매 패턴을 학습하고 최적의 재고 수준을 예측합니다. 바코드 스캐닝, 실시간 알림, 자동 발주 시스템을 통해 재고 관리 업무를 완전히 자동화했습니다.',
    category: 'enterprise',
    status: 'completed',
    difficulty: 'advanced',
    featured: true,
    technologies: [
      technologies.find(t => t.name === 'Next.js')!,
      technologies.find(t => t.name === 'Python')!,
      technologies.find(t => t.name === 'TensorFlow')!,
      technologies.find(t => t.name === 'PostgreSQL')!,
    ],
    images: [
      {
        id: 'inv-1',
        url: '/images/projects/inventory-dashboard.jpg',
        alt: '재고 관리 대시보드',
        caption: 'AI 예측 분석이 포함된 재고 현황 대시보드',
        type: 'screenshot',
        featured: true
      }
    ],
    links: [
      { type: 'demo', url: 'https://inventory-demo.vibecoding.com', label: '라이브 데모' }
    ],
    timeline: {
      start: '2024-03-01',
      end: '2024-08-15',
      duration: '5.5개월'
    },
    metrics: {
      completionRate: 100,
      performanceScore: 88,
      userFeedback: 4.6,
      codeQuality: 90
    },
    challenges: [
      {
        title: 'AI 예측 모델의 정확도 향상',
        description: '다양한 외부 요인을 고려한 재고 수요 예측의 어려움',
        solution: '다중 변수 분석과 앙상블 학습 모델 적용',
        impact: '예측 정확도 85%로 향상, 과재고 30% 감소'
      }
    ],
    learnings: [
      '머신러닝 모델의 비즈니스 적용 경험',
      '실시간 데이터 처리 및 알림 시스템 구현',
      '바코드/QR코드 스캐닝 기술 활용'
    ],
    tags: ['AI', '재고관리', '예측분석', '자동화', '머신러닝'],
    relatedProjects: ['erp-system', 'pos-system'],
    createdAt: '2024-03-01',
    updatedAt: '2024-08-15'
  },

  {
    id: 'crm-platform',
    title: '차세대 CRM 플랫폼',
    subtitle: '고객 관계 관리의 새로운 패러다임',
    description: 'AI 기반 고객 분석과 개인화된 마케팅 자동화가 결합된 통합 CRM 솔루션',
    longDescription: '고객의 모든 터치포인트를 통합 관리하며, AI가 고객 행동을 분석하여 최적의 마케팅 타이밍과 콘텐츠를 제안합니다. 세일즈 파이프라인 관리부터 고객 만족도 분석까지 원스톱으로 제공합니다.',
    category: 'enterprise',
    status: 'completed',
    difficulty: 'expert',
    featured: false,
    technologies: [
      technologies.find(t => t.name === 'Vue.js')!,
      technologies.find(t => t.name === 'Django')!,
      technologies.find(t => t.name === 'PostgreSQL')!,
      technologies.find(t => t.name === 'Redis')!,
    ],
    images: [
      {
        id: 'crm-1',
        url: '/images/projects/crm-dashboard.jpg',
        alt: 'CRM 대시보드',
        caption: '360도 고객 뷰를 제공하는 CRM 대시보드',
        type: 'screenshot',
        featured: true
      }
    ],
    links: [
      { type: 'demo', url: 'https://crm-demo.vibecoding.com', label: '라이브 데모' }
    ],
    timeline: {
      start: '2024-02-01',
      end: '2024-09-30',
      duration: '8개월'
    },
    metrics: {
      completionRate: 100,
      performanceScore: 92,
      userFeedback: 4.7,
      codeQuality: 94
    },
    challenges: [
      {
        title: '다양한 데이터 소스 통합',
        description: '이메일, 전화, 웹사이트, 소셜미디어 등 다양한 채널의 고객 데이터 통합',
        solution: 'RESTful API와 webhook을 활용한 실시간 데이터 동기화 시스템 구축',
        impact: '데이터 정합성 99.5% 달성, 고객 분석 정확도 향상'
      }
    ],
    learnings: [
      '복잡한 데이터 통합 아키텍처 설계 경험',
      '실시간 알림 및 워크플로우 자동화',
      '고객 여정 분석 및 개인화 알고리즘 구현'
    ],
    tags: ['CRM', '고객관리', '마케팅자동화', '데이터통합', '분석'],
    relatedProjects: ['marketing-automation', 'analytics-platform'],
    createdAt: '2024-02-01',
    updatedAt: '2024-09-30'
  },

  // 의료/헬스케어 (5개)
  {
    id: 'telemedicine-app',
    title: '원격진료 플랫폼',
    subtitle: '언제 어디서나 안전한 의료 서비스',
    description: '의사와 환자를 연결하는 보안 강화된 원격진료 및 건강관리 통합 플랫폼',
    longDescription: '코로나19 이후 급증한 원격진료 수요에 대응하여 개발된 종합 의료 플랫폼입니다. 화상진료, 처방전 발급, 건강 데이터 모니터링, 의료진 협진 시스템을 모두 포함하여 완전한 디지털 의료 경험을 제공합니다.',
    category: 'healthcare',
    status: 'completed',
    difficulty: 'expert',
    featured: true,
    technologies: [
      technologies.find(t => t.name === 'React')!,
      technologies.find(t => t.name === 'Node.js')!,
      technologies.find(t => t.name === 'MongoDB')!,
      technologies.find(t => t.name === 'AWS')!,
    ],
    images: [
      {
        id: 'tele-1',
        url: '/images/projects/telemedicine-consult.jpg',
        alt: '원격진료 화면',
        caption: '실시간 화상진료 인터페이스',
        type: 'screenshot',
        featured: true
      }
    ],
    links: [
      { type: 'demo', url: 'https://telehealth-demo.vibecoding.com', label: '데모 체험' }
    ],
    timeline: {
      start: '2024-01-10',
      end: '2024-07-20',
      duration: '6.5개월'
    },
    metrics: {
      completionRate: 100,
      performanceScore: 96,
      userFeedback: 4.9,
      codeQuality: 95
    },
    challenges: [
      {
        title: 'HIPAA 준수 보안 시스템',
        description: '의료 데이터 보호를 위한 엄격한 보안 요구사항 충족',
        solution: 'End-to-end 암호화, 접근 권한 관리, 감사 로그 시스템 구현',
        impact: 'HIPAA 완전 준수, 의료기관 신뢰도 확보'
      }
    ],
    learnings: [
      '의료 데이터 보안 및 규정 준수 경험',
      '실시간 화상통화 기술 구현',
      '의료 워크플로우 디지털화 노하우'
    ],
    tags: ['원격진료', '헬스케어', '보안', '화상통화', 'HIPAA'],
    relatedProjects: ['health-monitor', 'medical-records'],
    createdAt: '2024-01-10',
    updatedAt: '2024-07-20'
  },

  {
    id: 'health-monitor',
    title: '개인 건강 모니터링 앱',
    subtitle: 'AI가 분석하는 나만의 건강 비서',
    description: '웨어러블 기기와 연동하여 실시간 건강 데이터를 분석하고 개인화된 건강 관리 솔루션을 제공',
    longDescription: '스마트워치, 혈압계, 혈당측정기 등 다양한 IoT 헬스케어 기기와 연동하여 사용자의 건강 상태를 실시간으로 모니터링합니다. AI가 패턴을 분석하여 건강 위험 요소를 사전에 예측하고 맞춤형 건강 관리 계획을 제시합니다.',
    category: 'healthcare',
    status: 'completed',
    difficulty: 'advanced',
    featured: true,
    technologies: [
      technologies.find(t => t.name === 'React Native')!,
      technologies.find(t => t.name === 'Python')!,
      technologies.find(t => t.name === 'TensorFlow')!,
      technologies.find(t => t.name === 'MongoDB')!,
    ],
    images: [
      {
        id: 'health-1',
        url: '/images/projects/health-dashboard.jpg',
        alt: '건강 모니터링 대시보드',
        caption: '실시간 건강 지표 추적 및 분석 화면',
        type: 'screenshot',
        featured: true
      }
    ],
    links: [
      { type: 'demo', url: 'https://health-demo.vibecoding.com', label: '앱 체험하기' }
    ],
    timeline: {
      start: '2024-04-01',
      end: '2024-10-15',
      duration: '6.5개월'
    },
    metrics: {
      completionRate: 100,
      performanceScore: 89,
      userFeedback: 4.6,
      codeQuality: 88
    },
    challenges: [
      {
        title: 'IoT 기기 통합 및 데이터 정규화',
        description: '다양한 제조사의 헬스케어 기기들의 서로 다른 데이터 형식 통합',
        solution: '표준 HL7 FHIR 프로토콜 적용 및 데이터 변환 레이어 구현',
        impact: '20개 이상 기기 호환성 확보, 데이터 정확도 95% 달성'
      }
    ],
    learnings: [
      'IoT 기기 통합 및 데이터 표준화 경험',
      '헬스케어 데이터 분석 및 머신러닝 적용',
      '모바일 앱의 배터리 최적화 기법'
    ],
    tags: ['건강모니터링', 'IoT', 'AI분석', '웨어러블', '예방의학'],
    relatedProjects: ['telemedicine-app', 'fitness-tracker'],
    createdAt: '2024-04-01',
    updatedAt: '2024-10-15'
  },

  // 교육 (4개)
  {
    id: 'lms-platform',
    title: '차세대 학습관리시스템',
    subtitle: '개인화된 학습 경험의 혁신',
    description: 'AI 기반 개별 맞춤 학습과 실시간 협업이 가능한 통합 교육 플랫폼',
    longDescription: '전통적인 LMS의 한계를 뛰어넘어 AI가 학습자의 성향과 진도를 분석하여 최적의 학습 경로를 제시합니다. 실시간 화상 수업, 협업 프로젝트, 게이미피케이션 요소를 통해 학습 몰입도를 극대화합니다.',
    category: 'education',
    status: 'completed',
    difficulty: 'advanced',
    featured: true,
    technologies: [
      technologies.find(t => t.name === 'Next.js')!,
      technologies.find(t => t.name === 'FastAPI')!,
      technologies.find(t => t.name === 'PostgreSQL')!,
      technologies.find(t => t.name === 'Redis')!,
    ],
    images: [
      {
        id: 'lms-1',
        url: '/images/projects/lms-classroom.jpg',
        alt: '온라인 교실 화면',
        caption: '실시간 상호작용이 가능한 가상 교실',
        type: 'screenshot',
        featured: true
      }
    ],
    links: [
      { type: 'demo', url: 'https://lms-demo.vibecoding.com', label: '학습 체험하기' }
    ],
    timeline: {
      start: '2024-02-15',
      end: '2024-09-10',
      duration: '7개월'
    },
    metrics: {
      completionRate: 100,
      performanceScore: 91,
      userFeedback: 4.8,
      codeQuality: 93
    },
    challenges: [
      {
        title: '대규모 동시 접속 처리',
        description: '수천 명의 학습자가 동시에 화상 수업에 참여할 때의 서버 부하 문제',
        solution: '마이크로서비스 아키텍처와 CDN을 활용한 로드 밸런싱 구현',
        impact: '동시 접속자 5,000명 처리 가능, 서버 안정성 99.9% 달성'
      }
    ],
    learnings: [
      '대규모 실시간 스트리밍 서비스 구현 경험',
      '교육 콘텐츠 관리 및 진도 추적 시스템',
      'WebRTC 기반 화상회의 솔루션 개발'
    ],
    tags: ['LMS', '온라인교육', 'AI개인화', '실시간수업', '협업학습'],
    relatedProjects: ['quiz-platform', 'coding-bootcamp'],
    createdAt: '2024-02-15',
    updatedAt: '2024-09-10'
  },

  // AI/데이터 (6개)
  {
    id: 'ai-chatbot',
    title: '멀티모달 AI 어시스턴트',
    subtitle: '텍스트, 음성, 이미지를 이해하는 똑똑한 AI',
    description: '자연어 처리와 컴퓨터 비전을 결합한 차세대 AI 챗봇 및 업무 자동화 플랫폼',
    longDescription: 'GPT-4와 자체 개발한 도메인별 특화 모델을 결합하여 텍스트, 음성, 이미지를 모두 이해할 수 있는 멀티모달 AI 어시스턴트입니다. 고객서비스부터 업무 자동화까지 다양한 비즈니스 시나리오에 적용 가능합니다.',
    category: 'ai-data',
    status: 'completed',
    difficulty: 'expert',
    featured: true,
    technologies: [
      technologies.find(t => t.name === 'React')!,
      technologies.find(t => t.name === 'Python')!,
      technologies.find(t => t.name === 'OpenAI')!,
      technologies.find(t => t.name === 'MongoDB')!,
    ],
    images: [
      {
        id: 'ai-1',
        url: '/images/projects/ai-chat-interface.jpg',
        alt: 'AI 챗봇 인터페이스',
        caption: '멀티모달 대화가 가능한 AI 어시스턴트',
        type: 'screenshot',
        featured: true
      }
    ],
    links: [
      { type: 'demo', url: 'https://ai-demo.vibecoding.com', label: 'AI와 대화하기' }
    ],
    timeline: {
      start: '2024-03-20',
      end: '2024-11-05',
      duration: '7.5개월'
    },
    metrics: {
      completionRate: 100,
      performanceScore: 94,
      userFeedback: 4.7,
      codeQuality: 91
    },
    challenges: [
      {
        title: 'AI 모델 응답 속도 최적화',
        description: '실시간 대화에 필요한 빠른 응답 시간과 정확도 간의 균형',
        solution: '모델 경량화와 캐싱 전략, 스트리밍 응답 구현',
        impact: '응답 시간 2초 이내로 단축, 정확도 92% 유지'
      }
    ],
    learnings: [
      'Large Language Model 통합 및 최적화',
      '멀티모달 AI 모델 구현 경험',
      '실시간 AI 서비스의 인프라 설계'
    ],
    tags: ['AI', '챗봇', '자연어처리', '멀티모달', 'GPT'],
    relatedProjects: ['analytics-platform', 'voice-assistant'],
    createdAt: '2024-03-20',
    updatedAt: '2024-11-05'
  },

  // 공공/사회 (3개)
  {
    id: 'citizen-portal',
    title: '시민참여 포털',
    subtitle: '디지털 민주주의의 새로운 장',
    description: '시민과 정부가 소통하고 협력하는 투명하고 효율적인 디지털 플랫폼',
    longDescription: '시민들이 정부 정책에 직접 참여하고 의견을 제시할 수 있는 디지털 민주주의 플랫폼입니다. 실시간 여론조사, 정책 제안, 예산 참여, 공공서비스 신청 등을 통합하여 시민 중심의 투명한 행정을 구현합니다.',
    category: 'public',
    status: 'completed',
    difficulty: 'advanced',
    featured: false,
    technologies: [
      technologies.find(t => t.name === 'Vue.js')!,
      technologies.find(t => t.name === 'Spring Boot')!,
      technologies.find(t => t.name === 'PostgreSQL')!,
      technologies.find(t => t.name === 'AWS')!,
    ],
    images: [
      {
        id: 'citizen-1',
        url: '/images/projects/citizen-portal.jpg',
        alt: '시민참여 포털 메인화면',
        caption: '시민과 정부를 연결하는 참여형 플랫폼',
        type: 'screenshot',
        featured: true
      }
    ],
    links: [
      { type: 'demo', url: 'https://citizen-demo.vibecoding.com', label: '포털 체험하기' }
    ],
    timeline: {
      start: '2024-05-01',
      end: '2024-12-20',
      duration: '7.5개월'
    },
    metrics: {
      completionRate: 95,
      performanceScore: 87,
      userFeedback: 4.4,
      codeQuality: 89
    },
    challenges: [
      {
        title: '대규모 트래픽과 보안 요구사항',
        description: '수십만 시민이 동시에 사용하는 공공서비스의 안정성과 보안 확보',
        solution: 'CDN과 로드밸런서 구성, 다중 인증 시스템 및 DDoS 방어 시스템 구축',
        impact: '일일 50만 PV 처리 가능, 보안 등급 AA 획득'
      }
    ],
    learnings: [
      '공공서비스 개발의 특수성 및 규정 준수',
      '대규모 사용자 대상 UX/UI 설계',
      '정부 시스템과의 연동 및 데이터 표준화'
    ],
    tags: ['시민참여', '전자정부', '디지털민주주의', '공공서비스', '투명성'],
    relatedProjects: ['voting-system', 'public-data'],
    createdAt: '2024-05-01',
    updatedAt: '2024-12-20'
  },

  // 게임/엔터테인먼트 (2개)
  {
    id: 'puzzle-game',
    title: '브레인 퍼즐 챌린지',
    subtitle: '두뇌 훈련을 위한 인터랙티브 퍼즐 게임',
    description: '인지능력 향상을 목표로 한 과학적 근거 기반의 브레인 트레이닝 퍼즐 게임',
    longDescription: '신경과학 연구를 바탕으로 설계된 다양한 퍼즐과 미니게임을 통해 기억력, 집중력, 논리적 사고력을 체계적으로 훈련할 수 있습니다. 개인별 진단과 맞춤형 훈련 프로그램을 제공하여 효과적인 두뇌 훈련을 돕습니다.',
    category: 'gaming',
    status: 'completed',
    difficulty: 'intermediate',
    featured: false,
    technologies: [
      technologies.find(t => t.name === 'React')!,
      technologies.find(t => t.name === 'Node.js')!,
      technologies.find(t => t.name === 'MongoDB')!,
    ],
    images: [
      {
        id: 'puzzle-1',
        url: '/images/projects/puzzle-game.jpg',
        alt: '퍼즐 게임 플레이 화면',
        caption: '다양한 두뇌 훈련 퍼즐 게임들',
        type: 'screenshot',
        featured: true
      }
    ],
    links: [
      { type: 'demo', url: 'https://puzzle-demo.vibecoding.com', label: '게임 플레이하기' }
    ],
    timeline: {
      start: '2024-06-01',
      end: '2024-10-30',
      duration: '5개월'
    },
    metrics: {
      completionRate: 100,
      performanceScore: 85,
      userFeedback: 4.3,
      codeQuality: 87
    },
    challenges: [
      {
        title: '게임 중독성과 교육 효과의 균형',
        description: '재미있으면서도 교육적 가치가 있는 게임 메커니즘 설계의 어려움',
        solution: '게이미피케이션 이론 적용과 전문가 자문을 통한 균형점 찾기',
        impact: '사용자 재방문율 70% 달성, 인지능력 향상 효과 검증'
      }
    ],
    learnings: [
      '게임 메커니즘과 사용자 경험 설계',
      'Canvas API를 활용한 인터랙티브 애니메이션',
      '게이미피케이션과 교육 효과의 결합 방법'
    ],
    tags: ['브레인게임', '퍼즐', '교육게임', '인지훈련', '게이미피케이션'],
    relatedProjects: ['memory-trainer', 'kids-learning'],
    createdAt: '2024-06-01',
    updatedAt: '2024-10-30'
  }

  // 추가 프로젝트들... (총 28개까지)
];

// 간단한 프로젝트 검색 함수
export const searchProjects = (projects: Project[], query: string): Project[] => {
  const lowercaseQuery = query.toLowerCase();
  return projects.filter(project => 
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    project.technologies.some(tech => tech.name.toLowerCase().includes(lowercaseQuery))
  );
};

// 카테고리별 프로젝트 필터링
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
    currentProject.relatedProjects.includes(project.id)
  );
};