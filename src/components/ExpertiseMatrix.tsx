import React, { useState } from 'react';
import {
  Code2,
  Cpu,
  FileText,
  BarChart2,
  Globe2,
  CheckCircle,
  Filter,
  Sparkles,
} from 'lucide-react';
import { EXPERTISE_CATEGORIES } from '../data/portfolioData';

export const ExpertiseMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ElementType> = {
    'technical-seo': Code2,
    'ai-automation': Cpu,
    'onpage-content': FileText,
    'data-analytics': BarChart2,
    'offpage-local': Globe2,
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? EXPERTISE_CATEGORIES
      : EXPERTISE_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section
      id="expertise"
      aria-label="SEO Expertise and Capabilities"
      className="py-24 bg-[#090d15] relative border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>SYSTEMATIC CAPABILITY MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              My SEO Toolkit
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Organized across technical infrastructure, generative AI integration, on-page intent,
            telemetry analysis, and high-authority outreach.
          </p>
        </div>

        {/* Filter Tabs for SaaS Dashboard Look */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All Disciplines ({EXPERTISE_CATEGORIES.length})
          </button>
          {EXPERTISE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Expertise Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            return (
              <div
                key={cat.id}
                className="group relative rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Item Pills */}
                  <div className="mt-5 space-y-2">
                    {cat.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-950/40 border border-slate-800/80 text-xs text-slate-200"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{cat.items.length} Production Standards</span>
                  <span className="text-emerald-400">Active Capability</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
