import React from 'react';
import { Link } from 'react-router-dom';

export default function ByteSpaceLogo({ variant = 'white', className = '' }) {
  const isWhite = variant === 'white';
  const logoSrc = isWhite ? '/assets/Header_Logo.png' : '/assets/Footer_Logo.png';

  return (
    <Link
      to="/"
      className={`inline-flex items-center no-underline select-none ${className}`}
      style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
    >
      <img
        src={logoSrc}
        alt="ByteSpace Logo"
        width="171"
        height="37"
        style={{ display: 'block', height: '37px', width: 'auto' }}
      />
    </Link>
  );
}
