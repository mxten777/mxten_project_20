import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: '/', label: '홈' },
    { to: '/portfolio', label: '포트폴리오' },
    { to: '/about', label: '회사소개' },
    { to: '/contact', label: '연락처' }
  ];

  const legalLinks = [
    { label: '개인정보처리방침', href: '#' },
    { label: '이용약관', href: '#' }
  ];

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-4 group">
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
              <div>
                <div className="text-lg font-black text-white">바이칼시스템즈</div>
                <div className="text-xs text-gray-400 tracking-widest">BAIKAL SYSTEMS</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              혁신적인 기술로 비즈니스의<br />디지털 전환을 가속화합니다
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-brand-accent mb-4">바로가기</h3>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-gray-400 hover:text-brand-accent text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-brand-accent mb-4">연락처</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="mailto:hello@baikalsystems.com" className="block hover:text-brand-accent transition-colors">
                hello@baikalsystems.com
              </a>
              <p>평일 09:00 - 18:00 (KST)</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>
            © {currentYear} 바이칼시스템즈. All rights reserved.
          </div>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-brand-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;