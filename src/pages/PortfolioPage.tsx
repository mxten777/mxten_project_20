import React, { useState } from 'react';
import { projects } from '../data/projects';
import { categories } from '../data/projects';

// 실제 프로젝트가 존재하는 모든 카테고리 추출 및 누락된 카테고리도 표시 (순서: 실제 데이터 순)
const allCategoryIds = Array.from(new Set(projects.map(p => p.category)));
// 누락 카테고리 한글 매핑
const categoryNameMap: Record<string, string> = {
  welfare: '복지',
  industry: '산업',
  job: '일자리',
  personal: '개인',
  entertainment: '엔터테인먼트',
  meta: '메타',
};
const dynamicCategories = allCategoryIds.map(id => {
  const cat = categories.find(c => c.id === id);
  if (cat) return cat;
  // 누락된 카테고리 자동 생성 (한글 변환)
  return {
    id,
    name: categoryNameMap[id] || id,
    description: '',
    icon: '📁',
    color: '#888',
    count: projects.filter(p => p.category === id).length
  };
});

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // 필터링된 프로젝트 목록
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
  <div className="min-h-screen py-6 sm:py-8 bg-white dark:bg-[#181C2A] transition-colors">
      <div className="container-width section-padding">
        <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#181C2A] dark:text-[#FFD700]">
            포트폴리오
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-[#181C2A] dark:text-gray-200">
            36개의 MVP 프로젝트를 카테고리별로 만나보세요
          </p>
        </div>

        {/* 카테고리 필터 버튼 - 카테고리별 컬러 적용 */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-6 px-4 sm:px-0">
            <button
              className={`px-4 sm:px-6 py-2 rounded-full font-bold text-sm sm:text-base border-2 transition-all duration-200
                ${selectedCategory === 'all'
                  ? 'bg-[#FFD700] text-[#181C2A] border-[#FFD700] shadow-md dark:bg-[#FFD700] dark:text-[#181C2A]'
                  : 'bg-white text-[#181C2A] border-gray-200 hover:bg-gray-100 dark:bg-[#232B44] dark:text-gray-200 dark:border-gray-700 dark:hover:bg-[#232B44]'}
              `}
              onClick={() => setSelectedCategory('all')}
            >전체 <span className="ml-1 text-xs font-normal align-middle text-[#FFD700]">{projects.length}</span></button>
            {dynamicCategories.map(cat => {
              const count = projects.filter(p => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  className={`px-4 sm:px-6 py-2 rounded-full font-bold text-sm sm:text-base border-2 transition-all duration-200
                    ${selectedCategory === cat.id
                      ? 'bg-[#FFD700] text-[#181C2A] border-[#FFD700] shadow-md dark:bg-[#FFD700] dark:text-[#181C2A]'
                      : 'bg-white text-[#181C2A] border-gray-200 hover:bg-gray-100 dark:bg-[#232B44] dark:text-gray-200 dark:border-gray-700 dark:hover:bg-[#232B44]'}
                  `}
                  onClick={() => setSelectedCategory(cat.id)}
                >{cat.name} <span className="ml-1 text-xs font-normal align-middle text-[#FFD700]">{count}</span></button>
              );
            })}
          </div>
        </div>

        {/* 프로젝트 그리드 - 카드에 카테고리 컬러/골드 포인트 적용 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 px-4 sm:px-0">
          {filteredProjects.map(project => {
            const cat = categories.find(c => c.id === project.category) || { color: '#888', name: project.category };
            const isFeatured = project.tags && project.tags.includes('대표');
            return (
              <a
                key={project.id}
                href={project.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden border-2 border-[#FFD700] bg-white dark:bg-[#232B44] transition-all duration-300 hover:scale-105 shadow-none"
              >
                <div className="relative overflow-hidden rounded-t-2xl mb-4">
                  {project.images && project.images.length > 0 ? (
                    (() => {
                      const featured = project.images.find(img => img.featured) || project.images[0];
                      return (
                        <img src={featured.url} alt={featured.alt || project.title} className="w-full h-40 object-cover rounded-t-2xl border-b-2 border-[#FFD700]" />
                      );
                    })()
                  ) : (
                    <div className="w-full h-40 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-3xl text-gray-400 dark:text-gray-600">?</div>
                  )}
                  {/* 대표/프리미엄 뱃지 */}
                  {isFeatured && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full font-bold text-xs bg-[#FFD700] text-[#181C2A] border-2 border-[#FFD700]">
                      대표
                    </span>
                  )}
                </div>
                <div className="px-4 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block w-3 h-3 rounded-full border-2 border-[#FFD700] bg-[#181C2A] dark:bg-[#FFD700]"></span>
                    <span className="text-xs font-bold text-[#181C2A] dark:text-[#FFD700]">{cat.name}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1 group-hover:text-[#FFD700] transition-colors text-[#181C2A] dark:text-white">{project.title}</h3>
                  {/* 숫자 강조: 카테고리 컬러+골드 */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-black text-[#181C2A] dark:text-[#FFD700]">{project.date || ''}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tags && project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#FFD700]/20 text-[#181C2A] dark:text-[#181C2A] border border-[#FFD700]">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;