import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-['Satoshi',sans-serif]">
      <Navbar />

      <main className="flex-1 w-full bg-primary-600">
        {/* Placeholder cleared: Hero section components with exact Figma coordinates and assets to be placed here */}
      </main>

      <Footer />
    </div>
  );
}
