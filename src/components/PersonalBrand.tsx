import React, { useState } from 'react';
import {
  Sparkles,
  Compass,
  Cpu,
  TrendingUp,
  BrainCircuit,
  Search,
  Zap,
} from 'lucide-react';
import { PERSONAL_BRAND_TOPICS } from '../data/portfolioData';

export const PersonalBrand: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState<number>(0);

  return (
    <section
      id="philosophy"
      aria-label="Professional Philosophy and Research Vectors"
      className="py-24 bg-[#090d15] relative border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ONGOING RESEARCH & EXPERIMENTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Always learning. Always experimenting.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Search engines and algorithmic models evolve weekly. Maintaining an edge requires continuous
            testing of generative search behavior, crawl dynamics, and machine-learning search patterns.
          </p>
        </div>

        {/* Topics Interactive Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PERSONAL_BRAND_TOPICS.map((item, idx) => {
            const isSelected = activeTopic === idx;
            return (
              <div
                key={item.topic}
                onClick={() => setActiveTopic(idx)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-600/15 border-blue-500 text-white shadow-lg shadow-blue-500/10 -translate-y-1'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      Focus 0{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 opacity-60"></span>
                  </div>

                  <h3
                    className={`text-sm font-bold tracking-tight ${
                      isSelected ? 'text-white' : 'text-slate-200'
                    }`}
                  >
                    {item.topic}
                  </h3>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                  <span>Current Focus Vector</span>
                  <span className="text-cyan-400">Active</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
