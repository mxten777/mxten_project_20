import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-width section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold">바이브코딩</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              혁신적인 MVP 개발로 기업의 디지털 전환을 가속화하는 전문 개발팀입니다.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:hello@vibecoding.com"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="이메일"
              >
                📧
              </a>
              <a
                href="https://linkedin.com/company/vibecoding"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a
                href="https://github.com/vibecoding"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                🐙
              </a>
              <a
                href="https://instagram.com/vibecoding"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">빠른 링크</h3>
            <div className="space-y-3">
              <Link
                to="/"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                홈
              </Link>
              <Link
                to="/portfolio"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                포트폴리오
              </Link>
              <Link
                to="/about"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                회사소개
              </Link>
              <Link
                to="/contact"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                연락처
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">서비스</h3>
            <div className="space-y-3 text-gray-300">
              <div>MVP 개발</div>
              <div>풀스택 개발</div>
              <div>AI 통합 솔루션</div>
              <div>모바일 앱 개발</div>
              <div>기술 컨설팅</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">연락처</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-2">
                <span>📧</span>
                <a
                  href="mailto:hello@vibecoding.com"
                  className="hover:text-white transition-colors"
                >
                  hello@vibecoding.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span>📞</span>
                <a
                  href="tel:+82-2-1234-5678"
                  className="hover:text-white transition-colors"
                >
                  +82-2-1234-5678
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span>📍</span>
                <div>
                  서울특별시 강남구 테헤란로 123<br />
                  바이브타워 15층
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span>🕐</span>
                <div>평일 09:00 - 18:00 (KST)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold mb-2">최신 소식 받기</h3>
            <p className="text-gray-300 mb-4 text-sm">
              새로운 프로젝트와 기술 트렌드 소식을 이메일로 받아보세요
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              />
              <button className="px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors whitespace-nowrap">
                구독
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} 바이브코딩 (VibeCoding). All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-white transition-colors">
                이용약관
              </a>
              <a href="#" className="hover:text-white transition-colors">
                쿠키정책
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;