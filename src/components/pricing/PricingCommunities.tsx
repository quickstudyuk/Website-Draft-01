'use client';

import React from 'react';

const flags = [
  "🇧🇩", "🇮🇳", "🇵🇰", "🇸🇴", "🇪🇹", 
  "🇦🇫", "🇮🇷", "🇨🇳", "🇲🇾", "🇸🇦", 
  "🌍", "🇬🇧"
];

export default function PricingCommunities() {
  return (
    <section className="section-padding" style={{ 
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      color: 'white', 
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
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: 'var(--spacing-12)' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#60a5fa',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>Community</span>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#ffffff', 
            letterSpacing: '-0.02em', 
            margin: 0,
            lineHeight: 1.2
          }}>
            Supporting Families Across Communities
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '650px', margin: '16px auto 0 auto', lineHeight: 1.6 }}>
            QuickStudy proudly supports students from Bangladeshi, Indian, Pakistani, Somali, Ethiopian, Afghan, Iranian, Chinese, Malaysian, Arab, and many other communities throughout the UK. Our goal is to make high-quality academic support accessible, affordable, and effective.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', marginTop: '48px' }}>
            {flags.map((flag, idx) => (
              <div 
                key={idx} 
                style={{ 
                  fontSize: '2rem', 
                  background: 'rgba(9, 17, 36, 0.95)', 
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  width: '72px', 
                  height: '72px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  borderRadius: '50%',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.4)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                {flag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
