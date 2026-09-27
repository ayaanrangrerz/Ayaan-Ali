import React from 'react';
import { Layers, ShieldCheck, Zap, Target, Cpu } from 'lucide-react';

export const TrustIntro: React.FC = () => {
  const pillars = [
    {
      title: 'Modern Web Development',
      desc: 'Built with contemporary frameworks, semantic HTML, and zero bloated page-builder overhead.',
      metric: '100% Custom'
    },
    {
      title: 'Conversion-Focused UX',
      desc: 'Strategic typography, visual hierarchy, and frictionless inquiry forms engineered to capture leads.',
      metric: 'Engineered UX'
    },
    {
      title: 'Targeted Digital Advertising',
      desc: 'Google & Meta ad campaign frameworks focused on tangible customer acquisitions over empty clicks.',
      metric: 'Direct Inbound'
    },
    {
      title: 'AI-Powered Workflows',
      desc: 'Smart chatbots, automation triggers, and intelligence APIs that save operational time.',
      metric: 'Automated'
    },
    {
      title: 'Performance & Speed',
      desc: 'Mobile-first optimization, optimized asset delivery, and sub-second response times.',
      metric: 'Sub-Second'
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 border-y border-white/[0.08] bg-[#040817]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Statement */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-3 block">
              01. Architectural Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6 text-balance">
              Digital infrastructure for businesses that want to move forward.
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-6">
              Ayaan Digital operates at the intersection of modern frontend engineering, direct-response advertising, and applied AI automation. We do not build slow, generic templates. We build robust digital assets that establish immediate authority and convert casual visitors into verified customers.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Independent Digital Studio · Direct Founder Engineering</span>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className={`p-5 rounded-lg glass-panel glass-panel-hover flex flex-col justify-between ${
                  idx === 0 ? 'sm:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-cyan-400/80">0{idx + 1}</span>
                    <span className="text-[11px] font-mono text-neutral-400 border border-neutral-700/60 rounded px-1.5 py-0.5">
                      {pillar.metric}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
