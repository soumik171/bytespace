import React from 'react';
import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-[#0445ff] text-white hover:bg-[#0043ff] hover:shadow-[0_8px_20px_rgba(4,69,255,0.25)] border-transparent',
  accent: 'bg-[#cbfc01] text-[#0d1117] hover:bg-[#d4fb20] hover:shadow-[0_8px_20px_rgba(203,252,1,0.35)] font-bold border-transparent',
  secondary: 'bg-[#f5f5f6] text-[#242528] hover:bg-[#e5e6e8] border-transparent',
  ghost: 'bg-transparent text-white hover:bg-white/10 border-transparent',
  outline: 'bg-transparent text-[#242528] border-[#ced0d3] hover:border-[#0445ff] hover:text-[#0445ff]',
  white: 'bg-white text-[#0445ff] hover:bg-neutral-100 shadow-md border-transparent',
};

const sizeClasses = {
  sm: 'px-3.5 py-1.5 text-[13px] rounded-[8px]',
  md: 'px-5 py-2.5 text-[15px] rounded-[10px]',
  lg: 'px-7 py-3.5 text-[16px] rounded-[14px]',
  pill: 'px-7 py-3 text-[15px] rounded-full',
};

export default function Button({
  children,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon: Icon,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 cursor-pointer select-none no-underline border disabled:opacity-50 disabled:cursor-not-allowed font-["Satoshi",sans-serif]';
  const classes = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size] || sizeClasses.md} ${className}`.trim();

  const content = (
    <>
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} />}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
