import React from 'react';
import { Smartphone, Zap, Sparkles, TrendingUp, Cpu, Briefcase } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Modern Design',
      desc: 'Bespoke, futuristic luxury interfaces tailored to your brand. No cookie-cutter templates or outdated styles.',
      metricLabel: 'Aesthetic Standard',
      metricVal: 100,
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />
    },
    {
      num: '02',
      title: 'Mobile First',
      desc: 'Tested obsessively across viewports from 360px up to 4K displays. Flawless touch ergonomics and zero layout breakages.',
      metricLabel: 'Viewport Coverage',
      metricVal: 100,
      icon: <Smartphone className="w-4 h-4 text-sky-400" />
    },
    {
      num: '03',
      title: 'Performance Focused',
      desc: 'Optimized asset pipelines, clean code execution, and high Core Web Vitals to keep bounce rates minimal.',
      metricLabel: 'Optimization Priority',
      metricVal: 95,
      icon: <Zap className="w-4 h-4 text-amber-400" />
    },
    {
      num: '04',
      title: 'Conversion Focused',
      desc: 'Engineered visual hierarchy and strategic CTAs designed specifically to generate customer inquiries and calls.',
      metricLabel: 'UX Funnel Focus',
      metricVal: 96,
      icon: <TrendingUp className="w-4 h-4 text-emerald-400" />
    },
    {
      num: '05',
      title: 'AI Ready',
      desc: 'Modern architectures capable of seamlessly integrating chatbots, automation webhooks, and intelligence workflows.',
      metricLabel: 'Future Integration',
      metricVal: 92,
      icon: <Cpu className="w-4 h-4 text-indigo-400" />
    },
    {
      num: '06',
      title: 'Business Focused',
      desc: 'We prioritize real commercial outcomes: phone calls, WhatsApp messages, and verified leads over vanity fluff.',
      metricLabel: 'Commercial Alignment',
      metricVal: 98,
      icon: <Briefcase className="w-4 h-4 text-cyan-300" />
    }
  ];

  return (
    <section className="relative py-24 border-t border-white/[0.08] bg-[#02050e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2 block">
              03. Engineering Principles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Why Ayaan Digital?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-mono">
            Every client deliverable is governed by strict technical benchmarks, modern design disciplines, and practical business utility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item) => (
            <div
              key={item.num}
              className="p-6 rounded-xl glass-panel glass-panel-hover border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono text-neutral-500">
                    {item.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Technical Commitment Bar */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex justify-between items-center text-[11px] font-mono text-neutral-400 mb-1.5">
                  <span className="uppercase">{item.metricLabel}</span>
                  <span className="text-cyan-400 tabular-nums">{item.metricVal}%</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full transition-all duration-1000"
                    style={{ width: `${item.metricVal}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[11px] font-mono text-neutral-500">
            Note: Metric percentages denote our architectural commitment benchmarks and code inspection targets.
          </p>
        </div>
      </div>
    </section>
  );
};
