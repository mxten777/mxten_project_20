import React from 'react';

const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen py-6 sm:py-8">
      <div className="container-width section-padding">
        {/* Mobile-Optimized Header */}
        <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            포트폴리오
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            28개의 혁신적인 MVP 프로젝트로 다양한 산업의 디지털 전환을 이끌어왔습니다
          </p>
        </div>

        {/* Mobile-First Filters */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-6 px-4 sm:px-0">
            <button className="px-4 sm:px-6 py-2 bg-primary-600 text-white rounded-full font-medium text-sm sm:text-base">
              전체
            </button>
            <button className="px-4 sm:px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base">
              기업/산업
            </button>
            <button className="px-4 sm:px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base">
              의료/헬스케어
            </button>
            <button className="px-4 sm:px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base">
              교육
            </button>
            <button className="px-4 sm:px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base">
              AI/데이터
            </button>
            <button className="px-4 sm:px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base">
              공공/사회
            </button>
            <button className="px-4 sm:px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base">
              게임/엔터테인먼트
            </button>
          </div>
        </div>

        {/* Mobile-First Search and Sort */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-0">
          <div className="flex-1">
            <input
              type="text"
              placeholder="프로젝트 검색..."
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
            />
          </div>
          <select className="px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base w-full sm:w-auto">
            <option>최신순</option>
            <option>인기순</option>
            <option>완성도순</option>
            <option>이름순</option>
          </select>
        </div>

        {/* Mobile-First Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 px-4 sm:px-0">
          {/* Project Card 1 */}
          <div className="card hover:shadow-lg transition-shadow group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-100 to-blue-200"></div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">완료</span>
              </div>
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">추천</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🏢</span>
              <span className="text-sm text-gray-500">기업/산업</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
              스마트 ERP 시스템
            </h3>
            
            <p className="text-gray-600 mb-4 line-clamp-2">
              중소기업을 위한 통합 비즈니스 관리 플랫폼으로 재고관리, 회계, HR을 하나로 통합한 클라우드 기반 ERP 솔루션
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Node.js</span>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">PostgreSQL</span>
              <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">AWS</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>완성도 100%</span>
                <span>⭐ 4.8</span>
              </div>
              <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                자세히 보기 →
              </button>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="card hover:shadow-lg transition-shadow group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200"></div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">완료</span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">추천</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🏥</span>
              <span className="text-sm text-gray-500">의료/헬스케어</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
              원격진료 플랫폼
            </h3>
            
            <p className="text-gray-600 mb-4 line-clamp-2">
              언제 어디서나 안전한 의료 서비스를 제공하는 보안 강화된 원격진료 및 건강관리 통합 플랫폼
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Node.js</span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">MongoDB</span>
              <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">AWS</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>완성도 100%</span>
                <span>⭐ 4.9</span>
              </div>
              <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                자세히 보기 →
              </button>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="card hover:shadow-lg transition-shadow group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200"></div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">완료</span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">추천</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🤖</span>
              <span className="text-sm text-gray-500">AI/데이터</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
              멀티모달 AI 어시스턴트
            </h3>
            
            <p className="text-gray-600 mb-4 line-clamp-2">
              텍스트, 음성, 이미지를 이해하는 차세대 AI 챗봇 및 업무 자동화 플랫폼
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Python</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">OpenAI</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">TensorFlow</span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">MongoDB</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>완성도 100%</span>
                <span>⭐ 4.7</span>
              </div>
              <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                자세히 보기 →
              </button>
            </div>
          </div>

          {/* Placeholder for more projects */}
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="card hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">진행중</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">📱</span>
                <span className="text-sm text-gray-500">다양한 카테고리</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                프로젝트 {i + 4}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-2">
                혁신적인 MVP 프로젝트에 대한 설명입니다. 더 많은 프로젝트들이 곧 추가될 예정입니다.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Node.js</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>완성도 {Math.floor(Math.random() * 30 + 70)}%</span>
                  <span>⭐ {(Math.random() * 1 + 4).toFixed(1)}</span>
                </div>
                <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                  자세히 보기 →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors">
              ← 이전
            </button>
            <button className="px-3 py-2 bg-primary-600 text-white rounded">1</button>
            <button className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors">2</button>
            <button className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors">3</button>
            <button className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors">
              다음 →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;