import React from 'react';
import { LessonCard } from '@/components/dashboard';
import styles from './AISummaries.module.css';

export default function AISummaries() {
  return (
    <section className="section-padding" style={{
      background: 'transparent',
      position: 'relative'
    }}>
      {/* Abstract geometric decorations */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-8%',
        width: '450px', height: '450px', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-5%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)',
        zIndex: 0
      }} />


      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className={styles.headline} style={{ color: 'white' }}>Understand Every Lesson In Seconds</h2>
        
        <div className={styles.splitLayout}>
          <div className={styles.leftPanel}>
            <div className={styles.dashboardMockupLeft}>
              <div className={styles.mockupHeader}>
                <div className={styles.dots}>
                  <span className={styles.dot} style={{ backgroundColor: '#ff5f56' }} />
                  <span className={styles.dot} style={{ backgroundColor: '#ffbd2e' }} />
                  <span className={styles.dot} style={{ backgroundColor: '#27c93f' }} />
                </div>
                <span className={styles.mockupTitle}>QuickStudy Video Lesson Player</span>
              </div>
              <div className={styles.mockupBody}>
                <LessonCard title="Mathematics: Quadratic Equations" duration="Duration: 55 mins" thumbnailUrl="/quadratic_maths.png" />
                <div className={styles.playerControls}>
                  <div className={styles.playBar}>
                    <div className={styles.playProgress} />
                  </div>
                  <div className={styles.controlsRow}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {/* Play SVG Icon */}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--gray-800)" style={{ cursor: 'pointer' }}>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', fontWeight: 700, color: 'rgba(255,255,255,0.75)' }}>24:45 / 55:00</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {/* Settings Gear Icon */}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gray-700)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}>
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                      {/* Fullscreen Expand Icon */}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gray-700)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}>
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.benefitText} style={{ color: 'rgba(255,255,255,0.8)' }}>
              <strong style={{ color: '#38bdf8' }}>Parents stay informed</strong> without watching a full lesson.
            </p>
          </div>
          
          <div className={styles.rightPanel}>
            <div className={styles.dashboardMockupRight}>
              <div className={styles.mockupHeader}>
                <div className={styles.dots}>
                  <span className={styles.dot} style={{ backgroundColor: '#ff5f56' }} />
                  <span className={styles.dot} style={{ backgroundColor: '#ffbd2e' }} />
                  <span className={styles.dot} style={{ backgroundColor: '#27c93f' }} />
                </div>
                <span className={styles.mockupTitle}>QuickStudy AI Report Summary</span>
              </div>
              <div className={styles.mockupBody}>
                <div style={{ width: '100%' }}>
                  <div className={styles.summaryHeaderInside}>
                    <h3 style={{ margin: 0, fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.05em' }}>
                      AI Summaries
                    </h3>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', fontWeight: 600 }}>Generated by QLE</span>
                  </div>
                  
                  <div style={{ marginTop: '16px' }}>
                    <span style={{
                      display: 'inline-block',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      backgroundColor: 'var(--primary-light)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      marginBottom: '12px'
                    }}>
                      Algebra (Quadratic Equations)
                    </span>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div>
                        <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                          Strengths
                        </span>
                        <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, fontWeight: 600 }}>
                          Strong understanding of factorisation.
                        </span>
                      </div>

                      <div>
                        <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                          Needs Attention
                        </span>
                        <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, fontWeight: 600 }}>
                          Completing the square.
                        </span>
                      </div>

                      <div>
                        <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: 'var(--gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                          Recommended Revision
                        </span>
                        <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, fontWeight: 600 }}>
                          Questions 12–20.
                        </span>
                      </div>

                      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px', marginTop: '4px' }}>
                        <span style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
                          Next Lesson
                        </span>
                        <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, fontWeight: 600 }}>
                          Quadratic graphs.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.benefitText} style={{ color: 'rgba(255,255,255,0.8)' }}>
              <strong style={{ color: '#38bdf8' }}>Students always know</strong> their next steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
