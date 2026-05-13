import React from 'react';
import { EXPERIENCE_ABROAD } from '../constants';

const ExperienceAbroad: React.FC = () => {
  return (
    <section id="experience-abroad" className="py-24 px-6 lg:px-24 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-zinc-100">03. Time Abroad</h2>
        <div className="h-px bg-zinc-800 flex-grow max-w-xs"></div>
      </div>

      <div className="space-y-6">
        {EXPERIENCE_ABROAD.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 glass-panel rounded-xl"
          >
            <div>
              <h3 className="text-xl font-bold text-zinc-100">{experience.program}</h3>
              <p className="text-indigo-400">{experience.location}</p>
            </div>
            <span className="text-zinc-500 font-mono mt-2 sm:mt-0">{experience.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceAbroad;
