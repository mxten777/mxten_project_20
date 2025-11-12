import type { CompanyInfo, FAQ } from '../types/common';

export const companyInfo: CompanyInfo = {
  name: '바이칼시스템즈 (Baikal Systems)',
  tagline: 'Innovative MVP Solutions for Digital Transformation',
  description: '바이칼시스템즈는 혁신적인 MVP(Minimum Viable Product) 개발로 기업의 디지털 전환을 가속화하는 전문 개발팀입니다. 40개 이상의 성공적인 MVP 프로젝트를 통해 다양한 산업군의 디지털 혁신을 이끌어왔습니다.',
  mission: '기술을 통해 비즈니스의 가능성을 현실로 만들어, 모든 기업이 디지털 시대에 성공할 수 있도록 돕습니다.',
  vision: '2030년까지 글로벌 MVP 개발의 선도 기업으로 자리잡아, 1,000개 이상의 혁신적인 디지털 솔루션을 세상에 선보입니다.',
  values: [
    '혁신 (Innovation): 끊임없는 기술 탐구와 창의적 사고',
    '품질 (Quality): 완벽을 추구하는 개발 문화',
    '협업 (Collaboration): 클라이언트와의 진정한 파트너십',
    '속도 (Speed): 빠른 개발과 신속한 시장 진입',
    '투명성 (Transparency): 모든 과정의 투명한 공유'
  ],
  founded: '2022',
  location: '서울, 대한민국',
  team: [
    {
      id: 'ceo-kim',
      name: '김혁신',
      role: 'CEO & Lead Developer',
      bio: '15년 경력의 풀스택 개발자로, 스타트업부터 대기업까지 다양한 프로젝트를 성공적으로 이끌어온 전문가입니다.',
      avatar: '/images/team/ceo-kim.jpg',
      skills: ['React', 'Node.js', 'AWS', 'Product Strategy', 'Team Leadership'],
      social: [
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/ceo-kim', icon: 'linkedin' },
        { platform: 'GitHub', url: 'https://github.com/ceo-kim', icon: 'github' }
      ]
    },
    {
      id: 'cto-lee',
      name: '이기술',
      role: 'CTO & AI Specialist',
      bio: 'AI/ML 분야의 전문가로 다수의 AI 프로젝트를 성공적으로 구현하고 있습니다. 서울대학교 컴퓨터공학 박사 출신입니다.',
      avatar: '/images/team/cto-lee.jpg',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Science', 'System Architecture'],
      social: [
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/cto-lee', icon: 'linkedin' },
        { platform: 'GitHub', url: 'https://github.com/cto-lee', icon: 'github' }
      ]
    },
    {
      id: 'designer-park',
      name: '박디자인',
      role: 'Lead UX/UI Designer',
      bio: '사용자 중심의 디자인 철학으로 직관적이고 아름다운 인터페이스를 만들어내는 디자인 전문가입니다.',
      avatar: '/images/team/designer-park.jpg',
      skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping', 'Design Systems'],
      social: [
        { platform: 'Behance', url: 'https://behance.net/designer-park', icon: 'behance' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/in/designer-park', icon: 'linkedin' }
      ]
    }
  ],
  services: [
    {
      id: 'mvp-development',
      name: 'MVP 개발',
      description: '아이디어를 빠르게 검증할 수 있는 최소 기능 제품(MVP)을 개발합니다.',
      icon: '🚀',
      features: [
        '2-8주 내 빠른 개발',
        '핵심 기능 중심 설계',
        '확장 가능한 아키텍처',
        '사용자 피드백 수집 시스템'
      ]
    },
    {
      id: 'full-stack-development',
      name: '풀스택 개발',
      description: '프론트엔드부터 백엔드, 인프라까지 완전한 웹 애플리케이션을 개발합니다.',
      icon: '💻',
      features: [
        '현대적인 기술 스택',
        '반응형 웹 디자인',
        '클라우드 배포 및 관리',
        '성능 최적화'
      ]
    },
    {
      id: 'ai-integration',
      name: 'AI 통합 솔루션',
      description: '최신 AI 기술을 비즈니스에 실용적으로 적용하는 솔루션을 제공합니다.',
      icon: '🤖',
      features: [
        '맞춤형 AI 모델 개발',
        '기존 시스템 AI 통합',
        '자연어 처리 및 컴퓨터 비전',
        '데이터 분석 및 예측'
      ]
    },
    {
      id: 'mobile-development',
      name: '모바일 앱 개발',
      description: 'iOS와 Android를 지원하는 크로스플랫폼 모바일 앱을 개발합니다.',
      icon: '📱',
      features: [
        'React Native 기반 개발',
        '네이티브 성능 최적화',
        'App Store / Play Store 배포',
        '푸시 알림 및 오프라인 기능'
      ]
    },
    {
      id: 'consulting',
      name: '기술 컨설팅',
      description: '디지털 전환 전략 수립부터 기술 선택까지 전문적인 컨설팅을 제공합니다.',
      icon: '💡',
      features: [
        '디지털 전환 로드맵',
        '기술 스택 선정 자문',
        '개발 프로세스 최적화',
        '팀 교육 및 멘토링'
      ]
    }
  ],
  process: [
    {
      id: 'discovery',
      title: '발견 및 분석',
      description: '클라이언트의 비즈니스 목표와 사용자 니즈를 깊이 있게 분석하여 프로젝트의 방향성을 정립합니다.',
      icon: '🔍',
      duration: '1-2주'
    },
    {
      id: 'planning',
      title: '기획 및 설계',
      description: '사용자 여정과 기능 명세를 정의하고, 기술 아키텍처와 디자인 시스템을 설계합니다.',
      icon: '📋',
      duration: '1-2주'
    },
    {
      id: 'design',
      title: '디자인',
      description: 'UX/UI 디자인을 통해 사용자 중심의 직관적이고 매력적인 인터페이스를 만들어냅니다.',
      icon: '🎨',
      duration: '2-3주'
    },
    {
      id: 'development',
      title: '개발',
      description: '애자일 방법론을 적용하여 신속하고 안정적인 개발을 진행하며, 정기적인 피드백을 반영합니다.',
      icon: '⚡',
      duration: '4-8주'
    },
    {
      id: 'testing',
      title: '테스트 및 배포',
      description: '철저한 품질 검증과 성능 테스트를 거쳐 안정적인 서비스를 배포하고 모니터링합니다.',
      icon: '🔧',
      duration: '1-2주'
    },
    {
      id: 'launch',
      title: '런칭 및 지원',
      description: '성공적인 서비스 런칭을 지원하고, 지속적인 유지보수와 개선 사항을 제공합니다.',
      icon: '🚀',
      duration: '지속적'
    }
  ],
  contact: {
    email: 'hello@vibecoding.com',
    phone: '+82-2-1234-5678',
    address: '서울특별시 강남구 테헤란로 123, 바이브타워 15층',
    businessHours: '평일 09:00 - 18:00 (KST)',
    timezone: 'Asia/Seoul'
  },
  social: [
    { platform: 'GitHub', url: 'https://github.com/vibecoding', icon: 'github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/vibecoding', icon: 'linkedin' },
    { platform: 'Twitter', url: 'https://twitter.com/vibecoding', icon: 'twitter' },
    { platform: 'Instagram', url: 'https://instagram.com/vibecoding', icon: 'instagram' }
  ],
  stats: {
    projectsCompleted: 40,
    clientsSatisfied: 10,
    yearsExperience: 1,
    technologiesUsed: 25,
    awardsWon: 5
  }
};

export const faqs: FAQ[] = [
  {
    id: 'mvp-timeline',
    question: 'MVP 개발에는 얼마나 시간이 걸리나요?',
    answer: '프로젝트 복잡도에 따라 다르지만, 일반적으로 2-8주 정도 소요됩니다. 핵심 기능 중심으로 빠른 개발을 진행하여 최대한 신속하게 시장에 출시할 수 있도록 돕습니다.',
    category: '개발 프로세스'
  },
  {
    id: 'tech-stack',
    question: '어떤 기술 스택을 주로 사용하시나요?',
    answer: 'React, Next.js, Node.js, Python, AWS를 주력 기술로 사용하며, 프로젝트 특성에 맞는 최적의 기술을 선택합니다. 최신 기술 트렌드를 지속적으로 학습하고 적용합니다.',
    category: '기술'
  },
  {
    id: 'project-cost',
    question: '프로젝트 비용은 어떻게 책정되나요?',
    answer: '프로젝트 규모, 복잡도, 개발 기간을 종합적으로 고려하여 맞춤형 견적을 제공합니다. 초기 상담을 통해 정확한 비용을 산정해드립니다.',
    category: '비용'
  },
  {
    id: 'maintenance',
    question: '개발 완료 후 유지보수는 어떻게 이루어지나요?',
    answer: '3개월간 무료 유지보수를 제공하며, 이후에는 월 단위 또는 연 단위 유지보수 계약을 통해 지속적인 지원을 받으실 수 있습니다.',
    category: '지원'
  },
  {
    id: 'communication',
    question: '개발 진행 상황은 어떻게 확인할 수 있나요?',
    answer: 'Slack, Notion을 통해 실시간으로 진행 상황을 공유하며, 매주 정기 미팅을 통해 상세한 진행 상황과 피드백을 주고받습니다.',
    category: '커뮤니케이션'
  },
  {
    id: 'ai-integration',
    question: 'AI 기능을 기존 시스템에 통합할 수 있나요?',
    answer: '네, 가능합니다. 기존 시스템 분석 후 최적의 AI 통합 방안을 제시하며, 단계적인 도입을 통해 안정적인 AI 기능 구현을 지원합니다.',
    category: 'AI/기술'
  }
];