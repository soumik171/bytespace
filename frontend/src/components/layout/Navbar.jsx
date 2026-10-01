import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ByteSpaceLogo from '../common/ByteSpaceLogo';

export default function Navbar({ variant = 'white' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/#courses' },
    { label: 'Creators', path: '/#creators' },
  ];

  return (
    <header className="relative w-full h-30 z-50 bg-primary-800 bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1.5px,transparent_1.5px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1.5px,transparent_1.5px)] bg-[size:120px_120px] flex items-center antialiased">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-[50px]">
        <div className="flex items-center justify-between w-full">
          {/* Brand Logo (Exact Figma: W 171, H 37) */}
          <ByteSpaceLogo variant={variant} />

          {/* Center Navigation Links (Exact Figma: Satoshi Label M 16/120, W 210, H 26, Gap 24px) */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center gap-6 m-0 p-0 list-none">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="font-['Satoshi',sans-serif] text-[16px] text-white/90 hover:text-white font-normal leading-[1.2] tracking-[-0.01em] transition-opacity no-underline whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action: Sign In, Join Us, and Shop Bag (Exact Figma: W 174, H 24, Gap 24px) */}
          <div className="flex items-center gap-6">
            <Link
              to="/login"
              className="hidden md:block font-['Satoshi',sans-serif] text-[16px] text-white/90 hover:text-white font-normal leading-[1.2] tracking-[-0.01em] transition-opacity no-underline whitespace-nowrap"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="hidden md:block font-['Satoshi',sans-serif] text-[16px] text-white/90 hover:text-white font-normal leading-[1.2] tracking-[-0.01em] transition-opacity no-underline whitespace-nowrap"
            >
              Join Us
            </Link>
            <button
              className="flex items-center justify-center p-0 m-0 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity leading-none"
              aria-label="Shopping Bag"
            >
              <img
                src="/assets/Nav_shop_logo.png"
                alt="Shop Bag"
                width="20"
                height="24"
                className="w-5 h-6 object-contain block"
              />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="md:hidden flex items-center justify-center text-white bg-transparent border-none cursor-pointer p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed top-30 left-0 right-0 bg-primary-600 border-b border-white/15 p-6 flex flex-col gap-4 z-50 shadow-2xl md:hidden">
          <ul className="flex flex-col gap-4 p-0 m-0 list-none">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.path}
                  className="font-['Satoshi',sans-serif] text-[17px] text-white no-underline font-normal"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                className="font-['Satoshi',sans-serif] text-[17px] text-white no-underline font-normal"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="font-['Satoshi',sans-serif] text-[17px] text-accent-500 no-underline font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
