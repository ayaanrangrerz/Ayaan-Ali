import React, { useState } from 'react';
import { Terminal, Code, CheckCircle, Cpu, ShieldCheck } from 'lucide-react';

export const DevWorkflow: React.FC = () => {
  const [selectedWorkflowStep, setSelectedWorkflowStep] = useState<number>(3); // 04 Development by default

  const steps = [
    { num: '01', name: 'Discovery', focus: 'Brand DNA, business goals & audience search patterns' },
    { num: '02', name: 'Structure', focus: 'Information architecture, wireframes & conversion paths' },
    { num: '03', name: 'UI / UX', focus: 'High-contrast luxury layout, typography & design token systems' },
    { num: '04', name: 'Development', focus: 'Clean TypeScript/React code, zero page-builder bloat' },
    { num: '05', name: 'Testing', focus: 'Multi-screen responsive QA (360px to 4K) & device audits' },
    { num: '06', name: 'Deployment', focus: 'Fast edge CDN hosting, custom domain & SSL security' },
    { num: '07', name: 'Optimization', focus: 'Lighthouse Core Web Vitals & search engine index submission' }
  ];

  const codeSnippets: Record<number, string> = {
    0: `// STEP 01: DISCOVERY & RECONNAISSANCE
const businessProfile = {
  brand: "Ayaan Digital Client",
  targetMarket: "High-Intent Local & National Customers",
  primaryConversion: "Direct WhatsApp + Verified Lead Submissions",
  coreAdvantage: "Fast, Credible, Authoritative"
};`,
    1: `// STEP 02: INFORMATION ARCHITECTURE
const siteHierarchy = [
  { route: "/", role: "Hero Value Proposition + Quick Lead Form" },
  { route: "/services", role: "Detailed Deliverables & Pricing Matrix" },
  { route: "/proof", role: "Case Studies & Verified Production Results" },
  { route: "/contact", role: "Direct 1-Tap Inquiry Routing" }
];`,
    2: `// STEP 03: BESPOKE UI/UX SPECIFICATIONS
const designTokens = {
  palette: { canvas: "#030712", surface: "#0B132B", accent: "#06B6D4" },
  typography: { display: "Syne / Bold", body: "Plus Jakarta Sans" },
  contrastRatio: "WCAG AA Standard (>= 4.5:1)",
  motionCurve: "cubic-bezier(0.16, 1, 0.3, 1)"
};`,
    3: `// STEP 04: FULL-STACK PRODUCTION CODE
import React from 'react';
import { useAnalytics } from './hooks/useAnalytics';

export const LeadCaptureEngine: React.FC = () => {
  const { trackLeadConversion } = useAnalytics();
  
  return (
    <form onSubmit={(data) => trackLeadConversion('direct_whatsapp', data)}>
      <ProductionReadyComponent responsive="360px-to-4K" />
    </form>
  );
};`,
    4: `// STEP 05: RESPONSIVE & CROSS-DEVICE QA AUDIT
const qualityAssuranceMetrics = {
  testedBreakpoints: ["360px", "390px", "414px", "768px", "1024px", "1440px"],
  coreWebVitals: { LCP: "< 1.2s", CLS: "0.00", FID: "< 50ms" },
  accessibilityAudit: "Full Keyboard Navigation & ARIA labels"
};`,
    5: `// STEP 06: EDGE DEPLOYMENT PIPELINE
const deploymentTarget = {
  hosting: "Global Edge CDN (Cloudflare / Netlify / Vercel)",
  encryption: "Automated TLS 1.3 / SSL Encryption",
  customDomain: "Mapped to Verified Business Name",
  uptimeTarget: "99.9% High Availability"
};`,
    6: `// STEP 07: SEARCH ENGINE OPTIMIZATION & INDEXING
const seoStructure = {
  metaTags: "Title + Description + OpenGraph Social Cards",
  structuredData: "Schema.org / ProfessionalService (JSON-LD)",
  robotsTxt: "Configured for Googlebot & Bingbot Indexing",
  mobileUsability: "100% Passed Google Mobile Test"
};`
  };

  return (
    <section className="relative py-24 bg-[#030712] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2 block">
              06. Engineering Architecture
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Website Development Workflow
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-mono">
            Every build follows a disciplined 7-phase software engineering lifecycle to ensure long-term stability and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Workflow Steps Scrubber */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {steps.map((step, idx) => (
              <button
                key={step.num}
                onClick={() => setSelectedWorkflowStep(idx)}
                className={`p-3.5 rounded-lg border text-left transition-all flex items-start gap-3.5 ${
                  selectedWorkflowStep === idx
                    ? 'bg-neutral-900 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-neutral-950/40 border-neutral-800/80 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                }`}
              >
                <span className="text-xs font-mono text-cyan-400 pt-0.5">{step.num}</span>
                <div>
                  <div className="font-semibold text-sm text-white mb-0.5">{step.name}</div>
                  <div className="text-[11px] text-neutral-400 leading-snug">{step.focus}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Code & Terminal Inspector */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-white/[0.1] bg-[#070d19] overflow-hidden shadow-2xl">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-[#0c1426] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-neutral-400">
                    workflow/phase-{steps[selectedWorkflowStep].num.toLowerCase()}-{steps[selectedWorkflowStep].name.toLowerCase()}.ts
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400/90 border border-cyan-500/30 rounded px-1.5 py-0.5">
                  TYPE_CHECKED
                </span>
              </div>

              {/* Code Viewer Body */}
              <div className="p-6 font-mono text-xs sm:text-sm text-neutral-300 overflow-x-auto min-h-[300px] leading-relaxed">
                <pre className="text-cyan-200">
                  <code>{codeSnippets[selectedWorkflowStep]}</code>
                </pre>
              </div>

              {/* Footer System Status Bar */}
              <div className="px-4 py-2.5 bg-[#050912] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Phase {steps[selectedWorkflowStep].num}: {steps[selectedWorkflowStep].name} Ready</span>
                </div>
                <span>React 19 · TypeScript · Vite · Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
