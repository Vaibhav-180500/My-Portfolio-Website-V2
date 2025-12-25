import React from 'react';
import SectionHeader from './SectionHeader';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "Mobile Game Analytics",
    description: "Built a full-stack analytics pipeline to understand player behavior, monetization, and retention for a mobile RPG with 10M+ event records.",
    image: "https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Container-images/Game%20analytics.webp",
    link: "https://github.com/Vaibhav-180500/Game_Analytics_using_SQL_and_Looker",
    tags: ["SQL", "Looker", "Statistical Testing"],
  },
  {
    id: 2,
    title: "Category Growth Analysis",
    description: "Performed a full market, category, and competitor analysis of the Vodka category in France to diagnose share loss for Eristoff and identify growth levers.",
    image: "https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Container-images/category-growth.webp",
    link: "https://www.canva.com/design/DAF8M1KSRXc/OLmLKrhF2XtEfzbN0PcjJQ/view?utm_content=DAF8M1KSRXc&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    tags: ["Market Analysis", "Benchmarking", "Strategy"],
  },
  {
    id: 3,
    title: "E-Commerce Sales Analytics",
    description: "Designed a star-schema and interactive BI dashboard to analyze post‑2020 internet sales by product and customer segments.",
    image: "https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Container-images/ecommerce-sale.webp",
    link: "https://salessql.my.canva.site/sqldashboard",
    tags: ["SQL Server", "Power BI", "Star Schema"],
  },
  {
    id: 4,
    title: "Sports Data Analysis",
    description: "Scraped and analyzed IPL data to build a data-driven “best XI” player team based on multiple performance parameters.",
    image: "https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Container-images/ipl.webp",
    link: "https://salessql.my.canva.site/ipldataanalysis",
    tags: ["Python", "Web Scraping", "Power BI"],
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Featured Projects" subtitle="Real Impact" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 block"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-orange-500/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">{project.title}</h3>
                  <ArrowUpRight className="text-zinc-500 group-hover:text-orange-500 transition-colors" />
                </div>
                <p className="text-zinc-400 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-mono rounded-full border border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href="https://github.com/Vaibhav-180500"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-full border border-zinc-700 hover:border-orange-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]"
          >
            <span>View More</span>
            <ArrowUpRight className="w-5 h-5 group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;