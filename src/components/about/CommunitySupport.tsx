'use client';

import React from 'react';

const flags = [
  "🇧🇩", "🇮🇳", "🇵🇰", "🇸🇴", "🇪🇹", 
  "🇦🇫", "🇮🇷", "🇨🇳", "🇲🇾", "🌍"
];

export default function CommunitySupport() {
  return (
    <section className="section-padding" style={{ 
      backgroundColor: '#f8fafc',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
      paddingBottom: '100px',
      borderBottom: '1px solid #e2e8f0'
    }}>
      {/* Light theme background blobs */}
      <div style={{
        position: 'absolute', top: '10%', right: '-10%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.04) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#0284c7',
            background: 'rgba(2, 132, 199, 0.08)',
            border: '1px solid rgba(2, 132, 199, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '4px'
          }}>Community Support</span>

          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#0f172a', 
            letterSpacing: '-0.02em', 
            margin: 0,
            lineHeight: 1.15
          }}>
            One Mission. Many Communities.
          </h2>
          
          <p style={{ 
            fontSize: '1.15rem', 
            color: '#475569', 
            lineHeight: 1.6, 
            margin: '8px auto 20px auto',
            maxWidth: '720px'
          }}>
            QuickStudy proudly supports families from diverse backgrounds across the UK, including Bangladeshi, Indian, Pakistani, Somali, Ethiopian, Afghan, Iranian, Chinese, Malaysian, Arab, and many other communities. 
            <br/><br/>
            <strong style={{ color: '#0f172a' }}>We are committed to making academic support inclusive, accessible, and effective for all families.</strong>
          </p>
          
          {/* Flags List with hover effects */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '16px', 
            marginBottom: '40px',
            maxWidth: '650px'
          }}>
            {flags.map((flag, idx) => (
              <div 
                key={idx} 
                className="flag-circle"
                style={{ 
                  fontSize: '2rem', 
                  backgroundColor: '#ffffff', 
                  width: '60px', 
                  height: '60px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  borderRadius: '50%',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s ease',
                  cursor: 'default'
                }}
              >
                {flag}
              </div>
            ))}
          </div>
          
          {/* Bottom capsules */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '12px 24px', 
              borderRadius: '100px', 
              border: '1px solid #e2e8f0', 
              fontSize: '0.95rem', 
              fontWeight: 700, 
              color: '#475569',
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
            }}>
              <span style={{ color: '#10b981', marginRight: '6px' }}>96%</span> improvement within 2 months
            </div>
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '12px 24px', 
              borderRadius: '100px', 
              border: '1px solid #e2e8f0', 
              fontSize: '0.95rem', 
              fontWeight: 700, 
              color: '#475569',
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
            }}>
              <span style={{ color: '#facc15', marginRight: '6px' }}>★ 4.9/5</span> parent rating
            </div>
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '12px 24px', 
              borderRadius: '100px', 
              border: '1px solid #e2e8f0', 
              fontSize: '0.95rem', 
              fontWeight: 700, 
              color: '#475569',
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
            }}>
              <span style={{ color: '#0284c7', marginRight: '6px' }}>£18</span> per session flat rate
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .flag-circle:hover {
          transform: scale(1.1) translateY(-2px);
          border-color: #cbd5e1;
          box-shadow: 0 8px 15px rgba(0,0,0,0.06) !important;
        }
      `}</style>
    </section>
  );
}
