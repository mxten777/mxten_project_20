import React from 'react';
import { motion } from 'framer-motion';

const ContactCTASection: React.FC = () => {
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
      id="contact"
      className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-brand-navy to-gray-900 text-white relative overflow-hidden"
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
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-brand-gold"
          >
            함께 혁신을 만들어가요
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl mb-8 sm:mb-12 leading-relaxed text-gray-300"
          >
            당신의 아이디어를 현실로 만들어줄 <span className="font-bold text-brand-gold">신뢰받는 개발 파트너</span>를 찾고 계신가요?
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={itemVariants}
          >
            <motion.a
              href="mailto:contact@vibecoding.com"
              className="group px-8 py-4 bg-brand-gold text-brand-navy font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="mr-2 text-xl">📧</span>
              프로젝트 상담하기
            </motion.a>
            
            <motion.a
              href="tel:+82-10-1234-5678"
              className="group px-8 py-4 border-2 border-brand-gold text-brand-gold font-bold text-lg rounded-xl hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 flex items-center"
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
              <h3 className="text-xl font-bold mb-2 text-brand-gold">빠른 응답</h3>
              <p className="text-gray-300">24시간 내 응답 보장</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2 text-brand-gold">맞춤 솔루션</h3>
              <p className="text-gray-300">프로젝트별 최적화된 접근</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2 text-brand-gold">성과 보장</h3>
              <p className="text-gray-300">측정 가능한 결과 달성</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactCTASection;
