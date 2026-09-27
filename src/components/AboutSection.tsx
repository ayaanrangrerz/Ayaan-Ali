import React from 'react';
import { CheckCircle, Terminal, Layers, ArrowUpRight, Linkedin } from 'lucide-react';
import { LINKEDIN_URL, LINKEDIN_DISPLAY } from '../data/content';

export const AboutSection: React.FC = () => {
  const competencies = [
    { name: 'Web Development', desc: 'Modern TypeScript, React, Vite & semantic web standards.' },
    { name: 'Digital Marketing', desc: 'Google Search ads, Meta funnels & lead acquisition systems.' },
    { name: 'AI & Automation', desc: 'Custom conversational chatbots & operational workflow automation.' },
    { name: 'Frontend Architecture', desc: 'Mobile-first responsive layouts with sub-second asset delivery.' },
    { name: 'Performance Optimization', desc: 'Core Web Vitals acceleration & frictionless conversion paths.' }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#02050e] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Vision & Philosophy */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2 block">
              09. Studio Profile & Vision
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
              Technology meets creativity.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
              Ayaan Digital was founded on a simple principle: modern businesses shouldn't have to choose between aesthetic elegance and technical power. We bridge that gap by delivering custom-engineered digital storefronts, targeted paid media pipelines, and smart automation workflows that establish lasting market authority.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed mb-8">
              Unlike bloated agencies that outsource work to junior contractors or build fragile drag-and-drop sites, every project here is architected directly with clean code, purposeful typography, and conversion rigor.
            </p>

            {/* Core Competency Grid */}
            <div className="space-y-3">
              {competencies.map((comp) => (
                <div
                  key={comp.name}
                  className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80 flex items-start gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block mb-0.5">{comp.name}</span>
                    <span className="text-[11px] text-neutral-400">{comp.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Studio Atmosphere & Technical Seal */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl group">
              <img
                src="/src/assets/images/studio_atmosphere_1790491094095.jpg"
                alt="Ayaan Digital Studio Environment"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

              {/* Overlay Glass Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl glass-panel border border-cyan-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-cyan-400">FOUNDER LED STUDIO</span>
                  <span className="text-[10px] font-mono text-neutral-400 border border-neutral-700 px-1.5 py-0.5 rounded">
                    EST. 2024
                  </span>
                </div>
                <div className="font-display text-base font-bold text-white mb-1">
                  Crafted for Businesses Ready to Scale
                </div>
                <div className="text-xs text-neutral-300 mb-3">
                  Every interface and ad campaign is personally engineered with meticulous detail and zero template shortcuts.
                </div>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>Connect with {LINKEDIN_DISPLAY} on LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
