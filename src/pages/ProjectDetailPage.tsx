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

  return (
    <div className="min-h-screen py-8">
      <div className="container-width section-padding">
        {/* Back Button */}
        <div className="mb-8">
          <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors" onClick={() => navigate(-1)}>
            ← 포트폴리오로 돌아가기
          </button>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{categories.find(c => c.id === project.category)?.icon ?? '📁'}</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {categories.find(c => c.id === project.category)?.name ?? project.category}
              </span>
              {project.date && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {project.date}
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>

            {project.description && (
              <p className="text-xl text-gray-600 mb-6">{project.description}</p>
            )}

            {project.longDescription && (
              <p className="text-gray-700 mb-8">{project.longDescription}</p>
            )}

            <div className="flex gap-4 mb-8">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >외부 포트폴리오</a>
              )}
            </div>

            {/* 태그 */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags?.map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">{tag}</span>
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
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-4xl">🖥️</span>
              </div>
            )}

            {/* 기술스택 */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-6">
                <div className="font-bold text-gray-700 mb-2">기술 스택</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech.name} className="px-3 py-1 rounded-lg text-sm font-medium border" style={{ borderColor: tech.color, color: tech.color }}>
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