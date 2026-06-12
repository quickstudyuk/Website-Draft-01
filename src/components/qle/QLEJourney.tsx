'use client';
import React from 'react';

const steps = [
  { num: 1, title: 'Learning Profile', icon: '👤', desc: 'Build your personalised academic profile' },
  { num: 2, title: 'Diagnostic Assessment', icon: '🔍', desc: 'Identify strengths and key gaps' },
  { num: 3, title: 'Personal Learning Plan', icon: '📋', desc: 'A tailored roadmap just for your child' },
  { num: 4, title: 'Weekly Mentoring', icon: '🎓', desc: 'Expert-led sessions every week' },
  { num: 5, title: 'AI Learning Support', icon: '🤖', desc: 'Summaries, quizzes and revision tools' },
  { num: 6, title: 'Parent Updates', icon: '📊', desc: 'Full visibility into every lesson' },
  { num: 7, title: 'Academic Improvement', icon: '🏆', desc: 'Measurable results that last' },
];

export default function QLEJourney() {
  return (
    <section className="section-padding" style={{
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glows */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(30, 58, 138, 0.12) 0%, transparent 65%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#38bdf8',
            background: 'rgba(56,189,248,0.1)',
            border: '1px solid rgba(56,189,248,0.25)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>7-Step System</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800, color: 'white', margin: 0,
            letterSpacing: '-0.02em'
          }}>The QuickStudy Journey</h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem', marginTop: '12px' }}>
            From assessment to academic excellence — every step designed to succeed.
          </p>
        </div>

        {/* Steps grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {steps.map((step, idx) => (
            <div key={idx} style={{
              position: 'relative',
              background: 'rgba(9, 17, 36, 0.95)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '20px',
              padding: '24px 20px',
              transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
              cursor: 'default',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(56,189,248,0.4)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(56,189,248,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Step number badge */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px'
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(99,102,241,0.2))',
                  border: '2px solid rgba(56,189,248,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.85rem', fontWeight: 800, color: '#38bdf8',
                  flexShrink: 0
                }}>{step.num}</div>
                <span style={{ fontSize: '1.5rem' }}>{step.icon}</span>
              </div>
              <h3 style={{
                fontSize: '1rem', fontWeight: 700, color: 'white',
                margin: '0 0 6px 0', letterSpacing: '-0.01em'
              }}>{step.title}</h3>
              <p style={{
                fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)',
                margin: 0, lineHeight: 1.5
              }}>{step.desc}</p>
              {/* Connector arrow (except last) */}
              {idx < steps.length - 1 && (
                <div style={{
                  position: 'absolute', bottom: '-10px', right: '-8px',
                  display: 'none' // hidden on grid, visual flow implied by numbering
                }} />
              )}
            </div>
          ))}
        </div>

        {/* Progress indicator bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: 'var(--spacing-8)' }}>
          {steps.map((_, idx) => (
            <div key={idx} style={{
              height: 4, width: idx === 6 ? 40 : 28,
              borderRadius: 2,
              background: idx === 6
                ? 'linear-gradient(90deg, #38bdf8, #6366f1)'
                : 'rgba(255,255,255,0.15)',
              transition: 'background 0.3s'
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
