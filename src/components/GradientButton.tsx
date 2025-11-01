import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  from?: string;
  to?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  className = '',
  from = '#FFD700',
  to = '#1A237E',
}) => (
  <button
    onClick={onClick}
    className={`relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg border-2 border-[#FFD700] text-[#181C2A] bg-[#FFD700] hover:bg-[#181C2A] hover:text-[#FFD700] transition-all duration-200 ${className}`}
    style={{ background: `linear-gradient(90deg, ${from} 0%, ${to} 100%)` }}
  >
    <span className="relative z-10">{children}</span>
  </button>
);

export default GradientButton;
