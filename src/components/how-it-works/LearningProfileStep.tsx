import React from 'react';

export default function LearningProfileStep() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'white', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-6)', alignItems: 'center' }}>
          
          <div style={{ order: 1 }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.15em', color: '#1e3a8a',
              background: 'rgba(30, 58, 138, 0.08)',
              border: '1px solid rgba(30, 58, 138, 0.2)',
              borderRadius: '100px', padding: '6px 18px',
              marginBottom: '16px'
            }}>Step 1: Diagnosis</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: 'var(--spacing-3)' }}>
              Everything Starts With Understanding Your Child
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, marginBottom: 'var(--spacing-4)' }}>
              The Learning Profile identifies academic level, confidence level, weak areas, learning gaps, and the recommended support level.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#1e3a8a', fontWeight: 700 }}>
              This ensures every child starts with a clear, personalised direction.
            </p>
          </div>
          
          <div style={{ order: 2 }}>
            <div style={{ backgroundColor: 'rgba(9, 17, 36, 0.95)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '24px', padding: 'var(--spacing-6)', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-4)' }}>
                <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: 700, textTransform: 'uppercase' }}>Risk Level</div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#fbbf24', marginTop: '4px' }}>Medium</div>
                </div>
                <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: 700, textTransform: 'uppercase' }}>Timeline</div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 800, color: 'white', marginTop: '4px' }}>8-12 Weeks</div>
                </div>
                <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)', gridColumn: '1 / -1' }}>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)', fontWeight: 700, textTransform: 'uppercase' }}>Recommended Weekly Support</div>
                  <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#38bdf8', marginTop: '4px' }}>2 Sessions (Maths & Science)</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
