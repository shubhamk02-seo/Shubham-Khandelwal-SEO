import React, { useState } from 'react';
import {
  RotateCw,
  Search,
  BrainCircuit,
  Cpu,
  Layers,
  TrendingUp,
  RefreshCw,
  ArrowDown,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export const GrowthLoop: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<number>(0);

  const loopNodes = [
    {
      id: 'search-data',
      name: 'SEARCH DATA',
      icon: Search,
      tagline: 'Raw Queries & Market Signals',
      short: 'Ingest impressions, query logs, zero-click patterns & intent markers from Search Console, GA4 & Ahrefs.',
      actionableDetail:
        'Continuous mining of organic search demand, user questions, and competitor ranking velocities across B2B & SaaS query landscapes.',
      metrics: '500+ Crawl signals / Query logs',
      color: 'blue',
    },
    {
      id: 'seo-intelligence',
      name: 'SEO INTELLIGENCE',
      icon: BrainCircuit,
      tagline: 'Architectural Synthesis',
      short: 'Categorize search intent, map entity relationships, and detect crawl/render bottlenecks.',
      actionableDetail:
        'Evaluating SERP layout changes, featured snippet opportunities, topical gaps, and Core Web Vitals barriers across key site templates.',
      metrics: 'Intent classification & SERP audits',
      color: 'indigo',
    },
    {
      id: 'ai-analysis',
      name: 'AI ANALYSIS',
      icon: Cpu,
      tagline: 'Algorithmic Force Multiplier',
      short: 'Run semantic keyword clustering, competitor entity extraction, and automated gap detection.',
      actionableDetail:
        'Using AI as a co-pilot to group thousands of queries into cohesive topic clusters, identify 20+ missing cluster gaps, and draft comprehensive content briefs in hours instead of days.',
      metrics: '20 Cluster Gaps Uncovered',
      color: 'cyan',
    },
    {
      id: 'execution',
      name: 'CONTENT + TECHNICAL ACTION',
      icon: Layers,
      tagline: 'High-Impact Implementation',
      short: 'Scale production of cluster assets (15/mo) alongside structured data & technical fixes.',
      actionableDetail:
        'Deploying schema markup, fixing 50+ crawl/indexing issues, optimizing internal linking structures, and engineering E-E-A-T into every article.',
      metrics: '14 Clusters / +15 Articles/mo',
      color: 'violet',
    },
    {
      id: 'organic-growth',
      name: 'ORGANIC GROWTH',
      icon: TrendingUp,
      tagline: 'Rankings & Qualified Pipeline',
      short: 'Achieve +20% traffic expansion, +10 position ranking jumps, and durable topical authority.',
      actionableDetail:
        'Converting raw visibility into high-intent inbound inquiries across international markets with reduced customer acquisition cost.',
      metrics: '+20% Traffic / +10 Pos Lift',
      color: 'emerald',
    },
    {
      id: 'new-search-data',
      name: 'NEW SEARCH DATA ↺',
      icon: RefreshCw,
      tagline: 'Closed-Loop Feedback',
      short: 'Fresh user impressions, expanded keyword footprints, and crawl signals feed the next iteration.',
      actionableDetail:
        'As authority compounds, Google awards higher crawl priority and expanded impressions, revealing new secondary keyword opportunities to trigger the loop again.',
      metrics: 'Perpetual Growth Velocity',
      color: 'blue',
    },
  ];

  return (
    <section
      id="growth-loop"
      aria-label="The AI x SEO Growth Loop"
      className="py-24 bg-[#090d15] relative border-b border-slate-800/80 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase mb-4">
            <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
            <span>SIGNATURE METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The AI × SEO Growth Loop
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Organic growth is not a static one-off project. It is a compounding, closed-loop feedback
            cycle where AI intelligence accelerates execution, building authority that continuously
            generates higher-tier search opportunities.
          </p>
        </div>

        {/* The Interactive Growth Loop Representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual Loop Diagram */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span>SYSTEM CYCLE PROTOCOL</span>
                <span className="text-blue-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  RECURSIVE LEARNING
                </span>
              </div>

              {/* Loop Step Blocks */}
              <div className="space-y-3 relative">
                {loopNodes.map((node, index) => {
                  const Icon = node.icon;
                  const isSelected = selectedNode === index;
                  return (
                    <React.Fragment key={node.id}>
                      <div
                        onClick={() => setSelectedNode(index)}
                        className={`cursor-pointer rounded-xl p-4 transition-all duration-200 border flex items-center justify-between group ${
                          isSelected
                            ? 'bg-blue-600/15 border-blue-500 shadow-md shadow-blue-500/10 text-white'
                            : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`p-2.5 rounded-lg transition-colors ${
                              isSelected
                                ? 'bg-blue-500 text-white'
                                : 'bg-slate-800 text-slate-400 group-hover:text-white'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold tracking-wider">
                                {index + 1 < 6 ? `0${index + 1}` : 'LOOP'}
                              </span>
                              <h3
                                className={`text-sm font-bold tracking-tight ${
                                  isSelected ? 'text-white' : 'text-slate-300'
                                }`}
                              >
                                {node.name}
                              </h3>
                            </div>
                            <p className="text-xs text-slate-400 mt-0.5">{node.tagline}</p>
                          </div>
                        </div>

                        <div className="hidden sm:block text-right">
                          <span className="text-[11px] font-mono px-2 py-1 rounded bg-black/40 border border-white/5 text-slate-300">
                            {node.metrics}
                          </span>
                        </div>
                      </div>

                      {/* Connecting Line between steps */}
                      {index < loopNodes.length - 1 && (
                        <div className="flex justify-center -my-1 py-1">
                          <div className="h-4 w-0.5 bg-gradient-to-b from-blue-500/50 to-indigo-500/50"></div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Node Detailed Inspector */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-[#0e1422] to-slate-900 border border-blue-500/30 p-7 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                  Stage Details • {loopNodes[selectedNode].name}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">
                  Step 0{selectedNode + 1}
                </span>
              </div>

              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {loopNodes[selectedNode].name}
                  </h3>
                  <p className="text-xs text-blue-300 font-mono mt-1">
                    {loopNodes[selectedNode].tagline}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                    Executive Summary
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {loopNodes[selectedNode].short}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-slate-400 block">
                    Strategic Execution in Practice
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {loopNodes[selectedNode].actionableDetail}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">Impact Metric:</span>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                    {loopNodes[selectedNode].metrics}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
