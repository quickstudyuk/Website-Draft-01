'use client';
import React from 'react';

interface Msg { message: string; sender: string; isSent: boolean; time: string; }

const messages: Msg[] = [
  { message: "Great work today. Please complete Questions 1–10 before next week.", sender: "Tutor", isSent: false, time: "5:30 PM" },
  { message: "Thank you. I understand algebra much better now.", sender: "Student", isSent: true, time: "6:15 PM" },
  { message: "Excellent. Let me know if you need help before our next session.", sender: "Tutor", isSent: false, time: "6:20 PM" },
  { message: "Thank you for the update.", sender: "Parent", isSent: false, time: "7:00 PM" },
  { message: "You're welcome. Progress has been very positive this week.", sender: "Tutor", isSent: false, time: "7:05 PM" },
];

const senderColors: Record<string, string> = {
  Tutor: '#38bdf8',
  Student: '#a78bfa',
  Parent: '#34d399',
};

export default function MentorChat() {
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
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          fontWeight: 800,
          color: '#0f172a',
          marginBottom: '8px'
        }}>
          Support Beyond The Lesson
        </h2>
        <p style={{ textAlign: 'center', color: '#475569', fontSize: '1.1rem', marginBottom: 'var(--spacing-8)' }}>
          Tutor, student and parent — all connected in one place.
        </p>

        {/* Chat mockup window */}
        <div style={{
          maxWidth: '620px',
          margin: '0 auto',
          background: 'rgba(9, 17, 36, 0.95)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: '28px',
          border: '2px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 40px 80px -10px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
          overflow: 'hidden',
          transform: 'perspective(1000px) rotateX(2deg)',
          transition: 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
        }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg)';
            e.currentTarget.style.background = 'rgba(9, 17, 36, 0.95)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(2deg)';
            e.currentTarget.style.background = 'rgba(9, 17, 36, 0.95)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
          }}
        >
          {/* Window chrome */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            padding: '14px 20px',
            background: 'rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.08)'
          }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
            <span style={{ marginLeft: '8px', fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>QuickStudy Mentor Chat</span>
          </div>

          {/* Date divider */}
          <div style={{ textAlign: 'center', padding: '12px 20px 4px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Monday
          </div>

          {/* Messages */}
          <div style={{ padding: '16px 20px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.isSent ? 'flex-end' : 'flex-start' }}>
                {/* Sender label */}
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: senderColors[msg.sender] ?? 'rgba(255,255,255,0.4)',
                  marginBottom: '3px',
                  paddingLeft: msg.isSent ? 0 : '4px',
                  paddingRight: msg.isSent ? '4px' : 0,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}>
                  {msg.sender}
                </span>
                <div style={{
                  maxWidth: '80%',
                  padding: '10px 16px',
                  borderRadius: msg.isSent ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  fontWeight: 500,
                  background: msg.isSent
                    ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                    : 'rgba(255,255,255,0.09)',
                  border: msg.isSent ? 'none' : '1px solid rgba(255,255,255,0.12)',
                  color: 'white',
                  boxShadow: msg.isSent ? '0 4px 15px rgba(99, 102, 241, 0.3)' : 'none',
                }}>
                  {msg.message}
                  <div style={{
                    fontSize: '0.65rem',
                    color: 'rgba(255,255,255,0.4)',
                    marginTop: '4px',
                    textAlign: msg.isSent ? 'right' : 'left'
                  }}>
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input bar */}
          <div style={{
            padding: '12px 20px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            gap: '10px',
            alignItems: 'center'
          }}>
            <div style={{
              flex: 1,
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '20px',
              padding: '10px 16px',
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.875rem'
            }}>
              Type a message…
            </div>
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', fontSize: '1rem',
              boxShadow: '0 4px 12px rgba(99,102,241,0.4)'
            }}>➤</div>
          </div>
        </div>

        {/* Benefit tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: 'var(--spacing-8)' }}>
          {['Tutor ↔ Student', 'Tutor ↔ Parent', 'Instant Updates', 'Tracked Conversations'].map((tag, idx) => (
            <span key={idx} style={{
              padding: '8px 20px',
              background: 'rgba(15, 23, 42, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '100px',
              color: '#ffffff',
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)'
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
