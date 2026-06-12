import React from 'react';

export default function AISupportStep() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'white', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-8)' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.15em', color: '#1e3a8a',
              background: 'rgba(30, 58, 138, 0.08)',
              border: '1px solid rgba(30, 58, 138, 0.2)',
              borderRadius: '100px', padding: '6px 18px',
              marginBottom: '16px'
            }}>Step 5: AI Tools</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
              Smarter Learning Through AI Support
            </h2>
            <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '650px', margin: '12px auto 0 auto', lineHeight: 1.6 }}>
              AI helps students revise efficiently, understand lessons faster, identify weak areas, and practice targeted questions.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 'var(--spacing-3)', backgroundColor: 'rgba(9, 17, 36, 0.95)', border: '1px solid rgba(255, 255, 255, 0.15)', padding: 'var(--spacing-6)', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
            {[
              "Lesson", "AI Summary", "Quiz", "Revision", "Improvement"
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div style={{ fontWeight: 700, color: 'white', fontSize: '1.125rem' }}>{step}</div>
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
