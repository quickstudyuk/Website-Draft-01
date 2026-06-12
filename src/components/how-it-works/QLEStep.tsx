import React from 'react';

const tools = [
  "Lesson recordings (all sessions saved)",
  "AI lesson summaries (instant understanding)",
  "Revision notes and quizzes",
  "Digital whiteboard collaboration",
  "Learning resources"
];

export default function QLEStep() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#0f172a', position: 'relative', overflow: 'hidden' }}>
      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-10%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-6)', alignItems: 'center' }}>
          
          <div style={{ order: 1 }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.15em', color: '#60a5fa',
              background: 'rgba(96, 165, 250, 0.1)',
              border: '1px solid rgba(96, 165, 250, 0.2)',
              borderRadius: '100px', padding: '6px 18px',
              marginBottom: '16px'
            }}>Step 4: QLE Access</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: 'var(--spacing-3)' }}>
              Learning Continues Beyond The Lesson
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: 'var(--spacing-4)' }}>
              QLE supports students between sessions. Everything is accessible in one place.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
              {tools.map((tool, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.05rem', color: 'white', fontWeight: 600 }}>
                  <span style={{ color: '#38bdf8', fontSize: '1.2rem' }}>•</span> {tool}
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{ order: 2 }}>
            <div style={{ backgroundColor: 'rgba(9, 17, 36, 0.95)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '24px', padding: 'var(--spacing-5)', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-3)' }}>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', height: '120px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600, fontSize: '0.9rem' }}>
                ▶ Recording Library
              </div>
              <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)', height: '120px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', fontWeight: 600, fontSize: '0.9rem' }}>
                AI Summary Card
              </div>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', height: '120px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600, fontSize: '0.9rem' }}>
                Quiz Example
              </div>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', height: '120px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600, fontSize: '0.9rem' }}>
                Chat Interaction
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
