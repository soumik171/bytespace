import React from "react";
import { Link } from "react-router-dom";

export default function AuthLayout({ leftTitle, leftSubtitle, children }) {
  return (
    <div className="w-full min-h-screen lg:h-screen lg:max-h-screen bg-primary-800 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1.5px,transparent_1.5px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1.5px,transparent_1.5px)] bg-[size:72px_72px] sm:bg-[size:88px_88px] overflow-y-auto lg:overflow-hidden text-white flex flex-col justify-between p-5 sm:p-7 md:p-8 lg:p-8 xl:p-10 antialiased select-none">
      {/* ─── Top Header: Single ByteSpace Glyph ─── */}
      <header className="w-full max-w-[1140px] xl:max-w-[1200px] mx-auto flex items-center justify-start z-20 pt-1 sm:pt-2">
        <Link
          to="/"
          className="inline-flex items-center transition-transform hover:scale-105 active:scale-95"
          aria-label="ByteSpace Home"
        >
          <img
            src="/assets/single_bytespace_logo.png"
            alt="ByteSpace Logo"
            className="w-8 h-8 sm:w-8.5 sm:h-8.5 object-contain"
          />
        </Link>
      </header>

      {/* ─── Main 2-Column Section (Centered & Cohesive Stage) ─── */}
      <main className="w-full max-w-[1140px] xl:max-w-[1200px] mx-auto flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-12 xl:gap-14 py-4 sm:py-6 lg:py-0 z-10">
        {/* ─── Left Column: Title, Subtitle, & Layered 3D Card Stack ─── */}
        <div className="w-full lg:w-[50%] xl:w-[52%] flex flex-col justify-center items-start">
          <h2 className="font-['Poppins',sans-serif] text-[24px] sm:text-[28px] lg:text-[30px] font-semibold text-white leading-tight mb-2 sm:mb-2.5 -translate-y-3 sm:-translate-y-5">
            {leftTitle}
          </h2>
          <p className="font-['Satoshi',sans-serif] text-[13.5px] sm:text-[14px] lg:text-[14.5px] text-white/85 leading-relaxed max-w-[420px] mb-6 sm:mb-7 lg:mb-8 font-normal -translate-y-3 sm:-translate-y-4">
            {leftSubtitle}
          </p>

          {/* ─── 3D Visual Collage Container ─── */}
          <div className="relative w-[330px] sm:w-[390px] md:w-[430px] lg:w-[410px] xl:w-[460px] h-[280px] sm:h-[330px] md:h-[360px] lg:h-[340px] xl:h-[370px] mx-auto lg:mx-0">
            {/* 1. Back Layer: Build Digital Assets Card */}
            <img
              src="/assets/build_digital_asset_register_login.png"
              alt="Build Digital Assets"
              className="absolute left-0 top-[50px] sm:top-[70px] w-[190px] sm:w-[235px] md:w-[260px] lg:w-[245px] xl:w-[275px] object-contain rounded-[18px] sm:rounded-[22px] shadow-lg pointer-events-none z-10"
            />

            {/* 2. Front Layer: Power of Big Data Card */}
            <img
              src="/assets/power_of_big_data_register_login.png"
              alt="The Power of Big Data"
              className="absolute left-[65px] sm:left-[88px] md:left-[102px] lg:left-[80px] xl:left-[90px] top-[-20px] sm:top-[-30px] w-`[210px] sm:w-[260px] md:w-[285px] lg:w-[270px] xl:w-[305px] object-contain rounded-[18px] sm:rounded-[22px] shadow-2xl pointer-events-none z-20"
            />

            {/* 3. Bottom Lime Accent: Happy Students Card */}
            <img
              src="/assets/happy_students_lime_resister_login.png"
              alt="Happy Students"
              className="absolute left-[140px] sm:left-[175px] md:left-[198px] lg:left-[185px] xl:left-[210px] bottom-[-20px] sm:bottom-[-30px] w-[130px] sm:w-[160px] md:w-[180px] lg:w-[170px] xl:w-[195px] object-contain rounded-[14px] sm:rounded-[16px] shadow-md pointer-events-none z-30"
            />

            {/* ─── 3D Ornaments ─── */}
            {/* Torus / Donut (Top-left of front card) */}
            <img
              src="/assets/lemon_circle_register_login.png"
              alt=""
              aria-hidden="true"
              className="absolute left-[32px] sm:left-[45px] md:left-[52px] lg:left-[48px] xl:left-[52px] top-[12px] sm:top-[30px] w-[46px] sm:w-[58px] md:w-[66px] lg:w-15.5 xl:w-[72px] object-contain pointer-events-none z-30"
            />

            {/* Lime Pyramid Cone (Bottom-left of back card) */}
            <img
              src="/assets/lemon_cone_register_login.png"
              alt=""
              aria-hidden="true"
              className="absolute -left-[4px] sm:-left-[6px] -bottom-[6px] sm:-bottom-[40px] w-[60px] sm:w-[78px] md:w-[88px] lg:w-[82px] xl:w-[94px] object-contain pointer-events-none z-30"
            />

            {/* White Squiggle Spring Spiral (Right side) */}
            <img
              src="/assets/white_spiral_register_login.png"
              alt=""
              aria-hidden="true"
              className="absolute right-[16px] sm:right-[24px] md:right-[28px] lg:right-[40px] xl:right-[80px] bottom-[48px] sm:bottom-[20px] md:bottom-[25px] lg:bottom-[30px] xl:bottom-[40px] w-[48px] sm:w-[62px] md:w-[70px] lg:w-[65px] xl:w-[75px] object-contain pointer-events-none z-30"
            />
          </div>
        </div>

        {/* ─── Right Column: Form Container Card ─── */}
        <div className="w-full lg:w-[48%] xl:w-[46%] flex justify-center lg:justify-end">
          <div className="bg-white text-neutral-900 rounded-[28px] sm:rounded-[34px] shadow-[0_24px_60px_rgba(0,0,0,0.18)] p-6 sm:p-7 md:p-8 lg:p-8 xl:p-10 w-full max-w-[430px] sm:max-w-[460px] xl:max-w-[490px]">
            {children}
          </div>
        </div>
      </main>

      {/* ─── Bottom Spacer for balance ─── */}
      <footer className="w-full max-w-[1140px] xl:max-w-[1200px] mx-auto h-2 pointer-events-none" />
    </div>
  );
}
