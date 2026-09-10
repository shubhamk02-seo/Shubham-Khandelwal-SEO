import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Copy,
  Check,
  MapPin,
  Phone,
  Send,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [inquiryType, setInquiryType] = useState<string>('SaaS Organic Growth Strategy');
  const [clientName, setClientName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [formSent, setFormSent] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Inquiry] ${inquiryType} - ${companyName || 'Potential Project'}`);
    const body = encodeURIComponent(
      `Hi Shubham,\n\nName: ${clientName || 'Visitor'}\nCompany: ${companyName || 'N/A'}\nInquiry Type: ${inquiryType}\n\nProject Scope / Problem Statement:\n${message}\n\nLooking forward to speaking with you.`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Collaboration"
      className="py-24 bg-[#0b0f17] relative border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Have an SEO problem worth solving?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Whether you're scaling organic growth, fixing technical SEO issues, building topical
            authority, or exploring AI-powered SEO workflows, let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct Contact & Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 space-y-5 shadow-xl">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Available for full-time leadership roles, SaaS consulting advisory, and technical SEO systemic audits.
              </p>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs font-mono text-slate-200 hover:text-blue-400 transition-colors truncate block font-medium"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn Button Card */}
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-blue-500/40 flex items-center justify-between gap-3 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0077B5]/10 border border-[#0077B5]/30 flex items-center justify-center text-[#0a86c7] shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      LinkedIn Profile
                    </span>
                    <span className="text-xs font-mono text-slate-200 group-hover:text-blue-400 transition-colors font-medium">
                      /in/shubham-khandelwal-seo
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              {/* Phone Card with Copy */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Direct Phone
                    </span>
                    <span className="text-xs font-mono text-slate-200 font-medium">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location indicator */}
              <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                  <MapPin className="w-4 h-4 text-rose-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    Base Location
                  </span>
                  <span className="text-xs font-medium text-slate-300">
                    {PERSONAL_INFO.location} • Available Globally (Remote)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Email Builder Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-[#0e1422] border border-slate-800 p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                Initiate a Conversation
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in your project context to quickly format an email directly to Shubham.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="clientName"
                      className="block text-xs font-mono uppercase text-slate-400 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="clientName"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 text-xs transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-xs font-mono uppercase text-slate-400 mb-1.5"
                    >
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. SaaS Startup Inc."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 text-xs transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="block text-xs font-mono uppercase text-slate-400 mb-1.5"
                  >
                    Engagement Type
                  </label>
                  <select
                    id="inquiryType"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 text-xs transition-colors"
                  >
                    <option value="SaaS Organic Growth Strategy">SaaS Organic Growth Strategy</option>
                    <option value="Technical SEO & Core Web Vitals Audit">Technical SEO & Core Web Vitals Audit</option>
                    <option value="AI-Powered Content & Cluster Architecture">AI-Powered Content & Cluster Architecture</option>
                    <option value="Full-Time Senior SEO / Growth Role">Full-Time Senior SEO / Growth Role</option>
                    <option value="Strategic Advisory & Consultation">Strategic Advisory & Consultation</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase text-slate-400 mb-1.5"
                  >
                    Project Scope / Objectives
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe current organic traffic bottlenecks, upcoming domain migrations, or targets for topical cluster expansion..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-100 text-xs transition-colors leading-relaxed"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Email to Shubham</span>
                  </button>
                  {formSent && (
                    <p className="mt-2 text-center text-xs text-emerald-400 font-mono">
                      Your email client has been opened with the pre-filled inquiry.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
