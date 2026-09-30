import React from 'react';
import { BarChart2, Star } from 'lucide-react';

export default function CourseCard({
  title = 'Learn Figma from Basic',
  instructor = 'by purepearl studio',
  level = 'Beginner',
  lessons = 17,
  duration = '2 hours 16 mins',
  comments = 59,
  rating = 4.5,
  enrolled = '26+',
  price = '$25',
  period = '/lifetime',
  thumbnail = '/assets/courses/course-1.jpg',
  avatars = [
    '/assets/avatars/student-1.jpg',
    '/assets/avatars/student-2.jpg',
    '/assets/avatars/student-3.jpg',
    '/assets/avatars/student-4.jpg',
  ],
}) {
  return (
    <div className="bg-white rounded-3xl border border-neutral-100 p-4 flex flex-col transition-all duration-250 relative shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:border-accent-500 hover:shadow-[0_16px_36px_rgba(4,69,255,0.08)]">
      {/* Thumbnail with overlay badges at bottom */}
      <div className="relative w-full rounded-2xl overflow-hidden aspect-16/10 bg-neutral-50">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover transition-transform duration-400 hover:scale-105 block" loading="lazy" />

        {/* 3 Frosted Pill Badges inside bottom of thumbnail (Exact Figma) */}
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
      </div>

      {/* Course Info */}
      <div className="pt-4.5 pb-1 px-1 flex flex-col font-['Satoshi',sans-serif]">
        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3 className="font-['Poppins',sans-serif] text-[18px] font-semibold text-black leading-snug m-0 line-clamp-1 flex-1" title={title}>
            {title}
          </h3>
          <div className="flex items-center gap-1 text-[14px] font-semibold text-black shrink-0">
            <span>{rating}</span>
            <Star size={15} fill="#D1D5DB" color="#9CA3AF" />
          </div>
        </div>

        {/* Instructor */}
        <p className="text-[13px] font-medium text-primary-600 m-0 mb-4">{instructor}</p>

        {/* Level Badge + Avatar Stack */}
        <div className="flex items-center justify-between mb-4">
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

        {/* Pricing */}
        <div className="flex items-baseline gap-1">
          <span className="font-['Poppins',sans-serif] text-[22px] font-bold text-primary-600">{price}</span>
          <span className="text-[13px] text-neutral-400">{period}</span>
        </div>
      </div>
    </div>
  );
}
