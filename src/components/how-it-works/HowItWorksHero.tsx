import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function HowItWorksHero() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#0f172a', color: 'white', overflow: 'hidden', position: 'relative' }}>
      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-5%', width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', right: '-10%', width: '700px', height: '700px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-5)', alignItems: 'center' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#60a5fa',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '4px'
          }}>The Process</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'white', margin: 0 }}>
            How QuickStudy Works
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
            A complete learning system that connects diagnosis, expert tutoring, AI-powered learning tools, and parent progress tracking into one structured journey for your child.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--spacing-3)' }}>
            <Link href="/survey" style={{ textDecoration: 'none' }}>
              <Button size="lg" style={{ backgroundColor: 'white', color: 'var(--primary)', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>Get Your Child's Learning Profile</Button>
            </Link>
            <Link href="/consultation" style={{ textDecoration: 'none' }}>
              <Button size="lg" variant="outline" style={{ borderColor: 'rgba(255, 255, 255, 0.4)', color: 'white' }}>Book Free Parent Consultation</Button>
            </Link>
            <Link href="/book-trial" style={{ textDecoration: 'none' }}>
              <Button size="lg" variant="outline" style={{ borderColor: 'rgba(255, 255, 255, 0.2)', color: 'rgba(255, 255, 255, 0.8)' }}>Book Free Trial Lesson</Button>
            </Link>
          </div>
          
          {/* Hero Visual Flow */}
          <div style={{ marginTop: 'var(--spacing-6)', padding: 'var(--spacing-5)', backgroundColor: 'rgba(9, 17, 36, 0.95)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.15)', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--spacing-3)', alignItems: 'center' }}>
            {[
              "Learning Profile", "Free Consultation", "Learning Plan", 
              "Weekly Tutoring", "QLE Environment", "AI Insights", 
              "Parent Tracking", "Improvement"
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div style={{ padding: '8px 16px', backgroundColor: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)', color: 'white', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600 }}>
                  {step}
                </div>
                {idx < arr.length - 1 && (
                  <div style={{ color: '#38bdf8', fontSize: '1.2rem', opacity: 0.6 }}>→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
