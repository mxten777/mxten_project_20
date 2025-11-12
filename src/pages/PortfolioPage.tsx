import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

type SortOption = 'latest' | 'oldest' | 'name';

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortOption>('latest');

  // 필터링 및 정렬된 프로젝트 목록
  const filteredAndSortedProjects = useMemo(() => {
    let result = projects;

    // 카테고리 필터
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // 검색 필터
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(query) ||
        (p.description && p.description.toLowerCase().includes(query)) ||
        (p.tags && p.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }

    // 정렬
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'latest':
          return (b.date || '').localeCompare(a.date || '');
        case 'oldest':
          return (a.date || '').localeCompare(b.date || '');
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  // 애니메이션 variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-brand-navy dark:to-indigo-900 transition-colors">
      {/* Premium Hero Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-brand-gold/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="section-container relative z-10">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold/10 dark:bg-brand-gold/20 border border-brand-gold/30 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">💼</span>
              <span className="font-bold text-brand-navy dark:text-brand-gold">
                40+개의 혁신 프로젝트
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 text-brand-navy dark:text-brand-gold">
              포트폴리오
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-700 dark:text-gray-200">
              다양한 산업군에서 검증된 <span className="font-bold text-brand-gold">실전 프로젝트</span>를<br className="hidden sm:block" />
              카테고리별로 만나보세요
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="프로젝트 검색... (제목, 태그, 설명)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 pr-32 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/20 transition-all duration-300 text-lg shadow-premium"
              />
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
              {searchQuery && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-brand-gold dark:hover:bg-brand-gold rounded-full transition-colors"
                >
                  ✕
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Filter & Sort Controls */}
          <motion.div 
            className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              <motion.button
                className={`px-6 py-3 rounded-xl font-bold text-base border-2 transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-brand-gold text-brand-navy border-brand-gold shadow-premium'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:border-brand-gold hover:shadow-premium'
                }`}
                onClick={() => setSelectedCategory('all')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                전체
                <span className="ml-2 px-2 py-0.5 bg-brand-navy/10 dark:bg-brand-gold/20 rounded-full text-sm">
                  40+
                </span>
              </motion.button>
              
              {dynamicCategories.map(cat => {
                const count = projects.filter(p => p.category === cat.id).length;
                return (
                  <motion.button
                    key={cat.id}
                    className={`px-6 py-3 rounded-xl font-bold text-base border-2 transition-all duration-300 ${
                      selectedCategory === cat.id
                        ? 'bg-brand-gold text-brand-navy border-brand-gold shadow-premium'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:border-brand-gold hover:shadow-premium'
                    }`}
                    onClick={() => setSelectedCategory(cat.id)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {cat.icon} {cat.name}
                    <span className="ml-2 px-2 py-0.5 bg-brand-navy/10 dark:bg-brand-gold/20 rounded-full text-sm">
                      {count}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">정렬:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-2 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/20 transition-all cursor-pointer"
              >
                <option value="latest">최신순</option>
                <option value="oldest">오래된순</option>
                <option value="name">이름순</option>
              </select>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">
              <span className="font-bold text-brand-gold">{filteredAndSortedProjects.length}개</span>의 프로젝트
              {searchQuery && ` (검색: "${searchQuery}")`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Premium Projects Grid */}
      <section className="section-container pb-20">
        <AnimatePresence mode="wait">
          {filteredAndSortedProjects.length === 0 ? (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                검색 결과가 없습니다
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                다른 키워드로 검색하거나 필터를 조정해보세요
              </p>
              <motion.button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-8 py-4 bg-brand-gold text-brand-navy rounded-xl font-bold hover:shadow-premium-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                전체 프로젝트 보기
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
            >
              {filteredAndSortedProjects.map((project) => {
                const cat = categories.find(c => c.id === project.category) || { color: '#888', name: project.category, icon: '📁' };
                const isFeatured = project.tags && project.tags.includes('대표');
                
                return (
                  <motion.a
                    key={project.id}
                    href={project.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="group relative"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Premium Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold via-primary-500 to-secondary-500 rounded-3xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    
                    {/* Card */}
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 group-hover:border-brand-gold transition-all duration-300 shadow-premium group-hover:shadow-premium-xl">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        {project.images && project.images.length > 0 ? (
                          (() => {
                            const featured = project.images.find((img) => img.featured) || project.images[0];
                            return (
                              <img 
                                src={featured.url} 
                                alt={featured.alt || project.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            );
                          })()
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                            <span className="text-5xl opacity-50">{cat.icon}</span>
                          </div>
                        )}
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Featured Badge */}
                        {isFeatured && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-3 left-3 px-4 py-2 bg-brand-gold text-brand-navy rounded-xl font-bold text-sm shadow-premium border-2 border-brand-gold"
                          >
                            ⭐ 대표
                          </motion.div>
                        )}
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 right-3 px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white rounded-lg font-semibold text-xs border border-gray-200 dark:border-gray-700">
                          {cat.icon} {cat.name}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-brand-gold transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                        
                        {/* Date */}
                        {project.date && (
                          <div className="flex items-center gap-2 mb-3 text-sm text-gray-600 dark:text-gray-400">
                            <span>📅</span>
                            <span className="font-semibold">{project.date}</span>
                          </div>
                        )}
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags && project.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag}
                              className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-brand-gold/10 text-brand-navy dark:text-brand-gold border border-brand-gold/30"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags && project.tags.length > 3 && (
                            <span className="px-2.5 py-1 rounded-lg text-xs font-semibold text-gray-600 dark:text-gray-400">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Hover Arrow */}
                      <motion.div
                        className="absolute bottom-5 right-5 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-premium"
                        whileHover={{ scale: 1.1, x: 4 }}
                      >
                        <span className="text-brand-navy font-bold text-xl">→</span>
                      </motion.div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default PortfolioPage;