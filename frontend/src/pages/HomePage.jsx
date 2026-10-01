import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import PartnerSection from '../components/home/PartnerSection';
import ExploreCategoriesSection from '../components/home/ExploreCategoriesSection';
import CoursesCatalogSection from '../components/home/CoursesCatalogSection';
import GrowthFeaturesSection from '../components/home/GrowthFeaturesSection';
import CreatorCtaSection from '../components/home/CreatorCtaSection';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-['Satoshi',sans-serif]">
      <Navbar />

      <main className="flex-1 w-full bg-white">
        <HeroSection />
        <PartnerSection />
        <CoursesCatalogSection />
        <ExploreCategoriesSection />
        <GrowthFeaturesSection />
        <CreatorCtaSection />
      </main>

      <Footer />
    </div>
  );
}
