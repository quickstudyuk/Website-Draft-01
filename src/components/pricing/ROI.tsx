'use client';

import React from 'react';

const outcomes = [
  "Improved Confidence",
  "Better Study Habits",
  "Higher Exam Performance",
  "Greater Accountability",
  "Reduced Parent Stress",
  "Long-Term Academic Growth"
];

export default function ROI() {
  return (
    <section className="section-padding" style={{ 
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'var(--spacing-16)',
      paddingBottom: 'var(--spacing-16)',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
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
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#60a5fa',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>Real ROI</span>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#ffffff', 
            letterSpacing: '-0.02em', 
            margin: 0,
            lineHeight: 1.2
          }}>
            The Value Goes Beyond Grades
          </h2>
        </div>
        
        <div className="roi-grid-container" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px', 
          maxWidth: '1100px', 
          margin: '0 auto' 
        }}>
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="roi-card" style={{ 
              padding: '24px', 
              textAlign: 'center', 
              background: 'rgba(9, 17, 36, 0.95)', 
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '24px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              cursor: 'default'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.4)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.25)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
            >
              <span className="roi-card-text" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#38bdf8' }}>
                {outcome}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .roi-grid-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .roi-card {
            padding: 16px 10px !important;
            border-radius: 16px !important;
          }
          .roi-card-text {
            font-size: 0.95rem !important;
          }
          .roi-card:nth-child(2),
          .roi-card:nth-child(3),
          .roi-card:nth-child(6) {
            background: rgba(56, 189, 248, 0.08) !important;
            border-color: rgba(56, 189, 248, 0.3) !important;
          }
        }
      `}</style>
    </section>
  );
}
