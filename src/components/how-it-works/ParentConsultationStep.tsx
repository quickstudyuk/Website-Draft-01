import React from 'react';
import { BaseCard } from '@/components/ui/cards';

const goals = [
  "Understand your child’s Learning Profile",
  "Receive personalised recommendations",
  "Discuss academic concerns in depth",
  "Choose the right learning plan"
];

export default function ParentConsultationStep() {
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
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-8)' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.15em', color: '#60a5fa',
              background: 'rgba(96, 165, 250, 0.1)',
              border: '1px solid rgba(96, 165, 250, 0.2)',
              borderRadius: '100px', padding: '6px 18px',
              marginBottom: '16px'
            }}>Step 2: Consultation</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', margin: 0 }}>
              Speak With Our Team For Clear Guidance
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '650px', margin: '12px auto 0 auto', lineHeight: 1.6 }}>
              This is a guidance session, not a sales pitch. Parents can book a free consultation to:
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-5)' }}>
            {goals.map((goal, idx) => (
              <div key={idx} style={{ 
                padding: 'var(--spacing-4)', 
                backgroundColor: 'rgba(9, 17, 36, 0.95)', 
                border: '1px solid rgba(255, 255, 255, 0.15)', 
                borderRadius: '16px',
                textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
              }}>
                <span style={{ color: '#38bdf8', fontWeight: 800 }}>✓</span>
                <span style={{ fontSize: '1rem', fontWeight: 600, color: 'white' }}>{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
