import React from 'react';

interface GradientTitleProps {
  children: React.ReactNode;
  gradient?: string;
  className?: string;
}

const GradientTitle: React.FC<GradientTitleProps> = ({ children, className = '' }) => (
  <h2
    className={`font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#11406B] dark:text-white ${className}`}
  >
    {children}
  </h2>
);

export default GradientTitle;
