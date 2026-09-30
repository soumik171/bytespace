import React from 'react';
import Badge from './Badge';

export default function SectionHeading({
  badge,
  badgeVariant = 'lime',
  title,
  subtitle,
  center = false,
  light = false,
  action,
  className = '',
}) {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 ${center ? 'text-center md:items-center' : ''} ${className}`}>
      <div className={center ? 'max-w-2xl mx-auto' : 'max-w-xl'}>
        {badge && (
          <div className="mb-3.5">
            <Badge variant={badgeVariant}>{badge}</Badge>
          </div>
        )}
        {title && (
          <h2 className={`font-['Poppins',sans-serif] text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-[1.2] tracking-[-0.02em] m-0 mb-3.5 ${light ? 'text-white' : 'text-black'}`}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className={`font-['Satoshi',sans-serif] text-[16px] leading-relaxed m-0 ${light ? 'text-white/80' : 'text-neutral-500'}`}>
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
