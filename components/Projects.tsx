import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLinkIcon } from './Icons';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 lg:px-24 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-zinc-100">02. Some Things I've Built</h2>
        <div className="h-px bg-zinc-800 flex-grow max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <div 
            key={index}
            className="group glass-panel rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-indigo-400">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3h18v18H3zM12 8v8M8 12h8" />
                </svg>
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-indigo-400 transition-colors"
                >
                  <ExternalLinkIcon className="w-6 h-6" />
                </a>
              )}
            </div>

            <h3 className="text-xl font-bold text-zinc-100 mb-4 group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-zinc-400 mb-8 flex-grow leading-relaxed">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-3 mt-auto">
              {project.technologies.map((tech) => (
                <li key={tech} className="text-xs font-mono text-zinc-500 bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;