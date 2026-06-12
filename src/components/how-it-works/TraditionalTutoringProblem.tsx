import React from 'react';
import { BaseCard } from '@/components/ui/cards';

const painPoints = [
  "What did my child actually learn today?",
  "Are they improving or just attending lessons?",
  "What should they revise at home?",
  "Why is progress unclear?",
  "How do I know if this is working?"
];

export default function TraditionalTutoringProblem() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'white', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-10)' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.15em', color: '#1e3a8a',
              background: 'rgba(30, 58, 138, 0.08)',
              border: '1px solid rgba(30, 58, 138, 0.2)',
              borderRadius: '100px', padding: '6px 18px',
              marginBottom: '16px'
            }}>The Old Way</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
              The Problem With Traditional Tutoring
            </h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-6)' }}>
            {painPoints.map((point, idx) => (
              <div key={idx} style={{ 
                padding: 'var(--spacing-4)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: 'var(--spacing-4)', 
                backgroundColor: 'rgba(9, 17, 36, 0.95)', 
                border: '1px solid rgba(255, 255, 255, 0.15)', 
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)' 
              }}>
                <div style={{ color: '#fbbf24', fontWeight: 800, fontSize: '1.5rem', lineHeight: 1 }}>?</div>
                <div style={{ fontSize: '1.125rem', color: 'white', fontWeight: 600, textAlign: 'left', lineHeight: 1.5 }}>"{point}"</div>
              </div>
            ))}
          </div>
          
          <p style={{ fontSize: '1.25rem', color: '#1e3a8a', fontWeight: 700 }}>
            QuickStudy was designed to remove this uncertainty.
          </p>
        </div>
      </div>
    </section>
  );
}
