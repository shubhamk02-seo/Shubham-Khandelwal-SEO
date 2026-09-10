import React from 'react';
import { Mail, Linkedin, ArrowUp, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'AI + SEO', href: '#ai-seo' },
    { label: 'Growth Loop', href: '#growth-loop' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Impact', href: '#impact' },
    { label: 'Experience', href: '#experience' },
    { label: 'Approach', href: '#approach' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      id="main-footer"
      className="bg-[#080b12] text-slate-400 text-xs border-t border-slate-800/80 py-14 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-slate-800/60">
          {/* Brand & Positioning */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white text-sm font-mono shadow-md shadow-blue-600/20">
                SK
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-blue-400 font-medium font-mono">
                  Senior AI & SEO Analyst
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-md pt-1">
              "AI × SEO × Organic Growth" — Building resilient, scalable organic systems through
              technical precision and intelligent automation.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Email Shubham"
              aria-label="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-300 border border-slate-800 transition-colors"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 font-mono">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Alwar, Rajasthan, India</span>
            <span>•</span>
            <span className="text-blue-400">Technical SEO & AI-Powered Growth</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
