import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, MessageCircle, Bot } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
  onOpenAiConsultant?: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan, onOpenAiConsultant }) => {
  return (
    <section id="pricing" className="relative py-24 bg-[#02050e] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2 block">
              07. Transparent Investment
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Website Development Packages
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-mono">
            Direct pricing tailored to business requirements. No surprise fees, no hidden platform markups.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlighted
                  ? 'bg-[#081224] border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20 scale-[1.02] z-10'
                  : 'glass-panel border border-white/[0.08] hover:border-neutral-700'
              }`}
            >
              {/* Highlighted Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-400 text-neutral-950 font-mono text-[11px] font-extrabold shadow-md uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Plan Title & Price */}
                <div className="mb-4">
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">/ project</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {plan.summary}
                </p>

                {/* Timeline Tag */}
                <div className="mb-6 p-2 rounded bg-neutral-900/80 border border-neutral-800 text-[11px] font-mono text-neutral-300 flex items-center justify-between">
                  <span className="text-neutral-500">Timeline:</span>
                  <span className="text-cyan-400 font-semibold">{plan.timeline}</span>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block">
                    Included Capabilities
                  </span>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onSelectPlan(`${plan.name} Package (${plan.price})`)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    plan.highlighted
                      ? 'bg-cyan-400 hover:bg-cyan-300 text-neutral-950 shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-neutral-600'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Project Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/20 bg-gradient-to-r from-neutral-950 via-[#071328] to-neutral-950 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Need something custom or specialized?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              We design and construct tailored web apps, AI integrations, or custom marketing funnels suited to your specific parameters.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {onOpenAiConsultant && (
              <button
                onClick={onOpenAiConsultant}
                className="px-5 py-3 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 text-cyan-300 hover:text-cyan-200 text-xs font-semibold transition-all whitespace-nowrap shadow-lg flex items-center gap-2"
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>Ask AI Advisor</span>
              </button>
            )}
            <button
              onClick={() => onSelectPlan('Custom Business Solution')}
              className="px-6 py-3 rounded-xl bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-bold transition-all whitespace-nowrap shadow-lg"
            >
              Request a Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
