import React from "react";
import CategoryCard from "../cards/CategoryCard";

import iconDesign from "../../assets/explore_design.png";
import iconDevelopment from "../../assets/explore_development.png";
import iconITSoftware from "../../assets/explore_it_software.png";
import iconBusiness from "../../assets/explore_business.png";
import iconMarketing from "../../assets/explore_marketing.png";
import iconPhotography from "../../assets/explore_photography.png";

const CATEGORIES = [
  { id: 1, title: "Design", iconSrc: iconDesign },
  { id: 2, title: "Development", iconSrc: iconDevelopment },
  { id: 3, title: "IT & Software", iconSrc: iconITSoftware },
  { id: 4, title: "Business", iconSrc: iconBusiness },
  { id: 5, title: "Marketing", iconSrc: iconMarketing },
  { id: 6, title: "Photography", iconSrc: iconPhotography },
];

export default function ExploreCategoriesSection({ onSelectCategory }) {
  return (
    <section className="w-full bg-white select-none pt-2 sm:pt-4 md:pt-6 pb-14 sm:pb-16 md:pb-20 lg:pb-24">
      <div className="w-full max-w-[1200px] xl:max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-[880px] mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-['Poppins',sans-serif] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-semibold text-neutral-950 leading-[1.2] tracking-[-0.025em] mb-3 sm:mb-4">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-['Satoshi',sans-serif] text-[15px] sm:text-[16px] lg:text-[17px] text-[#717680] leading-[1.65] max-w-[920px] mx-auto font-normal">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various
            <br className="hidden md:inline" /> fields, ensuring there's
            something for everyone. Unleash your potential and explore our
            carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.id}
              title={cat.title}
              iconSrc={cat.iconSrc}
              onClick={() => onSelectCategory && onSelectCategory(cat.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
