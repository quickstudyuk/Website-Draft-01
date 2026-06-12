'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="section-padding" style={{ 
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      position: 'relative', 
      zIndex: 1,
      paddingTop: 'calc(120px + 85px)',
      paddingBottom: '100px',
      marginTop: '-85px',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      overflow: 'hidden'
    }}>
      {/* Background Gradients matching Subjects Hero */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-5%', width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', right: '-10%', width: '700px', height: '700px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
          
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#60a5fa',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '4px'
          }}>About QuickStudy</span>

          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: 800, 
            color: '#ffffff', 
            lineHeight: 1.1, 
            letterSpacing: '-0.02em',
            margin: 0
          }}>
            A{' '}
            <span style={{ 
              backgroundColor: '#facc15', 
              color: '#0f172a', 
              padding: '2px 14px 6px', 
              borderRadius: '8px',
              display: 'inline-block',
              lineHeight: '1.1'
            }}>
              Smarter
            </span>{' '}
            Way To Support Your Child’s Learning
          </h1>
          
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'rgba(255, 255, 255, 0.7)', 
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '8px auto 16px auto'
          }}>
            QuickStudy is a structured academic support platform combining expert tutoring, personalised learning plans, and AI-powered learning tools to help students improve with confidence.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginTop: '8px' }}>
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
        
        {/* Stats Pills in Glassmorphic capsules */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '60px' }}>
          <div style={{ 
            backgroundColor: 'rgba(9, 17, 36, 0.7)', 
            padding: '14px 28px', 
            borderRadius: '100px', 
            border: '1px solid rgba(255, 255, 255, 0.12)', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            color: 'white',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}>
            <span style={{ color: '#fbbf24', fontSize: '1.25rem', lineHeight: 1 }}>★</span>
            <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>4.9/5</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>average parent rating</span>
          </div>
          
          <div style={{ 
            backgroundColor: 'rgba(9, 17, 36, 0.7)', 
            padding: '14px 28px', 
            borderRadius: '100px', 
            border: '1px solid rgba(255, 255, 255, 0.12)', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            color: 'white',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}>
            <span style={{ color: '#10b981', fontWeight: 800, fontSize: '1.1rem' }}>96%</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>report improvement within 2 months</span>
          </div>
          
          <div style={{ 
            backgroundColor: 'rgba(9, 17, 36, 0.7)', 
            padding: '14px 28px', 
            borderRadius: '100px', 
            border: '1px solid rgba(255, 255, 255, 0.12)', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            color: 'white',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)'
          }}>
            <span style={{ fontSize: '1.2rem' }}>🇬🇧</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Supporting families across the UK from Birmingham</span>
          </div>
        </div>

      </div>
    </section>
  );
}
