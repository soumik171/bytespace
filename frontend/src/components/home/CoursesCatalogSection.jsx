import React, { useState } from "react";
import CourseCard from "../cards/CourseCard";

import skillCommonParticipants from "../../assets/skill_common_participants_img.png";
import skillImgCard1 from "../../assets/skill_img_card_1.png";
import skillImgCard2 from "../../assets/skill_img_card_2.png";
import skillImgCard3 from "../../assets/skill_img_card_3.png";
import skillImgCard4 from "../../assets/skill_img_card_4.png";
import skillImgCard5 from "../../assets/skill_img_card_5.png";
import skillImgCard6 from "../../assets/skill_img_card_6.png";

const CATEGORY_ROWS = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

const ALL_CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const COURSES = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    instructor: "by purepearl studio",
    rating: 4.5,
    price: "$25",
    period: "/lifetime",
    thumbnail: skillImgCard1,
    categories: [
      "Featured",
      "UI/UX Design",
      "Graphic Design",
      "Digital Illustration",
    ],
  },
  {
    id: 2,
    title: "Build Digital Asset",
    instructor: "by purepearl studio",
    rating: 4.5,
    price: "$25",
    period: "/lifetime",
    thumbnail: skillImgCard2,
    categories: [
      "Featured",
      "Graphic Design",
      "Animation",
      "Drawing & Painting",
      "Crafts",
    ],
  },
  {
    id: 3,
    title: "the Power of Big Data",
    instructor: "by purepearl studio",
    rating: 4.5,
    price: "$25",
    period: "/lifetime",
    thumbnail: skillImgCard3,
    categories: ["Featured", "Data Science", "Web Development"],
  },
  {
    id: 4,
    title: "Balancing Productivity and Life",
    instructor: "by purepearl studio",
    rating: 4.5,
    price: "$25",
    period: "/lifetime",
    thumbnail: skillImgCard4,
    categories: ["Featured", "Productivity", "Freelance & Entrepreneurship"],
  },
  {
    id: 5,
    title: "Mastering Money Management",
    instructor: "by purepearl studio",
    rating: 4.5,
    price: "$25",
    period: "/lifetime",
    thumbnail: skillImgCard5,
    categories: [
      "Featured",
      "Freelance & Entrepreneurship",
      "Marketing",
      "Creative Marketing",
    ],
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    instructor: "by purepearl studio",
    rating: 4.5,
    price: "$25",
    period: "/lifetime",
    thumbnail: skillImgCard6,
    categories: [
      "Featured",
      "Freelance & Entrepreneurship",
      "Marketing",
      "Creative Marketing",
      "Social Media",
    ],
  },
];

export default function CoursesCatalogSection() {
  const [activeTab, setActiveTab] = useState("Featured");

  const filtered =
    activeTab === "Featured"
      ? COURSES
      : COURSES.filter((c) => c.categories.includes(activeTab));

  const displayCourses = filtered.length > 0 ? filtered : COURSES;

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-28 select-none">
      <div className="w-full max-w-[1440px] xl:max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-[960px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-['Poppins',sans-serif] text-[30px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[55px] font-semibold text-neutral-950 leading-[1.14] tracking-[-0.025em] mb-5 sm:mb-6">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="font-['Satoshi',sans-serif] text-[15px] sm:text-[16.5px] lg:text-[17.5px] text-[#717680] leading-[1.65] max-w-[960px] mx-auto font-normal">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different
            <br className="hidden md:inline" /> fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Filter Category Tabs (Desktop: Exact 3-row layout matching reference) */}
        <div className="hidden lg:flex flex-col items-center gap-3.5 lg:gap-4 mb-14">
          {/* Row 1 */}
          <div className="flex items-center justify-center gap-2.5 lg:gap-3">
            {CATEGORY_ROWS[0].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-5.5 py-2.5 lg:px-6 lg:py-2.5 rounded-full text-[14.5px] lg:text-[15.5px] transition-all duration-200 cursor-pointer font-['Satoshi',sans-serif] ${
                  activeTab === cat
                    ? "bg-accent-500 text-black font-semibold shadow-[0_2px_8px_rgba(203,252,1,0.3)]"
                    : "bg-[#F5F5F6] text-[#525866] hover:text-black hover:bg-neutral-200/80 font-medium"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-center gap-2.5 lg:gap-3">
            {CATEGORY_ROWS[1].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-5.5 py-2.5 lg:px-6 lg:py-2.5 rounded-full text-[14.5px] lg:text-[15.5px] transition-all duration-200 cursor-pointer font-['Satoshi',sans-serif] ${
                  activeTab === cat
                    ? "bg-accent-500 text-black font-semibold shadow-[0_2px_8px_rgba(203,252,1,0.3)]"
                    : "bg-[#F5F5F6] text-[#525866] hover:text-black hover:bg-neutral-200/80 font-medium"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-center gap-2.5 lg:gap-3">
            {CATEGORY_ROWS[2].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-5.5 py-2.5 lg:px-6 lg:py-2.5 rounded-full text-[14.5px] lg:text-[15.5px] transition-all duration-200 cursor-pointer font-['Satoshi',sans-serif] ${
                  activeTab === cat
                    ? "bg-accent-500 text-black font-semibold shadow-[0_2px_8px_rgba(203,252,1,0.3)]"
                    : "bg-[#F5F5F6] text-[#525866] hover:text-black hover:bg-neutral-200/80 font-medium"
                }`}
              >
                {cat}
              </button>
            ))}
            <button
              type="button"
              className="text-primary-800 hover:text-primary-900 font-['Satoshi',sans-serif] font-semibold text-[15px] lg:text-[16px] px-3.5 py-2.5 cursor-pointer transition-colors duration-200 ml-0.5"
            >
              + More
            </button>
          </div>
        </div>

        {/* Filter Category Tabs (Mobile / Tablet Responsive Wrap) */}
        <div className="flex lg:hidden flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13.5px] sm:text-[14.5px] transition-all duration-200 cursor-pointer font-['Satoshi',sans-serif] ${
                activeTab === cat
                  ? "bg-accent-500 text-black font-semibold shadow-[0_2px_8px_rgba(203,252,1,0.3)]"
                  : "bg-[#F5F5F6] text-[#525866] hover:text-black hover:bg-neutral-200/80 font-medium"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 xl:gap-9">
          {displayCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              rating={course.rating}
              price={course.price}
              period={course.period}
              thumbnail={course.thumbnail}
              participantsImg={skillCommonParticipants}
              hasBakedBadges={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
