import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onViewCV: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onViewCV }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutExpand, setMobileAboutExpand] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-black py-3 md:py-4 border-b border-zinc-800' : 'bg-transparent py-5 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex-1 flex items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-white font-black text-xl tracking-tight z-[101] relative cursor-pointer">
            VK<span className="text-orange-500">.</span>
          </a>
        </div>
        
        {/* Center: Desktop Nav (Centrally Aligned) */}
        <div className="hidden md:flex flex-none items-center justify-center gap-10">
          
          {/* About Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors py-2">
              About
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-2 min-w-[180px] shadow-2xl backdrop-blur-xl">
                <a 
                  href="#about" 
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="block px-4 py-2 text-sm text-zinc-400 hover:text-orange-500 hover:bg-zinc-800/50 rounded-lg transition-colors"
                >
                  About Me
                </a>
                <a 
                  href="#my-journey" 
                  onClick={(e) => scrollToSection(e, 'my-journey')}
                  className="block px-4 py-2 text-sm text-zinc-400 hover:text-orange-500 hover:bg-zinc-800/50 rounded-lg transition-colors"
                >
                  My Journey
                </a>
                <a 
                  href="#testimonials" 
                  onClick={(e) => scrollToSection(e, 'testimonials')}
                  className="block px-4 py-2 text-sm text-zinc-400 hover:text-orange-500 hover:bg-zinc-800/50 rounded-lg transition-colors"
                >
                  What Colleagues Say
                </a>
                <a 
                  href="#hobbies" 
                  onClick={(e) => scrollToSection(e, 'hobbies')}
                  className="block px-4 py-2 text-sm text-zinc-400 hover:text-orange-500 hover:bg-zinc-800/50 rounded-lg transition-colors"
                >
                  Hobbies
                </a>
                <a 
                  href="#faq" 
                  onClick={(e) => scrollToSection(e, 'faq')}
                  className="block px-4 py-2 text-sm text-zinc-400 hover:text-orange-500 hover:bg-zinc-800/50 rounded-lg transition-colors"
                >
                  FAQs
                </a>
              </div>
            </div>
          </div>

          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors cursor-pointer">Projects</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors cursor-pointer">Skills</a>
        </div>

        {/* Right: Actions (View CV + Contact) */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-6">
          <button 
            onClick={onViewCV}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-700 bg-transparent text-sm font-medium text-zinc-300 hover:text-white hover:border-orange-500 transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>View CV</span>
          </button>
          
          <a href="mailto:vaibhav.kumar@kedgebs.com" className="px-5 py-2 rounded-full bg-zinc-100 text-black text-sm font-bold hover:bg-orange-500 hover:text-white transition-all cursor-pointer">
            Contact Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-[101] relative flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-white p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black z-[100] flex flex-col items-center justify-start pt-24 space-y-4 md:hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
            <div className="flex flex-col items-center w-full px-12 overflow-y-auto max-h-[60vh] py-8">
              
              {/* Expandable About Group */}
              <div className="w-full flex flex-col items-center">
                <button 
                  onClick={() => setMobileAboutExpand(!mobileAboutExpand)}
                  className="flex items-center gap-2 text-xl font-semibold text-zinc-400 hover:text-orange-500 transition-colors py-4"
                >
                  About
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileAboutExpand ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`flex flex-col items-center space-y-4 overflow-hidden transition-all duration-300 ${mobileAboutExpand ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                  <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-lg text-zinc-500 hover:text-orange-500 transition-colors">About Me</a>
                  <a href="#my-journey" onClick={(e) => scrollToSection(e, 'my-journey')} className="text-lg text-zinc-500 hover:text-orange-500 transition-colors">My Journey</a>
                  <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="text-lg text-zinc-500 hover:text-orange-500 transition-colors">Recommendations</a>
                  <a href="#hobbies" onClick={(e) => scrollToSection(e, 'hobbies')} className="text-lg text-zinc-500 hover:text-orange-500 transition-colors">Hobbies</a>
                  <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-lg text-zinc-500 hover:text-orange-500 transition-colors">FAQs</a>
                </div>
              </div>

              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-xl font-semibold text-zinc-400 hover:text-orange-500 transition-colors py-4">Projects</a>
              <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="text-xl font-semibold text-zinc-400 hover:text-orange-500 transition-colors py-4">Skills</a>
            </div>

            <div className="flex flex-col items-center space-y-4 w-full px-12 pt-4">
              <button 
                onClick={() => { setMobileMenuOpen(false); onViewCV(); }} 
                className="w-full max-w-[280px] px-8 py-3.5 rounded-full border border-zinc-700 bg-transparent text-lg font-bold text-white hover:text-orange-500 hover:border-orange-500 flex items-center justify-center gap-3 transition-all active:scale-95"
              >
                <FileText className="w-5 h-5" />
                <span>View CV</span>
              </button>
              <a 
                href="mailto:vaibhav.kumar@kedgebs.com" 
                className="w-full max-w-[280px] px-8 py-3.5 rounded-full bg-zinc-100 text-black font-bold text-lg hover:bg-orange-500 hover:text-white text-center transition-all active:scale-95 shadow-xl shadow-orange-500/10"
              >
                Contact Me
              </a>
            </div>

            {/* Subtle branding footer in mobile menu */}
            <div className="absolute bottom-8 text-zinc-600 text-xs font-mono tracking-widest uppercase">
              PARIS • DATA ANALYTICS
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;