import React from "react";

// Asset imports
import maleCallerImg from "../../assets/male_caller_image.png";
import femaleCallerImg from "../../assets/female_caller_Image.png";
import growthBackendMaleCard from "../../assets/growth_backend_male_img_card.png";
import growthSpiralMale from "../../assets/growth_spiral_male.png";
import growthSpiralFemale from "../../assets/growth_spiral_female.png";
import totalRevenueImg from "../../assets/total_revenue.png";
import yearToDateImg from "../../assets/Year_to_date.png";
import stickyFriendsImg from "../../assets/sticky_friends_rating.png";
import growthLearningProgressImg from "../../assets/growth_learning_progress.png";

export default function GrowthFeaturesSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#fbfdf7] via-white to-[#f8faff] select-none overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-4 pb-8 sm:pb-10 lg:pb-8 xl:pb-10">
      {/* ─── Ambient Glow Gradients (Soft, Subtle Luminous Mesh) ─── */}
      <div
        className="absolute -top-[10%] left-[12%] w-[650px] sm:w-[850px] lg:w-[1050px] h-[500px] sm:h-[650px] rounded-full bg-[#cbfc01]/14 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-[32%] -left-[100px] w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] rounded-full bg-[#0445ff]/6 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[14%] sm:bottom-[16%] left-[1%] sm:left-[2%] w-[460px] sm:w-[580px] h-[460px] sm:h-[580px] rounded-full bg-[#cbfc01]/25 blur-[100px] sm:blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-[5%] -right-[80px] w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] rounded-full bg-[#0445ff]/6 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1400px] xl:max-w-[1480px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-28 space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-16 xl:space-y-20">
        {/* ══════════════════════════════════════════════════════════════════
            BLOCK 1: Male Student / Professional Growth
            ══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Left Text & Stats (Elevated on Y-axis to match reference composition) */}
          <div className="max-w-[580px] mx-auto lg:mx-0 text-center lg:text-left lg:-translate-y-8 xl:-translate-y-12">
            <h2 className="font-['Poppins',sans-serif] text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px] xl:text-[45px] font-semibold text-neutral-950 leading-[1.2] tracking-[-0.025em] mb-4 sm:mb-8">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p className="font-['Satoshi',sans-serif] text-[14.5px] sm:text-[15.5px] lg:text-[20px] text-[#717680] leading-[1.62] max-w-[530px] mx-auto lg:mx-0 mb-8 sm:mb-10 font-normal">
              Explore our curated selection of courses tailored to enhance
              <br className="hidden sm:inline" />
              your capabilities and accelerate your career journey.
              <br className="hidden sm:inline" />
              Whether you are looking to sharpen specific skills, gain
              <br className="hidden sm:inline" />
              industry expertise, or embark on a new career path entirely,
              <br className="hidden sm:inline" />
              we have the resources you need.
            </p>

            {/* 3 Metrics Stats Counters */}
            <div className="flex items-center justify-center lg:justify-start gap-10 sm:gap-14 lg:gap-16">
              <div>
                <div className="font-['Poppins',sans-serif] text-[36px] sm:text-[42px] lg:text-[46px] xl:text-[48px] font-semibold text-primary-600 leading-none mb-2">
                  12K
                </div>
                <div className="font-['Satoshi',sans-serif] text-[15px] sm:text-[16px] lg:text-[17px] text-neutral-500 font-medium">
                  Students
                </div>
              </div>
              <div>
                <div className="font-['Poppins',sans-serif] text-[36px] sm:text-[42px] lg:text-[46px] xl:text-[48px] font-semibold text-primary-600 leading-none mb-2">
                  70+
                </div>
                <div className="font-['Satoshi',sans-serif] text-[15px] sm:text-[16px] lg:text-[17px] text-neutral-500 font-medium">
                  Courses
                </div>
              </div>
              <div>
                <div className="font-['Poppins',sans-serif] text-[36px] sm:text-[42px] lg:text-[46px] xl:text-[48px] font-semibold text-primary-600 leading-none mb-2">
                  16
                </div>
                <div className="font-['Satoshi',sans-serif] text-[15px] sm:text-[16px] lg:text-[17px] text-neutral-500 font-medium">
                  Creators
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Composition (Male Student Large & Dominant, Card Smaller) */}
          <div className="relative w-full max-w-[560px] sm:max-w-[620px] lg:max-w-[600px] xl:max-w-[660px] h-[480px] sm:h-[550px] md:h-[600px] lg:h-[640px] xl:h-[680px] mx-auto">
            {/* Background Course Card (More Compact) */}
            <img
              src={growthBackendMaleCard}
              alt="Course card background"
              className="absolute left-[6%] sm:left-[8%] lg:left-[10%] top-[10%] sm:top-[8%] w-[240px] sm:w-[270px] md:w-[295px] lg:w-[315px] xl:w-[380px] h-auto object-contain rounded-[20px] sm:rounded-[24px] shadow-[0_16px_45px_rgba(0,0,0,0.08)] border border-neutral-100 pointer-events-none z-0"
            />

            {/* Top-Right Lime Spiral Coil (No animation, sits ON TOP of learning progress) */}
            <img
              src={growthSpiralMale}
              alt=""
              aria-hidden="true"
              className="absolute right-[0%] sm:right-[-6%] md:right-[-8%] lg:right-[-12%] xl:right-[-20%] top-[6%] sm:top-[10%] md:top-[12%] lg:top-[14%] xl:top-[16%] w-[110px] sm:w-[140px] md:w-[170px] lg:w-[200px] xl:w-[230px] object-contain pointer-events-none z-30"
            />

            {/* Male Student with Headset and Laptop (Enlarged Focal Element) */}
            <img
              src={maleCallerImg}
              alt="Student with laptop"
              className="absolute left-[18%] sm:left-[22%] lg:left-[20%] bottom-0 h-[490px] sm:h-[560px] md:h-[620px] lg:h-[660px] xl:h-[550px] w-auto object-contain pointer-events-none z-10 drop-shadow-[0_20px_45px_rgba(0,0,0,0.15)] origin-bottom lg:scale-120 xl:scale-130"
            />

            {/* Floating Learning Progress Card Image (Layered under the spiral) */}
            <img
              src={growthLearningProgressImg}
              alt="Learning progress 55%"
              className="absolute right-[0%] sm:right-[-5%] md:right-[-8%] lg:right-[-10%] xl:right-[-12%] bottom-[16%] sm:bottom-[24%] md:bottom-[32%] lg:bottom-[36%] xl:bottom-[40%] w-[150px] sm:w-[175px] md:w-[195px] lg:w-[215px] xl:w-[235px] h-auto object-contain pointer-events-none z-20 drop-shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            BLOCK 2: Female Creator / Create & Manage Courses
            ══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Left Visual Composition (Female Creator, Blue Cards & Lime Spiral) */}
          <div className="relative w-full max-w-[560px] sm:max-w-[620px] lg:max-w-[600px] xl:max-w-[660px] h-[480px] sm:h-[550px] md:h-[600px] lg:h-[640px] xl:h-[680px] mx-auto order-2 lg:order-1">
            {/* Top-Left Total Revenue Blue Card */}
            <img
              src={totalRevenueImg}
              alt="Total revenue"
              className="absolute left-[2%] sm:left-[3%] md:left-[4%] lg:left-[6%] xl:left-[6%] top-[4%] sm:top-[4%] md:top-[4%] lg:top-[4%] xl:top-[4%] w-[160px] sm:w-[185px] md:w-[205px] lg:w-[220px] xl:w-[230px] h-auto object-contain pointer-events-none z-0 drop-shadow-[0_14px_32px_rgba(4,69,255,0.22)]"
            />

            {/* Mid-Left Year To Date Blue Card (Positioned so $1,200.38 is fully legible) */}
            <img
              src={yearToDateImg}
              alt="Year to date revenue"
              className="absolute left-[2%] sm:left-[3%] md:left-[4%] lg:left-[6%] xl:left-[6%] top-[25%] sm:top-[25%] md:top-[25%] lg:top-[25%] xl:top-[25%] w-[90px] sm:w-[105px] md:w-[115px] lg:w-[125px] xl:w-[130px] h-auto object-contain pointer-events-none z-0 drop-shadow-[0_14px_32px_rgba(4,69,255,0.22)]"
            />

            {/* Female Creator with Headset and Tablet (Large Focal Element, Behind Spiral) */}
            <img
              src={femaleCallerImg}
              alt="Course creator with tablet"
              className="absolute left-[10%] sm:left-[10%] md:left-[9%] lg:left-[8%] xl:left-[8%] bottom-0 h-[490px] sm:h-[560px] md:h-[620px] lg:h-[660px] xl:h-[700px] w-auto object-contain pointer-events-none z-10 drop-shadow-[0_20px_45px_rgba(0,0,0,0.15)]"
            />

            {/* Right Lime Spiral Coil (At very front in foreground, layered over character) */}
            <img
              src={growthSpiralFemale}
              alt=""
              aria-hidden="true"
              className="absolute left-[50%] sm:left-[52%] md:left-[55%] lg:left-[58%] xl:left-[60%] top-[15%] sm:top-[15%] md:top-[15%] lg:top-[15%] xl:top-[15%] w-[135px] sm:w-[160px] md:w-[185px] lg:w-[205px] xl:w-[220px] object-contain pointer-events-none z-20"
            />

            {/* Bottom-Right Happy Students Rating Badge (Pinned over her lower right forearm) */}
            <img
              src={stickyFriendsImg}
              alt="Happy students rating"
              className="absolute right-[0%] sm:right-[1%] md:right-[0%] lg:right-[-2%] xl:right-[-3%] bottom-[22%] sm:bottom-[24%] md:bottom-[25%] lg:bottom-[25%] xl:bottom-[25%] w-[180px] sm:w-[210px] md:w-[235px] lg:w-[255px] xl:w-[270px] h-auto object-contain pointer-events-none z-30 drop-shadow-[0_16px_40px_rgba(0,0,0,0.14)]"
            />
          </div>

          {/* Right Text & Feature Checklist (Elevated on Y-axis) */}
          <div className="max-w-[580px] mx-auto lg:mx-0 text-center lg:text-left order-1 lg:order-2 translate-y-0 md:-translate-y-4 lg:-translate-y-10 xl:-translate-y-16">
            <h2 className="font-['Poppins',sans-serif] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[50px] font-semibold text-neutral-950 leading-[1.12] tracking-[-0.025em] mb-5 sm:mb-6 lg:mb-7">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p className="font-['Satoshi',sans-serif] text-[15px] sm:text-[16px] lg:text-[18px] text-[#717680] leading-[1.65] max-w-[580px] mx-auto lg:mx-0 mb-8 sm:mb-9 lg:mb-10 font-normal">
              <strong className="text-neutral-900 font-medium">
                ByteSpace
              </strong>{" "}
              supports individuals or entities in the creation, publication,
              <br className="hidden sm:inline" />
              and administration of educational courses.
            </p>

            {/* Checklist */}
            <ul className="space-y-4 sm:space-y-4.5 lg:space-y-5 max-w-[440px] mx-auto lg:mx-0 text-left">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full bg-primary-600 flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(4,69,255,0.25)]">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="font-['Satoshi',sans-serif] text-[16px] sm:text-[17px] lg:text-[18px] font-medium text-neutral-900 tracking-[-0.01em]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
