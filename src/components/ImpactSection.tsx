import React, { useState } from 'react';
import {
  TrendingUp,
  Target,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  ExternalLink,
  Award,
  Globe,
  Sparkles,
} from 'lucide-react';
import { IMPACT_HIGHLIGHTS } from '../data/portfolioData';
import { SEODashboard } from './SEODashboard';

export const ImpactSection: React.FC = () => {
  return (
    <section
      id="impact"
      aria-label="Impact and Results"
      className="py-24 bg-[#0b0f17] relative border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>MEASURABLE OUTCOMES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Impact over activity.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Every metric below is backed directly by verified enterprise experience. No fabricated
            case studies or unverified vanity projections.
          </p>
        </div>

        {/* Featured Enterprise Highlight: Muvi.com */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-[#0e1526] to-slate-900 border border-blue-500/30 p-6 sm:p-8 mb-16 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-lg font-mono">
                M
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {IMPACT_HIGHLIGHTS.company}
                  </h3>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Active Engagement (09/2025 – Present)
                  </span>
                </div>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                  <Globe className="w-3 h-3 text-blue-400" />
                  <span>{IMPACT_HIGHLIGHTS.companyContext}</span>
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-300 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800">
              <span className="font-mono text-blue-400 font-semibold">Scope:</span> Muvi One, Muvi Live & Muvi Flex GTM SEO
            </div>
          </div>

          {/* 6 Muvi Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-10">
            {IMPACT_HIGHLIGHTS.stats.map((st) => (
              <div
                key={st.label}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-white font-mono text-cyan-300">
                  {st.value}
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-1">{st.label}</div>
                <div className="text-[10px] text-slate-400 mt-2 pt-2 border-t border-slate-800/60 font-mono">
                  {st.note}
                </div>
              </div>
            ))}
          </div>

          {/* Visual Before/After SEO Dashboard Comparison Cards */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-4">
              Diagnostic Transformation: Before vs. After
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {IMPACT_HIGHLIGHTS.beforeAfterComparison.map((item) => (
                <div
                  key={item.metric}
                  className="rounded-xl p-4 bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        {item.metric}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                          item.state === 'Improved'
                            ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
                            : item.state === 'Scaled'
                            ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
                            : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                        }`}
                      >
                        {item.state}
                      </span>
                    </div>

                    <div className="space-y-2 py-2">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Baseline State:</span>
                        <span className="font-mono text-slate-400">{item.before}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-semibold text-white">
                        <span>Engineered State:</span>
                        <span className="font-mono text-cyan-400">{item.after}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-3 pt-2.5 border-t border-slate-800/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive SEO Growth Dashboard */}
        <SEODashboard />
      </div>
    </section>
  );
};
