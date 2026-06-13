'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import HeroDiagnosticTest from './HeroDiagnosticTest';
import { useDiagnosticModalOpen, setDiagnosticModalOpen } from './LearningProfileStore';

export default function HeroSection() {
  const isModalOpen = useDiagnosticModalOpen();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <section className="hero-section-wrapper">
      {/* Background Effects matching godaylight.com style - Dark Theme */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
        zIndex: -2
      }}></div>
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 60%)',
        zIndex: -1,
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '0',
        right: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
        zIndex: -1,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--spacing-12)',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Side: Copy */}
          <div style={{ maxWidth: '600px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '9999px', marginBottom: 'var(--spacing-6)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <span style={{ display: 'block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38bdf8', animation: 'pulse-glow 2s infinite' }}></span>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>Platform live and accepting new students</span>
            </div>

            <h1 style={{ 
              fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', 
              fontWeight: 800, 
              lineHeight: 1.25, 
              letterSpacing: '-0.03em', 
              color: '#ffffff',
              marginBottom: 'var(--spacing-5)'
            }}>
              <span style={{ display: 'block', marginBottom: '6px' }}>We Make</span>
              <span style={{ 
                backgroundColor: '#facc15', 
                color: '#0f172a', 
                padding: '2px 14px 6px', 
                borderRadius: '8px',
                display: 'inline-block',
                lineHeight: '1.1',
                marginRight: '8px',
                marginBottom: '6px',
                whiteSpace: 'nowrap'
              }}>High-Quality</span>{' '}
              <span style={{ 
                backgroundColor: '#facc15', 
                color: '#0f172a', 
                padding: '2px 14px 6px', 
                borderRadius: '8px',
                display: 'inline-block',
                lineHeight: '1.1',
                marginBottom: '6px'
              }}>Education</span>
              <br />
              <span style={{ display: 'block', marginTop: '4px' }}>Accessible for all</span>
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', 
              color: 'rgba(255,255,255,0.7)', 
              lineHeight: 1.5,
              marginBottom: 'var(--spacing-6)',
              maxWidth: '90%'
            }}>
              Personalised 1:1 tutoring, regular parent updates, AI-driven insights, and structured learning plans designed to help students from all backgrounds starting from Year 7 to A-Level achieve their full potential.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/consultation" style={{ textDecoration: 'none', flex: '1 1 auto' }}>
                <button 
                  style={{ 
                    width: '100%',
                    padding: '14px 28px', 
                    fontSize: '1rem', 
                    backgroundColor: 'rgba(56, 189, 248, 0.2)', 
                    color: 'white', 
                    border: '1px solid rgba(56, 189, 248, 0.5)', 
                    borderRadius: 'var(--radius-md)', 
                    fontWeight: 600, 
                    backdropFilter: 'blur(12px)', 
                    cursor: 'pointer', 
                    transition: 'all 0.2s ease', 
                    boxShadow: '0 4px 15px rgba(56, 189, 248, 0.2)' 
                  }} 
                  onMouseOver={(e) => { 
                    e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.3)'; 
                    e.currentTarget.style.transform = 'translateY(-2px)'; 
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(56, 189, 248, 0.3)';
                  }} 
                  onMouseOut={(e) => { 
                    e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.2)'; 
                    e.currentTarget.style.transform = 'translateY(0)'; 
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(56, 189, 248, 0.2)';
                  }}
                >
                  Book Free Parent Consultation
                </button>
              </Link>
              <Link href="/book-trial" style={{ textDecoration: 'none', flex: '1 1 auto' }}>
                <button 
                  style={{ 
                    width: '100%',
                    padding: '14px 28px', 
                    fontSize: '1rem', 
                    backgroundColor: 'rgba(255, 255, 255, 0.04)', 
                    color: 'rgba(255, 255, 255, 0.65)', 
                    border: '1px solid rgba(255, 255, 255, 0.12)', 
                    borderRadius: 'var(--radius-md)', 
                    fontWeight: 600, 
                    backdropFilter: 'blur(12px)', 
                    cursor: 'pointer', 
                    transition: 'all 0.2s ease' 
                  }} 
                  onMouseOver={(e) => { 
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)'; 
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.transform = 'translateY(-2px)'; 
                  }} 
                  onMouseOut={(e) => { 
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)'; 
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)';
                    e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.transform = 'translateY(0)'; 
                  }}
                >
                  Book A Free Trial
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: Interactive Visual & Communities */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            
            {/* Desktop Only Inline Survey */}
            <div className="hero-diagnostic-desktop-only" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <HeroDiagnosticTest />
              <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#38bdf8', textAlign: 'center', margin: 0 }}>
                Take our 60-second test to understand your child's learning profile.
              </p>
            </div>

            {/* Mobile Only Survey Trigger Button */}
            <div className="hero-diagnostic-mobile-only" style={{ width: '100%', marginTop: '8px' }}>
              <button 
                onClick={() => setDiagnosticModalOpen(true)}
                style={{
                  width: '100%',
                  padding: '16px 24px',
                  background: 'linear-gradient(135deg, #facc15 0%, #f59e0b 100%)',
                  color: '#0f172a',
                  border: 'none',
                  borderRadius: '20px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(250, 204, 21, 0.35)',
                  transition: 'all 0.2s ease',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(250, 204, 21, 0.45)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(250, 204, 21, 0.35)';
                }}
              >
                <span style={{ fontSize: '1.05rem', letterSpacing: '-0.01em', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                  Complete your child's learning profile
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(15, 23, 42, 0.75)' }}>
                  It only takes 30 seconds
                </span>
              </button>
            </div>

            <div style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '12px', 
              maxWidth: '600px',
              alignItems: 'center',
              marginTop: '4px'
            }}>
              <p style={{ 
                fontSize: '0.875rem', 
                color: 'rgba(255, 255, 255, 0.6)', 
                fontWeight: 600, 
                letterSpacing: '0.05em', 
                textTransform: 'uppercase',
                marginBottom: '4px',
                textAlign: 'center'
              }}>
                Communities in the UK that trust us
              </p>

              {/* Row 1 */}
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  { emoji: '🇧🇩', name: 'Bangladesh' },
                  { emoji: '🇮🇳', name: 'India' },
                  { emoji: '🇵🇰', name: 'Pakistan' },
                  { emoji: '🇳🇵', name: 'Nepal' },
                  { emoji: '🇲🇾', name: 'Malaysia' }
                ].map((country, idx) => (
                  <div key={`r1-${idx}`} style={{
                    width: '64px',
                    height: '48px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '16px',
                    backdropFilter: 'blur(10px)',
                    fontSize: '1.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    cursor: 'default',
                    transition: 'all 0.2s ease',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
                  }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                    {country.emoji}
                  </div>
                ))}
              </div>

              {/* Row 2 (UK in Middle) */}
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  { emoji: '🇪🇹', name: 'Ethiopia' },
                  { emoji: '🇺🇬', name: 'Uganda' },
                  { emoji: '🇬🇧', name: 'UK', isCenter: true },
                  { emoji: '🇪🇸', name: 'Spain' },
                  { emoji: '🇸🇴', name: 'Somalia' }
                ].map((country, idx) => (
                  <div key={`r2-${idx}`} style={{
                    width: country.isCenter ? '76px' : '64px',
                    height: country.isCenter ? '56px' : '48px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '16px',
                    backdropFilter: 'blur(10px)',
                    fontSize: country.isCenter ? '2.4rem' : '1.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    cursor: 'default',
                    transition: 'all 0.2s ease',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
                  }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                    {country.emoji}
                  </div>
                ))}
              </div>

              {/* Row 3 */}
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  { emoji: '🇦🇫', name: 'Afghanistan' },
                  { emoji: '🇮🇩', name: 'Indonesia' },
                  { emoji: '🇸🇦', name: 'Saudi Arab' },
                  { emoji: '🇮🇷', name: 'Iran' },
                  { emoji: '🇳🇬', name: 'Nigeria' }
                ].map((country, idx) => (
                  <div key={`r3-${idx}`} style={{
                    width: '64px',
                    height: '48px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '16px',
                    backdropFilter: 'blur(10px)',
                    fontSize: '1.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    cursor: 'default',
                    transition: 'all 0.2s ease',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
                  }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                    {country.emoji}
                  </div>
                ))}
              </div>

              <p style={{ 
                fontSize: '0.875rem', 
                color: 'rgba(255, 255, 255, 0.5)', 
                fontStyle: 'italic',
                marginTop: '4px',
                textAlign: 'center'
              }}>
                and many more
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Modal Popup */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(2, 6, 23, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          boxSizing: 'border-box'
        }}
        onClick={() => setDiagnosticModalOpen(false)}
        >
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '550px',
            maxHeight: '90vh',
            overflowY: 'auto',
            borderRadius: '32px',
            backgroundColor: '#090d1a',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setDiagnosticModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'; }}
            >
              ✕
            </button>
            
            <div style={{ padding: '8px' }}>
              <HeroDiagnosticTest />
            </div>
          </div>
        </div>
      )}

      {/* Grid specific responsive styles */}
      <style>{`
        .hero-section-wrapper {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          padding-top: calc(85px + var(--spacing-8));
          margin-top: -85px;
          padding-bottom: var(--spacing-12);
          overflow: hidden;
        }
        @media (max-width: 767px) {
          .hero-section-wrapper {
            min-height: auto !important;
            padding-top: 100px !important;
            padding-bottom: 16px !important;
          }
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
            gap: var(--spacing-8) !important;
          }
          .hero-diagnostic-mobile-only {
            display: none !important;
          }
        }
        @media (max-width: 1023px) {
          .hero-diagnostic-desktop-only {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
