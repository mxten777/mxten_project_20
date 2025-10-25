import React from 'react';
import { categories, projects } from '../data/projects';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const totalProjects = projects.length;
  // show a slightly approximate badge when many projects exist (e.g. "35+")
  const badgeCount = totalProjects >= 35 ? `${totalProjects - 1}+` : `${totalProjects}`;

  const goPortfolio = () => navigate('/portfolio');

  return (
    <div className="min-h-screen">
      {/* Hero Section - Premium Glassmorphism */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative container-width section-padding flex items-center min-h-screen">
          <div className="text-center max-w-5xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-6 py-3 mb-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-indigo-700 font-medium shadow-lg">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              {badgeCount}개 성공적인 MVP 프로젝트 완성
            </div>

            {/* Main Title with Advanced Typography */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-tight">
              바이브코딩
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                MVP 포트폴리오
              </div>
            </h1>

            {/* Mobile-Optimized Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto font-light px-4 sm:px-0">
              혁신적인 기술과 창의적 아이디어로 디지털 미래를 만들어가는
              <span className="font-semibold text-indigo-600 block sm:inline"> 프리미엄 개발 파트너</span>
            </p>

            {/* Mobile-First CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
              <button onClick={goPortfolio} className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">포트폴리오 둘러보기</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center justify-center gap-2">
                  프로젝트 문의하기
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust Indicators with Glass Effect */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>100% 프로젝트 성공률</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span>⭐</span>
                <span>4.9/5.0 고객 만족도</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span>🚀</span>
                <span>평균 6주 개발 완료</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 카테고리별 대표 포트폴리오 요약 섹션 */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container-width section-padding">
          <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              카테고리별 대표 <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block sm:inline">포트폴리오 요약</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
              실제 프로젝트 데이터를 기반으로 각 분야별 대표 프로젝트와 개수를 한눈에 확인하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {categories.map(category => {
              // 해당 카테고리의 프로젝트 목록
              const categoryProjects = projects.filter(p => p.category === category.id);
              // 최신 프로젝트 (date 기준 내림차순)
              const sorted = [...categoryProjects].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
              const featured = sorted[0];
              return (
                <div key={category.id} className="group relative">
                  <div className="absolute -inset-1 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" style={{ background: `linear-gradient(90deg, ${category.color}33, #fff0)` }}></div>
                  <div className="relative bg-white rounded-3xl p-8 text-center transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-3xl" style={{ color: category.color }}>
                      {category.icon}
                    </div>
                    <div className="text-2xl font-black text-gray-900 mb-2">{category.name}</div>
                    <div className="text-gray-600 font-semibold text-lg mb-2">{category.description}</div>
                    <div className="text-5xl font-black mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {categoryProjects.length}
                    </div>
                    {featured ? (
                      <div className="mt-4">
                        <div className="text-base font-bold text-indigo-700 mb-1">대표 프로젝트</div>
                        <div className="text-lg font-semibold text-gray-800 mb-1">{featured.title}</div>
                        {featured.date && <div className="text-xs text-gray-400">{featured.date}</div>}
                      </div>
                    ) : (
                      <div className="mt-4 text-gray-400">프로젝트 없음</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Premium Featured Projects */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative container-width section-padding">
          {/* Mobile-First Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <span className="text-indigo-300 font-semibold text-sm sm:text-base">🏆 대표 프로젝트</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
              <span className="block">혁신을 현실로</span>
              <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                만든 프로젝트들
              </div>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              다양한 산업군에서 검증된 우리의 대표적인 MVP 프로젝트들을 만나보세요
            </p>
          </div>
          
          {/* Mobile-First Premium Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
            {/* ERP Project Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-500 group-hover:transform group-hover:scale-105">
                {/* Project Image with Overlay */}
                <div className="relative h-40 sm:h-48 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold">완료</span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-4xl">🏢</span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <span className="text-white text-sm font-semibold">클릭하여 상세보기 →</span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    스마트 ERP 시스템
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    중소기업을 위한 통합 비즈니스 관리 플랫폼으로 생산성 75% 향상 달성
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30">React</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-lg text-sm font-medium border border-green-500/30">Node.js</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/30">PostgreSQL</span>
                  </div>

                  {/* Metrics */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-white font-bold">100%</div>
                      <div className="text-gray-400 text-xs">완성도</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold">4.8★</div>
                      <div className="text-gray-400 text-xs">만족도</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold">5.5개월</div>
                      <div className="text-gray-400 text-xs">개발기간</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Telemedicine Project Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="relative h-48 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold">완료</span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-4xl">🏥</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <span className="text-white text-sm font-semibold">클릭하여 상세보기 →</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">
                    원격진료 플랫폼
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    HIPAA 준수 보안으로 안전한 원격 의료 서비스 제공
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30">React</span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-lg text-sm font-medium border border-yellow-500/30">MongoDB</span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-lg text-sm font-medium border border-orange-500/30">AWS</span>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-white font-bold">100%</div>
                      <div className="text-gray-400 text-xs">완성도</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold">4.9★</div>
                      <div className="text-gray-400 text-xs">만족도</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold">6.5개월</div>
                      <div className="text-gray-400 text-xs">개발기간</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assistant Project Card */}
            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold">완료</span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-4xl">🤖</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <span className="text-white text-sm font-semibold">클릭하여 상세보기 →</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    AI 챗봇 어시스턴트
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    멀티모달 AI로 텍스트, 음성, 이미지를 이해하는 똑똑한 업무 지원
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg text-sm font-medium border border-red-500/30">Python</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30">OpenAI</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-lg text-sm font-medium border border-green-500/30">TensorFlow</span>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-white font-bold">100%</div>
                      <div className="text-gray-400 text-xs">완성도</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold">4.7★</div>
                      <div className="text-gray-400 text-xs">만족도</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold">7.5개월</div>
                      <div className="text-gray-400 text-xs">개발기간</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Premium CTA */}
          <div className="text-center">
            <button className="group relative px-12 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-indigo-500/25 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden" onClick={goPortfolio}>
              <span className="relative z-10 flex items-center gap-3">
                모든 프로젝트 탐험하기
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Premium Technology Stack with 3D Animations */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-200/30 rounded-full blur-xl animate-pulse delay-500"></div>

        <div className="relative container-width section-padding">
          {/* Premium Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg">
              🔧 핵심 기술 스택
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              최신 기술로
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                완벽한 솔루션
              </div>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              검증된 최신 기술 스택으로 안정적이고 확장 가능한 솔루션을 제공합니다
            </p>
          </div>
          
          {/* Mobile-First Premium Tech Grid with 3D Effects */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
            {/* React */}
            <div className="group text-center">
              <div className="relative w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-3 sm:mb-4 perspective-1000">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transform group-hover:rotateY-12 group-hover:-translate-y-2 transition-all duration-500 preserve-3d">
                  <span className="text-2xl sm:text-3xl">⚛️</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl sm:rounded-2xl"></div>
                </div>
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">React</h3>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '95%'}}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">전문도 95%</p>
              </div>
            </div>
            
            {/* Node.js */}
            <div className="group text-center">
              <div className="relative w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-3 sm:mb-4 perspective-1000">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-green-500/50 transform group-hover:rotateY-12 group-hover:-translate-y-2 transition-all duration-500 preserve-3d">
                  <span className="text-2xl sm:text-3xl">🟢</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl sm:rounded-2xl"></div>
                </div>
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Node.js</h3>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{width: '92%'}}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">전문도 92%</p>
              </div>
            </div>
            
            {/* Python */}
            <div className="group text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 perspective-1000">
                <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-indigo-500/50 transform group-hover:rotateY-12 group-hover:-translate-y-2 transition-all duration-500 preserve-3d">
                  <span className="text-3xl">🐍</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">Python</h3>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '91%'}}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">전문도 91%</p>
              </div>
            </div>
            
            {/* AI/ML */}
            <div className="group text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 perspective-1000">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transform group-hover:rotateY-12 group-hover:-translate-y-2 transition-all duration-500 preserve-3d">
                  <span className="text-3xl">🤖</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">AI/ML</h3>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-purple-500 h-1.5 rounded-full" style={{width: '89%'}}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">전문도 89%</p>
              </div>
            </div>
            
            {/* AWS */}
            <div className="group text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 perspective-1000">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-orange-500/50 transform group-hover:rotateY-12 group-hover:-translate-y-2 transition-all duration-500 preserve-3d">
                  <span className="text-3xl">☁️</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">AWS</h3>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-orange-500 h-1.5 rounded-full" style={{width: '88%'}}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">전문도 88%</p>
              </div>
            </div>
            
            {/* Docker */}
            <div className="group text-center">
              <div className="relative w-20 h-20 mx-auto mb-4 perspective-1000">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-cyan-500/50 transform group-hover:rotateY-12 group-hover:-translate-y-2 transition-all duration-500 preserve-3d">
                  <span className="text-3xl">🐳</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">Docker</h3>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-cyan-500 h-1.5 rounded-full" style={{width: '85%'}}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">전문도 85%</p>
              </div>
            </div>
          </div>

          {/* Tech Stats Premium Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-2">최신 기술</h3>
                <p className="text-blue-100 mb-4 leading-relaxed">업계 최신 트렌드를 반영한<br/>모던 기술 스택</p>
                <div className="text-4xl font-black">100%</div>
                <div className="text-blue-200 text-sm">최신성 보장</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-2">검증된 안정성</h3>
                <p className="text-green-100 mb-4 leading-relaxed">엔터프라이즈급 안정성과<br/>보안을 제공</p>
                <div className="text-4xl font-black">99.9%</div>
                <div className="text-green-200 text-sm">가동률 보장</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-2">고성능 최적화</h3>
                <p className="text-purple-100 mb-4 leading-relaxed">최적화된 아키텍처로<br/>빠른 성능 제공</p>
                <div className="text-4xl font-black">&lt;300ms</div>
                <div className="text-purple-200 text-sm">평균 응답시간</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-bounce"></div>
          <div className="absolute top-3/4 left-3/4 w-3 h-3 bg-blue-300/30 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-300/30 rounded-full animate-bounce delay-300"></div>
        </div>

        <div className="relative container-width section-padding text-center">
          {/* Premium Header */}
          <div className="mb-16">
            <div className="inline-block px-8 py-4 mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <span className="text-lg font-semibold flex items-center gap-3">
                🚀 지금 시작하세요
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight px-4 sm:px-0">
              <span className="block">다음 혁신적인</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block sm:inline">
                MVP 프로젝트를
              </span>
              <span className="block">함께 만들어보세요</span>
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-3 sm:mb-4 px-4 sm:px-0">
              아이디어가 있으신가요? 바이브코딩이 최첨단 기술로 현실로 만들어드립니다.
            </p>
            <p className="text-base sm:text-lg text-indigo-300 max-w-3xl mx-auto px-4 sm:px-0">
              💡 무료 컨설팅부터 MVP 출시까지, 전 과정을 함께합니다
            </p>
          </div>

          {/* Mobile-First Premium Action Buttons */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0">
            <button className="group relative px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto sm:min-w-[280px]">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.236-.289l-5.051 1.263 1.263-5.051A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
                프로젝트 문의하기
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </button>
            
            <button onClick={goPortfolio} className="group relative px-12 py-6 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-2xl font-bold text-xl hover:bg-white hover:text-gray-900 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 min-w-[280px]">
              <span className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                포트폴리오 둘러보기
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>

          {/* Premium Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📞</div>
              <h3 className="text-xl font-bold mb-2">즉시 상담</h3>
              <p className="text-gray-300 text-sm mb-3">전화 또는 화상통화로<br/>실시간 프로젝트 상담</p>
              <div className="text-indigo-300 font-semibold">24시간 내 응답</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💬</div>
              <h3 className="text-xl font-bold mb-2">온라인 채팅</h3>
              <p className="text-gray-300 text-sm mb-3">카카오톡, 슬랙으로<br/>편안한 소통</p>
              <div className="text-green-300 font-semibold">즉시 연결 가능</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📧</div>
              <h3 className="text-xl font-bold mb-2">이메일 문의</h3>
              <p className="text-gray-300 text-sm mb-3">상세한 요구사항을<br/>정리해서 전송</p>
              <div className="text-purple-300 font-semibold">12시간 내 답변</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-16 border-t border-white/10">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✓</span>
                <span>100% 맞춤 개발</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✓</span>
                <span>무료 컨설팅 제공</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✓</span>
                <span>6개월 무상 A/S</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-xl">✓</span>
                <span>전담 PM 배정</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;