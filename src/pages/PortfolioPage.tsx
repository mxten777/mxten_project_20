import React, { useState } from 'react';
import { projects } from '../data/projects';
import { categories } from '../data/projects';
import { Link } from 'react-router-dom';

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

  // 카테고리별로 프로젝트 그룹화
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-6 sm:py-8">
      <div className="container-width section-padding">
        <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">포트폴리오</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            36개의 MVP 프로젝트를 카테고리별로 만나보세요
          </p>
        </div>

        {/* 카테고리 필터 버튼 */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-6 px-4 sm:px-0">
            <button
              className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base ${selectedCategory === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors'}`}
              onClick={() => setSelectedCategory('all')}
            >전체 <span className="ml-1 text-xs text-gray-500 font-normal align-middle">{projects.length}</span></button>
            {dynamicCategories.map(cat => {
              const count = projects.filter(p => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base ${selectedCategory === cat.id ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors'}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >{cat.name} <span className="ml-1 text-xs text-gray-500 font-normal align-middle">{count}</span></button>
              );
            })}
          </div>
        </div>

        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 px-4 sm:px-0">
          {filteredProjects.map(project => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="card hover:shadow-lg transition-shadow group block"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                {project.images && project.images.length > 0 ? (
                  (() => {
                    const featured = project.images.find(img => img.featured) || project.images[0];
                    return (
                      <img
                        src={featured.url}
                        alt={featured.alt || project.title}
                        className="w-full h-40 sm:h-48 object-cover rounded-lg"
                      />
                    );
                  })()
                ) : (
                  <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-100 to-blue-200" />
                )}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{categories.find(c => c.id === project.category)?.icon ?? '📁'}</span>
                <span className="text-sm text-gray-500">{categories.find(c => c.id === project.category)?.name ?? project.category}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags?.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{project.date}</span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 font-medium hover:text-primary-700 transition-colors text-xs border border-primary-600 rounded px-2 py-1 ml-2"
                  >외부 포트폴리오</a>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;