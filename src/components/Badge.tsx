import React from 'react';

interface BadgeProps {
  label: string;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, className = '' }) => (
  <span
    className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#FFD700] text-[#181C2A] border border-[#FFD700] ${className}`}
  >
    {label}
  </span>
);

export default Badge;
