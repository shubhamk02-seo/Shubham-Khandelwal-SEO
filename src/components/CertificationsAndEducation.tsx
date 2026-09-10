import React from 'react';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  Building,
  BookOpen,
} from 'lucide-react';
import { CERTIFICATIONS, EDUCATION_INFO } from '../data/portfolioData';

export const CertificationsAndEducation: React.FC = () => {
  return (
    <section
      id="certifications"
      aria-label="Certifications and Education"
      className="py-24 bg-[#0b0f17] relative border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Certifications (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>CONTINUOUS LEARNING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Certifications & Practical Programs
            </h2>
            <p className="text-sm text-slate-400 mb-8">
              Verified technical credentials focusing on modern SEO foundations, AI assistance, and digital marketing execution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {cert.credentialType}
                      </span>
                      {cert.period && (
                        <span className="text-[10px] font-mono text-slate-500">
                          {cert.period}
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-white tracking-tight mt-2">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-blue-400 font-medium mt-0.5">
                      {cert.issuer}
                    </p>

                    {/* Verified Topics */}
                    <div className="mt-4 space-y-1.5">
                      {cert.verifiedTopics.map((topic) => (
                        <div key={topic} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                          <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Academic Education (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold uppercase mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Education
            </h2>
            <p className="text-sm text-slate-400 mb-8">
              Engineering degree grounding analytical discipline and systems-level problem solving.
            </p>

            <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-[#0e172a] border border-slate-800 p-6 sm:p-7 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {EDUCATION_INFO.degree}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-300">
                    {EDUCATION_INFO.discipline}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <Building className="w-3.5 h-3.5" />
                    <span>{EDUCATION_INFO.institution}</span>
                  </p>
                  <p className="text-xs font-mono text-slate-500 mt-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{EDUCATION_INFO.period}</span>
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1 font-semibold">
                  Engineering To SEO Synthesis:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {EDUCATION_INFO.engineeringNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
