import React from 'react';

const journey = [
  "Learning Profile",
  "Free Consultation",
  "Learning Plan",
  "Weekly Tutoring",
  "QLE Learning Support",
  "AI Insights",
  "Parent Tracking",
  "Academic Improvement"
];

export default function JourneyFlow() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'white', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-8)' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.15em', color: '#1e3a8a',
              background: 'rgba(30, 58, 138, 0.08)',
              border: '1px solid rgba(30, 58, 138, 0.2)',
              borderRadius: '100px', padding: '6px 18px',
              marginBottom: '16px'
            }}>End To End</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
              One System. Complete Clarity.
            </h2>
            <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '650px', margin: '12px auto 0 auto', lineHeight: 1.6 }}>
              Every part of the system is connected and builds on the previous step.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            {journey.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-3)' }}>
                <div style={{ 
                  backgroundColor: idx === journey.length - 1 ? '#38bdf8' : 'rgba(9, 17, 36, 0.95)', 
                  color: idx === journey.length - 1 ? '#0f172a' : 'white', 
                  padding: 'var(--spacing-4)', 
                  borderRadius: '16px', 
                  width: '100%', 
                  maxWidth: '400px', 
                  fontWeight: 800, 
                  fontSize: '1.125rem', 
                  border: idx === journey.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
                }}>
                  {step}
                </div>
                {idx < journey.length - 1 && (
                  <div style={{ color: '#38bdf8', fontSize: '1.5rem', opacity: 0.8 }}>↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
