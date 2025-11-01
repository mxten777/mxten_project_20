import React from 'react';

interface NumberBadgeProps {
  value: number | string;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
}

const NumberBadge: React.FC<NumberBadgeProps> = ({ value, gradientFrom = '#FFD700', gradientTo = '#1A237E', className = '' }) => (
  <span
    className={`text-5xl font-black bg-clip-text text-transparent ${className}`}
    style={{ background: `linear-gradient(90deg, ${gradientFrom} 0%, ${gradientTo} 100%)` }}
  >
    {value}
  </span>
);

export default NumberBadge;
