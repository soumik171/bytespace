import React from 'react';

export default function CategoryCard({
  title = 'Design',
  iconSrc,
  icon: Icon,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className="flex flex-col items-center justify-center p-6 sm:p-7 bg-white border border-neutral-100 rounded-[20px] cursor-pointer transition-all duration-200 text-center min-h-38.5 select-none hover:-translate-y-1 hover:border-accent-500 hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)]"
    >
      <div className="w-14 h-14 rounded-full bg-accent-500 flex items-center justify-center mb-4 transition-transform duration-150 hover:scale-105">
        {iconSrc ? (
          <img src={iconSrc} alt={title} width="24" height="24" className="w-6 h-6 object-contain" />
        ) : Icon ? (
          <Icon size={24} strokeWidth={2} color="#000000" />
        ) : null}
      </div>
      <span className="font-['Poppins',sans-serif] text-[16px] font-semibold text-black tracking-[-0.01em]">
        {title}
      </span>
    </div>
  );
}
