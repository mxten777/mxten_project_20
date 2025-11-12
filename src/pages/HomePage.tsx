import React, { useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects, technologies } from '../data/projects';
import { companyInfo } from '../data/company';

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
    }).filter((p): p is typeof projects[0] => p !== null);
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [badgeCount, setBadgeCount] = useState(0);
  const { scrollY } = useScroll();
  
  // Mouse tracking for 3D effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Mouse event handler
  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.1);
    mouseY.set(y * 0.1);
  };

  // Advanced scroll-based animations
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // 3D transform animations
  const backgroundRotateX = useTransform(mouseYSpring, [-50, 50], [2, -2]);
  const backgroundRotateY = useTransform(mouseXSpring, [-50, 50], [-2, 2]);
  const particle1X = useTransform(mouseXSpring, [-50, 50], [-10, 10]);
  const particle1Y = useTransform(mouseYSpring, [-50, 50], [-5, 5]);
  const particle2X = useTransform(mouseXSpring, [-50, 50], [15, -15]);
  const particle2Y = useTransform(mouseYSpring, [-50, 50], [8, -8]);
  const particle3X = useTransform(mouseXSpring, [-50, 50], [-8, 8]);
  const particle3Y = useTransform(mouseYSpring, [-50, 50], [12, -12]);
  const smallParticle1X = useTransform(mouseXSpring, [-50, 50], [20, -20]);
  const smallParticle1Y = useTransform(mouseYSpring, [-50, 50], [15, -15]);
  const smallParticle2X = useTransform(mouseXSpring, [-50, 50], [-25, 25]);
  const smallParticle2Y = useTransform(mouseYSpring, [-50, 50], [-10, 10]);

  useEffect(() => {
    setIsVisible(true);
    
    // Animated badge counter
    const timer = setInterval(() => {
      setBadgeCount(prev => {
        if (prev < projects.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Premium animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  } as const;

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        type: "spring",
        bounce: 0.3
      }
    }
  } as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Enhanced Hero Section with Premium Branding */}
            <motion.section 
              className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              style={{ y: y1, scale, opacity }}
              onMouseMove={handleMouseMove}
            >
              {/* Interactive 3D Background Elements with Mouse Tracking */}
              <motion.div 
                className="absolute inset-0" 
                style={{ 
                  y: y1, 
                  opacity,
                  rotateX: backgroundRotateX,
                  rotateY: backgroundRotateY
                }}
              >
                <motion.div 
                  className="absolute top-20 left-20 w-72 h-72 bg-purple-800 rounded-full mix-blend-lighten filter blur-2xl opacity-30"
                  style={{
                    x: particle1X,
                    y: particle1Y
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-lighten filter blur-2xl opacity-20"
                  style={{
                    x: particle2X,
                    y: particle2Y
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -8, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                />
                <motion.div 
                  className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-700 rounded-full mix-blend-lighten filter blur-2xl opacity-20"
                  style={{
                    x: particle3X,
                    y: particle3Y
                  }}
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ duration: 12, repeat: Infinity, delay: 4 }}
                />
                
                {/* Additional interactive particles */}
                <motion.div
                  className="absolute top-1/3 left-1/3 w-4 h-4 bg-blue-400 rounded-full opacity-60"
                  style={{
                    x: smallParticle1X,
                    y: smallParticle1Y
                  }}
                  animate={{
                    scale: [0.5, 1.5, 0.5],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-green-400 rounded-full opacity-70"
                  style={{
                    x: smallParticle2X,
                    y: smallParticle2Y
                  }}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.4, 0.9, 0.4]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </motion.div>

              <motion.div 
                className="relative z-10 text-center max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Premium Brand Badge with Animation */}
                <motion.div 
                  variants={itemVariants}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-[#FFD700]/10 dark:bg-[#FFD700]/20 border border-[#FFD700]/30 backdrop-blur-sm mb-6 sm:mb-8"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 215, 0, 0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-[#FFD700] rounded-full mr-3"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {badgeCount}개 프로젝트로 증명된 실력
                </motion.div>

                {/* Main Title with Advanced Typography Animation */}
                <motion.h1 
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight text-center text-[#181C2A] dark:text-[#FFD700] px-4 sm:px-0"
                >
                  <motion.span 
                    className="block mb-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    아이디어를 현실로,
                  </motion.span>
                  <motion.span 
                    className="block mb-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    현실을 혁신으로
                  </motion.span>
                  <motion.div 
                    className="inline-block mt-6 px-8 py-3 rounded-xl bg-[#FFD700] dark:bg-[#181C2A]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -1, 1, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    <span className="font-black text-[#181C2A] dark:text-[#FFD700] text-xl sm:text-2xl md:text-3xl tracking-tight">바이칼시스템즈</span>
                  </motion.div>
                </motion.h1>

                {/* Impactful Personal Story with Staggered Animation */}
                <motion.div 
                  variants={itemVariants}
                  className="mb-8 sm:mb-12"
                >
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed max-w-4xl mx-auto font-light px-4 sm:px-0 text-[#181C2A] dark:text-gray-200">
                    <span className="font-semibold text-[#FFD700]">1년+ {companyInfo.stats.projectsCompleted}+ 프로젝트</span>를 통해 쌓은 경험으로<br className="hidden sm:block" />
                    <span className="font-bold">스타트업부터 대기업까지</span> 신뢰받는 개발 파트너
                  </p>
                  <motion.div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-medium text-[#181C2A] dark:text-[#FFD700]"
                    variants={containerVariants}
                  >
                    <motion.div variants={itemVariants} className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      10+ 기업 파트너
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                      {companyInfo.stats.technologiesUsed}+ 기술 스택 활용
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                      평균 40% 성능 최적화 달성
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Enhanced CTA Buttons with Premium Design */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
                >
                  <motion.a
                    href="#projects"
                    className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-[#FFD700] text-[#181C2A] font-bold text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden w-full sm:w-auto text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-yellow-400"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <span className="relative z-10">프로젝트 둘러보기</span>
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-[#181C2A] rounded-full"
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                  
                  <motion.a
                    href="#contact"
                    className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#FFD700] text-[#FFD700] font-bold text-base sm:text-lg rounded-xl hover:bg-[#FFD700] hover:text-[#181C2A] transition-all duration-300 w-full sm:w-auto text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">함께 일하기</span>
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Scroll Indicator with Animation */}
              <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-6 h-10 border-2 border-[#FFD700] rounded-full flex justify-center">
                  <motion.div 
                    className="w-1 h-3 bg-[#FFD700] rounded-full mt-2"
                    animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </motion.section>

            {/* Premium Tech Stack Section with 3D Interactive Elements */}
            <motion.section 
              className="py-16 sm:py-20 lg:py-32 bg-white dark:bg-gray-800 relative overflow-hidden"
              style={{ y: y2 }}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                  className="text-center mb-12 sm:mb-16 lg:mb-20"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.h2 
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#181C2A] dark:text-[#FFD700] px-4 sm:px-0"
                  >
                    최첨단 기술 스택
                  </motion.h2>
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                  >
                    검증된 최신 기술 스택으로 안정적이고 확장 가능한 솔루션을 제공합니다
                  </motion.p>
                </motion.div>
                
                {/* Advanced 3D Interactive Tech Grid - Dynamic from technologies data */}
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-4 sm:px-0"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {technologies.slice(0, 12).map((tech, index) => (
                    <motion.div 
                      key={tech.name}
                      className="group text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, y: -10 }}
                    >
                      <motion.div 
                        className="relative w-20 h-20 mx-auto mb-4"
                        style={{ perspective: "1000px" }}
                      >
                        <motion.div 
                          className={`w-full h-full bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center shadow-2xl cursor-pointer relative overflow-hidden`}
                          whileHover={{ 
                            rotateY: index % 2 === 0 ? -15 : 15,
                            rotateX: index % 3 === 0 ? 10 : -10,
                            z: 50
                          }}
                          transition={{ duration: 0.3 }}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <motion.span 
                            className="text-3xl relative z-10"
                            whileHover={{ scale: 1.3, rotate: index % 2 === 0 ? 180 : -180 }}
                            transition={{ duration: 0.6 }}
                          >
                            {tech.icon}
                          </motion.span>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                        </motion.div>
                      </motion.div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:opacity-80 transition-opacity duration-300">{tech.name}</h3>
                    </motion.div>
                  ))}
                </motion.div>

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
                      <h3 className="text-2xl font-bold mb-2">최적화된 성능</h3>
                      <p className="text-purple-100 mb-4 leading-relaxed">극한의 성능 최적화와<br/>사용자 경험 향상</p>
                      <div className="text-4xl font-black">40%</div>
                      <div className="text-purple-200 text-sm">성능 향상 평균</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Enhanced Projects Section with Case Study Approach */}
            <motion.section 
              id="projects" 
              className="py-16 sm:py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  className="text-center mb-12 sm:mb-16 lg:mb-20"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.h2 
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#181C2A] dark:text-[#FFD700] px-4 sm:px-0"
                  >
                    성공 사례로 증명하는 실력
                  </motion.h2>
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
                  >
                    <span className="font-semibold text-[#FFD700]">실제 비즈니스 문제를 해결</span>하고 <span className="font-bold">측정 가능한 성과</span>를 달성한 프로젝트들
                  </motion.p>
                </motion.div>

                <motion.div 
                  className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {showcaseProjects.map((project, index) => {
                    // 프로젝트별 상세 정보 매핑
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
                        challenge: "기업 데이터 관리 시스템의 효율성 및 보안 강화",
                        solution: "실시간 데이터 동기화 및 권한 기반 접근 제어 시스템",
                        impact: "데이터 처리 속도 60% 향상, 보안 사고 0건 달성",
                        industry: "기업 솔루션",
                        clientType: "enterprise"
                      },
                      'mvp-project-12': {
                        icon: "🎓",
                        gradientFrom: "#8B5CF6",
                        gradientTo: "#7C3AED",
                        challenge: "AI로 복잡한 장부 작성을 간편화하여 소상공인 지원",
                        solution: "개인화된 학습 경로와 AI 기반 자동 분류 시스템",
                        impact: "장부 작성 시간 70% 단축, 세무 정확도 95% 향상",
                        industry: "에듀테크",
                        clientType: "education"
                      },
                      'new-project-40-app': {
                        icon: "🏥",
                        gradientFrom: "#10B981",
                        gradientTo: "#059669",
                        challenge: "정형외과 실시간 예약 시스템의 효율성 및 환자 편의성 개선",
                        solution: "실시간 예약 처리 및 AI 기반 스케줄 최적화 시스템",
                        impact: "예약 처리 시간 70% 단축, 환자 만족도 92% 달성",
                        industry: "헬스케어",
                        clientType: "healthcare"
                      },
                      'mvp-project-30': {
                        icon: "🏛️",
                        gradientFrom: "#EF4444",
                        gradientTo: "#DC2626",
                        challenge: "주민 제보와 민원을 실시간으로 처리하는 투명한 행정 시스템 구축",
                        solution: "위치 기반 제보 시스템과 실시간 처리 현황 추적 플랫폼",
                        impact: "민원 처리 시간 50% 단축, 주민 참여율 3배 증가",
                        industry: "공공 서비스",
                        clientType: "government"
                      },
                      'mvp-project-16': {
                        icon: "❤️‍🩹",
                        gradientFrom: "#10B981",
                        gradientTo: "#059669",
                        challenge: "재가 복지 센터의 통합 관리 효율성 및 서비스 품질 향상",
                        solution: "통합 케어 관리 시스템과 AI 기반 돌봄 스케줄링",
                        impact: "관리 효율성 80% 향상, 서비스 만족도 95% 달성",
                        industry: "사회복지",
                        clientType: "government"
                      },
                      'mxten-project-06': {
                        icon: "🏭",
                        gradientFrom: "#0284C7",
                        gradientTo: "#0369A1",
                        challenge: "제조 현장의 디지털 전환과 실시간 작업 지시 효율화",
                        solution: "모바일/태블릿 기반 디지털 작업지시서 및 실시간 모니터링",
                        impact: "작업 지시 시간 65% 단축, 현장 생산성 45% 향상",
                        industry: "스마트 팩토리",
                        clientType: "enterprise"
                      }
                    };
                    
                    const data = projectInfoMap[project.id] || {
                      icon: "🚀",
                      gradientFrom: "#3B82F6",
                      gradientTo: "#1E40AF",
                      challenge: "혁신적인 비즈니스 솔루션 개발",
                      solution: "최신 기술 스택을 활용한 확장 가능한 시스템 구축",
                      impact: "프로젝트 목표 성공적 달성",
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
                  className="text-center mt-12 sm:mt-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a
                    href="/portfolio"
                    className="inline-flex items-center px-8 py-4 bg-[#FFD700] text-[#181C2A] font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
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
              id="contact"
              className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-[#181C2A] to-gray-900 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0">
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full filter blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
              </div>

              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                  className="text-center max-w-4xl mx-auto"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.h2 
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-[#FFD700]"
                  >
                    함께 혁신을 만들어가요
                  </motion.h2>
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl sm:text-2xl mb-8 sm:mb-12 leading-relaxed text-gray-300"
                  >
                    당신의 아이디어를 현실로 만들어줄 <span className="font-bold text-[#FFD700]">신뢰받는 개발 파트너</span>를 찾고 계신가요?
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    variants={itemVariants}
                  >
                    <motion.a
                      href="mailto:contact@vibecoding.com"
                      className="group px-8 py-4 bg-[#FFD700] text-[#181C2A] font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-2 text-xl">📧</span>
                      프로젝트 상담하기
                    </motion.a>
                    
                    <motion.a
                      href="tel:+82-10-1234-5678"
                      className="group px-8 py-4 border-2 border-[#FFD700] text-[#FFD700] font-bold text-lg rounded-xl hover:bg-[#FFD700] hover:text-[#181C2A] transition-all duration-300 flex items-center"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-2 text-xl">📞</span>
                      직접 통화하기
                    </motion.a>
                  </motion.div>

                  <motion.div 
                    className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                  >
                    <motion.div variants={itemVariants} className="text-center">
                      <div className="text-3xl mb-4">⚡</div>
                      <h3 className="text-xl font-bold mb-2 text-[#FFD700]">빠른 응답</h3>
                      <p className="text-gray-300">24시간 내 응답 보장</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="text-center">
                      <div className="text-3xl mb-4">🎯</div>
                      <h3 className="text-xl font-bold mb-2 text-[#FFD700]">맞춤 솔루션</h3>
                      <p className="text-gray-300">프로젝트별 최적화된 접근</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="text-center">
                      <div className="text-3xl mb-4">🚀</div>
                      <h3 className="text-xl font-bold mb-2 text-[#FFD700]">성과 보장</h3>
                      <p className="text-gray-300">측정 가능한 결과 달성</p>
                    </motion.div>
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