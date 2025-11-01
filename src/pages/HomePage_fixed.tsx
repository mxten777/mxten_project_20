import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const HomePage: React.FC = () => {
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
                  rotateX: useTransform(mouseYSpring, [-50, 50], [2, -2]),
                  rotateY: useTransform(mouseXSpring, [-50, 50], [-2, 2])
                }}
              >
                <motion.div 
                  className="absolute top-20 left-20 w-72 h-72 bg-purple-800 rounded-full mix-blend-lighten filter blur-2xl opacity-30"
                  style={{
                    x: useTransform(mouseXSpring, [-50, 50], [-10, 10]),
                    y: useTransform(mouseYSpring, [-50, 50], [-5, 5])
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
                    x: useTransform(mouseXSpring, [-50, 50], [15, -15]),
                    y: useTransform(mouseYSpring, [-50, 50], [8, -8])
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
                    x: useTransform(mouseXSpring, [-50, 50], [-8, 8]),
                    y: useTransform(mouseYSpring, [-50, 50], [12, -12])
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
                    x: useTransform(mouseXSpring, [-50, 50], [20, -20]),
                    y: useTransform(mouseYSpring, [-50, 50], [15, -15])
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
                    x: useTransform(mouseXSpring, [-50, 50], [-25, 25]),
                    y: useTransform(mouseYSpring, [-50, 50], [-10, 10])
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
                  className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight text-center text-[#181C2A] dark:text-[#FFD700]"
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
                    <span className="font-black text-[#181C2A] dark:text-[#FFD700] text-2xl md:text-3xl tracking-tight">바이브코딩</span>
                  </motion.div>
                </motion.h1>

                {/* Impactful Personal Story with Staggered Animation */}
                <motion.div 
                  variants={itemVariants}
                  className="mb-8 sm:mb-12"
                >
                  <p className="text-xl sm:text-2xl md:text-3xl mb-6 leading-relaxed max-w-4xl mx-auto font-light px-4 sm:px-0 text-[#181C2A] dark:text-gray-200">
                    <span className="font-semibold text-[#FFD700]">5년간 50+개 프로젝트</span>를 통해 쌓은 경험으로<br className="hidden sm:block" />
                    <span className="font-bold">스타트업부터 대기업까지</span> 신뢰받는 개발 파트너
                  </p>
                  <motion.div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-medium text-[#181C2A] dark:text-[#FFD700]"
                    variants={containerVariants}
                  >
                    <motion.div variants={itemVariants} className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      월 평균 10만+ 사용자 서비스 운영
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                      99.9% 서비스 안정성 달성
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
                    className="group relative px-8 py-4 bg-[#FFD700] text-[#181C2A] font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
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
                    className="group px-8 py-4 border-2 border-[#FFD700] text-[#FFD700] font-bold text-lg rounded-xl hover:bg-[#FFD700] hover:text-[#181C2A] transition-all duration-300"
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
                    className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-[#181C2A] dark:text-[#FFD700]"
                  >
                    최첨단 기술 스택
                  </motion.h2>
                  <motion.p 
                    variants={itemVariants}
                    className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                  >
                    검증된 최신 기술 스택으로 안정적이고 확장 가능한 솔루션을 제공합니다
                  </motion.p>
                </div>
                
                {/* Advanced 3D Interactive Tech Grid */}
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-4 sm:px-0"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* React with Enhanced 3D */}
                  <motion.div 
                    className="group text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -10 }}
                    style={{
                      rotateX: useTransform(mouseYSpring, [-50, 50], [-5, 5]),
                      rotateY: useTransform(mouseXSpring, [-50, 50], [-5, 5])
                    }}
                  >
                    <motion.div 
                      className="relative w-20 h-20 mx-auto mb-4"
                      style={{ perspective: "1000px" }}
                    >
                      <motion.div 
                        className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl cursor-pointer relative overflow-hidden"
                        whileHover={{ 
                          rotateY: -15,
                          rotateX: 10,
                          z: 50
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <motion.span 
                          className="text-3xl relative z-10"
                          whileHover={{ scale: 1.3, rotate: 180 }}
                          transition={{ duration: 0.6 }}
                        >
                          ⚛️
                        </motion.span>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                        <motion.div
                          className="absolute -top-1 -right-1 w-5 h-5 bg-blue-300 rounded-full opacity-70"
                          animate={{
                            scale: [1, 1.5, 1],
                            rotate: [0, 360, 0]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </motion.div>
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">React</h3>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '95%'}}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">전문도 95%</p>
                    </div>
                  </motion.div>

                  {/* Node.js with Enhanced 3D */}
                  <motion.div 
                    className="group text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -10 }}
                    style={{
                      rotateX: useTransform(mouseYSpring, [-50, 50], [5, -5]),
                      rotateY: useTransform(mouseXSpring, [-50, 50], [5, -5])
                    }}
                  >
                    <motion.div 
                      className="relative w-20 h-20 mx-auto mb-4"
                      style={{ perspective: "1000px" }}
                    >
                      <motion.div 
                        className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl cursor-pointer relative overflow-hidden"
                        whileHover={{ 
                          rotateY: 15,
                          rotateX: -10,
                          z: 50
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <motion.span 
                          className="text-3xl relative z-10"
                          animate={{ 
                            rotate: [0, 10, -10, 0] 
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          🚀
                        </motion.span>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                        <motion.div
                          className="absolute bottom-1 left-1 w-4 h-4 bg-green-300 rounded-full opacity-60"
                          animate={{
                            scale: [0.5, 1.2, 0.5],
                            x: [0, 8, 0]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                      </motion.div>
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 transition-colors duration-300">Node.js</h3>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-green-500 h-1.5 rounded-full" style={{width: '92%'}}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">전문도 92%</p>
                    </div>
                  </motion.div>

                  {/* Python with Enhanced 3D */}
                  <motion.div 
                    className="group text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -10 }}
                    style={{
                      rotateX: useTransform(mouseYSpring, [-50, 50], [-8, 8]),
                      rotateY: useTransform(mouseXSpring, [-50, 50], [-8, 8])
                    }}
                  >
                    <motion.div 
                      className="relative w-20 h-20 mx-auto mb-4"
                      style={{ perspective: "1000px" }}
                    >
                      <motion.div 
                        className="w-full h-full bg-gradient-to-br from-yellow-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl cursor-pointer relative overflow-hidden"
                        whileHover={{ 
                          rotateY: -20,
                          rotateX: 15,
                          z: 50
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <motion.span 
                          className="text-3xl relative z-10"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            y: [-2, 2, -2]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          🐍
                        </motion.span>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                        <motion.div
                          className="absolute top-2 right-1 w-3 h-3 bg-yellow-300 rounded-full opacity-80"
                          animate={{
                            scale: [1, 1.8, 1],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                        />
                      </motion.div>
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 transition-colors duration-300">Python</h3>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '91%'}}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">전문도 91%</p>
                    </div>
                  </motion.div>
                  
                  {/* AI/ML with Enhanced 3D */}
                  <motion.div 
                    className="group text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -10 }}
                  >
                    <motion.div 
                      className="relative w-20 h-20 mx-auto mb-4"
                      style={{ perspective: "1000px" }}
                    >
                      <motion.div 
                        className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl cursor-pointer"
                        whileHover={{ 
                          rotateY: -20,
                          rotateX: 15,
                          z: 50
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <motion.span 
                          className="text-3xl"
                          whileHover={{ scale: 1.4, rotate: 360 }}
                          transition={{ duration: 0.8 }}
                        >
                          🤖</motion.span>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                      </motion.div>
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors duration-300">AI/ML</h3>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-purple-500 h-1.5 rounded-full" style={{width: '89%'}}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">전문도 89%</p>
                    </div>
                  </motion.div>
                  
                  {/* AWS with Enhanced 3D */}
                  <motion.div 
                    className="group text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -10 }}
                    style={{
                      rotateX: useTransform(mouseYSpring, [-50, 50], [8, -8]),
                      rotateY: useTransform(mouseXSpring, [-50, 50], [8, -8])
                    }}
                  >
                    <motion.div 
                      className="relative w-20 h-20 mx-auto mb-4"
                      style={{ perspective: "1000px" }}
                    >
                      <motion.div 
                        className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl cursor-pointer relative overflow-hidden"
                        whileHover={{ 
                          rotateY: -25,
                          rotateX: 15,
                          z: 50
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <motion.span 
                          className="text-3xl relative z-10"
                          animate={{ y: [-1, 1, -1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          ☁️
                        </motion.span>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                        <motion.div
                          className="absolute -top-1 -right-1 w-4 h-4 bg-orange-300 rounded-full opacity-70"
                          animate={{
                            scale: [0.8, 1.2, 0.8],
                            x: [0, 5, 0]
                          }}
                          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                        />
                      </motion.div>
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors duration-300">AWS</h3>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-orange-500 h-1.5 rounded-full" style={{width: '88%'}}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">전문도 88%</p>
                    </div>
                  </motion.div>

                  {/* Docker with Enhanced 3D */}
                  <motion.div 
                    className="group text-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -10 }}
                    style={{
                      rotateX: useTransform(mouseYSpring, [-50, 50], [-5, 5]),
                      rotateY: useTransform(mouseXSpring, [-50, 50], [-10, 10])
                    }}
                  >
                    <motion.div 
                      className="relative w-20 h-20 mx-auto mb-4"
                      style={{ perspective: "1000px" }}
                    >
                      <motion.div 
                        className="w-full h-full bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl cursor-pointer relative overflow-hidden"
                        whileHover={{ 
                          rotateY: 20,
                          rotateX: -10,
                          z: 50
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <motion.span 
                          className="text-3xl relative z-10"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0]
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          🐳
                        </motion.span>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                        <motion.div
                          className="absolute top-1 right-1 w-3 h-3 bg-cyan-300 rounded-full opacity-80"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}
                        />
                      </motion.div>
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors duration-300">Docker</h3>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-cyan-500 h-1.5 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">전문도 85%</p>
                    </div>
                  </motion.div>
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
                    className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-[#181C2A] dark:text-[#FFD700]"
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
                  {projects.slice(0, 6).map((project, index) => (
                    <motion.div key={project.id} variants={cardVariants}>
                      <ProjectCard 
                        project={{
                          ...project,
                          challenge: project.challenge || "복잡한 비즈니스 요구사항을 효율적으로 해결해야 하는 도전",
                          solution: project.solution || "최신 기술 스택과 최적화된 아키텍처로 안정적인 솔루션 구현",
                          impact: project.impact || "사용자 만족도 향상과 비즈니스 성과 달성",
                          clientType: project.clientType || (index < 2 ? "스타트업" : index < 4 ? "중견기업" : "대기업"),
                          industry: project.industry || ["웹 개발", "기술 솔루션"][Math.floor(Math.random() * 2)],
                          timeline: project.timeline || `${2 + Math.floor(Math.random() * 4)}개월`
                        }} 
                      />
                    </motion.div>
                  ))}
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