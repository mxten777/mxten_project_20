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
  teamSize,
  clientType = 'enterprise',
}) => {
  const clientTypeIcons = {
    startup: '🚀',
    enterprise: '🏢',
    government: '🏛️',
    healthcare: '🏥',
    education: '🎓'
  };



  return (
    <motion.div 
      className="group relative cursor-pointer" 
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r from-[${gradientFrom}] to-[${gradientTo}] rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000`}
        whileHover={{ scale: 1.02 }}
      />
      <div className="relative bg-gray-900/80 backdrop-blur-md border border-gray-600/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:bg-gray-900/90 transition-all duration-500 group-hover:shadow-2xl shadow-xl">
        {/* Enhanced Project Hero with Always Visible Content */}
        <div
          className={`relative h-40 sm:h-48 lg:h-56 bg-gradient-to-br from-[${gradientFrom}] to-[${gradientTo}] rounded-xl sm:rounded-2xl mb-4 sm:mb-6 overflow-hidden`}
        >
          {/* Optimized overlay for better readability */}
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Status & Client Type - Enhanced Visibility */}
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-col sm:flex-row gap-1 sm:gap-2">
            <span className="px-2 sm:px-4 py-1 sm:py-2 bg-green-600 backdrop-blur-md text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold shadow-xl border border-green-400/50">
              {status}
            </span>
            <span className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-800/90 backdrop-blur-md text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-2 shadow-xl border border-gray-600/50">
              {clientTypeIcons[clientType]}
              <span className="hidden sm:inline">{clientType}</span>
            </span>
          </div>

          {/* Project Stats - Maximum Visibility */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col gap-1 sm:gap-2">
            {timeline && (
              <div className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-600/90 backdrop-blur-md text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold shadow-xl border border-blue-400/50">
                📅 <span className="hidden sm:inline">{timeline}</span>
              </div>
            )}
            {industry && (
              <div className="px-2 sm:px-4 py-1 sm:py-2 bg-purple-600/90 backdrop-blur-md text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold shadow-xl border border-purple-400/50">
                🏭 <span className="hidden sm:inline">{industry}</span>
              </div>
            )}
          </div>

          {/* Always Visible Core Info - Enhanced */}
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-12 sm:right-16">
            <div className="bg-black/70 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-4 text-white shadow-2xl border border-white/20">
              {challenge && (
                <div className="mb-2 sm:mb-3">
                  <div className="text-xs sm:text-sm font-bold text-yellow-400 mb-1 sm:mb-2 flex items-center gap-1 sm:gap-2">
                    🎯 <span>해결 과제</span>
                  </div>
                  <div className="text-xs sm:text-sm leading-relaxed text-gray-100">{challenge.substring(0, 50)}...</div>
                </div>
              )}
              {impact && (
                <div className="text-xs sm:text-sm text-green-400 font-semibold flex items-center gap-1 sm:gap-2">
                  📈 <span>{impact.substring(0, 40)}...</span>
                </div>
              )}
            </div>
          </div>

          {/* Main Icon */}
          <div className="absolute bottom-4 right-4">
            <motion.span 
              className="text-4xl drop-shadow-lg"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.span>
          </div>

          {/* Enhanced Hover Overlay with Detailed Case Study */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/95 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div className="text-white space-y-3">
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
        {/* Enhanced Project Info with Maximum Visibility */}
        <div className="space-y-4 sm:space-y-6 bg-gray-900/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/50">
          {/* Title with Maximum Visibility */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-3 sm:mb-4 leading-tight drop-shadow-lg">
              {title}
            </h3>
            <div className="flex items-center justify-between mb-3">
              {industry && (
                <div className="flex items-center gap-2 text-sm bg-blue-600/80 text-white px-3 py-2 rounded-lg font-semibold shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  <span>{industry} 분야</span>
                </div>
              )}
              {timeline && (
                <div className="text-sm text-white bg-gray-700/80 px-3 py-2 rounded-lg font-medium shadow-lg">
                  ⏱ {timeline}
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Description with Maximum Contrast */}
          <div className="bg-gray-800/60 rounded-xl p-4 border border-gray-600/30">
            <p className="text-white leading-relaxed font-medium text-base drop-shadow-sm">{description}</p>
          </div>

          {/* Always Visible Impact Statement */}
          {impact && (
            <motion.div 
              className="bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-xl p-4 border border-green-400/40 backdrop-blur-sm"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2 text-sm font-bold text-green-300 mb-2">
                <span className="text-base">📈</span>
                <span>핵심 성과</span>
              </div>
              <div className="text-sm text-white font-medium leading-relaxed">{impact}</div>
            </motion.div>
          )}

          {/* Tech Stack with Maximum Visibility */}
          <div className="bg-gray-800/80 rounded-lg sm:rounded-xl p-3 sm:p-5 backdrop-blur-md border border-gray-600/50 shadow-xl">
            <div className="flex items-center gap-2 text-sm sm:text-base font-black text-white mb-3 sm:mb-4">
              <span className="text-base sm:text-lg">🛠</span>
              <span>핵심 기술스택</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  className={`px-2 sm:px-4 py-1 sm:py-2 ${tech.bg} ${tech.color} rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold ${tech.border} cursor-default shadow-xl border-2`}
                  whileHover={{ scale: 1.1, y: -4 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Enhanced Metrics with Maximum Visibility */}
          <div className="bg-gradient-to-r from-blue-800/60 to-purple-800/60 rounded-lg sm:rounded-xl p-3 sm:p-5 border-2 border-blue-400/40 backdrop-blur-md shadow-2xl">
            <div className="text-sm sm:text-base font-black text-white mb-3 sm:mb-4 text-center flex items-center justify-center gap-2">
              <span className="text-base sm:text-lg">📊</span>
              <span>핵심 성과 지표</span>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {metrics.map((metric, index) => (
                <motion.div 
                  className="text-center group/metric cursor-default bg-white/10 rounded-lg sm:rounded-xl p-2 sm:p-4 border border-white/20 shadow-lg" 
                  key={metric.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-white font-black text-lg sm:text-2xl mb-1 sm:mb-2 group-hover/metric:text-blue-300 transition-colors drop-shadow-lg">
                    {metric.value}
                  </div>
                  <div className="text-gray-200 text-xs font-bold uppercase tracking-wide">{metric.label}</div>
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
