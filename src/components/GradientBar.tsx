import React from 'react';

interface GradientBarProps {
  height?: number | string;
  width?: number | string;
  gradient?: string;
  className?: string;
  style?: React.CSSProperties;
}

const GradientBar: React.FC<GradientBarProps> = ({
  height = 24,
  width = '100%',
  gradient = 'linear-gradient(90deg, #FFD700 0%, #1A237E 60%, #8B5CF6 100%)',
  className = '',
  style = {},
}) => (
  <div
    className={className}
    style={{
      height: typeof height === 'number' ? height * 1.5 : height,
      width,
      background: gradient || 'linear-gradient(90deg, #ffe066 0%, #FFD700 30%, #1A237E 80%, #8B5CF6 100%)',
      borderRadius: 8,
      opacity: 1,
      ...style,
    }}
  />
);

export default GradientBar;
