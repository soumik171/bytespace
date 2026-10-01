import React from 'react';
import logo1 from '../../assets/Logoipsum_1.png';
import logo2 from '../../assets/Logoipsum_2.png';
import logo3 from '../../assets/Logoipsum_3.png';
import logo4 from '../../assets/Logoipsum_4.png';
import logo5 from '../../assets/Logoipsum_5.png';

const partners = [
  { id: 1, name: 'Logoipsum 1', src: logo1 },
  { id: 2, name: 'Logoipsum 2', src: logo2 },
  { id: 3, name: 'Logoipsum 3', src: logo3 },
  { id: 4, name: 'Logoipsum 4', src: logo4 },
  { id: 5, name: 'Logoipsum 5', src: logo5 },
];

export default function PartnerSection() {
  return (
    <section className="w-full bg-[#F5F5F6] py-10 sm:py-12 md:py-16 lg:py-20 select-none">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex items-center justify-center sm:justify-between flex-wrap gap-8 sm:gap-6 md:gap-8 lg:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center transition-opacity duration-200 opacity-85 hover:opacity-100 cursor-pointer"
            >
              <img
                src={partner.src}
                alt={partner.name}
                className="h-7 sm:h-8 md:h-10 lg:h-11 w-auto object-contain pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
