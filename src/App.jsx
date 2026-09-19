import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import MenuSection from './components/MenuSection';
import HoursLocation from './components/HoursLocation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F8FAFC]">
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <MenuSection />
        <HoursLocation />
      </main>
      <Footer />
    </div>
  );
}
