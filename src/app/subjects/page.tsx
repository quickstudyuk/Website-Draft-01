import React from 'react';
import SubjectsHero from '@/components/subjects/SubjectsHero';
import CoreSubjects from '@/components/subjects/CoreSubjects';
import AcademicPathways from '@/components/subjects/AcademicPathways';
import QLEIntegration from '@/components/subjects/QLEIntegration';
import WhyChooseUs from '@/components/subjects/WhyChooseUs';
import HeroDiagnosticTest from '@/components/home/HeroDiagnosticTest';

export const metadata = {
  title: 'QuickStudy Subjects | Structured Support for Every Challenge',
  description: 'From building confidence in Mathematics to preparing for GCSEs and A Levels, QuickStudy provides personalised support tailored to every student.',
};

export default function SubjectsPage() {
  return (
    <main>
      <SubjectsHero />
      <CoreSubjects />
      <AcademicPathways />
      <QLEIntegration />
      <WhyChooseUs />
      
      {/* Diagnostic Section */}
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
