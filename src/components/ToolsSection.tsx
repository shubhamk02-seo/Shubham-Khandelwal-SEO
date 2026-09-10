import React from 'react';
import {
  Wrench,
  Search,
  BarChart3,
  Globe2,
  Bug,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { TOOLS_LIST } from '../data/portfolioData';

export const ToolsSection: React.FC = () => {
  const toolIcons: Record<string, React.ElementType> = {
    gsc: Search,
    ga4: BarChart3,
    ahrefs: Globe2,
    semrush: BarChart3,
    screamingfrog: Bug,
    gmb: MapPin,
  };

  return (
    <section
      id="tools"
      aria-label="SEO Tools and Platforms"
      className="py-24 bg-[#090d15] relative border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>PLATFORM PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools I Work With
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Deep daily proficiency across primary enterprise search telemetry, crawling, and backlink
            intelligence suites.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS_LIST.map((tool) => {
            const Icon = toolIcons[tool.iconType] || Search;
            return (
              <div
                key={tool.name}
                className="group rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/90 hover:border-blue-500/40 p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {tool.name}
                      </h3>
                      <span className="text-[11px] font-mono text-cyan-400">
                        {tool.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {tool.role}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Production Workflows</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Active Daily Stack
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer note */}
        <p className="mt-8 text-center text-xs text-slate-500">
          Note: Tools listed represent professional platform proficiency and hands-on operational usage. No official corporate endorsements or partnerships implied.
        </p>
      </div>
    </section>
  );
};
