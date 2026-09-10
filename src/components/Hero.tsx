import React, { useState } from 'react';
import {
  ArrowRight,
  Search,
  Cpu,
  TrendingUp,
  Database,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Activity,
  Workflow,
} from 'lucide-react';
import { HERO_TRUST_SKILLS, PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeSystemNode, setActiveSystemNode] = useState<string>('ai');

  const nodes = [
    {
      id: 'search',
      title: 'Search Engine',
      subtitle: 'Google / SGE / SERP',
      icon: Search,
      desc: 'Raw user queries, intent signals, crawl budgets, and algorithm updates.',
      badge: 'Signal Source',
      color: 'from-blue-500/20 to-blue-600/10 border-blue-500/40 text-blue-400',
    },
    {
      id: 'data',
      title: 'Data & Telemetry',
      subtitle: 'GSC • GA4 • Ahrefs',
      icon: Database,
      desc: 'Indexing status, CTR anomalies, query impressions, and backlink velocity.',
      badge: 'Input Stream',
      color: 'from-indigo-500/20 to-indigo-600/10 border-indigo-500/40 text-indigo-400',
    },
    {
      id: 'ai',
      title: 'AI Processing Engine',
      subtitle: 'Semantic Clustering & Gaps',
      icon: Cpu,
      desc: 'Entity extraction, content gap discovery, automated schema, and intent synthesis.',
      badge: 'Force Multiplier',
      color: 'from-cyan-500/25 to-blue-600/20 border-cyan-400/50 text-cyan-300 ring-2 ring-cyan-500/20',
    },
    {
      id: 'strategy',
      title: 'SEO Architecture',
      subtitle: 'Clusters & Core Web Vitals',
      icon: Layers,
      desc: '14 topical clusters, structured schema, crawl optimization, and internal links.',
      badge: 'Execution Core',
      color: 'from-violet-500/20 to-violet-600/10 border-violet-500/40 text-violet-400',
    },
    {
      id: 'growth',
      title: 'Organic Growth',
      subtitle: '+20% Traffic & Pipeline',
      icon: TrendingUp,
      desc: 'Sustainable top-ranking positions, qualified pipeline, and topical dominance.',
      badge: 'Compounding ROI',
      color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/40 text-emerald-400',
    },
  ];

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#0b0f17] bg-grid-pattern"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning & Copy */}
          <div className="lg:col-span-7 space-y-8">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
                SENIOR AI & SEO ANALYST
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400 hidden sm:inline">Organic Growth Engineer</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Building the Future of Organic Growth with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                  AI + SEO.
                </span>
              </h1>

              {/* Supporting Line */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                I combine <span className="text-white font-medium">Technical SEO</span>,{' '}
                <span className="text-blue-300 font-medium">AI-powered workflows</span>, content strategy,
                automation, and data to build scalable organic growth systems for modern businesses.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/45 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <span>View My Experience</span>
              </a>
            </div>

            {/* Trust / Core Skills Row */}
            <div className="pt-6 border-t border-slate-800/80">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3.5">
                Core Competencies & Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {HERO_TRUST_SKILLS.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Abstract AI/SEO System Visualization */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#0e1422]/90 border border-slate-800/90 shadow-2xl p-6 backdrop-blur-xl">
              {/* Header Bar representing an AI & SEO Engine console */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-slate-400 ml-2">ai-seo-pipeline.engine</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  SYSTEM ACTIVE
                </span>
              </div>

              {/* Central Search Bar Component */}
              <div className="relative mb-5">
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-blue-500/30 shadow-inner">
                  <Search className="w-4 h-4 text-blue-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-300 flex-1 truncate">
                    query: "enterprise video monetization ott"
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    INTENT: COMMERCIAL
                  </span>
                </div>
              </div>

              {/* Connected System Pipeline Nodes */}
              <div className="space-y-2.5">
                {nodes.map((node) => {
                  const Icon = node.icon;
                  const isActive = activeSystemNode === node.id;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setActiveSystemNode(node.id)}
                      className={`cursor-pointer transition-all duration-200 rounded-xl p-3 border bg-gradient-to-r ${
                        isActive
                          ? `${node.color} shadow-md`
                          : 'from-slate-900/50 to-slate-900/20 border-slate-800/70 hover:border-slate-700 text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`p-1.5 rounded-lg ${
                              isActive ? 'bg-white/10' : 'bg-slate-800'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold block text-slate-200">
                              {node.title}
                            </span>
                            <span className="text-[11px] text-slate-400 block font-mono">
                              {node.subtitle}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/30 text-slate-300 border border-white/5">
                          {node.badge}
                        </span>
                      </div>

                      {/* Expanded description on active */}
                      {isActive && (
                        <p className="mt-2 text-xs text-slate-300 pt-2 border-t border-white/10 leading-relaxed">
                          {node.desc}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Real-Time Telemetry Bar */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                  <span>Pipeline Latency: 0ms</span>
                </div>
                <div className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>14 Topical Clusters Synchronized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
