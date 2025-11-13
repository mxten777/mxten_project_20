import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActiveLink = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: '홈' },
    { path: '/portfolio', label: '포트폴리오' },
    { path: '/about', label: '회사소개' },
    { path: '/contact', label: '연락처' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-navy/95 backdrop-blur-xl shadow-lg'
          : 'bg-brand-navy/90 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - 서클 이미지 로고 */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              className="w-10 h-10 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-white"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/images/baikal_logo.png" 
                alt="바이칼시스템즈 로고" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="hidden sm:block">
              <div className="text-xl font-black tracking-tight text-white">
                바이칼시스템즈
              </div>
              <div className="text-xs text-gray-400 tracking-widest">
                BAIKAL SYSTEMS
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - 미니멀 & 고급 */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group px-6 py-2"
              >
                <span className={`text-sm font-semibold transition-colors duration-200 ${
                  isActiveLink(link.path)
                    ? 'text-brand-accent'
                    : 'text-gray-300 group-hover:text-white'
                }`}>
                  {link.label}
                </span>
                {isActiveLink(link.path) && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-brand-accent rounded-full"
                    layoutId="activeIndicator"
                    transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button - 프리미엄 */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <motion.button
                className="px-6 py-2.5 bg-brand-accent text-brand-navy text-sm font-bold rounded-xl hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                문의하기
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button - 심플 */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴"
          >
            <motion.span
              className="w-5 h-0.5 rounded-full bg-white"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 6 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-5 h-0.5 rounded-full bg-white"
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-5 h-0.5 rounded-full bg-white"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -6 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>

        {/* Mobile Menu - 세련되고 미니멀하게 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="lg:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="py-8 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = isActiveLink(link.path);
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.3 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-4 text-lg font-light tracking-wide transition-all duration-300 relative ${
                          isActive
                            ? 'text-brand-accent'
                            : 'text-gray-400'
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="mobile-indicator"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-brand-accent rounded-r"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span className="pl-6">{link.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.08 + 0.1, duration: 0.3 }}
                  className="pt-8"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-4 px-8 bg-brand-accent text-brand-navy text-center text-base font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    문의하기
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