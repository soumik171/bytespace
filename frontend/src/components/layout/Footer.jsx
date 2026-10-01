import React, { useState } from 'react';
import ByteSpaceLogo from '../common/ByteSpaceLogo';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  const columns = [
    [
      { label: 'Featured Courses', href: '/#courses' },
      { label: 'Featured Categories', href: '/#categories' },
      { label: 'Business', href: '/#categories' },
      { label: 'IT', href: '/#categories' },
      { label: 'Design', href: '/#categories' },
    ],
    [
      { label: 'Development', href: '/#categories' },
      { label: 'Marketing', href: '/#categories' },
      { label: 'Photography', href: '/#categories' },
      { label: 'Finance', href: '/#categories' },
      { label: 'Sport', href: '/#categories' },
    ],
    [
      { label: 'Become a Creator', href: '/#creator' },
      { label: 'Affiliate Program', href: '/#affiliate' },
      { label: 'Contact', href: '/#contact' },
      { label: 'Help', href: '/#help' },
      { label: 'About', href: '/#about' },
    ],
  ];

  return (
    <footer className="w-full bg-white text-black pt-[71px] pb-[48px] font-['Satoshi',sans-serif] antialiased">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-[50px]">
        {/* Main Footer Container: Exact Figma 1200px x 406px Hug */}
        <div className="w-full flex flex-col justify-between min-h-[406px] gap-12 xl:gap-[105px]">
          {/* Top Section: Exact Figma 1200px x 234px Hug */}
          <div className="w-full flex flex-col xl:flex-row justify-between items-start gap-12 xl:gap-[92px]">
            {/* Left Column: Exact Figma W 528px Hug x H 234px Hug, Gap: 45px */}
            <div className="w-full xl:max-w-[528px] flex flex-col gap-8 md:gap-[45px]">
              {/* Logo + Subtitle Sub-frame: Exact Figma H 75px Hug, Gap: 16px */}
              <div className="w-full flex flex-col gap-4">
                <ByteSpaceLogo variant="dark" />
                <p className="font-['Satoshi',sans-serif] text-[15px] text-black leading-[150%] max-w-[528px] m-0">
                  Stay Up to date with our latest features and releases by joining our newsletter.
                </p>
              </div>

              {/* Form & Consent Sub-frame: Exact Figma H 114px Hug, Gap: 24px */}
              <div className="w-full max-w-[504px] flex flex-col gap-5 md:gap-6">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full sm:w-[320px] md:w-[340px] h-12 px-6 rounded-full border border-neutral-200 bg-white text-[14px] text-black outline-none focus:border-primary-600 transition-colors placeholder:text-neutral-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="h-12 px-8 rounded-full bg-accent-500 hover:bg-accent-400 text-black font-semibold text-[14px] border-none cursor-pointer transition-all whitespace-nowrap flex items-center justify-center self-start sm:self-auto"
                  >
                    Search
                  </button>
                </form>

                {/* Consent Note: Exact Figma */}
                <p className="text-[12px] text-black leading-[140%] max-w-[504px] m-0">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </div>
            </div>

            {/* Right Columns Container: Exact Figma W 580px x H 222px Hug, Y: 48px offset */}
            <div className="w-full xl:max-w-[580px] flex flex-row flex-wrap sm:flex-nowrap justify-between gap-8 sm:gap-6 pt-0 xl:pt-[48px]">
              {columns.map((col, idx) => (
                <div key={idx} className="flex flex-col gap-3.5 md:gap-4 min-w-[120px]">
                  {col.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="font-['Satoshi',sans-serif] text-[14px] sm:text-[15px] text-black hover:text-primary-600 transition-colors no-underline leading-[150%] whitespace-nowrap"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section with Line 27 Divider + 42px Bar (Exact Figma Total Gap 130px) */}
          <div className="w-full flex flex-col gap-6">
            {/* Line 27 Divider */}
            <div className="w-full h-px bg-[#e5e7eb]" />

            {/* Bottom Bar: Exact Figma W 1200px x H 42px */}
            <div className="w-full h-auto sm:h-10.5 flex flex-col sm:flex-row items-center justify-between text-[13px] text-black gap-4 text-center sm:text-left">
              <p className="m-0">@ 2023 ByteSpace. All rights reserved.</p>

              <div className="flex items-center gap-6 sm:gap-8 flex-wrap justify-center">
                <a href="/#privacy" className="text-black hover:text-primary-600 no-underline transition-colors">
                  Privacy Policy
                </a>
                <a href="/#terms" className="text-black hover:text-primary-600 no-underline transition-colors">
                  Terms of Service
                </a>
                <a href="/#cookies" className="text-black hover:text-primary-600 no-underline transition-colors">
                  Cookies Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
