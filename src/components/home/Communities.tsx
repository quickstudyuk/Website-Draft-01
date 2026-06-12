'use client';

import React from 'react';

const communities = [
  "Bangladesh", "India", "Pakistan", "Somalia", "Ethiopia", 
  "China", "Malaysia", "Uganda", "Nigeria", "Nepal"
];

export default function Communities() {
  return (
    <section style={{ 
      padding: 'var(--spacing-8) 0', 
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 700, 
          color: 'rgba(255,255,255,0.5)', 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em',
          marginBottom: 'var(--spacing-6)'
        }}>
          Empowering Ambitious Families Across Diverse Communities
        </h2>

        {/* Marquee Container */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 'var(--spacing-4)',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {communities.map((country, idx) => (
            <div key={idx} style={{
              padding: '10px 24px',
              backgroundColor: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 'var(--radius-full)',
              color: 'rgba(255,255,255,0.85)',
              fontWeight: 600,
              fontSize: '1.05rem',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'default'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
              e.currentTarget.style.borderColor = 'rgba(56,189,248,0.4)';
              e.currentTarget.style.backgroundColor = 'rgba(56,189,248,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)';
            }}
            >
              <span style={{ 
                width: '10px', 
                height: '10px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, var(--primary-light), var(--primary))',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
              }}></span>
              {country}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
