import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
  status?: string;
  gradientFrom: string;
  gradientTo: string;
  techStack: { name: string; color: string; bg: string; border: string }[];
  metrics: { label: string; value: string }[];
  onClick?: () => void;
  // 케이스 스터디 강화를 위한 새로운 props
  challenge?: string;
  solution?: string;
  impact?: string;
  industry?: string;
  timeline?: string;
  teamSize?: string;
  clientType?: 'startup' | 'enterprise' | 'government' | 'healthcare' | 'education';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  icon,
  status = '완료',
  gradientFrom,
  gradientTo,
  techStack,
  metrics,
  onClick,
  challenge,
  solution,
  impact,
  industry,
  timeline,
  clientType = 'enterprise',
}) => {
  const clientTypeIcons = {
    startup: '🚀',
    enterprise: '🏢',
    government: '🏛️',
    healthcare: '🏥',
    education: '🎓'
  };

  const getClientTypeName = (type: string): string => {
    const typeMap: Record<string, string> = {
      startup: '스타트업',
      enterprise: '기업',
      government: '정부/공공',
      healthcare: '헬스케어',
      education: '교육'
    };
    return typeMap[type] || type;
  };



  return (
    <motion.div 
      className="group relative cursor-pointer" 
      onClick={onClick}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Premium Glow Effect */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent via-primary-500 to-secondary-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: '200% 200%' }}
      />
      
      {/* Main Card with Premium Styling */}
      <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-brand-accent/30 transition-all duration-500 shadow-premium-lg group-hover:shadow-premium-xl">
        {/* Enhanced Project Hero */}
        <div
          className="relative h-52 sm:h-60 lg:h-72 bg-gradient-to-br rounded-2xl mb-6 sm:mb-8 overflow-hidden group-hover:shadow-inner-premium transition-all duration-500"
          style={{ 
            backgroundImage: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
          }}
        >
          {/* Optimized overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Top Badges - Simplified Layout */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-start justify-between gap-2 z-10">
            {/* Left: Status & Category */}
            <div className="flex flex-wrap gap-2">
              <motion.span 
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-success-500/95 backdrop-blur-md text-white rounded-lg text-xs sm:text-sm font-bold shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                ✓ {status}
              </motion.span>
              <motion.span 
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900/95 backdrop-blur-md text-brand-accent rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {clientTypeIcons[clientType]}
                <span>{getClientTypeName(clientType)}</span>
              </motion.span>
            </div>
            
            {/* Right: Main Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-3xl sm:text-4xl drop-shadow-2xl filter brightness-110">
                {icon}
              </span>
            </motion.div>
          </div>

          {/* Bottom Info Box - Cleaner Design */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 sm:p-6">
            {challenge && (
              <div className="mb-2">
                <div className="text-xs sm:text-sm font-bold text-brand-accent mb-1.5 flex items-center gap-1.5">
                  <span>🎯</span>
                  <span>핵심 과제</span>
                </div>
                <div className="text-xs sm:text-sm leading-relaxed text-gray-100 line-clamp-2">
                  {challenge}
                </div>
              </div>
            )}
            {impact && (
              <div className="text-xs sm:text-sm text-success-400 font-semibold flex items-center gap-1.5">
                <span>📈</span>
                <span className="line-clamp-1">{impact}</span>
              </div>
            )}
          </div>

          {/* Enhanced Hover Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/95 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div className="text-white space-y-4">
              {challenge && (
                <div>
                  <div className="text-sm font-bold text-yellow-300 mb-2 flex items-center gap-2">
                    🎯 <span>해결한 문제</span>
                  </div>
                  <div className="text-sm leading-relaxed">{challenge}</div>
                </div>
              )}
              {solution && (
                <div>
                  <div className="text-sm font-bold text-blue-300 mb-2 flex items-center gap-2">
                    💡 <span>솔루션 접근법</span>
                  </div>
                  <div className="text-sm leading-relaxed">{solution}</div>
                </div>
              )}
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-white text-sm font-semibold">상세 케이스 스터디 보기</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="text-white text-lg">→</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Enhanced Project Info */}
        <div className="space-y-4 sm:space-y-5">
          {/* Title */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-2 leading-tight">
              {title}
            </h3>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-400">
              {industry && (
                <div className="flex items-center gap-1.5">
                  <span>🏭</span>
                  <span>{industry}</span>
                </div>
              )}
              {timeline && (
                <div className="flex items-center gap-1.5">
                  <span>📅</span>
                  <span>{timeline}</span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-800/40 rounded-xl p-3 sm:p-4">
            <p className="text-white leading-relaxed text-sm sm:text-base">{description}</p>
          </div>

          {/* Impact Statement */}
          {impact && (
            <motion.div 
              className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-3 sm:p-4 border border-green-400/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-green-300 mb-2">
                <span>📈</span>
                <span>핵심 성과</span>
              </div>
              <div className="text-sm text-white font-medium leading-relaxed">{impact}</div>
            </motion.div>
          )}

          {/* Tech Stack */}
          <div className="bg-gray-800/40 rounded-xl p-3 sm:p-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white mb-3">
              <span>🛠</span>
              <span>핵심 기술스택</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  className={`px-3 py-1.5 ${tech.bg} ${tech.color} rounded-lg text-xs font-semibold ${tech.border} border`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="bg-gradient-to-r from-blue-800/40 to-purple-800/40 rounded-xl p-3 sm:p-4 border border-blue-400/30">
            <div className="text-xs sm:text-sm font-bold text-white mb-3 text-center flex items-center justify-center gap-2">
              <span>📊</span>
              <span>핵심 성과 지표</span>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {metrics.map((metric, index) => (
                <motion.div 
                  className="text-center group/metric cursor-default bg-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/20 shadow-lg" 
                  key={metric.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-gray-200 text-xs font-bold uppercase tracking-wide mb-1">{metric.label}</div>
                  <div className="text-white font-black text-base sm:text-xl group-hover/metric:text-blue-300 transition-colors drop-shadow-lg break-words">
                    {metric.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
