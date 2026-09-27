import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Code2, Megaphone, Bot, Layout, Gauge, Globe2, X } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'digital-marketing':
        return <Megaphone className="w-5 h-5 text-sky-400" />;
      case 'ai-solutions':
        return <Bot className="w-5 h-5 text-indigo-400" />;
      case 'landing-pages':
        return <Layout className="w-5 h-5 text-violet-400" />;
      case 'web-optimization':
        return <Gauge className="w-5 h-5 text-emerald-400" />;
      case 'digital-presence':
      default:
        return <Globe2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#030712]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2 block">
              02. Core Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Specialized Digital Services
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md">
            Purpose-built technical and marketing solutions crafted to give your business high authority and real customer traction.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.09, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative p-7 rounded-xl glass-panel glass-panel-hover flex flex-col justify-between cursor-pointer border border-white/[0.07] hover:border-cyan-500/40 transition-all duration-300"
              onClick={() => setActiveModalService(service)}
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900/90 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="font-mono text-xs text-neutral-500 group-hover:text-cyan-400 transition-colors">
                    SERVICE {service.number}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {service.tagline}
                </p>

                {/* Feature Checklist */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                <span className="font-mono text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  View Full Specs
                </span>
                <span className="w-7 h-7 rounded-full bg-neutral-800/80 group-hover:bg-cyan-400 group-hover:text-neutral-950 flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#090d16] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl shadow-cyan-500/10">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white bg-neutral-800/80 hover:bg-neutral-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                {getServiceIcon(activeModalService.id)}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase">
                  SERVICE {activeModalService.number} SPECIFICATIONS
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
              {activeModalService.description}
            </p>

            {/* Complete Features */}
            <div className="mb-6">
              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                Key Deliverables & Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalService.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-200 flex items-start gap-2"
                  >
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-neutral-300">
                {activeModalService.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-700/80 font-mono text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div className="p-3.5 rounded-lg bg-cyan-950/20 border border-cyan-500/20 mb-6 text-xs text-neutral-300">
              <span className="font-semibold text-cyan-300 block mb-1">Recommended For:</span>
              {activeModalService.idealFor}
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-neutral-800">
              <button
                onClick={() => setActiveModalService(null)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-medium text-neutral-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const serviceName = activeModalService.title;
                  setActiveModalService(null);
                  onSelectService(serviceName);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-500/20 transition-all"
              >
                Inquire About {activeModalService.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
