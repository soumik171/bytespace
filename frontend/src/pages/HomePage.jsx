import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import PartnerSection from '../components/home/PartnerSection';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-['Satoshi',sans-serif]">
      <Navbar />

      <main className="flex-1 w-full bg-white">
        <HeroSection />
        <PartnerSection />
      </main>

      <Footer />
    </div>
  );
}
