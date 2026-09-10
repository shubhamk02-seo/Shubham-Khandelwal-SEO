import React, { useState, useEffect, useRef } from 'react';
import { HERO_METRICS } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const MetricsStrip: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact-metrics"
      ref={containerRef}
      aria-label="Key Career Metrics"
      className="relative z-20 py-12 bg-[#090d15] border-y border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800/60 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              VERIFIED IMPACT SUMMARY
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
              Quantifiable Career Milestones
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Directly drawn from verified enterprise outcomes across enterprise OTT SaaS (Muvi.com), rural marketplace (Tractor Junction), and multi-client portfolios.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {HERO_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="group relative rounded-xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/90 hover:border-blue-500/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-slate-500 group-hover:text-blue-400 mb-2 transition-colors">
                  <span className="text-[10px] font-mono uppercase tracking-wider">
                    {metric.id}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Counted Number */}
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                  {isVisible ? (
                    <AnimatedCounter
                      target={metric.numericTarget}
                      prefix={metric.prefix || ''}
                      suffix={metric.suffix || ''}
                    />
                  ) : (
                    `${metric.prefix || ''}0${metric.suffix || ''}`
                  )}
                </div>

                <h3 className="text-xs font-semibold text-slate-200 mt-2 leading-snug">
                  {metric.label}
                </h3>
              </div>

              <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800/60 leading-normal">
                {metric.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CounterProps {
  target: number;
  prefix: string;
  suffix: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, prefix, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easedProgress * target);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [target]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};
