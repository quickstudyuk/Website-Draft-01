'use client';

import React from 'react';
import Link from 'next/link';
import HeroDiagnosticTest from './HeroDiagnosticTest';

export default function HeroSection() {
  return (
    <section style={{ 
      position: 'relative', 
      minHeight: '85vh', 
      display: 'flex', 
      alignItems: 'center', 
      paddingTop: 'calc(85px + var(--spacing-8))', 
      marginTop: '-85px',
      paddingBottom: 'var(--spacing-12)',
      overflow: 'hidden' 
    }}>
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
              <span style={{ 
                backgroundColor: '#facc15', 
                color: '#0f172a', 
                padding: '4px 14px 8px', 
                borderRadius: '8px',
                display: 'inline-block',
                marginBottom: '6px'
              }}>From Struggles</span>
              <br />
              <span style={{ 
                backgroundColor: '#facc15', 
                color: '#0f172a', 
                padding: '4px 14px 8px', 
                borderRadius: '8px',
                display: 'inline-block',
                marginBottom: '10px'
              }}>to Success</span>
              <br />
              <span style={{ display: 'block' }}>We Make It Simple</span>
              <span style={{ display: 'block' }}>For Every Student.</span>
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', 
              color: 'rgba(255,255,255,0.7)', 
              lineHeight: 1.5,
              marginBottom: 'var(--spacing-6)',
              maxWidth: '90%'
            }}>
              Personalised tutoring, regular parent updates, AI-driven insights, and structured learning plans designed to help students from all backgrounds starting from Year 7 to A-Level achieve their full potential.
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
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <HeroDiagnosticTest />
              <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#38bdf8', textAlign: 'center', margin: 0 }}>
                Take our 60-second test to understand your child's learning profile.
              </p>
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

      {/* Grid specific responsive styles */}
      <style>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
            gap: var(--spacing-8) !important;
          }
        }
      `}</style>
    </section>
  );
}
