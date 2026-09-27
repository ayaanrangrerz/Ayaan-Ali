import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2, Shield, Code, Sparkles } from 'lucide-react';
import { PROJECTS_DATA, GITHUB_URL, GITHUB_HANDLE } from '../data/content';
import { ProjectItem } from '../types';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'client' | 'tech'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'client') return item.isClientProject;
    if (filter === 'tech') return !item.isClientProject;
    return true;
  });

  return (
    <section id="work" className="relative py-24 bg-[#030712] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2 block">
              04. Portfolio & Engineering Archive
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Selected Digital Work
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="inline-flex p-1 rounded-lg bg-neutral-900 border border-neutral-800 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Projects ({PROJECTS_DATA.length})
            </button>
            <button
              onClick={() => setFilter('client')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'client'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Client & Business Work (2)
            </button>
            <button
              onClick={() => setFilter('tech')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'tech'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Tech & Software Systems (7)
            </button>
          </div>
        </div>

        {/* Ethical Transparency Banner */}
        <div className="mb-10 p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-400 font-mono">
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              Authentic Disclosure: Client projects represent commercial deployments. Tech projects represent genuine software engineering, Python, and C++ algorithms.
            </span>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-cyan-300 transition-colors shrink-0"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/{GITHUB_HANDLE} →</span>
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`group rounded-xl glass-panel glass-panel-hover border flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                project.isClientProject
                  ? 'border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 to-neutral-950/80'
                  : 'border-white/[0.08] bg-neutral-950/60'
              }`}
            >
              <div>
                {/* Visual Header / Image Slot */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 border-b border-white/[0.08]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                  {/* Corner Status Badge */}
                  <div className="absolute top-3 left-3">
                    {project.isClientProject ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/90 border border-cyan-500/50 text-[10px] font-mono text-cyan-300 font-semibold shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        LIVE CLIENT PROJECT
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900/90 border border-neutral-700 text-[10px] font-mono text-neutral-300">
                        <Code className="w-3 h-3 text-indigo-400" />
                        TECH / CONCEPT PROJECT
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Category unboxed text */}
                  <div className="text-[11px] font-mono text-neutral-400 mb-1.5">
                    {project.subCategory}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/[0.06] mt-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors py-2"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-cyan-300 transition-colors py-2"
                  >
                    <Github className="w-3.5 h-3.5 text-neutral-400" />
                    <span>View on GitHub</span>
                  </a>
                ) : (
                  <span className="text-xs font-mono text-neutral-400 py-2">
                    Internal System Concept
                  </span>
                )}

                {project.businessDetails ? (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                  >
                    View Specs →
                  </button>
                ) : (
                  <span className="text-[11px] font-mono text-neutral-500">
                    Repo Archive
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Specs Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#090d16] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-800">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase">
                  PROJECT SPECIFICATIONS
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs font-mono text-neutral-400 hover:text-white p-2"
              >
                Close ✕
              </button>
            </div>

            {selectedProject.businessDetails && (
              <div className="space-y-4 text-xs text-neutral-300 mb-6">
                <div>
                  <span className="font-mono text-neutral-500 uppercase block mb-0.5">Industry & Sector</span>
                  <span className="text-white font-medium">{selectedProject.businessDetails.industry}</span>
                </div>
                {selectedProject.businessDetails.location && (
                  <div>
                    <span className="font-mono text-neutral-500 uppercase block mb-0.5">Primary Target Location</span>
                    <span className="text-white font-medium">{selectedProject.businessDetails.location}</span>
                  </div>
                )}
                <div>
                  <span className="font-mono text-neutral-500 uppercase block mb-2">Core Deliverables</span>
                  <ul className="space-y-1.5">
                    {selectedProject.businessDetails.keyDeliverables.map((del, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="flex justify-end gap-3 pt-4 border-t border-neutral-800">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
