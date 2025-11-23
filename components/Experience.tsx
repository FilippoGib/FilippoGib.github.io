import React from 'react';
import { EXPERIENCE } from '../constants';
import { ArrowRightIcon } from './Icons';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 lg:px-24 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-zinc-100">01. Experience</h2>
        <div className="h-px bg-zinc-800 flex-grow max-w-xs"></div>
      </div>

      <div className="space-y-12">
        {EXPERIENCE.map((job, index) => (
          <div 
            key={index} 
            className="relative pl-8 border-l border-zinc-800 hover:border-zinc-600 transition-colors duration-300"
          >
            <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-zinc-800 ring-4 ring-zinc-950"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-zinc-100">{job.role}</h3>
              <span className="text-sm font-mono text-zinc-500 mt-1 sm:mt-0">{job.period}</span>
            </div>
            
            <h4 className="text-lg text-indigo-400 font-medium mb-4">{job.company}</h4>
            
            <ul className="space-y-3">
              {job.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-400 leading-relaxed">
                  <ArrowRightIcon className="w-4 h-4 mt-1.5 text-zinc-600 flex-shrink-0" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;