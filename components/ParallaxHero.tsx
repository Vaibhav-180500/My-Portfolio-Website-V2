import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, FileText } from 'lucide-react';

const FRAME_COUNT = 160;
const BASE_URL = "https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/web-sequence/";

const generateFrameUrl = (index: number) => {
  const paddedIndex = index.toString().padStart(3, '0');
  return `${BASE_URL}frame_${paddedIndex}_delay-0.05s.webp`;
};

interface ParallaxHeroProps {
  onViewCV: () => void;
}

const ParallaxHero: React.FC<ParallaxHeroProps> = ({ onViewCV }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const requestRef = useRef<number | null>(null);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const preloadImages = async () => {
      const promises = [];
      
      // Prioritize first 30 frames for immediate render
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = generateFrameUrl(i);
        imagesRef.current[i] = img;
        
        const promise = new Promise<void>((resolve) => {
          img.onload = () => {
            loadedCount++;
            setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
            resolve();
          };
          img.onerror = () => resolve(); // Don't break on error
        });
        promises.push(promise);
      }
      
      // Draw first frame immediately when possible
      if (imagesRef.current[0].complete) {
        drawFrame(0);
      } else {
        imagesRef.current[0].onload = () => drawFrame(0);
      }
    };

    preloadImages();
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = imagesRef.current[index];

    if (canvas && ctx && img && img.complete) {
      // Scale 'cover' logic for canvas
      const w = canvas.width;
      const h = canvas.height;
      const imgRatio = img.width / img.height;
      const canvasRatio = w / h;
      
      let drawW, drawH, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        drawW = w;
        drawH = w / imgRatio;
        offsetX = 0;
        offsetY = (h - drawH) / 2;
      } else {
        drawH = h;
        drawW = h * imgRatio;
        offsetX = (w - drawW) / 2;
        offsetY = 0;
      }
      
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    }
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const scrollY = window.scrollY;
    const maxScroll = containerRef.current.offsetHeight - window.innerHeight;
    const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
    
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(progress * (FRAME_COUNT - 1))
    );

    requestRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        handleScroll();
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-zinc-950">
      {/* Sticky Canvas Background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        {/* Loading Overlay */}
        {loadingProgress < 100 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-50 transition-opacity duration-1000 pointer-events-none" style={{ opacity: loadingProgress > 90 ? 0 : 1 }}>
            <div className="text-orange-500 font-mono text-sm">
              LOADING SYSTEM... {loadingProgress}%
            </div>
          </div>
        )}
        
        {/* Content Overlay - Sticky Container */}
        {/* Reduced pt-24 to pt-20 on mobile to save vertical space */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto z-10 pointer-events-none pt-20 md:pt-0">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center pointer-events-auto">
            
            {/* Left Side: Identity */}
            <div className="space-y-4 md:space-y-6 animate-fade-in-up">
              <div className="space-y-1">
                <p className="text-zinc-400 font-medium tracking-wide">Hey, I am</p>
                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-tight">
                  VAIBHAV <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
                    KUMAR
                  </span>
                </h1>
              </div>

              <button 
                onClick={onViewCV}
                className="group flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-orange-500/50 rounded-xl transition-all duration-300 w-fit"
              >
                <FileText className="w-5 h-5 text-orange-500" />
                <span className="font-bold tracking-tight">View My CV</span>
              </button>
            </div>

            {/* Right Side: Value Prop */}
            {/* Reduced space-y and pt for mobile to fit social icons within viewport */}
            <div className="space-y-4 md:space-y-8 md:pl-12 pt-4 md:pt-0 animate-fade-in-up delay-150">
              <div className="space-y-4 md:space-y-6 backdrop-blur-sm bg-black/20 p-5 md:p-8 rounded-2xl border border-white/5 shadow-2xl">
                <h2 className="text-xl md:text-3xl font-bold text-white leading-tight">
                  I don't just extract data, but I build systems that <span className="text-orange-400">save money</span> and <span className="text-orange-400">improve performance</span>.
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  Data Analyst based in Paris with 3+ years of international experience, specializing in bridging the gap between raw technical data and strategic business decisions.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-6">
                <a 
                  href="https://github.com/Vaibhav-180500" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-orange-600 transition-all transform hover:-translate-y-1"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/vaibhav-kumar1805/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-orange-600 transition-all transform hover:-translate-y-1"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:vaibhav.kumar@kedgebs.com" 
                  className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-orange-600 transition-all transform hover:-translate-y-1"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator - Hidden on very small height mobile screens to save space if needed, or kept for UX */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none text-zinc-500">
            <ChevronDown className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHero;
