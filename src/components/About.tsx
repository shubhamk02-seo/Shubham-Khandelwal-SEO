import React, { useState } from 'react';
import {
  Brain,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  Shield,
  Gauge,
  Workflow,
  Cpu,
  Layers,
  Wrench,
} from 'lucide-react';
import { HOW_I_THINK_STEPS, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const keySpecializations = [
    'Technical SEO & Crawl Optimization',
    'AI-Powered SEO Workflows',
    'Topical Authority & Semantic Clustering',
    'Search Intent & SERP Anatomy Mapping',
    'Structured Data / JSON-LD Schemas',
    'Core Web Vitals & Page Speed Remediation',
    'SEO Analytics (GA4, GSC, Ahrefs, SEMrush)',
    'Workflow & Reporting Automation',
  ];

  return (
    <section
      id="about"
      aria-label="About Shubham Khandelwal"
      className="py-24 bg-[#0b0f17] relative border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase mb-4">
            <Brain className="w-3.5 h-3.5" />
            <span>Executive Profile & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            SEO strategist. AI practitioner.{' '}
            <span className="text-slate-400">Technical problem solver.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            I don't treat SEO as an isolated marketing checklist or keyword stuffing exercise. I treat
            it as an engineering discipline — uniting infrastructure, algorithmic intent, generative AI,
            and sustainable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Core Narrative & Engineering Roots */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-7 space-y-5">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2.5">
                <Workflow className="w-5 h-5 text-blue-400" />
                <span>Modern Organic Growth at the Intersection of AI & Tech</span>
              </h3>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                With 5+ years of hands-on experience spanning enterprise SaaS, OTT streaming (Muvi.com),
                high-volume automotive & commercial marketplaces (Tractor Junction), and digital agencies,
                I help fast-growing companies build dependable, compounding organic acquisition engines.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                My approach synthesizes <strong className="text-white">Technical SEO</strong> (crawl
                budgets, site architecture, structured data, Core Web Vitals) with{' '}
                <strong className="text-blue-400">AI-powered workflow scaling</strong> and data analytics.
                Instead of manual guesswork, I use semantic clustering and AI assistants to reveal topical
                gaps and accelerate content production without compromising technical integrity.
              </p>

              {/* Specializations Grid */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Core Specializations
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {keySpecializations.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 text-xs text-slate-300 font-medium"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Engineering & Quality Management Foundation Card */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0f172a] border border-indigo-500/20 p-6 relative overflow-hidden">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    The Engineering Mindset Behind the SEO Strategy
                  </h4>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    Trained in Mechanical Engineering (B.Tech, RTU Kota) with early career roots in
                    manufacturing quality assurance (Ashok Leyland & Honda Cars), I approach search
                    algorithms the same way industrial engineers optimize production lines: through
                    root-cause diagnostics, 5S/Kaizen process hygiene, and zero tolerance for technical defects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: "How I Think" 6-Step Interactive Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#0e1422] border border-slate-800 p-7 shadow-xl">
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">How I Think</h3>
                    <p className="text-xs text-slate-400">6-Stage Framework for Organic Systems</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Step {HOW_I_THINK_STEPS[activeStep].step} of 06
                </span>
              </div>

              {/* Steps List */}
              <div className="space-y-3">
                {HOW_I_THINK_STEPS.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={step.step}
                      onClick={() => setActiveStep(idx)}
                      className={`cursor-pointer rounded-xl p-3.5 transition-all duration-200 border ${
                        isActive
                          ? 'bg-blue-600/10 border-blue-500/50 shadow-md shadow-blue-500/5'
                          : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                            isActive
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {step.step}
                        </span>
                        <div className="flex-1">
                          <h4
                            className={`text-xs sm:text-sm font-semibold ${
                              isActive ? 'text-blue-300' : 'text-slate-200'
                            }`}
                          >
                            {step.title}
                          </h4>
                          {isActive && (
                            <p className="mt-2 text-xs text-slate-300 leading-relaxed animate-fadeIn">
                              {step.desc}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Helper Buttons */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 0))}
                  disabled={activeStep === 0}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300 font-medium transition-colors"
                >
                  Previous Step
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveStep((prev) =>
                      prev < HOW_I_THINK_STEPS.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center gap-1.5 transition-colors"
                >
                  <span>{activeStep === HOW_I_THINK_STEPS.length - 1 ? 'Restart Loop' : 'Next Step'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
