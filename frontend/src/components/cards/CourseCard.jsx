import React from "react";
import { BarChart2 } from "lucide-react";

export default function CourseCard({
  title = "Learn Figma from Basic",
  instructor = "by purepearl studio",
  level = "Beginner",
  lessons = 17,
  duration = "2 hours 16 mins",
  comments = 59,
  rating = 4.5,
  enrolled = "26+",
  price = "$25",
  period = "/lifetime",
  thumbnail = "/assets/courses/course-1.jpg",
  participantsImg = null,
  hasBakedBadges = false,
  avatars = [
    "/assets/avatars/student-1.jpg",
    "/assets/avatars/student-2.jpg",
    "/assets/avatars/student-3.jpg",
    "/assets/avatars/student-4.jpg",
  ],
}) {
  return (
    <div className="bg-white rounded-[24px] border border-neutral-100 p-4 sm:p-5 flex flex-col transition-all duration-300 relative shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,59,226,0.08)]">
      {/* Thumbnail with optional overlay badges */}
      <div className="relative w-full rounded-[18px] lg:rounded-[20px] overflow-hidden aspect-[341/196] bg-neutral-50">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-103 block"
          loading="lazy"
        />

        {/* 3 Frosted Pill Badges inside bottom of thumbnail (only if badges are not baked into image) */}
        {!hasBakedBadges && (
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 flex-wrap">
            <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11.5px] font-medium text-neutral-700 whitespace-nowrap">
              {lessons} Lessons
            </span>
            <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11.5px] font-medium text-neutral-700 whitespace-nowrap">
              {duration}
            </span>
            <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11.5px] font-medium text-neutral-700 whitespace-nowrap">
              {comments} Comments
            </span>
          </div>
        )}
      </div>

      {/* Course Info */}
      <div className="pt-4 pb-1 px-0.5 flex flex-col font-['Satoshi',sans-serif]">
        {/* Title & Rating */}
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3
            className="font-['Poppins',sans-serif] text-[19px] sm:text-[20px] lg:text-[21px] font-semibold text-black leading-snug m-0 truncate"
            title={title}
          >
            {title}
          </h3>
          <div className="flex items-center gap-1.5 text-[18px] sm:text-[19px] lg:text-[20px] font-medium text-[#767982] shrink-0">
            <span>{rating}</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="shrink-0"
            >
              <path
                fill="#b6bbc7"
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
          </div>
        </div>

        {/* Instructor */}
        <p className="text-[13.5px] sm:text-[14px] font-medium text-primary-800 m-0 mb-3">
          {instructor}
        </p>

        {/* Level Badge + Avatar Stack */}
        <div className="my-2.5 sm:my-3.5 flex items-center">
          {participantsImg ? (
            <img
              src={participantsImg}
              alt="Beginner level and enrolled participants"
              className="h-[30px] sm:h-[32px] lg:h-[34px] w-auto object-contain pointer-events-none"
            />
          ) : (
            <div className="flex items-center justify-between w-full">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-50 rounded-full text-[12.5px] font-medium text-neutral-700">
                <BarChart2 size={15} className="text-neutral-700" />
                <span>{level}</span>
              </div>

              <div className="flex items-center gap-1">
                <div className="flex items-center">
                  {avatars.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar}
                      alt={`Student ${idx + 1}`}
                      className="w-6 h-6 rounded-full border-2 border-white object-cover -ml-2 first:ml-0"
                    />
                  ))}
                </div>
                <span className="bg-accent-500 text-black text-[11px] font-bold px-2 py-0.5 rounded-full -ml-1 border-[1.5px] border-white">
                  {enrolled}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="flex items-baseline mt-2.5 sm:mt-3">
          <span className="font-['Poppins',sans-serif] text-[22px] sm:text-[24px] lg:text-[25px] font-bold text-primary-800">
            {price}
          </span>
          <span className="text-[13px] sm:text-[14px] text-neutral-400 font-normal">
            {period}
          </span>
        </div>
      </div>
    </div>
  );
}
