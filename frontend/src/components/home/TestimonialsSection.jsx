import React from "react";

// Avatar imports
import sarahAvatar from "../../assets/sarah_img.png";
import jamesAvatar from "../../assets/james_img.png";
import alexAvatar from "../../assets/alex_img.png";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: sarahAvatar,
    quote: (
      <>
        &ldquo;ByteSpace has transformed my
        <br className="hidden lg:inline" /> approach to learning. The diverse
        range
        <br className="hidden lg:inline" /> of courses and the quality of
        content
        <br className="hidden lg:inline" /> provided by creators have exceeded
        my
        <br className="hidden lg:inline" /> expectations. The platform truly
        fosters a
        <br className="hidden lg:inline" /> sense of community and lifelong
        <br className="hidden lg:inline" /> learning.&rdquo;
      </>
    ),
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: jamesAvatar,
    quote: (
      <>
        &ldquo;I&apos;ve tried several online learning
        <br className="hidden lg:inline" /> platforms, and ByteSpace stands out
        for
        <br className="hidden lg:inline" /> its vibrant community and the
        variety of
        <br className="hidden lg:inline" /> courses available. The easy
        navigation
        <br className="hidden lg:inline" /> and engaging content make it a go-to
        <br className="hidden lg:inline" /> platform for continuous skill
        <br className="hidden lg:inline" /> development.&rdquo;
      </>
    ),
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: alexAvatar,
    quote: (
      <>
        &ldquo;As a creator, ByteSpace has been a
        <br className="hidden lg:inline" /> game-changer for me. The Course
        Editor
        <br className="hidden lg:inline" /> is user-friendly, and the support
        from the
        <br className="hidden lg:inline" /> community is incredible. It&apos;s
        fulfilling to
        <br className="hidden lg:inline" /> see my courses making a positive
        impact
        <br className="hidden lg:inline" /> on learners globally.&rdquo;
      </>
    ),
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-white select-none overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-10 sm:pb-12 md:pb-14 lg:pb-16 border-b border-[#eaecf0]">
      {/* ─── Ambient Glow Gradients: Concentrated Lime Core (Between Title & Subtitle) + Top-Right Ambient Spread + Lower-Left Soft Blue ─── */}
      {/* 1. High-Density Lime Core positioned right between the title and subtitle */}
      <div
        className="absolute -top-[20px] sm:top-[0px] left-[50%] md:left-[50%] lg:left-[51%] -translate-x-1/2 w-[340px] sm:w-[460px] lg:w-[540px] h-[320px] sm:h-[420px] rounded-full bg-[#d4ff00]/42 sm:bg-[#cbfc01]/48 blur-[80px] sm:blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      {/* 2. Soft Ambient Lime Spread extending toward the top right */}
      <div
        className="absolute -top-[40px] right-[-40px] sm:right-[4%] lg:right-[8%] w-[480px] sm:w-[620px] lg:w-[700px] h-[440px] sm:h-[560px] rounded-full bg-[#cbfc01]/22 blur-[130px] sm:blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      {/* ─── Bottom-Left Periwinkle / Purple Glow: High-Density Hotspot Core + Smooth White Gradient Diffusion ─── */}
      {/* 1. High-Density Purple/Periwinkle Core Hotspot */}
      <div
        className="absolute -bottom-[30px] -left-[40px] w-[340px] sm:w-[440px] lg:w-[480px] h-[320px] sm:h-[420px] rounded-full bg-[#7a88fb]/38 sm:bg-[#6f7ef5]/44 blur-[75px] sm:blur-[90px] pointer-events-none"
        aria-hidden="true"
      />
      {/* 2. Soft Ambient Lavender-Purple Diffusion fading into pure white */}
      <div
        className="absolute -bottom-[100px] -left-[120px] w-[540px] sm:w-[700px] lg:w-[800px] h-[480px] sm:h-[600px] rounded-full bg-[#8ba4fc]/22 sm:bg-[#818cf8]/22 blur-[140px] sm:blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1400px] xl:max-w-[1480px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-28">
        {/* ─── Header: 2 Columns (Title Left, Description Right) ─── */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-16 mb-14 sm:mb-16 lg:mb-20">
          <h2 className="font-['Poppins',sans-serif] text-[34px] sm:text-[42px] md:text-[45px] lg:text-[48px] font-semibold text-neutral-950 leading-[1.14] tracking-[-0.025em] max-w-[620px]">
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p className="font-['Satoshi',sans-serif] text-[13px] sm:text-[14.5px] lg:text-[17.5px] text-[#475467] leading-[1.65] font-normal">
            At ByteSpace, our vibrant community of learners and creators is at
            the
            <br className="hidden lg:inline" /> heart of what we do. Hear
            directly from those who have experienced the
            <br className="hidden lg:inline" /> transformative journey of
            learning and creating on our platform. Explore
            <br className="hidden lg:inline" /> testimonials that reflect the
            diverse perspectives of enthusiastic learners
            <br className="hidden lg:inline" /> and accomplished creators.
          </p>
        </div>

        {/* ─── 3 Testimonial Cards Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-8 items-stretch">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-[28px] sm:rounded-[32px] p-8 sm:p-9 lg:p-10 shadow-[0_16px_45px_rgba(0,0,0,0.06)] border border-neutral-100 flex flex-col justify-start transition-all duration-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.09)] hover:-translate-y-1"
            >
              {/* Profile Avatar */}
              <img
                src={item.avatar}
                alt={item.name}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mb-6 sm:mb-7 shadow-sm"
              />

              {/* Name */}
              <h3 className="font-['Poppins',sans-serif] text-[20px] sm:text-[22px] font-semibold text-neutral-950 mb-1 leading-tight">
                {item.name}
              </h3>

              {/* Role */}
              <div className="font-['Satoshi',sans-serif] text-[14.5px] sm:text-[17.5px] font-medium text-primary-600 mb-6 sm:mb-7">
                {item.role}
              </div>

              {/* Quote Body */}
              <p className="font-['Satoshi',sans-serif] text-[14.5px] sm:text-[14.5px] lg:text-[17.5px] text-[#475467] leading-[1.65] font-normal">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
