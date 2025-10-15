import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // 실제 프로젝트에서는 이 id를 사용하여 프로젝트 데이터를 가져옵니다
  // const project = getProjectById(id);

  return (
    <div className="min-h-screen py-8">
      <div className="container-width section-padding">
        {/* Back Button */}
        <div className="mb-8">
          <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
            ← 포트폴리오로 돌아가기
          </button>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏢</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                기업/산업
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                완료
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              스마트 ERP 시스템
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              중소기업을 위한 통합 비즈니스 관리 플랫폼
            </p>
            
            <p className="text-gray-700 mb-8">
              중소기업의 복잡한 비즈니스 프로세스를 단순화하고 효율성을 극대화하기 위해 개발된 통합 ERP 시스템입니다. 
              실시간 대시보드, 자동화된 워크플로우, 그리고 직관적인 사용자 인터페이스를 통해 기업의 생산성을 혁신적으로 향상시킵니다.
            </p>
            
            <div className="flex gap-4 mb-8">
              <button className="btn-primary">
                라이브 데모 보기
              </button>
              <button className="btn-secondary">
                소스 코드 보기
              </button>
            </div>
            
            {/* Project Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-gray-600">완성도</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">4.8</div>
                <div className="text-sm text-gray-600">사용자 평가</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">95</div>
                <div className="text-sm text-gray-600">성능 점수</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">92</div>
                <div className="text-sm text-gray-600">코드 품질</div>
              </div>
            </div>
          </div>
          
          <div>
            {/* Project Image */}
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-4xl">🖥️</span>
            </div>
            
            {/* Image Gallery Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">📈</span>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">⚙️</span>
              </div>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">👥</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Info Sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-6">프로젝트 개요</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  이 프로젝트는 중소기업이 직면한 복잡한 비즈니스 관리 문제를 해결하기 위해 시작되었습니다. 
                  기존의 분산된 시스템들을 통합하여 하나의 플랫폼에서 모든 업무를 처리할 수 있도록 설계했습니다.
                </p>
                <p className="text-gray-700 mb-4">
                  재고관리, 회계, 인사관리, 고객관리 등 핵심 비즈니스 기능들을 모듈화하여 구현했으며, 
                  각 기업의 특성에 맞게 커스터마이징할 수 있는 유연한 구조를 제공합니다.
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold mb-6">주요 기능</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="text-lg font-semibold mb-2">실시간 대시보드</h3>
                  <p className="text-gray-600">비즈니스 핵심 지표를 실시간으로 모니터링하고 인사이트를 제공합니다.</p>
                </div>
                <div className="card">
                  <div className="text-3xl mb-3">📦</div>
                  <h3 className="text-lg font-semibold mb-2">재고 관리</h3>
                  <p className="text-gray-600">자동 발주, 재고 추적, 공급업체 관리 등 완전한 재고 솔루션을 제공합니다.</p>
                </div>
                <div className="card">
                  <div className="text-3xl mb-3">💰</div>
                  <h3 className="text-lg font-semibold mb-2">회계 시스템</h3>
                  <p className="text-gray-600">자동 회계 처리, 보고서 생성, 세무 관리까지 통합된 회계 솔루션입니다.</p>
                </div>
                <div className="card">
                  <div className="text-3xl mb-3">👥</div>
                  <h3 className="text-lg font-semibold mb-2">인사 관리</h3>
                  <p className="text-gray-600">직원 정보, 급여, 근태, 성과 관리를 효율적으로 처리합니다.</p>
                </div>
              </div>
            </section>

            {/* Challenges & Solutions */}
            <section>
              <h2 className="text-2xl font-bold mb-6">도전 과제 & 해결책</h2>
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-semibold mb-3 text-red-600">🎯 도전 과제</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>대용량 데이터 처리 최적화:</strong> 수십만 건의 거래 데이터를 실시간으로 처리해야 하는 성능 이슈가 발생했습니다.
                  </p>
                  
                  <h4 className="text-md font-semibold mb-2 text-green-600">💡 해결책</h4>
                  <p className="text-gray-700 mb-4">
                    Redis 캐싱과 데이터베이스 인덱싱 최적화, 페이지네이션 구현을 통해 조회 속도를 75% 향상시켰습니다. 
                    또한 백그라운드 작업을 통한 비동기 처리로 사용자 경험을 개선했습니다.
                  </p>
                  
                  <h4 className="text-md font-semibold mb-2 text-blue-600">📈 결과</h4>
                  <p className="text-gray-700">
                    조회 속도 75% 향상, 사용자 만족도 대폭 증가, 시스템 안정성 99.9% 달성
                  </p>
                </div>
              </div>
            </section>

            {/* Learning Points */}
            <section>
              <h2 className="text-2xl font-bold mb-6">학습한 점들</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  <p className="text-gray-700">대규모 엔터프라이즈 애플리케이션의 아키텍처 설계 경험을 쌓을 수 있었습니다.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  <p className="text-gray-700">복잡한 비즈니스 로직의 모듈화 및 테스트 방법론을 습득했습니다.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-600 text-xl">✓</span>
                  <p className="text-gray-700">사용자 중심의 UX/UI 설계의 중요성을 깊이 인식하게 되었습니다.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Details */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">프로젝트 정보</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">개발 기간</span>
                  <span className="font-medium">5.5개월</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">시작일</span>
                  <span className="font-medium">2024.01.15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">완료일</span>
                  <span className="font-medium">2024.06.30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">난이도</span>
                  <span className="font-medium text-red-600">고급</span>
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">기술 스택</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">TypeScript</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Tailwind CSS</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">Node.js</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">Express</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Database</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">PostgreSQL</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded-full">Redis</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">AWS</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Docker</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Projects */}
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">관련 프로젝트</h3>
              <div className="space-y-3">
                <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <h4 className="font-medium text-sm mb-1">스마트 재고 관리 시스템</h4>
                  <p className="text-xs text-gray-600">AI 기반 재고 예측 및 자동 발주</p>
                </div>
                <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <h4 className="font-medium text-sm mb-1">HR 플랫폼</h4>
                  <p className="text-xs text-gray-600">인사관리 전용 솔루션</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            ← 이전 프로젝트
          </button>
          <button className="btn-primary">
            다음 프로젝트 →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;