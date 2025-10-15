import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="container-width section-padding text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            바이브코딩 이야기
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            혁신적인 MVP 개발로 기업의 디지털 전환을 가속화하는 전문 개발팀입니다. 
            28개의 성공적인 MVP 프로젝트를 통해 다양한 산업군의 디지털 혁신을 이끌어왔습니다.
          </p>
        </div>
      </section>

      <div className="container-width section-padding">
        {/* Mission & Vision */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-primary-600">🎯 우리의 미션</h2>
              <p className="text-gray-700 leading-relaxed">
                기술을 통해 비즈니스의 가능성을 현실로 만들어, 모든 기업이 디지털 시대에 성공할 수 있도록 돕습니다. 
                복잡한 기술을 단순하게, 혁신적인 아이디어를 실용적으로 구현하여 클라이언트의 비즈니스 성장을 이끌어냅니다.
              </p>
            </div>
            
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-secondary-600">🚀 우리의 비전</h2>
              <p className="text-gray-700 leading-relaxed">
                2030년까지 글로벌 MVP 개발의 선도 기업으로 자리잡아, 1,000개 이상의 혁신적인 디지털 솔루션을 세상에 선보입니다. 
                기술과 창의성의 결합으로 더 나은 디지털 세상을 만들어갑니다.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">핵심 가치</h2>
            <p className="text-gray-600">바이브코딩이 추구하는 5가지 핵심 가치입니다</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-semibold mb-2">혁신 (Innovation)</h3>
              <p className="text-gray-600 text-sm">끊임없는 기술 탐구와 창의적 사고로 새로운 솔루션을 만들어갑니다.</p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-semibold mb-2">품질 (Quality)</h3>
              <p className="text-gray-600 text-sm">완벽을 추구하는 개발 문화로 최고 품질의 서비스를 제공합니다.</p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold mb-2">협업 (Collaboration)</h3>
              <p className="text-gray-600 text-sm">클라이언트와의 진정한 파트너십을 바탕으로 함께 성장합니다.</p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2">속도 (Speed)</h3>
              <p className="text-gray-600 text-sm">빠른 개발과 신속한 시장 진입으로 비즈니스 기회를 선점합니다.</p>
            </div>
            
            <div className="card text-center md:col-span-2 lg:col-span-1">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold mb-2">투명성 (Transparency)</h3>
              <p className="text-gray-600 text-sm">모든 개발 과정을 투명하게 공유하며 신뢰를 쌓아갑니다.</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">팀 소개</h2>
            <p className="text-gray-600">경험과 열정을 바탕으로 최고의 서비스를 제공하는 전문가들입니다</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">김혁신</h3>
              <p className="text-primary-600 font-medium mb-3">CEO & Lead Developer</p>
              <p className="text-gray-600 text-sm mb-4">
                15년 경력의 풀스택 개발자로, 스타트업부터 대기업까지 다양한 프로젝트를 성공적으로 이끌어온 전문가입니다.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Node.js</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">AWS</span>
              </div>
            </div>
            
            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👨‍🔬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">이기술</h3>
              <p className="text-primary-600 font-medium mb-3">CTO & AI Specialist</p>
              <p className="text-gray-600 text-sm mb-4">
                AI/ML 분야의 전문가로 다수의 AI 프로젝트를 성공적으로 구현하고 있습니다. 서울대학교 컴퓨터공학 박사 출신입니다.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Python</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">TensorFlow</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">PyTorch</span>
              </div>
            </div>
            
            <div className="card text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👩‍🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">박디자인</h3>
              <p className="text-primary-600 font-medium mb-3">Lead UX/UI Designer</p>
              <p className="text-gray-600 text-sm mb-4">
                사용자 중심의 디자인 철학으로 직관적이고 아름다운 인터페이스를 만들어내는 디자인 전문가입니다.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">Figma</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Adobe XD</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Prototyping</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-gray-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">서비스</h2>
            <p className="text-gray-600">비즈니스 목표 달성을 위한 완전한 디지털 솔루션을 제공합니다</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">MVP 개발</h3>
              <p className="text-gray-600 mb-4">
                아이디어를 빠르게 검증할 수 있는 최소 기능 제품(MVP)을 개발합니다.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 2-8주 내 빠른 개발</li>
                <li>• 핵심 기능 중심 설계</li>
                <li>• 확장 가능한 아키텍처</li>
                <li>• 사용자 피드백 수집 시스템</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3">풀스택 개발</h3>
              <p className="text-gray-600 mb-4">
                프론트엔드부터 백엔드, 인프라까지 완전한 웹 애플리케이션을 개발합니다.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 현대적인 기술 스택</li>
                <li>• 반응형 웹 디자인</li>
                <li>• 클라우드 배포 및 관리</li>
                <li>• 성능 최적화</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">AI 통합 솔루션</h3>
              <p className="text-gray-600 mb-4">
                최신 AI 기술을 비즈니스에 실용적으로 적용하는 솔루션을 제공합니다.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 맞춤형 AI 모델 개발</li>
                <li>• 기존 시스템 AI 통합</li>
                <li>• 자연어 처리 및 컴퓨터 비전</li>
                <li>• 데이터 분석 및 예측</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">모바일 앱 개발</h3>
              <p className="text-gray-600 mb-4">
                iOS와 Android를 지원하는 크로스플랫폼 모바일 앱을 개발합니다.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• React Native 기반 개발</li>
                <li>• 네이티브 성능 최적화</li>
                <li>• App Store / Play Store 배포</li>
                <li>• 푸시 알림 및 오프라인 기능</li>
              </ul>
            </div>
            
            <div className="card md:col-span-2 lg:col-span-1">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">기술 컨설팅</h3>
              <p className="text-gray-600 mb-4">
                디지털 전환 전략 수립부터 기술 선택까지 전문적인 컨설팅을 제공합니다.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 디지털 전환 로드맵</li>
                <li>• 기술 스택 선정 자문</li>
                <li>• 개발 프로세스 최적화</li>
                <li>• 팀 교육 및 멘토링</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">개발 프로세스</h2>
            <p className="text-gray-600">체계적이고 투명한 프로세스로 프로젝트를 진행합니다</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { icon: '🔍', title: '발견 및 분석', duration: '1-2주', desc: '클라이언트의 비즈니스 목표와 사용자 니즈를 깊이 있게 분석하여 프로젝트의 방향성을 정립합니다.' },
                { icon: '📋', title: '기획 및 설계', duration: '1-2주', desc: '사용자 여정과 기능 명세를 정의하고, 기술 아키텍처와 디자인 시스템을 설계합니다.' },
                { icon: '🎨', title: '디자인', duration: '2-3주', desc: 'UX/UI 디자인을 통해 사용자 중심의 직관적이고 매력적인 인터페이스를 만들어냅니다.' },
                { icon: '⚡', title: '개발', duration: '4-8주', desc: '애자일 방법론을 적용하여 신속하고 안정적인 개발을 진행하며, 정기적인 피드백을 반영합니다.' },
                { icon: '🔧', title: '테스트 및 배포', duration: '1-2주', desc: '철저한 품질 검증과 성능 테스트를 거쳐 안정적인 서비스를 배포하고 모니터링합니다.' },
                { icon: '🚀', title: '런칭 및 지원', duration: '지속적', desc: '성공적인 서비스 런칭을 지원하고, 지속적인 유지보수와 개선 사항을 제공합니다.' }
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">{step.duration}</span>
                    </div>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary-600 text-white -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">숫자로 보는 바이브코딩</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold mb-2">28</div>
              <div className="text-primary-100">완성 프로젝트</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24</div>
              <div className="text-primary-100">만족한 고객</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-primary-100">년 경험</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25</div>
              <div className="text-primary-100">기술 스택</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-primary-100">수상 경력</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;