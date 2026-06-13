'use client';

import React from 'react';
import Link from 'next/link';
import styles from './PricingHero.module.css';

export default function PricingHero() {
  return (
    <section className={styles.heroSection} style={{ backgroundColor: '#020617', paddingTop: 'calc(120px + 85px)', paddingBottom: '60px', marginTop: '-85px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative', overflow: 'hidden' }}>
      {/* Background Gradients matching Subjects Hero */}
      <div style={{
        position: 'absolute', top: '0', left: '0', right: '0', bottom: '0',
        background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
        zIndex: 0
      }} />
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

      <div className={`container ${styles.container}`} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%', maxWidth: '850px', margin: '0 auto' }}>
        <div className={styles.content} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <div>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.15em', color: '#60a5fa',
              background: 'rgba(96, 165, 250, 0.1)',
              border: '1px solid rgba(96, 165, 250, 0.2)',
              borderRadius: '100px', padding: '6px 18px',
              marginBottom: '16px'
            }}>Transparent Value</span>
            
            <h1 className={styles.headline} style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 800, 
              color: '#ffffff', 
              letterSpacing: '-0.02em', 
              lineHeight: 1.1, 
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              Invest In Your Child's Future With{' '}
              <span style={{ 
                backgroundColor: '#facc15', 
                color: '#0f172a', 
                padding: '2px 14px 6px', 
                borderRadius: '8px',
                display: 'inline-block',
                lineHeight: '1.1'
              }}>
                Confidence
              </span>
            </h1>
          </div>
          
          <p className={styles.subheadline} style={{ 
            fontSize: '1.15rem', 
            color: 'rgba(255, 255, 255, 0.7)', 
            lineHeight: 1.6, 
            marginBottom: '24px',
            textAlign: 'center',
            maxWidth: '650px'
          }}>
            Personalised tutoring, AI learning tools, lesson recordings, progress tracking, and parent updates — all designed to help your child succeed.
          </p>
          
          <div className={styles.ctaGroup} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/survey" style={{ textDecoration: 'none' }}>
              <button 
                style={{ 
                  padding: '12px 24px', 
                  fontSize: '0.95rem', 
                  backgroundColor: '#0f172a', 
                  color: '#ffffff', 
                  border: '1px solid rgba(255, 255, 255, 0.15)', 
                  borderRadius: 'var(--radius-md)', 
                  fontWeight: 600, 
                  backdropFilter: 'blur(12px)', 
                  cursor: 'pointer', 
                  transition: 'all 0.2s ease', 
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' 
                }} 
                onMouseOver={(e) => { 
                  e.currentTarget.style.backgroundColor = '#1e293b'; 
                  e.currentTarget.style.transform = 'translateY(-2px)'; 
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                }} 
                onMouseOut={(e) => { 
                  e.currentTarget.style.backgroundColor = '#0f172a'; 
                  e.currentTarget.style.transform = 'translateY(0)'; 
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                }}
              >
                Get Learning Profile
              </button>
            </Link>
            <Link href="/consultation" style={{ textDecoration: 'none' }}>
              <button 
                style={{ 
                  padding: '12px 24px', 
                  fontSize: '0.95rem', 
                  backgroundColor: '#0f172a', 
                  color: '#ffffff', 
                  border: '1px solid rgba(255, 255, 255, 0.15)', 
                  borderRadius: 'var(--radius-md)', 
                  fontWeight: 600, 
                  backdropFilter: 'blur(12px)', 
                  cursor: 'pointer', 
                  transition: 'all 0.2s ease', 
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' 
                }} 
                onMouseOver={(e) => { 
                  e.currentTarget.style.backgroundColor = '#1e293b'; 
                  e.currentTarget.style.transform = 'translateY(-2px)'; 
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                }} 
                onMouseOut={(e) => { 
                  e.currentTarget.style.backgroundColor = '#0f172a'; 
                  e.currentTarget.style.transform = 'translateY(0)'; 
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                }}
              >
                Book Free Consultation
              </button>
            </Link>
            <Link href="/book-trial" style={{ textDecoration: 'none' }}>
              <button 
                style={{ 
                  padding: '12px 24px', 
                  fontSize: '0.95rem', 
                  backgroundColor: '#0f172a', 
                  color: '#ffffff', 
                  border: '1px solid rgba(255, 255, 255, 0.15)', 
                  borderRadius: 'var(--radius-md)', 
                  fontWeight: 600, 
                  backdropFilter: 'blur(12px)', 
                  cursor: 'pointer', 
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                }} 
                onMouseOver={(e) => { 
                  e.currentTarget.style.backgroundColor = '#1e293b'; 
                  e.currentTarget.style.transform = 'translateY(-2px)'; 
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                }} 
                onMouseOut={(e) => { 
                  e.currentTarget.style.backgroundColor = '#0f172a'; 
                  e.currentTarget.style.transform = 'translateY(0)'; 
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                }}
              >
                Book A Free Trial
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

