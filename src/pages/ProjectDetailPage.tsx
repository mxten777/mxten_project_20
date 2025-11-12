import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { categories } from '../data/projects';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">프로젝트를 찾을 수 없습니다.</h2>
          <button className="btn-primary" onClick={() => navigate(-1)}>돌아가기</button>
        </div>
      </div>
    );
  }

  // 카테고리 컬러/정보 추출
  const cat = categories.find(c => c.id === project.category) || { color: '#1A237E', name: project.category, icon: '📁' };
  const isFeatured = project.tags && project.tags.includes('대표');

  return (
  <div className="min-h-screen py-8 bg-white dark:bg-brand-navy transition-colors">
      <div className="container-width section-padding">
        {/* Back Button */}
        <div className="mb-8">
          <button className="flex items-center gap-2 text-brand-navy dark:text-brand-gold font-bold hover:underline" onClick={() => navigate(-1)}>
            ← 포트폴리오로 돌아가기
          </button>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{cat.icon}</span>
              <span className="px-3 py-1 rounded-full text-sm font-bold bg-brand-gold text-brand-navy border-2 border-brand-gold">
                {cat.name}
              </span>
              {/* 대표/프리미엄 뱃지 */}
              {isFeatured && (
                <span className="px-3 py-1 rounded-full font-bold text-xs bg-brand-gold text-brand-navy border-2 border-brand-gold">대표</span>
              )}
              {project.date && (
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-brand-gold/20 text-brand-navy border-2 border-brand-gold">
                  {project.date}
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold mb-4 text-brand-navy dark:text-brand-gold">
              {project.title}
            </h1>

            {project.description && (
              <p className="text-xl mb-6 text-brand-navy dark:text-gray-200">{project.description}</p>
            )}

            {project.longDescription && (
              <p className="mb-8 text-brand-navy dark:text-gray-200">{project.longDescription}</p>
            )}

            <div className="flex gap-4 mb-8">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-bold text-base bg-brand-gold text-brand-navy border-2 border-brand-gold hover:bg-brand-navy hover:text-brand-gold dark:bg-brand-gold dark:text-brand-navy dark:hover:bg-brand-navy dark:hover:text-brand-gold transition-all duration-200"
                >외부 포트폴리오</a>
              )}
            </div>

            {/* 태그 */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags?.map(tag => (
                <span key={tag} className="px-2 py-1 rounded-full text-xs font-semibold bg-brand-gold/20 text-brand-navy border border-brand-gold">{tag}</span>
              ))}
            </div>
          </div>

          <div>
            {/* Project Images */}
            {project.images && project.images.length > 0 ? (
              <div className="mb-4">
                {project.images.map(img => (
                  <img
                    key={img.id}
                    src={img.url}
                    alt={img.alt}
                    className="rounded-xl mb-2 w-full object-cover"
                    style={{ maxHeight: '320px' }}
                  />
                ))}
              </div>
            ) : (
              <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-4xl text-brand-navy dark:text-brand-gold">🖥️</span>
              </div>
            )}

            {/* 기술스택 */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-6">
                <div className="font-bold text-brand-navy dark:text-brand-gold mb-2">기술 스택</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech.name} className="px-3 py-1 rounded-lg text-sm font-medium border border-brand-gold text-brand-navy dark:text-brand-gold">
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;