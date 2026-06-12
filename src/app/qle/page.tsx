import React from 'react';
import QLEHero from '@/components/qle/QLEHero';
import TraditionalVsQLE from '@/components/qle/TraditionalVsQLE';
import SessionLibrary from '@/components/qle/SessionLibrary';
import AISummaries from '@/components/qle/AISummaries';
import RevisionGenerator from '@/components/qle/RevisionGenerator';
import DigitalWhiteboard from '@/components/qle/DigitalWhiteboard';
import MentorChat from '@/components/qle/MentorChat';
import ParentDashboard from '@/components/qle/ParentDashboard';
import ProgressTracking from '@/components/qle/ProgressTracking';
import QLEBenefits from '@/components/qle/QLEBenefits';
import QLEJourney from '@/components/qle/QLEJourney';
import HeroDiagnosticTest from '@/components/home/HeroDiagnosticTest';

export const metadata = {
  title: 'QuickStudy Learning Environment | Complete Academic System',
  description: 'Every lesson, every insight, every revision resource, and every progress update in one place.',
};

export default function QLEPage() {
  return (
    <main>
      {/* 1. Hero — dark */}
      <QLEHero />
      {/* 2. Traditional vs QLE — light */}
      <TraditionalVsQLE />
      {/* 3. Session Library — dark */}
      <SessionLibrary />
      {/* 4 & 5. AI Summaries & Revision Generator — combined dark background */}
      <div style={{
        background: 'linear-gradient(135deg, #020617 0%, #0f172a 80%, #0d1f3c 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Grid pattern overlay covering both sections */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          zIndex: 0,
          pointerEvents: 'none'
        }} />
        <AISummaries />
        <RevisionGenerator />
      </div>
      {/* 6. Digital Whiteboard — dark */}
      <DigitalWhiteboard />
      {/* 7. Mentor Chat — light */}
      <MentorChat />
      {/* 8. Parent Dashboard — dark */}
      <ParentDashboard />
      {/* 9. Progress Tracking — dark */}
      <ProgressTracking />
      {/* 10. Benefits — light (moved up) */}
      <QLEBenefits />
      {/* 11. Journey — dark (moved down, swapped) */}
      <QLEJourney />
      {/* 12. Diagnostic CTA — dark */}
      <section id="diagnostic-section" style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: '60vw', height: '60vw',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 60%)',
          zIndex: 0, pointerEvents: 'none'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: 'white', marginBottom: '16px' }}>
            Start Your Child&apos;s Learning Profile
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
            Take our 60-second academic assessment to uncover confidence gaps, study challenges, and receive a target grade projection.
          </p>
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <HeroDiagnosticTest />
        </div>
      </section>
    </main>
  );
}
