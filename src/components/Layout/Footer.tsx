import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <footer className="relative bg-gradient-to-br from-brand-navy via-brand-navy-dark to-brand-navy-darker dark:from-black dark:via-brand-navy-darker dark:to-black text-white overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="section-container relative z-10 py-16 sm:py-20 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-2xl flex items-center justify-center shadow-premium"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-brand-navy font-black text-xl">B</span>
                </motion.div>
                <span className="text-2xl font-black gradient-text group-hover:scale-105 transition-transform">
                  바이칼시스템즈
                </span>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                혁신적인 MVP 개발로 기업의 디지털 전환을 가속화하는 전문 개발팀입니다.
              </p>
              
              <div className="flex gap-3">
                {[
                  { href: 'mailto:hello@baikalsystems.com', label: '이메일', icon: '📧', color: 'from-red-500 to-orange-500' },
                  { href: 'https://linkedin.com/company/baikalsystems', label: 'LinkedIn', icon: '💼', color: 'from-blue-600 to-blue-700' },
                  { href: 'https://github.com/baikalsystems', label: 'GitHub', icon: '🐙', color: 'from-gray-700 to-gray-900' },
                  { href: 'https://instagram.com/baikalsystems', label: 'Instagram', icon: '📷', color: 'from-purple-500 to-pink-500' },
                ].map((social, index) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center shadow-premium hover:shadow-premium-lg transition-all`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-black mb-6 text-brand-gold">빠른 링크</h3>
              <div className="space-y-3">
                {[
                  { to: '/', label: '홈', icon: '🏠' },
                  { to: '/portfolio', label: '포트폴리오', icon: '💼' },
                  { to: '/about', label: '회사소개', icon: '👥' },
                  { to: '/contact', label: '연락처', icon: '📞' }
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center gap-3 text-gray-300 hover:text-brand-gold hover:translate-x-2 transition-all group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-black mb-6 text-brand-gold">서비스</h3>
              <div className="space-y-3">
                {[
                  { label: 'MVP 개발', icon: '🚀' },
                  { label: '풀스택 개발', icon: '💻' },
                  { label: 'AI 통합 솔루션', icon: '🤖' },
                  { label: '모바일 앱 개발', icon: '📱' },
                  { label: '기술 컨설팅', icon: '💡' }
                ].map((service) => (
                  <div
                    key={service.label}
                    className="flex items-center gap-3 text-gray-300 hover:text-brand-gold hover:translate-x-2 transition-all group cursor-pointer"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{service.icon}</span>
                    <span className="font-medium">{service.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-black mb-6 text-brand-gold">연락처</h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@vibecoding.com"
                  className="flex items-start gap-3 text-gray-300 hover:text-brand-gold transition-colors group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">📧</span>
                  <span className="font-medium">hello@vibecoding.com</span>
                </a>
                <a
                  href="tel:+82-2-1234-5678"
                  className="flex items-start gap-3 text-gray-300 hover:text-brand-gold transition-colors group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">📞</span>
                  <span className="font-medium">+82-2-1234-5678</span>
                </a>
                <div className="flex items-start gap-3 text-gray-300">
                  <span className="text-lg">📍</span>
                  <div className="font-medium">
                    서울특별시 강남구 테헤란로 123<br />
                    바이브타워 15층
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <span className="text-lg">🕐</span>
                  <span className="font-medium">평일 09:00 - 18:00 (KST)</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Premium Newsletter Section */}
          <motion.div
            variants={itemVariants}
            className="relative rounded-3xl overflow-hidden mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold opacity-10" />
            <div className="relative p-8 sm:p-10 lg:p-12 border-2 border-brand-gold/20">
              <div className="max-w-2xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="inline-block mb-4"
                >
                  <span className="text-4xl">💌</span>
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-black mb-3 gradient-text">최신 소식 받기</h3>
                <p className="text-gray-300 mb-6 text-lg">
                  새로운 프로젝트와 기술 트렌드 소식을 이메일로 받아보세요
                </p>
                
                {isSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-3 py-4 px-6 bg-green-500/20 border-2 border-green-500 rounded-2xl"
                  >
                    <span className="text-2xl">✓</span>
                    <span className="font-bold text-green-400">구독이 완료되었습니다!</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="이메일 주소를 입력하세요"
                      className="flex-1 px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-gray-400 
                               focus:outline-none focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/20 transition-all
                               backdrop-blur-sm font-medium"
                    />
                    <motion.button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-navy rounded-2xl 
                               font-black hover:shadow-premium-lg transition-all whitespace-nowrap"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      구독하기 →
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-gray-300 text-sm sm:text-base text-center md:text-left">
                © {currentYear} <span className="font-black gradient-text">바이칼시스템즈 (Baikal Systems)</span>. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
                {['개인정보처리방침', '이용약관', '쿠키정책'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-300 hover:text-brand-gold transition-colors font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Made with love badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-6 text-gray-400 text-sm"
            >
              Made with <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block text-red-500"
              >❤️</motion.span> in Seoul
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;