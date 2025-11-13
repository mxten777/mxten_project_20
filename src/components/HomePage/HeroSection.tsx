import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { projects } from '../../data/projects';
import { companyInfo } from '../../data/company';

const HeroSection: React.FC = () => {
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
          className="inline-flex items-center px-6 py-3 rounded-full bg-brand-accent/10 dark:bg-brand-accent/20 border border-brand-accent/30 backdrop-blur-sm mb-6 sm:mb-8"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 215, 0, 0.15)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="w-2 h-2 bg-brand-accent rounded-full mr-3"
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
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight text-center text-brand-navy dark:text-brand-accent px-4 sm:px-0"
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
            className="inline-block mt-6 px-8 py-3 rounded-xl bg-brand-accent dark:bg-brand-navy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -1, 1, 0],
              transition: { duration: 0.3 }
            }}
          >
            <span className="font-black text-brand-navy dark:text-brand-accent text-xl sm:text-2xl md:text-3xl tracking-tight">바이칼시스템즈</span>
          </motion.div>
        </motion.h1>

        {/* Impactful Personal Story with Staggered Animation */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 sm:mb-12"
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 leading-relaxed max-w-4xl mx-auto font-light px-4 sm:px-0 text-brand-navy dark:text-gray-200">
            <span className="font-semibold text-brand-accent">1년+ {companyInfo.stats.projectsCompleted}+ 프로젝트</span>를 통해 쌓은 경험으로<br className="hidden sm:block" />
            <span className="font-bold">스타트업부터 대기업까지</span> 신뢰받는 개발 파트너
          </p>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-medium text-brand-navy dark:text-brand-accent"
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
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-brand-accent text-brand-navy font-bold text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-brand-accent to-yellow-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <span className="relative z-10">프로젝트 둘러보기</span>
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-brand-navy rounded-full"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          
          <motion.a
            href="#contact"
            className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-brand-accent text-brand-accent font-bold text-base sm:text-lg rounded-xl hover:bg-brand-accent hover:text-brand-navy transition-all duration-300 w-full sm:w-auto text-center"
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
        <div className="w-6 h-10 border-2 border-brand-accent rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-brand-accent rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
