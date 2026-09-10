import React from 'react';
import {
  Compass,
  Stethoscope,
  Map,
  Zap,
  LineChart,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { APPROACH_STEPS } from '../data/portfolioData';

export const ApproachProcess: React.FC = () => {
  const stepIcons = [Compass, Stethoscope, Map, Zap, LineChart];

  return (
    <section
      id="approach"
      aria-label="Consulting Methodology"
      className="py-24 bg-[#0b0f17] relative border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SYSTEMATIC FRAMEWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I approach SEO
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A 5-phase consulting and in-house operating methodology designed for predictable organic
            acquisition, zero guesswork, and engineering rigor.
          </p>
        </div>

        {/* 5 Consulting Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {APPROACH_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            return (
              <div
                key={step.number}
                className="group relative rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/90 hover:border-blue-500/40 p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:bg-slate-850 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight mb-1">
                    {step.title}
                  </h3>

                  <div className="text-[11px] font-mono text-cyan-300 mb-3 leading-snug">
                    {step.tagline}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500 group-hover:text-slate-400">
                  <span>Phase 0{idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-blue-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
