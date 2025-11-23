import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { GitHubIcon, LinkedInIcon, DownloadIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-24 max-w-5xl mx-auto pt-20">
      <div className="space-y-6 animate-[fadeIn_1s_ease-out]">
        <h2 className="text-zinc-400 font-medium tracking-wide text-lg">
          Hi, my name is
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 tracking-tight">
          {PERSONAL_INFO.name}.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-zinc-400 tracking-tight">
          I build things for the web.
        </h2>
        <p className="max-w-xl text-zinc-400 text-lg leading-relaxed mt-4">
          {PERSONAL_INFO.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-8">
          <a
            href={PERSONAL_INFO.resumeLink}
            download
            className="group flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 font-semibold rounded-full hover:bg-zinc-200 transition-all active:scale-95"
          >
            <DownloadIcon className="w-5 h-5" />
            Resume
          </a>
          
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-7 h-7" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;