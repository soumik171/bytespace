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
      className="group flex flex-col items-center justify-center py-5 sm:py-6 px-2.5 sm:px-3.5 lg:px-4 bg-white border border-[#E5E6E8] rounded-[20px] sm:rounded-[22px] lg:rounded-[24px] cursor-pointer transition-all duration-300 text-center sm:min-h-[155px] lg:min-h-[168px] select-none hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)] hover:border-neutral-300"
    >
      {iconSrc ? (
        <img
          src={iconSrc}
          alt={title}
          className="w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] lg:w-[54px] lg:h-[54px] object-contain mb-3 sm:mb-3.5 transition-transform duration-200 group-hover:scale-105 pointer-events-none"
        />
      ) : (
        <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-accent-500 flex items-center justify-center mb-3 sm:mb-3.5 transition-transform duration-200 group-hover:scale-105">
          {Icon ? <Icon size={22} strokeWidth={2} color="#000000" /> : null}
        </div>
      )}
      <span className="font-['Poppins',sans-serif] text-[13.5px] sm:text-[14.5px] lg:text-[15.5px] font-semibold text-neutral-900 tracking-[-0.01em]">
        {title}
      </span>
    </div>
  );
}
