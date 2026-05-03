import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import StoreDetails from './components/StoreDetails.jsx';
import BusinessHours from './components/BusinessHours.jsx';
import Features from './components/Features.jsx';
import Gallery from './components/Gallery.jsx';
import CTA from './components/CTA.jsx';
import MapSection from './components/MapSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-green scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <StoreDetails />
        <Features />
        <Gallery />
        <BusinessHours />
        <CTA />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
