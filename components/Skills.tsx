import React from 'react';
import SectionHeader from './SectionHeader';
import { Database, Cloud, PenTool, LayoutTemplate } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader title="Core Skills & Expertise" subtitle="Technical Toolkit" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Core Analytics */}
          <div className="bg-zinc-900/40 p-8 rounded-2xl border border-zinc-800 hover:border-orange-500/30 transition-colors">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6">
              <Database className="text-orange-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Core Analytics</h3>
            <ul className="space-y-3">
              {['SQL (Advanced)', 'Python (Pandas, NumPy)', 'Power BI', 'Looker', 'Tableau', 'DBT', 'Excel', 'Google Analytics 4'].map(skill => (
                <li key={skill} className="flex items-center text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Cloud & Engineering */}
          <div className="bg-zinc-900/40 p-8 rounded-2xl border border-zinc-800 hover:border-orange-500/30 transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
              <Cloud className="text-blue-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Cloud</h3>
            <ul className="space-y-3">
              {['Google Cloud Platform', 'Databricks', 'AWS', 'GitHub', 'Jupyter Hub'].map(skill => (
                <li key={skill} className="flex items-center text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Business & Strategy */}
          <div className="bg-zinc-900/40 p-8 rounded-2xl border border-zinc-800 hover:border-orange-500/30 transition-colors">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6">
              <LayoutTemplate className="text-green-400 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Business Tools</h3>
            <ul className="space-y-3">
              {['Figma', 'Confluence', 'Jira','ServiceNow', 'Salesforce', 'PowerPoint'].map(skill => (
                <li key={skill} className="flex items-center text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;