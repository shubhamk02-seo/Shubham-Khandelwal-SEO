import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Building2,
  TrendingUp,
  Wrench,
  Shield,
} from 'lucide-react';
import { WORK_EXPERIENCE, EARLY_CAREER_ROLES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [showEarlyCareer, setShowEarlyCareer] = useState<boolean>(false);

  return (
    <section
      id="experience"
      aria-label="Professional Work Experience"
      className="py-24 bg-[#090d15] relative border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            5+ Years of Dedicated SEO & AI Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Proven execution spanning global SaaS platforms, high-traffic marketplaces, and agency
            client rosters.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-12 pb-4">
          {WORK_EXPERIENCE.map((job) => (
            <div key={job.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Marker Node */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  job.isCurrent
                    ? 'bg-blue-500 border-blue-400 shadow-md shadow-blue-500/50 ring-4 ring-blue-500/20'
                    : 'bg-slate-900 border-slate-700 group-hover:border-blue-400'
                }`}
              />

              <div className="rounded-2xl bg-slate-900/60 border border-slate-800/90 group-hover:border-slate-700 p-6 sm:p-8 transition-all">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {job.role}
                      </h3>
                      {job.isCurrent && (
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1">
                      <span className="font-semibold text-blue-300 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        {job.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 self-start sm:self-auto bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{job.period}</span>
                  </div>
                </div>

                {job.companyContext && (
                  <p className="text-xs text-slate-400 italic mb-4">
                    {job.companyContext}
                  </p>
                )}

                {/* Key Metrics Pills (if available) */}
                {job.metrics && job.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-mono flex items-center gap-2"
                      >
                        <span className="text-slate-400">{m.label}:</span>
                        <span className="text-cyan-300 font-bold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullets */}
                <div className="space-y-2.5">
                  {job.highlights.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Early Career Foundations Expandable Panel */}
        <div className="mt-12 rounded-2xl bg-slate-900/40 border border-slate-800/80 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-800 text-slate-400">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Early Career Roots — Engineering & Manufacturing Quality
                </h4>
                <p className="text-xs text-slate-400">
                  Ashok Leyland Ltd., A.L. Paper House, Honda Cars India (Lean manufacturing, 5S & Kaizen)
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowEarlyCareer(!showEarlyCareer)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors self-start sm:self-auto"
            >
              <span>{showEarlyCareer ? 'Hide Quality Engineering Details' : 'View Quality Engineering Details'}</span>
              {showEarlyCareer ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {showEarlyCareer && (
            <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
              {EARLY_CAREER_ROLES.map((role) => (
                <div key={role.company + role.period} className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/60">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-white">{role.role}</span>
                    <span className="font-mono text-slate-400">{role.period}</span>
                  </div>
                  <div className="text-xs text-blue-400 mb-2">{role.company} • {role.location}</div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">{role.summary}</p>
                  <ul className="space-y-1.5">
                    {role.highlights.map((h, i) => (
                      <li key={i} className="text-[11px] text-slate-400 flex items-start gap-2">
                        <span className="text-slate-600 mt-1">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
