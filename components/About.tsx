import React from 'react';
import SectionHeader from './SectionHeader';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const timeline = [
  {
    period: "2019 - 2022",
    title: "Bachelor of Business Administration",
    institution: "Amity University - INDIA",
    type: "education",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "border-blue-500/50"
  },
  {
    period: "2021 - 2022",
    title: "Marketing Analyst",
    institution: "Quality of Life Experiment",
    type: "work",
    icon: <Briefcase className="w-5 h-5" />,
    color: "border-green-500/50"
  },
  {
    period: "2022 - 2024",
    title: "MSc in Marketing (Data Science & AI)",
    institution: "Kedge Business School",
    type: "education",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "border-blue-500/50"
  },
  {
    period: "2023",
    title: "Market Research Analyst (May – Sept)",
    institution: "Best Influence",
    type: "work",
    icon: <Briefcase className="w-5 h-5" />,
    color: "border-purple-500/50"
  },
  {
    period: "2024 - 2025",
    title: "Corporate CMI – Data Analyst",
    institution: "L'Oréal",
    type: "work",
    icon: <Briefcase className="w-5 h-5" />,
    color: "border-orange-500/50" // Highlight current role
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="About Me" subtitle="Bridging Data & Strategy" />

        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          
          {/* Visual/Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-orange-500 rounded-2xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative h-[500px] w-full bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
              <img 
                src="https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Container-images/paris.webp" 
                alt="Vaibhav Kumar Workspace" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <p className="text-white font-bold text-xl flex items-center gap-2">
                  Based in Paris <span className="text-2xl">🇫🇷</span>
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Bridging Data & Strategic Business Decisions</h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                My journey began not in computer science, but in business. I realized early on that organizations were drowning in data but starving for insights. I taught myself to swim in that data lake. 
              </p>
              <p className="text-zinc-400 leading-relaxed text-lg mt-4">
                Today, I operate at the intersection of technical analytics and executive strategy. I speak the language of databases and the language of the boardroom, translating complex datasets into clear, actionable roadmaps.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-orange-500/50 transition-colors group">
                <h4 className="text-3xl font-black text-orange-500 group-hover:scale-110 transition-transform origin-left">€5.4M</h4>
                <p className="text-sm text-zinc-400 mt-1 uppercase tracking-wide">Compliance Saved</p>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-orange-500/50 transition-colors group">
                <h4 className="text-3xl font-black text-orange-500 group-hover:scale-110 transition-transform origin-left">25%</h4>
                <p className="text-sm text-zinc-400 mt-1 uppercase tracking-wide">Efficiency Coverage</p>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-orange-500/50 transition-colors group">
                <h4 className="text-3xl font-black text-orange-500 group-hover:scale-110 transition-transform origin-left">+9%</h4>
                <p className="text-sm text-zinc-400 mt-1 uppercase tracking-wide">Sign-ups Growth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div id="my-journey" className="relative scroll-mt-24">
          <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-3">
             <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
             My Journey
          </h3>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Timeline List */}
            <div className="relative border-l-2 border-zinc-800 ml-3 md:ml-6 space-y-12 pb-4">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12 group">
                  {/* Dot */}
                  <div className={`absolute -left-[9px] top-2 w-[18px] h-[18px] rounded-full bg-zinc-950 border-4 border-zinc-700 group-hover:border-orange-500 transition-colors duration-300 z-10`}></div>
                  
                  {/* Connector for hover effect */}
                  <div className="absolute left-[0px] top-2 bottom-0 w-0.5 bg-orange-500 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 -ml-[1px]"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-500 font-mono font-bold text-xs tracking-wider uppercase">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                    <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{item.institution}</h4>
                  </div>
                  
                  <p className="text-lg text-zinc-300 font-medium">{item.title}</p>
                  
                  <div className="mt-3 flex items-center gap-2 text-zinc-500 text-sm">
                     <div className={`p-1.5 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors`}>
                      {item.icon}
                     </div>
                     <span className="uppercase tracking-wide text-xs font-semibold">{item.type}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Visual/Image Representation of Journey */}
            <div className="relative hidden lg:block h-full min-h-[600px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                
                <img 
                  src="https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Container-images/My%20journey.webp" 
                  alt="My Journey Map" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;