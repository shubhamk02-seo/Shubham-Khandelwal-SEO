import React, { useState } from 'react';
import {
  Search,
  GitCompare,
  Network,
  Cpu,
  TrendingUp,
  Sparkles,
  BarChart3,
  Bot,
  ArrowRight,
  Database,
  Layers,
  CheckCircle,
  Zap,
} from 'lucide-react';
import { AI_CARDS, AI_SEO_WORKFLOW_STAGES } from '../data/portfolioData';

export const AISEOSection: React.FC = () => {
  const [activeWorkflowStage, setActiveWorkflowStage] = useState<number>(1);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    Search,
    GitCompare,
    Network,
    Cpu,
    TrendingUp,
    Sparkles,
    BarChart3,
    Bot,
  };

  return (
    <section
      id="ai-seo"
      aria-label="Where AI meets SEO"
      className="py-24 bg-[#0b0f17] relative border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>AI × TECHNICAL SEO INTEGRATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Where AI meets SEO
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            "I use AI as a force multiplier for SEO — not as a replacement for strategic thinking."
          </p>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Generative AI and automated semantic clustering allow me to process millions of search
            queries, extract competitor entity footprints, and scale cluster briefs in hours, while
            maintaining rigorous human editorial verification and technical schema accuracy.
          </p>
        </div>

        {/* Interactive Visual AI-Powered SEO Workflow */}
        <div className="mb-20 rounded-2xl bg-[#0d131f] border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                END-TO-END PIPELINE
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">
                AI-Accelerated Organic Pipeline Architecture
              </h3>
            </div>
            <div className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 self-start sm:self-auto">
              Interactive Workflow Stage: 0{activeWorkflowStage + 1} / 04
            </div>
          </div>

          {/* Workflow Stepper Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {AI_SEO_WORKFLOW_STAGES.map((stage, idx) => {
              const isSelected = activeWorkflowStage === idx;
              return (
                <div
                  key={stage.stage}
                  onClick={() => setActiveWorkflowStage(idx)}
                  className={`cursor-pointer rounded-xl p-5 border transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-b from-blue-600/20 to-indigo-600/10 border-blue-500 text-white shadow-lg shadow-blue-500/5'
                      : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    {idx < 3 && (
                      <span className="text-slate-600 font-mono text-xs hidden md:inline">→</span>
                    )}
                  </div>

                  <h4
                    className={`text-xs font-bold font-mono tracking-wider uppercase ${
                      isSelected ? 'text-cyan-300' : 'text-slate-300'
                    }`}
                  >
                    {stage.stage}
                  </h4>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {stage.sources.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-slate-300 border border-white/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {stage.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 8 AI-Powered Force Multiplier Cards */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-slate-800 gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                OPERATIONAL CAPABILITIES
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                8 Ways I Deploy AI to Accelerate SEO
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Hover over each capability to view practical, verified application scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AI_CARDS.map((card) => {
              const Icon = iconMap[card.iconName] || Sparkles;
              const isHovered = activeCardId === card.id;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActiveCardId(card.id)}
                  onMouseLeave={() => setActiveCardId(null)}
                  className={`group relative rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                    isHovered
                      ? 'bg-slate-900 border-blue-500/60 shadow-xl shadow-blue-500/10 -translate-y-1'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase text-slate-500 group-hover:text-cyan-400">
                        {card.workflowStep}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      {card.title}
                    </h4>

                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      {card.shortDesc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-slate-400 group-hover:text-slate-200 transition-colors">
                    <span className="font-mono text-cyan-400 block mb-1">Practical Application:</span>
                    <p className="leading-snug">{card.practicalApplication}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
