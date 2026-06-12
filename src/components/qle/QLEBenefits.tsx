'use client';
import React from 'react';

const benefits = [
  { 
    title: "No More Guesswork", 
    desc: "Know exactly what is being taught every lesson — with full recordings and AI summaries.", 
    icon: "🎯",
    accent: '#38bdf8'
  },
  { 
    title: "No Missed Learning", 
    desc: "Every lesson is permanently recorded and available to rewatch anytime, anywhere.", 
    icon: "📹",
    accent: '#a78bfa'
  },
  { 
    title: "No Communication Gaps", 
    desc: "Stay informed through automated summaries, tutor messages and real-time updates.", 
    icon: "💬",
    accent: '#34d399'
  },
  { 
    title: "No Administrative Confusion", 
    desc: "Attendance, progress, goals and resources — all live in one beautiful dashboard.", 
    icon: "📊",
    accent: '#f59e0b'
  },
];

export default function QLEBenefits() {
  return (
    <section className="section-padding" style={{
      backgroundColor: '#ffffff',
      borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-5%',
        width: '450px', height: '450px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', right: '-10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-10)' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#8b5cf6',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.25)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>Why Parents Love QLE</span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 800, color: '#0f172a', margin: 0,
            letterSpacing: '-0.02em'
          }}>Problems Solved. Permanently.</h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', marginTop: '12px' }}>
            QLE eliminates the four biggest frustrations parents face with online tutoring.
          </p>
        </div>

        {/* Benefit cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {benefits.map((b, idx) => (
            <div key={idx} style={{
              background: 'rgba(9, 17, 36, 0.95)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderTop: `3px solid ${b.accent}`,
              borderRadius: '20px',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              cursor: 'default',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.35), 0 0 0 1px ${b.accent}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon + Title row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                  background: `${b.accent}18`,
                  border: `1px solid ${b.accent}30`,
                  flexShrink: 0
                }}>{b.icon}</div>
                <h3 style={{
                  fontSize: '1.1rem', fontWeight: 800, color: 'white',
                  margin: 0, lineHeight: 1.2
                }}>{b.title}</h3>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.7)',
                margin: 0,
                lineHeight: 1.6
              }}>{b.desc}</p>

              {/* Accent tag */}
              <div style={{
                marginTop: 'auto',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', gap: '6px'
              }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: b.accent
                }} />
                <span style={{ fontSize: '0.78rem', color: b.accent, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  QLE Feature
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
