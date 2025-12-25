import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-black text-white tracking-tight">VAIBHAV<span className="text-orange-500">.</span></h3>
          <p className="text-zinc-500 text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/Vaibhav-180500" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-orange-500 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/vaibhav-kumar1805/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-orange-500 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;