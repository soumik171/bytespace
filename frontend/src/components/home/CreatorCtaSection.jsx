import React from "react";
import { Link } from "react-router-dom";

// 3D Creator Ornaments (Left side)
import leftSpiralLemon from "../../assets/left_spiral_creator_lemon_img.png";
import leftSpiralWhite from "../../assets/left_spiral_creator_white_img.png";
import leftTriangularWhiteCone from "../../assets/left_triangular_white_cone_creator_img.png";
import leftCircularLemon from "../../assets/left_circular_lemon_creator_img.png";

// 3D Creator Ornaments (Right side)
import rightTriangularConeLemon from "../../assets/right_triangular_cone_lemon_creator_img.png";
import rightSquarishConeWhite from "../../assets/right_squarish_cone_white_creator_img.png";
import rightSpiralLemon from "../../assets/right_spiral_lemon_creator_img.png";

export default function CreatorCtaSection() {
  return (
    <section className="relative w-full bg-primary-600 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1.5px,transparent_1.5px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1.5px,transparent_1.5px)] bg-[size:100px_100px] sm:bg-[size:120px_120px] overflow-hidden text-white antialiased select-none py-16 sm:py-18 md:py-20 lg:py-24 xl:py-24">
      {/* ─── LEFT 3D ORNAMENTS ─── */}
      {/* 1. Top-Left Lemon Spiral */}
      <img
        src={leftSpiralLemon}
        alt=""
        aria-hidden="true"
        className="absolute -left-[15px] sm:-left-[25px] md:-left-[20px] lg:-left-[10px] xl:-left-[5px] -top-[10px] sm:-top-[10px] w-[85px] sm:w-[125px] md:w-[170px] lg:w-[215px] xl:w-[260px] object-contain pointer-events-none z-10"
      />

      {/* 2. Top-Left Inner White Spiral */}
      <img
        src={leftSpiralWhite}
        alt=""
        aria-hidden="true"
        className="absolute left-[40px] sm:left-[75px] md:left-[120px] lg:left-[160px] xl:left-[205px] top-[10px] sm:top-[16px] lg:top-[30px] w-[50px] sm:w-[75px] md:w-[105px] lg:w-[130px] xl:w-[160px] object-contain pointer-events-none z-10"
      />

      {/* 3. Mid/Lower-Left White Cone */}
      <img
        src={leftTriangularWhiteCone}
        alt=""
        aria-hidden="true"
        className="absolute -left-[10px] sm:-left-[12px] md:-left-[10px] lg:-left-[8px] xl:-left-[5px] top-[42%] sm:top-[47%] lg:top-[48%] w-[45px] sm:w-[68px] md:w-[92px] lg:w-[115px] xl:w-[135px] object-contain pointer-events-none z-10"
      />

      {/* 4. Bottom-Left Lemon Circular Torus */}
      <img
        src={leftCircularLemon}
        alt=""
        aria-hidden="true"
        className="absolute -left-[15px] sm:-left-[25px] md:-left-[30px] lg:-left-[10px] xl:-left-[-60px] -bottom-[12px] sm:-bottom-[20px] lg:-bottom-[10px] w-[100px] sm:w-[150px] md:w-[205px] lg:w-[260px] xl:w-[315px] object-contain pointer-events-none z-10"
      />

      {/* ─── RIGHT 3D ORNAMENTS ─── */}
      {/* 5. Top-Right Lemon Triangular Pyramid Cone */}
      <img
        src={rightTriangularConeLemon}
        alt=""
        aria-hidden="true"
        className="absolute right-[45px] sm:right-[85px] md:right-[130px] lg:right-[165px] xl:right-[205px] top-[10px] sm:top-[14px] lg:top-[18px] w-[55px] sm:w-[85px] md:w-[120px] lg:w-[160px] xl:w-[200px] object-contain pointer-events-none z-10"
      />

      {/* 6. Far-Right White Squarish 3D Block */}
      <img
        src={rightSquarishConeWhite}
        alt=""
        aria-hidden="true"
        className="absolute -right-[15px] sm:-right-[22px] md:-right-[25px] lg:-right-[18px] xl:-right-[10px] top-[2%] sm:top-[3%] w-[70px] sm:w-[105px] md:w-[145px] lg:w-[185px] xl:w-[230px] object-contain pointer-events-none z-10"
      />

      {/* 7. Bottom-Right Lemon Spiral */}
      <img
        src={rightSpiralLemon}
        alt=""
        aria-hidden="true"
        className="absolute right-[-10px] sm:right-[-15px] md:right-[-15px] lg:right-[-10px] xl:right-[-5px] -bottom-[10px] sm:-bottom-[15px] lg:-bottom-[22px] w-[105px] sm:w-[145px] md:w-[200px] lg:w-[260px] xl:w-[320px] object-contain pointer-events-none z-10"
      />

      {/* ─── CENTER CONTENT ─── */}
      <div className="relative z-20 w-full max-w-[1080px] xl:max-w-[1140px] mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Heading (Responsively scaled from mobile to large screens) */}
        <h2 className="font-['Poppins',sans-serif] text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[46px] font-semibold text-white leading-[1.15] tracking-[-0.025em] mb-4 sm:mb-4.5 max-w-[880px] translate-y-[-13%]">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>

        {/* Subtitle Paragraph (Exact 3-line word pattern matching reference on desktop, responsive wrapping on mobile) */}
        <p className="font-['Satoshi',sans-serif] text-[13.5px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[17.5px] text-white/90 leading-[1.58] sm:leading-[1.62] md:leading-[1.65] max-w-[920px] lg:max-w-[980px] xl:max-w-[1040px] mb-7 sm:mb-8 lg:mb-9 font-normal">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a
          <br className="hidden md:inline" />{" "}
          part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your
          <br className="hidden md:inline" />{" "}
          expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        {/* CTA Button */}
        <Link
          to="/register"
          className="inline-flex items-center justify-center font-['Satoshi',sans-serif] font-semibold text-[15px] sm:text-[16px] text-neutral-950 bg-[#cbfc01] hover:bg-[#b8e600] active:scale-[0.98] px-8 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all duration-200 shadow-[0_0_30px_rgba(203,252,1,0.45)] cursor-pointer"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
