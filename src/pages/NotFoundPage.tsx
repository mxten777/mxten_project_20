import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="text-6xl mb-8">🤔</div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          페이지를 찾을 수 없습니다
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            홈으로 돌아가기
          </Link>
          <Link to="/portfolio" className="btn-secondary">
            포트폴리오 보기
          </Link>
        </div>
        
        <div className="mt-12 text-gray-500">
          <p>또는 다음 링크들을 확인해보세요:</p>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <Link to="/about" className="text-primary-600 hover:text-primary-700 transition-colors">
              회사 소개
            </Link>
            <Link to="/contact" className="text-primary-600 hover:text-primary-700 transition-colors">
              연락처
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;