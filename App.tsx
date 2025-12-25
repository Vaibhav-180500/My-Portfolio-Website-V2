import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ParallaxHero from './components/ParallaxHero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Hobbies from './components/Hobbies';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const toggleCVModal = () => setIsCVModalOpen(!isCVModalOpen);

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-orange-500 selection:text-white font-sans">
      <Navbar onViewCV={toggleCVModal} />
      
      <main>
        {/* Hero Section containing the canvas parallax */}
        <ParallaxHero onViewCV={toggleCVModal} />
        
        {/* Content Sections */}
        <div className="relative z-20 bg-zinc-950 border-t border-zinc-800 shadow-[0_-50px_100px_rgba(0,0,0,1)]">
          <About />
          <Projects />
          <Skills />
          <Testimonials />
          <Hobbies />
          <FAQ />
          <CTA />
        </div>
      </main>
      
      <Footer />

      {/* CV Preview Modal */}
      <CVModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />
    </div>
  );
}

export default App;