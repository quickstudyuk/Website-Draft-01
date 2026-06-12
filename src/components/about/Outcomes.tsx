'use client';

import React from 'react';

const outcomes = [
  "Improved confidence",
  "Better exam performance",
  "Stronger study habits",
  "Increased motivation",
  "Clear academic direction"
];

export default function Outcomes() {
  return (
    <section className="section-padding" style={{ 
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
      paddingBottom: '100px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      {/* Background radial blobs */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '54px' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#38bdf8',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>Student Outcomes</span>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#ffffff', 
            letterSpacing: '-0.02em', 
            margin: 0,
            lineHeight: 1.15
          }}>
            Real Progress Comes From Structure
          </h2>
        </div>
        
        {/* Grid of Outcome cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '24px', 
          maxWidth: '1000px', 
          margin: '0 auto' 
        }}>
          {outcomes.map((outcome, idx) => (
            <div 
              key={idx} 
              className="outcome-card"
              style={{ 
                backgroundColor: 'rgba(9, 17, 36, 0.75)', 
                color: '#ffffff', 
                padding: '24px 20px', 
                borderRadius: '20px', 
                textAlign: 'center', 
                fontWeight: 700, 
                fontSize: '1.15rem', 
                border: '1px solid rgba(56, 189, 248, 0.3)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px'
              }}
            >
              <span style={{ color: '#38bdf8', fontSize: '1.25rem' }}>✧</span>
              {outcome}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .outcome-card:hover {
          transform: translateY(-4px);
          border-color: #38bdf8 !important;
          box-shadow: 0 15px 35px rgba(56, 189, 248, 0.15) !important;
        }
      `}</style>
    </section>
  );
}
