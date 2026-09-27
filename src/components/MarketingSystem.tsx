import React, { useState } from 'react';
import { Target, Search, Eye, Filter, BarChart3, ArrowRight, Zap, RefreshCw } from 'lucide-react';

export const MarketingSystem: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      index: '01',
      title: 'DISCOVER',
      subtitle: 'Audience & Search Intent Research',
      icon: <Search className="w-5 h-5 text-cyan-400" />,
      metric: 'Deep Analysis',
      desc: 'We map the high-intent keywords, search queries, and competitor blind spots across Google and social channels. We discover what your buyers actually type when ready to spend.',
      deliverables: ['Keyword Intent Clustering', 'Competitor Gap Matrix', 'Customer Demographic Profiling']
    },
    {
      index: '02',
      title: 'TARGET',
      subtitle: 'Campaign Strategy & Segmentation',
      icon: <Target className="w-5 h-5 text-sky-400" />,
      metric: 'Laser Focus',
      desc: 'Building granular campaign structures inside Google Ads and Meta Ads Manager. We segment by geographic radius, search intent, and interest categories to stop ad waste.',
      deliverables: ['Campaign Structure Setup', 'Negative Keyword Lists', 'Geo-Fencing & Radius Rules']
    },
    {
      index: '03',
      title: 'ATTRACT',
      subtitle: 'Creative & Ad Copy Hook',
      icon: <Eye className="w-5 h-5 text-indigo-400" />,
      metric: 'High CTR',
      desc: 'Developing persuasive, clear ad copy and scroll-stopping visual assets. Clear value propositions and transparent service offerings that attract serious prospects.',
      deliverables: ['Responsive Search Ads (RSA)', 'Meta Feed & Story Creatives', 'Message Angle Testing']
    },
    {
      index: '04',
      title: 'CONVERT',
      subtitle: 'Dedicated Landing Page & Instant Lead Form',
      icon: <Filter className="w-5 h-5 text-emerald-400" />,
      metric: 'Zero Friction',
      desc: 'Traffic lands directly on an ultra-fast, mobile-optimized landing page designed with single-purpose conversion actions: 1-tap WhatsApp chat, phone dialer, or quick quote inquiry.',
      deliverables: ['Sub-Second Landing Page', '1-Tap WhatsApp Lead Action', 'Verified Form Submissions']
    },
    {
      index: '05',
      title: 'OPTIMIZE',
      subtitle: 'Data Tracking & Continuous Bid Tuning',
      icon: <BarChart3 className="w-5 h-5 text-cyan-300" />,
      metric: 'Cost Reduction',
      desc: 'Tracking real phone calls, WhatsApp initiations, and form fills via Google Tag Manager. We systematically eliminate underperforming keywords and scale winning placements.',
      deliverables: ['Server & Client Event Tagging', 'Cost-Per-Acquisition Reduction', 'Weekly Performance Reports']
    }
  ];

  return (
    <section id="marketing-system" className="relative py-24 bg-[#02050e] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2 block">
              05. Acquisition Architecture
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              The Digital Marketing Pipeline
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-mono">
            A systematic 5-stage acquisition framework that replaces spray-and-pray ads with measurable business inquiries.
          </p>
        </div>

        {/* Pipeline Navigation Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {stages.map((stage, idx) => (
            <button
              key={stage.title}
              onClick={() => setActiveStage(idx)}
              className={`p-4 rounded-xl border text-left transition-all ${
                activeStage === idx
                  ? 'bg-neutral-900 border-cyan-400 shadow-lg shadow-cyan-500/10'
                  : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-neutral-500">STAGE {stage.index}</span>
                {stage.icon}
              </div>
              <div className="font-bold text-sm text-white mb-0.5">{stage.title}</div>
              <div className="text-[11px] text-neutral-400 line-clamp-1">{stage.subtitle}</div>
            </button>
          ))}
        </div>

        {/* Interactive Active Stage Dashboard Panel */}
        <div className="p-8 rounded-2xl glass-panel border border-cyan-500/30 bg-[#060c1a]/90 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-10">
            {stages[activeStage].icon}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-cyan-400 border border-cyan-500/40 rounded px-2 py-0.5">
                  STAGE {stages[activeStage].index} PROTOCOL
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  Target: {stages[activeStage].metric}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                {stages[activeStage].title} — {stages[activeStage].subtitle}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {stages[activeStage].desc}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                  Core Implementation Artifacts
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {stages[activeStage].deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-200 font-mono"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/[0.08] lg:pl-8 pt-6 lg:pt-0">
              <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800 text-xs font-mono text-neutral-300 space-y-3">
                <div className="text-neutral-500 flex justify-between">
                  <span>Data Flow Status</span>
                  <span className="text-emerald-400">Active Pipeline</span>
                </div>
                <div className="flex justify-between border-t border-neutral-800/80 pt-2">
                  <span>Ad Waste Reduction</span>
                  <span className="text-cyan-400">Continuous Exclusion</span>
                </div>
                <div className="flex justify-between border-t border-neutral-800/80 pt-2">
                  <span>Inquiry Velocity</span>
                  <span className="text-white">Real-Time Routing</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
                  className="px-3 py-1.5 rounded bg-neutral-900 text-xs font-mono text-neutral-300 hover:text-white border border-neutral-800"
                >
                  ← Previous Stage
                </button>
                <button
                  onClick={() => setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
                  className="px-3 py-1.5 rounded bg-cyan-400 text-xs font-mono text-neutral-950 font-bold hover:bg-cyan-300"
                >
                  Next Stage →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
