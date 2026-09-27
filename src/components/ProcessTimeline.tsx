import React from 'react';
import { PROCESS_STEPS } from '../data/content';

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="relative py-24 bg-[#030712] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2 block">
              08. Systematic Execution
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              The Production Process
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-mono">
            A linear, milestone-driven framework that eliminates friction and delivers production results on schedule.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-6 rounded-xl glass-panel glass-panel-hover border border-white/[0.08] relative overflow-hidden group"
            >
              {/* Subtle Step Watermark */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-cyan-400 border border-cyan-500/30 rounded px-2 py-0.5">
                  PHASE {step.step}
                </span>
                <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
                  0{idx + 1}/06
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                {step.title}
              </h3>

              <div className="text-xs font-semibold text-neutral-400 mb-3">
                {step.tagline}
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
