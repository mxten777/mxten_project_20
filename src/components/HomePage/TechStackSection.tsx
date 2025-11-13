import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { technologies } from '../../data/projects';

const TechStackSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

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

  return (
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-brand-navy dark:text-brand-accent px-4 sm:px-0"
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
        
        {/* Advanced 3D Interactive Tech Grid */}
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
  );
};

export default TechStackSection;
