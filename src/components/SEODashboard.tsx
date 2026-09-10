import React, { useState } from 'react';
import {
  TrendingUp,
  Target,
  ShieldCheck,
  Layers,
  Zap,
  Activity,
  CheckCircle2,
  BarChart,
  SlidersHorizontal,
} from 'lucide-react';
import { DASHBOARD_TABS } from '../data/portfolioData';

export const SEODashboard: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<'traffic' | 'rankings' | 'technical' | 'content' | 'ai'>('traffic');

  const tabIcons = {
    traffic: TrendingUp,
    rankings: Target,
    technical: ShieldCheck,
    content: Layers,
    ai: Zap,
  };

  const activeTab = DASHBOARD_TABS.find((t) => t.id === activeTabId) || DASHBOARD_TABS[0];

  return (
    <div className="rounded-2xl bg-[#090e18] border border-slate-800 p-6 sm:p-8 shadow-2xl">
      {/* Console Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-blue-400" />
            <h3 className="text-lg font-bold text-white tracking-tight">
              Interactive SEO Growth Dashboard
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Career impact metrics verified across enterprise engagements • Not live website analytics
          </p>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>VERIFIED TRACK RECORD</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
        {DASHBOARD_TABS.map((tab) => {
          const Icon = tabIcons[tab.id];
          const isActive = activeTabId === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab View */}
      <div className="space-y-6">
        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {activeTab.metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-medium text-slate-400 block mb-1">
                  {metric.label}
                </span>
                <div className="text-3xl font-extrabold text-white font-mono tracking-tight text-cyan-300">
                  {metric.value}
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 mt-2 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <Activity className="w-3 h-3" />
                  <span>{metric.changeLabel}</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4 pt-3 border-t border-slate-800">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Deep Execution Breakdown */}
        <div className="rounded-xl bg-slate-950/50 border border-slate-800/80 p-5">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
            Execution Methodologies Applied in this Vector
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeTab.details.map((detail, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
