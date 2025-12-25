import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-zinc-950 to-zinc-950 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
          Ready to Transform <br/>
          <span className="text-orange-500">Data Into Strategy?</span>
        </h2>
        
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
          Let's stop guessing and start knowing. I help businesses unlock the hidden value in their data stacks.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/vaibhav-kumar1805/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-orange-600 text-white rounded-full font-bold overflow-hidden w-full sm:w-auto hover:bg-orange-500 transition-colors shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]"
          >
             <div className="flex items-center justify-center gap-2">
               <span>Let's Connect</span>
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;