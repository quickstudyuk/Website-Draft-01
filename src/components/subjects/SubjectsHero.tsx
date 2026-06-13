'use client';

import React from 'react';
import Link from 'next/link';
import styles from './SubjectsHero.module.css';

export default function SubjectsHero() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div style={{ textAlign: 'center' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.15em', color: '#60a5fa',
              background: 'rgba(96, 165, 250, 0.1)',
              border: '1px solid rgba(96, 165, 250, 0.2)',
              borderRadius: '100px', padding: '6px 18px',
              marginBottom: '16px'
            }}>Subject Support</span>
            <h1 className={styles.headline}>
              Support Where Your Child{' '}
              <span style={{ 
                backgroundColor: '#facc15', 
                color: '#0f172a', 
                padding: '2px 14px 6px', 
                borderRadius: '8px',
                display: 'inline-block',
                lineHeight: '1.1'
              }}>
                Needs
              </span>{' '}
              It Most
            </h1>
          </div>
          <p className={styles.subheadline}>
            From building confidence in Mathematics to preparing for GCSEs and A Levels, QuickStudy provides personalised support tailored to every student's needs.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/consultation" style={{ textDecoration: 'none' }}>
              <button 
                style={{ 
                  padding: '14px 28px', 
                  fontSize: '1rem', 
                  backgroundColor: 'rgba(56, 189, 248, 0.15)', 
                  color: 'white', 
                  border: '1px solid rgba(56, 189, 248, 0.4)', 
                  borderRadius: 'var(--radius-md)', 
                  fontWeight: 600, 
                  backdropFilter: 'blur(12px)', 
                  cursor: 'pointer', 
                  transition: 'all 0.2s ease', 
                  boxShadow: '0 4px 15px rgba(56, 189, 248, 0.15)' 
                }} 
                onMouseOver={(e) => { 
                  e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.25)'; 
                  e.currentTarget.style.transform = 'translateY(-2px)'; 
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(56, 189, 248, 0.25)';
                }} 
                onMouseOut={(e) => { 
                  e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.15)'; 
                  e.currentTarget.style.transform = 'translateY(0)'; 
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(56, 189, 248, 0.15)';
                }}
              >
                Book Free Consultation
              </button>
            </Link>
            <Link href="/book-trial" style={{ textDecoration: 'none' }}>
              <button 
                style={{ 
                  padding: '14px 28px', 
                  fontSize: '1rem', 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                  color: 'white', 
                  border: '1px solid rgba(255, 255, 255, 0.3)', 
                  borderRadius: 'var(--radius-md)', 
                  fontWeight: 600, 
                  backdropFilter: 'blur(12px)', 
                  cursor: 'pointer', 
                  transition: 'all 0.2s ease', 
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
                }} 
                onMouseOver={(e) => { 
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; 
                  e.currentTarget.style.transform = 'translateY(-2px)'; 
                }} 
                onMouseOut={(e) => { 
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; 
                  e.currentTarget.style.transform = 'translateY(0)'; 
                }}
              >
                Book A Free Trial Lesson
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

