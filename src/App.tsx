/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsStrip } from './components/MetricsStrip';
import { About } from './components/About';
import { GrowthLoop } from './components/GrowthLoop';
import { AISEOSection } from './components/AISEOSection';
import { ExpertiseMatrix } from './components/ExpertiseMatrix';
import { ImpactSection } from './components/ImpactSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ApproachProcess } from './components/ApproachProcess';
import { ToolsSection } from './components/ToolsSection';
import { CertificationsAndEducation } from './components/CertificationsAndEducation';
import { PersonalBrand } from './components/PersonalBrand';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      {/* Top sticky navigation bar */}
      <Navbar />

      {/* Main Semantic Content Flow */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Key Verified Metrics Strip with Count-up */}
        <MetricsStrip />

        {/* 3. Executive About & Philosophy */}
        <About />

        {/* 4. Signature Visual: The AI × SEO Growth Loop */}
        <GrowthLoop />

        {/* 5. Where AI Meets SEO & 8 Capabilities */}
        <AISEOSection />

        {/* 6. Comprehensive Expertise Matrix */}
        <ExpertiseMatrix />

        {/* 7. Impact over Activity & Interactive SEO Growth Dashboard */}
        <ImpactSection />

        {/* 8. Verified Work Experience Timeline */}
        <ExperienceTimeline />

        {/* 9. Consulting Methodology: How I Approach SEO */}
        <ApproachProcess />

        {/* 10. Daily Production Tools Stack */}
        <ToolsSection />

        {/* 11. Certifications & Academic Engineering Education */}
        <CertificationsAndEducation />

        {/* 12. Personal Brand: Always Learning & Experimenting */}
        <PersonalBrand />

        {/* 13. Closing High-Intent Contact CTA */}
        <ContactSection />
      </main>

      {/* Semantic Footer */}
      <Footer />
    </div>
  );
}
