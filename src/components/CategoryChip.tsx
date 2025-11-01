import React from 'react';

interface CategoryChipProps {
  icon: string;
  name: string;
  description?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const CategoryChip: React.FC<CategoryChipProps> = ({ icon, gradientFrom = '#FFD700', gradientTo = '#1A237E' }) => (
  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-4xl drop-shadow-lg bg-gradient-to-br rounded-full border-2 text-white"
    style={{ background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`, borderColor: gradientFrom }}>
    {icon}
  </div>
);

export default CategoryChip;
