import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
        {title}<span className="text-orange-500">.</span>
      </h2>
      {subtitle && (
        <div className="space-y-4">
          <p className="text-orange-500 font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
            {subtitle}
          </p>
          <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;