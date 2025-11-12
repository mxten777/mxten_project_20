import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 스크롤 감지 - 더 세련된 효과
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 페이지 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActiveLink = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: '홈', icon: '🏠' },
    { path: '/portfolio', label: '포트폴리오', icon: '💼' },
    { path: '/about', label: '회사소개', icon: '👥' },
    { path: '/contact', label: '연락처', icon: '📧' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 dark:bg-brand-navy/90 backdrop-blur-2xl shadow-premium border-b border-gray-200/50 dark:border-gray-700/50'
          : 'bg-white/60 dark:bg-brand-navy/70 backdrop-blur-xl'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Premium Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              className="relative w-12 h-12 lg:w-14 lg:h-14"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Logo Glow Effect */}
              <div className="absolute inset-0 bg-brand-gold/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-brand-navy to-brand-navy-dark dark:from-brand-gold dark:to-brand-gold-dark rounded-2xl flex items-center justify-center shadow-premium">
                <span className="text-brand-gold dark:text-brand-navy font-black text-xl lg:text-2xl tracking-tight">B</span>
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-black tracking-tight text-brand-navy dark:text-white">
                바이칼시스템즈
              </span>
              <span className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-semibold tracking-wide">
                Baikal Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Premium Design */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <motion.div
                  className={`px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 flex items-center gap-2
                    ${isActiveLink(link.path)
                      ? 'text-brand-navy dark:text-brand-gold bg-brand-gold/10 dark:bg-brand-gold/10'
                      : 'text-gray-700 dark:text-gray-200 hover:text-brand-gold dark:hover:text-brand-gold hover:bg-gray-100 dark:hover:bg-gray-800/50'}
                  `}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                </motion.div>
                {isActiveLink(link.path) && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-brand-gold rounded-full"
                    layoutId="activeIndicator"
                    transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Premium CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <motion.button
                className="relative px-8 py-3.5 rounded-2xl font-bold text-base overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold bg-[length:200%_100%] group-hover:bg-[position:100%_0] transition-all duration-500"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-brand-gold shadow-glow-gold transition-opacity duration-300"></div>
                
                {/* Button Content */}
                <span className="relative z-10 text-brand-navy flex items-center gap-2">
                  <span>프로젝트 문의</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button - Premium Design */}
          <motion.button
            className="lg:hidden relative w-12 h-12 flex flex-col justify-center items-center gap-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-premium"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 토글"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="w-6 h-0.5 rounded-full bg-brand-navy dark:bg-brand-gold"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 8 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.span
              className="w-6 h-0.5 rounded-full bg-brand-navy dark:bg-brand-gold"
              animate={{
                opacity: isMenuOpen ? 0 : 1,
                scale: isMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-6 h-0.5 rounded-full bg-brand-navy dark:bg-brand-gold"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            />
          </motion.button>
        </div>

        {/* Mobile Navigation - Premium Design */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="lg:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="py-6 space-y-2 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-brand-navy rounded-2xl mt-4 shadow-premium-lg border border-gray-200 dark:border-gray-700">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-3 mx-3 py-4 px-5 rounded-xl font-bold text-lg transition-all duration-300
                        ${isActiveLink(link.path)
                          ? 'text-brand-navy dark:text-brand-navy bg-brand-gold shadow-premium'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-brand-gold dark:hover:text-brand-gold'
                        }`}
                    >
                      <span className="text-2xl">{link.icon}</span>
                      <span>{link.label}</span>
                      {isActiveLink(link.path) && (
                        <motion.span
                          className="ml-auto text-brand-navy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, type: "spring" }}
                        >
                          ✓
                        </motion.span>
                      )}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  className="pt-4 px-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                >
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-4 rounded-xl font-bold text-lg text-brand-navy bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold shadow-premium hover:shadow-premium-lg transition-all duration-300"
                  >
                    프로젝트 문의 →
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;