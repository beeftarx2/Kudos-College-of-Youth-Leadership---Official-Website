import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ThreePillars from './components/ThreePillars';
import AlumniSuccess from './components/AlumniSuccess';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FCFCFC]">
      <Navigation />
      <HeroSection />
      <ThreePillars />
      <AlumniSuccess />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;