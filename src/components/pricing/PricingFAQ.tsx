'use client';

import React from 'react';

const faqs = [
  {
    q: "Are there hidden fees?",
    a: "No. Our pricing is completely transparent. The price you see is the price you pay per session."
  },
  {
    q: "Can I change lesson frequency?",
    a: "Absolutely. You can increase or decrease the number of weekly sessions as your child's needs change."
  },
  {
    q: "What happens if I miss a lesson?",
    a: "You can reschedule with advance notice, and because all sessions are recorded, your child never completely misses out on the learning material."
  },
  {
    q: "Can I stop at any time?",
    a: "Yes. There are no lock-in contracts or long-term commitments required."
  },
  {
    q: "Do I receive access to QLE?",
    a: "Yes. Full access to the QuickStudy Learning Environment (QLE) is included with all tutoring support."
  },
  {
    q: "How quickly can I expect results?",
    a: "While every child is different, 96% of our parents report noticeable improvements in confidence and understanding within the first two months."
  }
];

export default function PricingFAQ() {
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
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute', bottom: '10%', right: '-10%',
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
          }}>FAQ</span>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#0f172a', 
            letterSpacing: '-0.02em', 
            margin: 0,
            lineHeight: 1.2
          }}>
            Common Pricing Questions
          </h2>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px', 
          maxWidth: '1100px', 
          margin: '0 auto' 
        }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ 
              padding: '32px 24px', 
              background: 'rgba(224, 242, 254, 0.35)', 
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(186, 230, 253, 0.6)',
              borderRadius: '20px',
              boxShadow: '0 10px 30px -10px rgba(56, 189, 248, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 15px 35px -10px rgba(56, 189, 248, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.8)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(56, 189, 248, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.8)';
            }}
            >
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>{faq.q}</h4>
              <p style={{ fontSize: '1.05rem', color: '#475569', margin: 0, lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
