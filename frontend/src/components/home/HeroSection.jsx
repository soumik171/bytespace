import React, { useState } from "react";
import { Search } from "lucide-react";

import maleCallerImg from "../../assets/male_caller_image.png";
import leftBigSpiral from "../../assets/Left_big_spiral_lemon_hero_obj.png";
import leftSmallSpiral from "../../assets/Left_small_spiral_white_hero_obj.png";
import leftDonut from "../../assets/Left_circular_white_obj.png";
import rightCane from "../../assets/Right_cane_lemon_hero_obj.png";
import rightTriangle from "../../assets/Right_triangular_white_hero_obj.png";
import rightBigSpiral from "../../assets/Right_big_spiral_white_hero_obj.png";
import stickyFriendsRating from "../../assets/sticky_friends_rating.png";

export default function HeroSection({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchQuery);
  };

  return (
    <section
      className="relative w-full bg-primary-600 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px] overflow-hidden text-white antialiased select-none"
      style={{ minHeight: "900px" }}
    >
      {/*
        ─── 3D ORNAMENTS ─────────────────────────────────────────────────────
        lg sizes = user-verified on large screen.
        sm  = lg × (640/1024) ≈ 0.625
        md  = lg × (768/1024) ≈ 0.75
        ────────────────────────────────────────────────────────────────────── */}

      {/* 1. Left Big Lemon Spiral — lg:290px, bleeds off-left edge */}
      <img
        src={leftBigSpiral}
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-[3%] w-[181px] sm:w-[218px] lg:w-[290px] object-contain pointer-events-none z-10"
        style={{ transform: "translateX(-1%)" }}
      />

      {/* 2. Left Small White Spiral — lg:220px, mid-left inset */}
      <img
        src={leftSmallSpiral}
        alt=""
        aria-hidden="true"
        className="absolute left-[10%] sm:left-[11%] lg:left-[12%] top-[38%] w-[138px] sm:w-[165px] lg:w-[230px] object-contain pointer-events-none z-10"
      />

      {/* 3. Left White Donut Ring — lg:290px, lower-left bleeds */}
      <img
        src={leftDonut}
        alt=""
        aria-hidden="true"
        className="absolute left-0 bottom-[10%] w-[181px] sm:w-[218px] lg:w-[350px] object-contain pointer-events-none z-10"
        style={{ transform: "translateX(8%) translateY(20%)" }}
      />

      {/* 4. Right Lemon Cane Cylinder — lg:200px, bleeds off-right */}
      <img
        src={rightCane}
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-[3%] w-[125px] sm:w-[150px] lg:w-[200px] object-contain pointer-events-none z-10"
        style={{ transform: "translateX(5%)" }}
      />

      {/* 5. Right White Triangle Prism — lg:220px, mid-right inset */}
      <img
        src={rightTriangle}
        alt=""
        aria-hidden="true"
        className="absolute right-[10%] sm:right-[11%] lg:right-[12%] top-[38%] w-[138px] sm:w-[165px] lg:w-[220px] object-contain pointer-events-none z-10"
      />

      {/* 6. Right Big White Spiral — lg:266px, lower-right bleeds */}
      <img
        src={rightBigSpiral}
        alt=""
        aria-hidden="true"
        className="absolute right-0 bottom-[10%] w-[166px] sm:w-[200px] lg:w-[350px] object-contain pointer-events-none z-10"
        style={{ transform: "translateX(0%) translateY(22%)" }}
      />

      {/* ─── UPPER TEXT CONTENT (Title, Subtitle, Search) ─── */}
      <div className="relative z-20 w-full flex flex-col items-center text-center pt-8 sm:pt-10 md:pt-12 lg:pt-14 px-4">
        <h1 className="font-['Poppins',sans-serif] text-[38px] sm:text-[50px] md:text-[60px] lg:text-[74px] font-semibold text-white leading-[1.12] tracking-[-0.02em] m-0">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="font-['Satoshi',sans-serif] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-white/90 leading-[1.45] max-w-[620px] md:max-w-none md:whitespace-nowrap m-0 mt-6 sm:mt-7 lg:mt-8">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form
          onSubmit={handleSearchSubmit}
          className="w-full flex items-center justify-center gap-2.5 sm:gap-3 lg:gap-3.5 mt-7 sm:mt-10 md:mt-12 lg:mt-14 px-4"
        >
          {/* White Pill Input */}
          <div className="flex items-center bg-white rounded-full h-11 sm:h-12 md:h-[52px] lg:h-14 px-4 sm:px-5 w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[470px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all focus-within:ring-2 focus-within:ring-accent-500">
            <Search size={18} className="text-neutral-400 shrink-0 mr-2.5 sm:mr-3" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-[14.5px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-black placeholder:text-neutral-400 outline-none font-['Satoshi',sans-serif]"
            />
          </div>

          {/* Standalone Lime Pill Button */}
          <button
            type="submit"
            className="h-11 sm:h-12 md:h-[52px] lg:h-14 px-5 sm:px-6 lg:px-7 rounded-full bg-accent-500 hover:bg-accent-400 text-black font-medium text-[14px] sm:text-[15.5px] md:text-[16.5px] lg:text-[18px] border-none cursor-pointer transition-all shrink-0 font-['Satoshi',sans-serif] shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
          >
            Search
          </button>
        </form>
      </div>

      {/*
        LOWER COMPOSITION: Lime RING + Student + Floating Cards
        Reference analysis:
        • The lime shape is a RING (not a solid disc): the dark-blue section
          background shows through the centre — "blue circle inside the green
          circle" as the user described.
        • Figma Ellipse 7: 1149×1149px, stroke #cbfc01, stroke-width 320px.
          Scaled to 1440px viewport (÷1719): outer-ø ≈ 963px, ring-width ≈ 268px.
        • The ring centre sits well below the section bottom so only the upper
          arc (≈ 40–45 % of the diameter) is visible above the fold.
        • Student stands in front of the ring, perfectly horizontally centred.
        • Cards are pixel-anchored from 50 % so they always flank the student.
        ──────────────────────────────────────────────────────────────────────*/}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "600px" }}>

        {/* Lime ring (SVG stroke circle) — Figma: stroke #cbfc01, sw 320 scaled */}
        <svg
          className="absolute left-1/2 pointer-events-none z-0"
          style={{
            width: "1200px",
            height: "1200px",
            transform: "translateX(-50%)",
            bottom: "-550px",   /* push centre below fold, showing upper arc */
            overflow: "visible",
          }}
          viewBox="0 0 963 963"
        >
          <circle
            cx="481.5"
            cy="655.5"
            r="350.5"   /* outer-r(481.5) − ring-width(268)/2 = 347.5 */
            stroke="#CBFC01"
            strokeWidth="280"
            fill="none"
          />
        </svg>

        {/* Student — bottom-anchored, optical centre corrected (+55px right)
            The 722px image has the figure's visual mass at ~310px from left
            (not 361px centre), so we compensate with a +55px right shift. */}
        <div
          className="absolute bottom-0 left-1/2 z-10 pointer-events-none"
          style={{ transform: "translateX(calc(-50% + 55px))" }}
        >
          <img
            src={maleCallerImg}
            alt="Student with headset and laptop"
            className="block object-contain w-auto"
            style={{ maxHeight: "570px", minHeight: "400px" }}
          />
        </div>

        {/* Badge 1: UI/UX Design — left shoulder */}
        <div
          className="absolute z-20 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-105"
          style={{
            left: "calc(50% - 290px)",
            bottom: "320px",
            padding: "16px 20px",
          }}
        >
          <h4 className="font-['Poppins',sans-serif] text-[16px] font-medium text-black m-0 leading-tight whitespace-nowrap">
            UI/UX Design
          </h4>
          <p className="font-['Satoshi',sans-serif] text-[12px] text-neutral-500 m-0 mt-1 whitespace-nowrap">
            200 Courses &bull; 1000+ Students
          </p>
        </div>

        {/* Badge 2: Happy Students — lower-left (Official Figma exported asset) */}
        <div
          className="absolute z-20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-105 overflow-hidden bg-white"
          style={{
            left: "calc(50% - 370px)",
            bottom: "80px",
          }}
        >
          <img
            src={stickyFriendsRating}
            alt="Happy Students - 4.5 rating from 2K+ students"
            className="block w-[240px] md:w-[258px] h-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* Badge 3: Learning Progress — right shoulder */}
        <div
          className="absolute z-20 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-105"
          style={{
            left: "calc(50% + 120px)",
            bottom: "240px",
            minWidth: "175px",
            padding: "20px 40px 20px 20px",
          }}
        >
          <span className="font-['Satoshi',sans-serif] text-[15px] font-medium text-neutral-500 block leading-tight">
            Learning Progress
          </span>
          <span className="font-['Poppins',sans-serif] pt-[8px] text-[48px] font-semibold tracking-[-0.02em] text-black block mt-1 mb-2 leading-none">
            55%
          </span>
          <div className="w-[180px] h-[8px] mt-[10px] bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full bg-accent-500 rounded-full w-[55%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
