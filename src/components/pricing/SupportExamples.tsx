'use client';

import React from 'react';

const examples = [
  {
    title: "Confidence Building",
    freq: "1 lesson per week",
    idealFor: "Students needing occasional support and confidence growth."
  },
  {
    title: "Grade Improvement",
    freq: "2 lessons per week",
    idealFor: "Students looking for consistent academic improvement.",
    highlight: true
  },
  {
    title: "Exam Preparation",
    freq: "2–3 lessons per week",
    idealFor: "GCSE and A-Level students preparing for important exams."
  }
];

export default function SupportExamples() {
  return (
    <section className="section-padding" style={{ 
      backgroundColor: '#f8fafc',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'var(--spacing-16)',
      paddingBottom: 'var(--spacing-16)'
    }}>
      {/* Dynamic background accents (Light Theme) */}
      <div style={{
        position: 'absolute', top: '20%', left: '-10%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#1e3a8a',
            background: 'rgba(30, 58, 138, 0.08)',
            border: '1px solid rgba(30, 58, 138, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>Tailored Support</span>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#0f172a', 
            letterSpacing: '-0.02em', 
            margin: 0,
            lineHeight: 1.2
          }}>
            Every Child Is Different
          </h2>
          <p style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: '#475569',
            maxWidth: '650px',
            margin: '16px auto 0 auto',
            lineHeight: 1.6
          }}>
            How much support does my child need? Here are some common examples of tailored schedules based on academic goals.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '20px', 
          maxWidth: '1100px', 
          margin: '0 auto' 
        }}>
          {examples.map((ex, idx) => (
            <div key={idx} style={{ 
              padding: '24px 20px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px',
              background: ex.highlight ? 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)' : 'rgba(224, 242, 254, 0.35)', 
              backdropFilter: ex.highlight ? 'none' : 'blur(12px)',
              WebkitBackdropFilter: ex.highlight ? 'none' : 'blur(12px)',
              border: ex.highlight ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(186, 230, 253, 0.6)',
              borderRadius: '20px',
              boxShadow: ex.highlight ? '0 15px 35px -5px rgba(30, 58, 138, 0.3)' : '0 10px 30px -10px rgba(56, 189, 248, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              position: 'relative'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = ex.highlight ? '0 20px 40px -5px rgba(30, 58, 138, 0.4)' : '0 15px 35px -10px rgba(56, 189, 248, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.8)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = ex.highlight ? '0 15px 35px -5px rgba(30, 58, 138, 0.3)' : '0 10px 30px -10px rgba(56, 189, 248, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.8)';
            }}
            >
              {ex.highlight && (
                <div style={{
                  position: 'absolute', top: '-14px', right: '24px',
                  backgroundColor: '#facc15', color: '#0f172a',
                  fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em',
                  padding: '6px 16px', borderRadius: '9999px',
                  boxShadow: '0 4px 6px rgba(250, 204, 21, 0.3)'
                }}>
                  Most Popular
                </div>
              )}
              
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: ex.highlight ? '#ffffff' : '#0f172a', margin: 0 }}>{ex.title}</h3>
              <div style={{ 
                fontSize: '0.85rem', fontWeight: 700, 
                color: ex.highlight ? '#38bdf8' : '#0284c7', 
                backgroundColor: ex.highlight ? 'rgba(56, 189, 248, 0.15)' : 'rgba(2, 132, 199, 0.1)', 
                padding: '8px 16px', borderRadius: '8px', 
                display: 'inline-block', width: 'fit-content'
              }}>
                Recommended: {ex.freq}
              </div>
              
              <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: ex.highlight ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(148, 163, 184, 0.2)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: ex.highlight ? '#94a3b8' : '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>Ideal for:</span>
                <p style={{ fontSize: '0.95rem', color: ex.highlight ? 'rgba(255, 255, 255, 0.9)' : '#334155', margin: 0, lineHeight: 1.4 }}>{ex.idealFor}</p>
              </div>
            </div>
          ))}
        </div>
        
        <p style={{ 
          fontSize: '0.9rem', color: '#64748b', textAlign: 'center', 
          maxWidth: '800px', margin: '40px auto 0 auto', fontStyle: 'italic' 
        }}>
          * These are examples only. We do not present fixed packages; support is always tailored strictly to the student's needs.
        </p>
      </div>
    </section>
  );
}
