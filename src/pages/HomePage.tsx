import React, { useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects, technologies } from '../data/projects';
import { containerVariants, itemVariants, cardVariants, heroVariants } from '../utils/animations';

const HomePage: React.FC = () => {
  // 카테고리별 최신 프로젝트 선정 (6개 카테고리)
  const showcaseProjects = useMemo(() => {
    const targetCategories = ['enterprise', 'education', 'healthcare', 'public', 'welfare', 'industry'];
    return targetCategories.map(category => {
      const categoryProjects = projects.filter(p => p.category === category);
      if (categoryProjects.length > 0) {
        return categoryProjects.sort((a, b) => {
          const dateA = a.date || '0';
          const dateB = b.date || '0';
          return dateB.localeCompare(dateA);
        })[0];
      }
      return null;
    }).filter(p => p !== null);
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  // Scroll-based animations
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Premium Minimal Hero Section */}
            <motion.section 
              className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              style={{ y: y1, scale, opacity }}
            >
              {/* Subtle Background Elements */}
              <div className="absolute inset-0">
                <motion.div 
                  className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
              </div>

              <motion.div 
                className="relative z-10 text-center max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Premium Brand Badge - 미니멀 */}
                <motion.div 
                  variants={itemVariants}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-12 shadow-lg"
                >
                  <span className="text-2xl mr-3">👥</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Since 2022</span>
                </motion.div>

                {/* Main Title - 깔끔하고 강렬하게 */}
                <motion.h1 
                  variants={itemVariants}
                  className="mb-6 sm:mb-8 px-4 sm:px-0"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-3 sm:mb-4 text-brand-navy dark:text-white tracking-tight">
                    바이칼시스템즈
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 dark:text-gray-400 tracking-wider">
                    BAIKAL SYSTEMS
                  </div>
                </motion.h1>

                {/* Tagline - 간결하고 임팩트있게 */}
                <motion.p 
                  variants={itemVariants}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 sm:mb-16 text-gray-700 dark:text-gray-300 font-light max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
                >
                  아이디어를 현실로, 현실을 혁신으로
                </motion.p>

                {/* Stats - 미니멀하게 */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 px-4"
                >
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-gold mb-1 sm:mb-2">40+</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">프로젝트</div>
                  </div>
                  <div className="w-px h-10 sm:h-12 bg-gray-300 dark:bg-gray-700" />
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-gold mb-1 sm:mb-2">1년+</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">경험</div>
                  </div>
                  <div className="w-px h-10 sm:h-12 bg-gray-300 dark:bg-gray-700" />
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-gold mb-1 sm:mb-2">10+</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">파트너사</div>
                  </div>
                </motion.div>

                {/* CTA Buttons - 깔끔하게 */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
                >
                  <motion.a
                    href="#projects"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-brand-gold text-brand-navy font-bold text-base sm:text-lg rounded-2xl hover:shadow-2xl transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    프로젝트 보기
                  </motion.a>
                  
                  <motion.a
                    href="/contact"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-brand-gold text-brand-gold font-bold text-base sm:text-lg rounded-2xl hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    문의하기
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-6 h-10 border-2 border-brand-gold rounded-full flex justify-center">
                  <motion.div 
                    className="w-1 h-3 bg-brand-gold rounded-full mt-2"
                    animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </motion.section>

            {/* Premium Tech Stack Section */}
            <motion.section 
              className="py-24 sm:py-32 bg-white dark:bg-gray-800 relative overflow-hidden"
              style={{ y: y2 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  className="text-center mb-20"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.h2 
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-brand-navy dark:text-white"
                  >
                    기술 스택
                  </motion.h2>
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                  >
                    최신 기술로 안정적이고 확장 가능한 솔루션을 제공합니다
                  </motion.p>
                </motion.div>
                
                {/* Tech Grid - 깔끔하게 */}
                <motion.div 
                  className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8 mb-20"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {technologies.slice(0, 12).map((tech) => (
                    <motion.div 
                      key={tech.name}
                      className="group text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <span className="text-3xl sm:text-4xl">{tech.icon}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">{tech.name}</h3>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Tech Stats */}
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white">
                    <div className="text-5xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold mb-2">최신 기술</h3>
                    <p className="text-blue-100 mb-4">업계 최신 트렌드 반영</p>
                    <div className="text-4xl font-black">100%</div>
                  </div>

                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white">
                    <div className="text-5xl mb-4">🛡️</div>
                    <h3 className="text-2xl font-bold mb-2">안정성</h3>
                    <p className="text-green-100 mb-4">엔터프라이즈급 보안</p>
                    <div className="text-4xl font-black">99.9%</div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-white">
                    <div className="text-5xl mb-4">⚡</div>
                    <h3 className="text-2xl font-bold mb-2">성능</h3>
                    <p className="text-purple-100 mb-4">최적화된 사용자 경험</p>
                    <div className="text-4xl font-black">40%</div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section 
              id="projects" 
              className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900"
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  className="text-center mb-20"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.h2 
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-brand-navy dark:text-white"
                  >
                    주요 프로젝트
                  </motion.h2>
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                  >
                    실제 비즈니스 문제를 해결하고 측정 가능한 성과를 달성한 프로젝트들
                  </motion.p>
                </motion.div>

                <motion.div 
                  className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {showcaseProjects.map((project, index) => {
                    const projectInfoMap: Record<string, {
                      icon: string;
                      gradientFrom: string;
                      gradientTo: string;
                      challenge: string;
                      solution: string;
                      impact: string;
                      industry: string;
                      clientType: 'startup' | 'enterprise' | 'government' | 'healthcare' | 'education';
                    }> = {
                      'dbinfo-final-admin': {
                        icon: "🏢",
                        gradientFrom: "#3B82F6",
                        gradientTo: "#1E40AF",
                        challenge: "기업 데이터 관리 효율성 및 보안 강화",
                        solution: "실시간 데이터 동기화 및 권한 기반 접근 제어",
                        impact: "데이터 처리 속도 60% 향상",
                        industry: "기업 솔루션",
                        clientType: "enterprise"
                      },
                      'mvp-project-12': {
                        icon: "🎓",
                        gradientFrom: "#8B5CF6",
                        gradientTo: "#7C3AED",
                        challenge: "AI 장부 작성 자동화로 소상공인 지원",
                        solution: "AI 기반 자동 분류 시스템",
                        impact: "장부 작성 시간 70% 단축",
                        industry: "에듀테크",
                        clientType: "education"
                      },
                      'new-project-40-app': {
                        icon: "🏥",
                        gradientFrom: "#10B981",
                        gradientTo: "#059669",
                        challenge: "정형외과 실시간 예약 시스템 효율화",
                        solution: "AI 기반 스케줄 최적화",
                        impact: "예약 처리 시간 70% 단축",
                        industry: "헬스케어",
                        clientType: "healthcare"
                      },
                      'mvp-project-30': {
                        icon: "🏛️",
                        gradientFrom: "#EF4444",
                        gradientTo: "#DC2626",
                        challenge: "주민 제보 실시간 처리 시스템",
                        solution: "위치 기반 제보 및 실시간 추적",
                        impact: "민원 처리 시간 50% 단축",
                        industry: "공공 서비스",
                        clientType: "government"
                      },
                      'mvp-project-16': {
                        icon: "❤️‍🩹",
                        gradientFrom: "#10B981",
                        gradientTo: "#059669",
                        challenge: "재가 복지 센터 통합 관리 효율화",
                        solution: "AI 기반 돌봄 스케줄링",
                        impact: "관리 효율성 80% 향상",
                        industry: "사회복지",
                        clientType: "government"
                      },
                      'mxten-project-06': {
                        icon: "🏭",
                        gradientFrom: "#0284C7",
                        gradientTo: "#0369A1",
                        challenge: "제조 현장 디지털 전환",
                        solution: "모바일 기반 디지털 작업지시서",
                        impact: "작업 지시 시간 65% 단축",
                        industry: "스마트 팩토리",
                        clientType: "enterprise"
                      }
                    };
                    
                    const data = projectInfoMap[project.id] || {
                      icon: "🚀",
                      gradientFrom: "#3B82F6",
                      gradientTo: "#1E40AF",
                      challenge: "혁신적인 비즈니스 솔루션 개발",
                      solution: "최신 기술 스택 활용",
                      impact: "프로젝트 목표 달성",
                      industry: "종합",
                      clientType: "enterprise" as const
                    };
                    
                    const projectData = {
                      icon: data.icon,
                      gradientFrom: data.gradientFrom,
                      gradientTo: data.gradientTo,
                      challenge: data.challenge,
                      solution: data.solution,
                      impact: data.impact,
                      industry: data.industry,
                      clientType: data.clientType,
                      techStack: project.tags?.slice(1, 4).map(tag => ({
                        name: tag,
                        color: 'text-blue-300',
                        bg: 'bg-blue-500/30',
                        border: 'border-blue-400/50'
                      })) || [],
                      metrics: [
                        { label: '카테고리', value: project.category },
                        { label: '완료일', value: project.date ? `${project.date.slice(0,2)}.${project.date.slice(2,4)}` : 'N/A' },
                        { label: '상태', value: '완료' }
                      ]
                    };
                  
                    return (
                      <motion.div key={project.id} variants={cardVariants}>
                        <ProjectCard 
                          title={project.title}
                          description={project.description || project.longDescription || "혁신적인 기술로 비즈니스 문제를 해결하는 프로젝트입니다."}
                          icon={projectData.icon}
                          status="완료"
                          gradientFrom={projectData.gradientFrom}
                          gradientTo={projectData.gradientTo}
                          techStack={projectData.techStack}
                          metrics={projectData.metrics}
                          challenge={projectData.challenge}
                          solution={projectData.solution}
                          impact={projectData.impact}
                          clientType={projectData.clientType}
                          industry={projectData.industry}
                          timeline={`${3 + index}개월`}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* All Projects Button */}
                <motion.div 
                  className="text-center mt-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="/portfolio"
                    className="inline-flex items-center px-8 py-4 bg-brand-gold text-brand-navy font-bold text-lg rounded-2xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    모든 프로젝트 보기
                    <motion.span 
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.section>

            {/* Contact CTA Section */}
            <motion.section 
              className="py-24 sm:py-32 bg-brand-navy text-white relative overflow-hidden"
            >
              <div className="absolute inset-0">
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full filter blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
              </div>

              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                  className="text-center max-w-3xl mx-auto"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.h2 
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-brand-gold"
                  >
                    함께 만들어가요
                  </motion.h2>
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl mb-12 text-gray-300"
                  >
                    당신의 아이디어를 현실로 만들어줄 파트너를 찾고 계신가요?
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                    variants={itemVariants}
                  >
                    <motion.a
                      href="/contact"
                      className="px-8 py-4 bg-brand-gold text-brand-navy font-bold text-lg rounded-2xl hover:shadow-2xl transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      프로젝트 상담하기
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;