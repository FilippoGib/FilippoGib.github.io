import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { EDUCATION } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background Gradient Mesh */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-purple-900/20 rounded-full blur-[100px] opacity-20"></div>
      </div>

      {/* Navigation - Minimal Sticky Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-zinc-950/80 border-b border-white/5 h-16 flex items-center">
        <div className="max-w-6xl mx-auto w-full px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-zinc-100">
            ad<span className="text-indigo-500">.</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Experience />
        <Projects />
        
        {/* Education Section (Inline simple version) */}
        <section id="education" className="py-24 px-6 lg:px-24 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-zinc-100">03. Education</h2>
            <div className="h-px bg-zinc-800 flex-grow max-w-xs"></div>
          </div>
          <div className="space-y-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 glass-panel rounded-xl">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100">{edu.school}</h3>
                  <p className="text-indigo-400">{edu.degree}</p>
                </div>
                <span className="text-zinc-500 font-mono mt-2 sm:mt-0">{edu.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center text-zinc-600 text-sm">
          <p>Designed & Built by Alex Dev</p>
          <p className="mt-2">Powered by React & Tailwind</p>
        </footer>
      </main>
    </div>
  );
};

export default App;