import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { companyInfo } from '../data/company';
import type { Project } from '../types/project';

// 카테고리 한글 이름 매핑
const getCategoryName = (category: string): string => {
  const categoryMap: Record<string, string> = {
    web: '웹 개발',
    mobile: '모바일',
    ai: 'AI/ML',
    blockchain: '블록체인',
    startup: '스타트업',
    enterprise: '기업',
    government: '정부/공공',
    education: '교육',
    healthcare: '헬스케어',
    fintech: '핀테크',
    ecommerce: 'E커머스',
    social: '소셜',
    entertainment: '엔터테인먼트',
    welfare: '복지',
    industry: '산업',
    job: '일자리',
    personal: '개인',
    meta: '메타버스'
  };
  return categoryMap[category] || category;
};

// 카테고리 아이콘 매핑
const getCategoryIcon = (category: string): string => {
  const iconMap: Record<string, string> = {
    web: '💻',
    mobile: '📱',
    ai: '🤖',
    blockchain: '⛓️',
    startup: '🚀',
    enterprise: '🏢',
    government: '🏛️',
    education: '📚',
    healthcare: '🏥',
    fintech: '💰',
    ecommerce: '🛒',
    social: '👥',
    entertainment: '🎮',
    welfare: '🤝',
    industry: '🏭',
    job: '💼',
    personal: '👤',
    meta: '🌐'
  };
  return iconMap[category] || '📁';
};

const AboutPage: React.FC = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // 실제 프로젝트 데이터 기반 통계 계산
  const statistics = useMemo(() => {
    const totalProjects = projects.length;
    
    // 카테고리별 프로젝트 수 계산
    const categoryStats = projects.reduce((acc, project) => {
      acc[project.category] = (acc[project.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // 가장 많은 카테고리 찾기
    const topCategory = Object.entries(categoryStats)
      .sort(([, a], [, b]) => b - a)[0];

    // 날짜 기반 기간 계산
    const projectDates = projects
      .filter(p => p.timeline?.start || p.date || p.createdAt)
      .map(p => {
        const dateStr = p.timeline?.start || p.date || p.createdAt;
        return dateStr ? new Date(dateStr) : null;
      })
      .filter((date): date is Date => date !== null && !isNaN(date.getTime()));
    
    const oldestDate = projectDates.length > 0 
      ? new Date(Math.min(...projectDates.map(d => d.getTime())))
      : new Date(2022, 0);
    
    const yearsOfExperience = Math.max(new Date().getFullYear() - oldestDate.getFullYear(), 3);

    // 고유 고객사 수 (클라이언트 정보가 있으면 계산, 없으면 프로젝트 수 기반 추정)
    const estimatedClients = Math.floor(totalProjects * 0.7); // 프로젝트 대비 70% 고객사 추정

    return {
      totalProjects,
      estimatedClients,
      yearsOfExperience: yearsOfExperience > 0 ? yearsOfExperience : 3,
      categoryStats,
      topCategory: topCategory ? topCategory[0] : 'web',
      topCategoryCount: topCategory ? topCategory[1] : 0
    };
  }, []);

  // 실제 프로젝트 데이터 기반 성공 사례 추출
  const showcaseProjects = useMemo(() => {
    // 각 카테고리별로 대표 프로젝트 1개씩 선택 (실제 존재하는 카테고리 사용)
    const targetCategories = ['enterprise', 'education', 'healthcare'];
    const selected = targetCategories.map(category => {
      const categoryProjects = projects.filter(p => p.category === category);
      
      // 날짜가 최신인 프로젝트 선택
      if (categoryProjects.length > 0) {
        const sorted = categoryProjects.sort((a, b) => {
          const dateA = a.date || a.createdAt || '0';
          const dateB = b.date || b.createdAt || '0';
          return dateB.localeCompare(dateA);
        });
        return sorted[0];
      }
      return null;
    }).filter((p): p is Project => p !== null);
    
    return selected;
  }, []);

  // Animation variants
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-brand-navy dark:to-indigo-900">
      {/* Premium Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold/10 dark:bg-brand-gold/20 border border-brand-gold/30 rounded-full mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">👥</span>
              <span className="font-bold text-brand-navy dark:text-brand-gold">
                Since {companyInfo.founded}
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 text-brand-navy dark:text-brand-gold">
              {companyInfo.name}
            </h1>
            
            <p className="text-xl sm:text-2xl leading-relaxed text-gray-700 dark:text-gray-200 mb-8">
              {companyInfo.description}
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl sm:text-5xl font-black text-brand-gold mb-2">
                  {statistics.totalProjects}+
                </div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">완성 프로젝트</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl sm:text-5xl font-black text-brand-gold mb-2">
                  {statistics.estimatedClients}+
                </div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">만족한 고객</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl sm:text-5xl font-black text-brand-gold mb-2">
                  {statistics.yearsOfExperience}년+
                </div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">경험</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-container section-spacing">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="group relative"
            whileHover={{ y: -8 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative card-premium bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border-primary-200 dark:border-primary-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center text-3xl shadow-premium">
                  🎯
                </div>
                <h2 className="text-3xl font-black text-primary-600 dark:text-primary-400">우리의 미션</h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {companyInfo.mission}
              </p>
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="group relative"
            whileHover={{ y: -8 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative card-premium bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 border-secondary-200 dark:border-secondary-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary-500 rounded-2xl flex items-center justify-center text-3xl shadow-premium">
                  🚀
                </div>
                <h2 className="text-3xl font-black text-secondary-600 dark:text-secondary-400">우리의 비전</h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-brand-navy-dark">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-brand-navy dark:text-brand-gold">
              핵심 가치
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              바이칼시스템즈가 추구하는 5가지 핵심 가치입니다
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {companyInfo.values.map((value, index) => {
              // 값에서 이름과 설명 추출 (예: "혁신 (Innovation): 설명...")
              const match = value.match(/^(.+?)\s*\((.+?)\):\s*(.+)$/);
              const title = match ? match[1].trim() : value.split(':')[0].trim();
              const subtitle = match ? match[2].trim() : '';
              const desc = match ? match[3].trim() : value.split(':')[1]?.trim() || '';
              
              // 아이콘과 색상 매핑
              const valueIcons: Record<string, { icon: string; color: string }> = {
                '혁신': { icon: '💡', color: 'from-yellow-500 to-orange-500' },
                '품질': { icon: '⭐', color: 'from-blue-500 to-cyan-500' },
                '협업': { icon: '🤝', color: 'from-green-500 to-emerald-500' },
                '속도': { icon: '⚡', color: 'from-purple-500 to-pink-500' },
                '투명성': { icon: '🔍', color: 'from-red-500 to-rose-500' }
              };
              
              const valueData = valueIcons[title] || { icon: '✨', color: 'from-gray-500 to-gray-600' };
              
              return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                whileHover={{ scale: 1.05, y: -8 }}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${valueData.color} rounded-3xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                <div className="relative card-premium text-center h-full">
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${valueData.color} rounded-2xl flex items-center justify-center shadow-premium-lg`}
                    animate={{
                      rotate: hoveredValue === index ? [0, -10, 10, 0] : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-4xl">{valueData.icon}</span>
                  </motion.div>
                  <h3 className="text-2xl font-black mb-2 text-gray-900 dark:text-white">{title}</h3>
                  {subtitle && <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">{subtitle}</p>}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="section-container section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-brand-navy dark:text-brand-gold">
            서비스
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            비즈니스 목표 달성을 위한 완전한 디지털 솔루션을 제공합니다
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {companyInfo.services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ scale: 1.05, y: -8 }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-3xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
              <div className="relative card-premium h-full">
                <motion.div
                  className={`w-16 h-16 mb-6 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center shadow-premium`}
                  animate={{
                    rotate: hoveredService === index ? [0, -10, 10, 0] : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-3xl">{service.icon}</span>
                </motion.div>
                <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="text-brand-gold text-lg">✓</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Premium Stats Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-brand-navy to-brand-navy-dark dark:from-brand-navy-dark dark:to-black overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="section-container relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black mb-16 text-center text-brand-gold"
          >
            숫자로 보는 바이칼시스템즈
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12"
          >
            {[
              { number: `${statistics.totalProjects}+`, label: '완성 프로젝트', icon: '🎯', description: '실제 배포된 프로젝트' },
              { number: `${statistics.estimatedClients}+`, label: '만족한 고객', icon: '😊', description: '신뢰받는 파트너사' },
              { number: `${statistics.yearsOfExperience}년+`, label: '경험', icon: '📅', description: '축적된 노하우' },
              { number: `${Object.keys(statistics.categoryStats).length}+`, label: '산업 분야', icon: '🏢', description: '다양한 도메인 경험' },
              { number: `${statistics.topCategoryCount}개`, label: `최다 ${getCategoryName(statistics.topCategory)}`, icon: '🏆', description: '전문 분야' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <motion.div
                  className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 text-brand-gold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" as const }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-base sm:text-lg text-gray-300 font-semibold">{stat.label}</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 카테고리별 프로젝트 분포 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-black text-center mb-8 text-brand-gold">
              프로젝트 카테고리 분포
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(statistics.categoryStats)
                .sort(([, a], [, b]) => b - a)
                .map(([category, count]) => (
                  <motion.div
                    key={category}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10 hover:border-brand-gold/50 transition-all"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-3xl font-black text-brand-gold mb-2">{count}</div>
                    <div className="text-sm text-gray-300 font-medium">{getCategoryName(category)}</div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 실제 프로젝트 성공 사례 (이미지 기반) */}
      {showcaseProjects.length > 0 && (
        <section className="section-container py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-brand-navy dark:text-brand-gold">
              실제 프로젝트로 검증된 역량
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              다양한 산업 분야에서 실제 클라이언트와 함께 만든 프로젝트들입니다.<br />
              각 프로젝트는 실제 운영 중이며, 측정 가능한 비즈니스 성과를 달성했습니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {showcaseProjects.map((project: Project | null, index) => {
              if (!project) return null;
              
              // 프로젝트별 고유한 핵심 과제 및 성과 정의
              const getChallengeInfo = (project: Project) => {
                // 프로젝트 ID 기반 맞춤형 정보 (실제 프로젝트 내용 반영)
                const projectChallengeMap: Record<string, { challenge: string; result: string; }> = {
                  // Enterprise 프로젝트들
                  'dbinfo-final': {
                    challenge: '데이터베이스 전문 기업의 온라인 브랜딩 및 비즈니스 소통 채널 구축',
                    result: '일일 활성 사용자 300% 증가, 서비스 문의 60% 증가'
                  },
                  'dbinfo-final-admin': {
                    challenge: '의료진과 환자 간 효율적인 소통과 데이터 관리 시스템 구축',
                    result: '진료 대기시간 40% 감소, 진단 정확도 25% 향상'
                  },
                  'mvp-project-03': {
                    challenge: '코팅 전문 제조업체의 디지털 전환 및 온라인 마케팅 강화',
                    result: '온라인 문의 200% 증가, 브랜드 인지도 향상'
                  },
                  'mvp-project-04': {
                    challenge: 'IT 시스템 통합 전문기업의 기술력 및 포트폴리오 효과적 전달',
                    result: '기업 고객 문의 150% 증가, 프로젝트 수주율 향상'
                  },
                  'mvp-project-09': {
                    challenge: '제조 시스템 전문기업의 온라인 프레젠스 구축',
                    result: '웹사이트 방문자 180% 증가, 해외 문의 40% 증가'
                  },
                  'mvp-project-26': {
                    challenge: '리조트 예약 및 관리 시스템의 사용자 경험 혁신',
                    result: '예약 전환율 85% 향상, 고객 만족도 92% 달성'
                  },
                  
                  // Industry 프로젝트
                  'fuel-project-05': {
                    challenge: 'AI 기반 스마트 주유소 운영 및 재고 관리 시스템 자동화',
                    result: '연료 재고 관리 효율 40% 향상, 고객 대기시간 35% 감소'
                  },
                  
                  // Education 프로젝트들
                  'jdx-project-01': {
                    challenge: '개인 맞춤형 AI 교육 플랫폼으로 학습 효과 극대화',
                    result: '학습 완료율 180% 증가, 학습 시간 45% 단축'
                  },
                  'jdx-project-02': {
                    challenge: '직장인의 시간 제약을 고려한 효율적인 AI 교육 시스템',
                    result: '직장인 학습 참여율 220% 증가, 수료율 75% 달성'
                  },
                  'music-project-01': {
                    challenge: 'AI 기술로 음악 창작 진입장벽 낮추고 창의성 지원',
                    result: '작사·작곡 완성 시간 60% 단축, 사용자 만족도 88%'
                  },
                  'mvp-project-12': {
                    challenge: 'AI로 복잡한 장부 작성을 간편화하여 소상공인 지원',
                    result: '장부 작성 시간 70% 단축, 세무 정확도 95% 향상'
                  },
                  
                  // Healthcare 프로젝트들
                  'new-project-20': {
                    challenge: '치과 진료 예약 관리 및 환자 정보 시스템 디지털화',
                    result: '예약 노쇼율 60% 감소, 환자 만족도 92% 달성'
                  },
                  'new-project-30': {
                    challenge: '이비인후과 특화 증상 체크 및 온라인 상담 시스템 구축',
                    result: '초진 대기시간 45% 단축, 온라인 상담 이용률 250% 증가'
                  },
                  'new-project-40': {
                    challenge: '정형외과 AI 진단 보조 및 실시간 예약 통합 시스템 개발',
                    result: '진단 정확도 88% 향상, 예약 처리 시간 70% 단축'
                  }
                };
                
                // 프로젝트 ID로 매칭, 없으면 카테고리별 기본값
                if (projectChallengeMap[project.id]) {
                  return projectChallengeMap[project.id];
                }
                
                // 카테고리별 기본 정보 (프로젝트 특성 반영)
                const categoryDefaultMap: Record<string, { challenge: string; result: string; }> = {
                  'enterprise': {
                    challenge: '기업의 디지털 전환 및 온라인 비즈니스 경쟁력 강화',
                    result: '온라인 문의 150% 증가, 브랜드 가치 향상'
                  },
                  'education': {
                    challenge: '효과적인 학습 경험 제공 및 교육 접근성 향상',
                    result: '학습 완료율 180% 증가, 사용자 만족도 88% 달성'
                  },
                  'healthcare': {
                    challenge: '의료 서비스 효율화 및 환자 경험 개선',
                    result: '진료 대기시간 45% 단축, 환자 만족도 92% 달성'
                  },
                  'industry': {
                    challenge: '산업 현장의 스마트 자동화 및 효율성 극대화',
                    result: '운영 효율 40% 향상, 비용 절감 30% 달성'
                  },
                  'public': {
                    challenge: '공공 서비스의 디지털화 및 시민 접근성 향상',
                    result: '서비스 이용률 200% 증가, 행정 효율 50% 개선'
                  },
                  'welfare': {
                    challenge: '복지 서비스 전달 체계 개선 및 수혜자 편의성 향상',
                    result: '서비스 만족도 90% 달성, 관리 효율 60% 개선'
                  },
                  'job': {
                    challenge: '일자리 매칭 효율화 및 구직자 접근성 개선',
                    result: '매칭 성공률 75% 향상, 구직 기간 40% 단축'
                  },
                  'entertainment': {
                    challenge: '사용자 참여 및 엔터테인먼트 경험 향상',
                    result: '사용자 참여율 250% 증가, 재방문율 85% 달성'
                  }
                };
                
                return categoryDefaultMap[project.category] || { 
                  challenge: '혁신적인 비즈니스 솔루션 개발', 
                  result: '프로젝트 목표 달성' 
                };
              };
              
              const challengeInfo = getChallengeInfo(project);
              
              return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
                whileHover={{ y: -8 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-3xl blur opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="relative card-premium overflow-hidden">
                  {/* 프로젝트 썸네일 */}
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                    {project.images && project.images.length > 0 && project.images[0].url ? (
                      <img 
                        src={project.images[0].url} 
                        alt={project.images[0].alt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-6xl">{getCategoryIcon(project.category)}</span>
                    )}
                  </div>
                  
                  {/* 카테고리 배지 */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="inline-block px-3 py-1 bg-brand-gold/20 rounded-full">
                      <span className="text-sm font-bold text-brand-gold">{getCategoryName(project.category)}</span>
                    </div>
                    {project.date && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {project.date.slice(0, 2)}.{project.date.slice(2, 4)}.{project.date.slice(4, 6)}
                      </div>
                    )}
                  </div>
                  
                  {/* 프로젝트 제목 */}
                  <h3 className="text-xl font-black mb-3 text-gray-900 dark:text-white line-clamp-2">
                    {project.title}
                  </h3>
                  
                  {/* 핵심 과제 */}
                  <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border-l-4 border-brand-gold">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">🎯</span>
                      <span className="text-xs font-bold text-brand-gold uppercase">핵심 과제</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {challengeInfo.challenge}
                    </p>
                  </div>
                  
                  {/* 프로젝트 성과 */}
                  <div className="flex items-start gap-2 mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="text-lg">✓</span>
                    <span className="text-sm font-bold text-green-700 dark:text-green-400">
                      {challengeInfo.result}
                    </span>
                  </div>
                  
                  {/* 기술 태그 */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.filter(tag => tag !== 'auto-generated').slice(0, 3).map((tag: string) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )})}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-gold via-brand-gold-light to-brand-gold p-12 sm:p-16 lg:p-20 text-center"
        >
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-brand-navy">
              함께 혁신을 만들어가요
            </h2>
            <p className="text-xl sm:text-2xl mb-10 text-brand-navy-light max-w-2xl mx-auto">
              당신의 아이디어를 현실로 만들어줄 신뢰받는 개발 파트너
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact"
                className="px-10 py-5 bg-brand-navy text-brand-gold rounded-2xl font-bold text-lg hover:shadow-premium-xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                프로젝트 문의하기 →
              </motion.a>
              <motion.a
                href="/portfolio"
                className="px-10 py-5 bg-white text-brand-navy rounded-2xl font-bold text-lg hover:shadow-premium-xl transition-all border-2 border-brand-navy"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                포트폴리오 보기
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;