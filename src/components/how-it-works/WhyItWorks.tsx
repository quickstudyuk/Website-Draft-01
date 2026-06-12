import React from 'react';
import { BaseCard } from '@/components/ui/cards';

const reasons = [
  "Clear learning roadmap from day one",
  "Continuous feedback loop through AI",
  "Structured revision system",
  "Accountability for students",
  "Full transparency for parents"
];

export default function WhyItWorks() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#0f172a', position: 'relative', overflow: 'hidden' }}>
      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-10%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-10)' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#60a5fa',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>Consistent Progress</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', margin: 0 }}>
            Structure Creates Results
          </h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-4)', maxWidth: '1100px', margin: '0 auto' }}>
          {reasons.map((reason, idx) => (
            <div key={idx} style={{ 
              padding: 'var(--spacing-5)', 
              backgroundColor: 'rgba(9, 17, 36, 0.95)', 
              border: '1px solid rgba(255, 255, 255, 0.15)', 
              textAlign: 'center',
              borderRadius: '24px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)' 
            }}>
              <span style={{ fontSize: '1.125rem', fontWeight: 700, color: 'white' }}>{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
