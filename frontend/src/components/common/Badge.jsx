import React from 'react';

const badgeVariants = {
  lime: 'bg-[#cbfc01] text-[#0d1117] font-bold',
  blue: 'bg-[#e7f6ff] text-[#0445ff] font-semibold',
  neutral: 'bg-[#f3f4f6] text-[#4b4c53] font-medium',
  outline: 'bg-transparent border border-[#ced0d3] text-[#4b4c53]',
};

export default function Badge({ children, variant = 'lime', className = '', ...props }) {
  const variantClass = badgeVariants[variant] || badgeVariants.lime;

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-[12px] tracking-wide uppercase select-none font-['Satoshi',sans-serif] ${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}
