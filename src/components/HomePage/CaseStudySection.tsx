import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';
import { projects } from '../../data/projects';

const CaseStudySection: React.FC = () => {
  // 카테고리별 최신 프로젝트 선정 (6개 카테고리)
  const showcaseProjects = useMemo(() => {
    const targetCategories = ['enterprise', 'education', 'healthcare', 'public', 'welfare', 'industry'];
    return targetCategories.map(category => {
      const categoryProjects = projects.filter(p => p.category === category);
      if (categoryProjects.length > 0) {
        return categoryProjects.sort((a, b) => {
          const dateA = a.date || '0';
          const dateB = b.date || '0';
          return dateB.localeCompare(dateA);
        })[0];
      }
      return null;
    }).filter((p): p is typeof projects[0] => p !== null);
  }, []);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  } as const;

  return (
    <motion.section 
      id="projects" 
      className="py-16 sm:py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-brand-navy dark:text-brand-accent px-4 sm:px-0"
          >
            성공 사례로 증명하는 실력
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            <span className="font-semibold text-brand-accent">실제 비즈니스 문제를 해결</span>하고 <span className="font-bold">측정 가능한 성과</span>를 달성한 프로젝트들
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {showcaseProjects.map((project, index) => {
            // 프로젝트별 상세 정보 매핑
            const projectInfoMap: Record<string, {
              icon: string;
              gradientFrom: string;
              gradientTo: string;
              challenge: string;
              solution: string;
              impact: string;
              industry: string;
              clientType: 'startup' | 'enterprise' | 'government' | 'healthcare' | 'education';
            }> = {
              'dbinfo-final-admin': {
                icon: "🏢",
                gradientFrom: "#3B82F6",
                gradientTo: "#1E40AF",
                challenge: "기업 데이터 관리 시스템의 효율성 및 보안 강화",
                solution: "실시간 데이터 동기화 및 권한 기반 접근 제어 시스템",
                impact: "데이터 처리 속도 60% 향상, 보안 사고 0건 달성",
                industry: "기업 솔루션",
                clientType: "enterprise"
              },
              'mvp-project-12': {
                icon: "🎓",
                gradientFrom: "#8B5CF6",
                gradientTo: "#7C3AED",
                challenge: "AI로 복잡한 장부 작성을 간편화하여 소상공인 지원",
                solution: "개인화된 학습 경로와 AI 기반 자동 분류 시스템",
                impact: "장부 작성 시간 70% 단축, 세무 정확도 95% 향상",
                industry: "에듀테크",
                clientType: "education"
              },
              'new-project-40-app': {
                icon: "🏥",
                gradientFrom: "#10B981",
                gradientTo: "#059669",
                challenge: "정형외과 실시간 예약 시스템의 효율성 및 환자 편의성 개선",
                solution: "실시간 예약 처리 및 AI 기반 스케줄 최적화 시스템",
                impact: "예약 처리 시간 70% 단축, 환자 만족도 92% 달성",
                industry: "헬스케어",
                clientType: "healthcare"
              },
              'mvp-project-30': {
                icon: "🏛️",
                gradientFrom: "#EF4444",
                gradientTo: "#DC2626",
                challenge: "주민 제보와 민원을 실시간으로 처리하는 투명한 행정 시스템 구축",
                solution: "위치 기반 제보 시스템과 실시간 처리 현황 추적 플랫폼",
                impact: "민원 처리 시간 50% 단축, 주민 참여율 3배 증가",
                industry: "공공 서비스",
                clientType: "government"
              },
              'mvp-project-16': {
                icon: "❤️‍🩹",
                gradientFrom: "#10B981",
                gradientTo: "#059669",
                challenge: "재가 복지 센터의 통합 관리 효율성 및 서비스 품질 향상",
                solution: "통합 케어 관리 시스템과 AI 기반 돌봄 스케줄링",
                impact: "관리 효율성 80% 향상, 서비스 만족도 95% 달성",
                industry: "사회복지",
                clientType: "government"
              },
              'mxten-project-06': {
                icon: "🏭",
                gradientFrom: "#0284C7",
                gradientTo: "#0369A1",
                challenge: "제조 현장의 디지털 전환과 실시간 작업 지시 효율화",
                solution: "모바일/태블릿 기반 디지털 작업지시서 및 실시간 모니터링",
                impact: "작업 지시 시간 65% 단축, 현장 생산성 45% 향상",
                industry: "스마트 팩토리",
                clientType: "enterprise"
              }
            };
            
            const data = projectInfoMap[project.id] || {
              icon: "🚀",
              gradientFrom: "#3B82F6",
              gradientTo: "#1E40AF",
              challenge: "혁신적인 비즈니스 솔루션 개발",
              solution: "최신 기술 스택을 활용한 확장 가능한 시스템 구축",
              impact: "프로젝트 목표 성공적 달성",
              industry: "종합",
              clientType: "enterprise" as const
            };
            
            const projectData = {
              icon: data.icon,
              gradientFrom: data.gradientFrom,
              gradientTo: data.gradientTo,
              challenge: data.challenge,
              solution: data.solution,
              impact: data.impact,
              industry: data.industry,
              clientType: data.clientType,
              techStack: project.tags?.slice(1, 4).map(tag => ({
                name: tag,
                color: 'text-blue-300',
                bg: 'bg-blue-500/30',
                border: 'border-blue-400/50'
              })) || [],
              metrics: [
                { label: '카테고리', value: project.category },
                { label: '완료일', value: project.date ? `${project.date.slice(0,2)}.${project.date.slice(2,4)}` : 'N/A' },
                { label: '상태', value: '완료' }
              ]
            };
          
            return (
              <motion.div key={project.id} variants={cardVariants}>
                <ProjectCard 
                  title={project.title}
                  description={project.description || project.longDescription || "혁신적인 기술로 비즈니스 문제를 해결하는 프로젝트입니다."}
                  icon={projectData.icon}
                  status="완료"
                  gradientFrom={projectData.gradientFrom}
                  gradientTo={projectData.gradientTo}
                  techStack={projectData.techStack}
                  metrics={projectData.metrics}
                  challenge={projectData.challenge}
                  solution={projectData.solution}
                  impact={projectData.impact}
                  clientType={projectData.clientType}
                  industry={projectData.industry}
                  timeline={`${3 + index}개월`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* All Projects Button */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-brand-accent text-brand-navy font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            모든 프로젝트 보기
            <motion.span 
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CaseStudySection;
