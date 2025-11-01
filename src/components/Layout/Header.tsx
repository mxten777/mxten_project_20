  // 현재 경로와 네비게이션 링크 일치 여부
  const isActiveLink = (path: string) => location.pathname === path;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 페이지 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: '홈' },
    { path: '/portfolio', label: '포트폴리오' },
    { path: '/about', label: '회사소개' },
    { path: '/contact', label: '연락처' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-[#181e2a] backdrop-blur-xl border-b border-gray-100 dark:border-gray-800'
          : 'bg-white dark:bg-[#181e2a] backdrop-blur-xl border-b border-gray-100 dark:border-gray-800'
      }`}
    >
  <div className="container-width section-padding">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#181C2A] dark:bg-[#FFD700] rounded-2xl flex items-center justify-center">
              <span className="text-[#FFD700] dark:text-[#181C2A] font-extrabold text-lg tracking-widest">V</span>
            </div>
            <span className="text-2xl md:text-3xl font-extrabold tracking-wide text-[#181C2A] dark:text-white">
              바이브코딩
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-semibold text-lg px-2 py-1 transition-all duration-200
                  ${isActiveLink(link.path)
                    ? 'text-[#181C2A] dark:text-[#FFD700] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#FFD700] after:rounded-full after:content-[""]'
                    : 'text-[#181C2A] dark:text-gray-200 hover:text-[#FFD700] dark:hover:text-[#FFD700]'}
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="px-6 py-2 rounded-xl font-bold text-[#181C2A] dark:text-[#181C2A] bg-[#FFD700] hover:bg-[#181C2A] hover:text-[#FFD700] dark:bg-[#FFD700] dark:hover:bg-[#181C2A] dark:hover:text-[#FFD700] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2"
            >
              프로젝트 문의
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-2 rounded-xl bg-white dark:bg-[#181e2a] border border-gray-200 dark:border-gray-700 backdrop-blur-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 토글"
          >
            <span
              className={`w-6 h-0.5 rounded bg-[#181C2A] dark:bg-[#FFD700] transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 rounded bg-[#181C2A] dark:bg-[#FFD700] transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 rounded bg-[#181C2A] dark:bg-[#FFD700] transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-6 space-y-4 bg-white dark:bg-[#181e2a] rounded-2xl mt-2 mx-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-4 rounded-xl font-semibold text-lg transition-all hover:bg-[#F5F6FA] dark:hover:bg-[#232B44] hover:text-[#FFD700] dark:hover:text-[#FFD700] ${
                  isActiveLink(link.path)
                    ? 'text-[#FFD700] bg-[#181C2A] dark:bg-[#FFD700] dark:text-[#181C2A]'
                    : 'text-[#181C2A] dark:text-gray-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                className="block w-full text-center px-6 py-3 rounded-xl font-bold text-[#181C2A] dark:text-[#181C2A] bg-[#FFD700] hover:bg-[#181C2A] hover:text-[#FFD700] dark:bg-[#FFD700] dark:hover:bg-[#181C2A] dark:hover:text-[#FFD700] transition-all duration-200"
              >
                프로젝트 문의
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;