'use client';

import React from 'react';

const testimonials = [
  "My child is more confident and finally understands Maths.",
  "We can actually see progress week by week.",
  "The system makes everything clear and structured."
];

export default function Testimonials() {
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
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '54px' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#0284c7',
            background: 'rgba(2, 132, 199, 0.08)',
            border: '1px solid rgba(2, 132, 199, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>Testimonials</span>
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', 
            fontWeight: 800, 
            color: '#0f172a', 
            letterSpacing: '-0.02em', 
            margin: 0,
            lineHeight: 1.15
          }}>
            What Parents Say
          </h2>
        </div>
        
        {/* Grid of Testimonial cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px', 
          maxWidth: '1000px', 
          margin: '0 auto' 
        }}>
          {testimonials.map((quote, idx) => (
            <div 
              key={idx} 
              className="testimonial-card"
              style={{ 
                backgroundColor: '#ffffff', 
                padding: '40px 32px 32px 32px', 
                borderRadius: '24px', 
                border: '1px solid #e2e8f0', 
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)', 
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              {/* Giant decorative quotation mark */}
              <div style={{ 
                fontSize: '5rem', 
                color: '#f1f5f9', 
                position: 'absolute', 
                top: '0', 
                left: '20px', 
                lineHeight: 1, 
                fontFamily: 'Georgia, serif',
                pointerEvents: 'none',
                userSelect: 'none',
                opacity: 0.8
              }}>"</div>
              
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#334155', 
                position: 'relative', 
                zIndex: 1, 
                fontStyle: 'italic', 
                margin: 0,
                lineHeight: 1.6,
                fontWeight: 500
              }}>
                {quote}
              </p>
              
              {/* Author Info */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '14px',
                marginTop: 'auto',
                borderTop: '1px solid #f1f5f9',
                paddingTop: '16px'
              }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(2, 132, 199, 0.08)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '0.9rem', 
                  fontWeight: 800, 
                  color: '#0284c7' 
                }}>P</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>Parent</div>
                  <div style={{ color: '#facc15', fontSize: '0.85rem', marginTop: '2px' }}>★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-card:hover {
          transform: translateY(-5px);
          border-color: #cbd5e1;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05) !important;
        }
      `}</style>
    </section>
  );
}
