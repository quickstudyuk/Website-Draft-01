import React from 'react';

const safetyPoints = [
  "All tutors are rigorously vetted and assessed",
  "Lessons are structured and systematically monitored",
  "Communication between tutor and student is fully transparent",
  "The learning environment (QLE) is secure and private",
  "Parents stay informed via automated updates at all times"
];

export default function Safeguarding() {
  return (
    <section className="section-padding" style={{ 
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
      paddingBottom: '100px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      {/* Background radial blobs */}
      <div style={{
        position: 'absolute', top: '20%', right: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#60a5fa',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '4px'
          }}>Safety & Safeguarding</span>

          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#ffffff', 
            letterSpacing: '-0.02em', 
            margin: 0,
            lineHeight: 1.15
          }}>
            Your Child’s Safety Comes First
          </h2>
          
          {/* Glowing Glassmorphic Container */}
          <div style={{ 
            backgroundColor: 'rgba(9, 17, 36, 0.75)', 
            border: '1px solid rgba(255, 255, 255, 0.15)', 
            borderRadius: '28px', 
            padding: '40px', 
            textAlign: 'left',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            width: '100%',
            boxSizing: 'border-box',
            marginTop: '16px'
          }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {safetyPoints.map((point, idx) => (
                <li key={idx} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px', 
                  fontSize: '1.1rem', 
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.4
                }}>
                  <span style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '24px', 
                    height: '24px', 
                    borderRadius: '50%',
                    backgroundColor: 'rgba(16, 185, 129, 0.2)', 
                    color: '#10b981', 
                    fontSize: '0.9rem', 
                    fontWeight: 800,
                    flexShrink: 0 
                  }}>✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
