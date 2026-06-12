'use client';

import React from 'react';

const pillars = [
  "Transparent Progress Tracking",
  "Structured Learning Plans",
  "Consistent Communication",
  "Affordable Pricing",
  "Expert Tutors",
  "AI Learning Support",
  "Safe Learning Environment"
];

export default function TrustPillars() {
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
        position: 'absolute', top: '10%', left: '-10%',
        width: '40vw', height: '40vw',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#0284c7',
            background: 'rgba(2, 132, 199, 0.08)',
            border: '1px solid rgba(2, 132, 199, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>Trust & Integrity</span>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#0f172a', 
            letterSpacing: '-0.02em', 
            margin: 0,
            lineHeight: 1.15
          }}>
            Why Parents Trust QuickStudy
          </h2>
        </div>
        
        {/* Flex wrap of pillars */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '16px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="trust-badge"
              style={{ 
                padding: '14px 28px', 
                borderRadius: '100px', 
                backgroundColor: '#ffffff', 
                border: '1px solid #e2e8f0', 
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span style={{ color: '#10b981', fontWeight: 800, fontSize: '1.1rem' }}>✓</span>
              <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#334155' }}>
                {pillar}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .trust-badge:hover {
          transform: translateY(-3px);
          border-color: #0284c7;
          box-shadow: 0 8px 20px rgba(2, 132, 199, 0.08) !important;
        }
      `}</style>
    </section>
  );
}
