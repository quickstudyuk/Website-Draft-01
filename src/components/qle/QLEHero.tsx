'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { LessonCard } from '@/components/dashboard';
import { DashboardCard } from '@/components/ui/cards';
import styles from './QLEHero.module.css';

export default function QLEHero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [showDashboardMobile, setShowDashboardMobile] = useState(false);

  const scrollToDiagnostic = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('diagnostic-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Meet The QuickStudy{' '}
            <span style={{ 
              backgroundColor: '#facc15', 
              color: '#0f172a', 
              padding: '2px 14px 6px', 
              borderRadius: '8px',
              display: 'inline-block',
              lineHeight: '1.1',
              marginRight: '8px',
              marginBottom: '6px'
            }}>
              Learning
            </span>{' '}
            <span style={{ 
              backgroundColor: '#facc15', 
              color: '#0f172a', 
              padding: '2px 14px 6px', 
              borderRadius: '8px',
              display: 'inline-block',
              lineHeight: '1.1',
              marginBottom: '6px'
            }}>
              Environment
            </span>
          </h1>
          <p className={styles.subheadline}>
            A complete learning platform designed to help students stay organised, revise effectively, and continuously improve while keeping parents fully informed.
          </p>

          {/* YouTube Video Explainer Button */}
          <div style={{ marginTop: '8px', marginBottom: '8px' }}>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 24px',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1.5px solid rgba(56, 189, 248, 0.4)',
                borderRadius: '9999px',
                color: '#38bdf8',
                fontSize: '0.9rem',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(56, 189, 248, 0.1)',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(56, 189, 248, 0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>▶</span> 2-Min Video Explains Everything About QLE
            </button>
          </div>

          <div className={styles.ctaGroup}>
            <a href="#diagnostic-section" onClick={scrollToDiagnostic} style={{ textDecoration: 'none' }}>
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
                Start Your Learning Profile
              </button>
            </a>
            <Link href="/consultation" style={{ textDecoration: 'none' }}>
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
                Book Free Consultation
              </button>
            </Link>
          </div>
        </div>
        
        <div className={styles.visuals}>
          {/* 1. Mobile Dashboard Toggle / Collapse Container */}
          <div className={styles.mobileDashboardContainer}>
            {!showDashboardMobile ? (
              <button 
                onClick={() => setShowDashboardMobile(true)}
                className={styles.viewDashboardBtn}
              >
                View Sample QLE Dashboard
              </button>
            ) : (
              <div 
                onClick={() => setShowDashboardMobile(false)}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.dashboardMockup}>
                  <div className={styles.mockupHeader}>
                    <div className={styles.dots}>
                      <span className={styles.dot} style={{ backgroundColor: '#ff5f56' }} />
                      <span className={styles.dot} style={{ backgroundColor: '#ffbd2e' }} />
                      <span className={styles.dot} style={{ backgroundColor: '#27c93f' }} />
                    </div>
                    <span className={styles.mockupTitle}>QuickStudy QLE Dashboard</span>
                  </div>
                  <div className={styles.mockupBody}>
                    <div className={styles.mainContent}>
                      <h4 className={styles.sectionTitle}>Recent Lessons</h4>
                      <div className={styles.lessonGrid}>
                        <LessonCard title="Mathematics: Algebra" duration="Duration: 56 mins" thumbnailUrl="/tutor_qle_1.png" />
                        <LessonCard title="Physics: Forces" duration="Duration: 45 mins" thumbnailUrl="/tutor_qle_2.png" />
                      </div>
                      <h4 className={styles.sectionTitle} style={{ marginTop: 'var(--spacing-4)' }}>Performance</h4>
                      <div className={styles.metricsGrid}>
                        <DashboardCard title="Attendance" value="100%" />
                        <DashboardCard title="Target Grade" value="7" icon="📈" />
                      </div>
                    </div>
                    <div className={styles.sideBar}>
                      <h4 className={styles.sectionTitle}>AI Summaries</h4>
                      <div className={styles.summaryCard}>
                        <span className={styles.summaryTopic}>Algebra</span>
                        <p className={styles.summaryText}>Excellent understanding of substitution. Needs work on expansion.</p>
                      </div>
                      
                      <h4 className={styles.sectionTitle} style={{ marginTop: 'var(--spacing-4)' }}>Learning Tools</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>
                          <span>📅</span> Lesson Schedule
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>
                          <span>📝</span> Assignments
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>
                          <span>📚</span> Notes & Guides
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>
                          <span>🎥</span> Past Recordings
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setShowDashboardMobile(false)}
                  className={styles.hideDashboardBtn}
                >
                  Hide Sample QLE Dashboard
                </button>
              </div>
            )}
          </div>

          {/* 2. Desktop Dashboard Container */}
          <div className={styles.desktopDashboardContainer}>
            <div className={styles.dashboardMockup}>
              <div className={styles.mockupHeader}>
                <div className={styles.dots}>
                  <span className={styles.dot} style={{ backgroundColor: '#ff5f56' }} />
                  <span className={styles.dot} style={{ backgroundColor: '#ffbd2e' }} />
                  <span className={styles.dot} style={{ backgroundColor: '#27c93f' }} />
                </div>
                <span className={styles.mockupTitle}>QuickStudy QLE Dashboard</span>
              </div>
              <div className={styles.mockupBody}>
                <div className={styles.mainContent}>
                  <h4 className={styles.sectionTitle}>Recent Lessons</h4>
                  <div className={styles.lessonGrid}>
                    <LessonCard title="Mathematics: Algebra" duration="Duration: 56 mins" thumbnailUrl="/tutor_qle_1.png" />
                    <LessonCard title="Physics: Forces" duration="Duration: 45 mins" thumbnailUrl="/tutor_qle_2.png" />
                  </div>
                  <h4 className={styles.sectionTitle} style={{ marginTop: 'var(--spacing-4)' }}>Performance</h4>
                  <div className={styles.metricsGrid}>
                    <DashboardCard title="Attendance" value="100%" />
                    <DashboardCard title="Target Grade" value="7" icon="📈" />
                  </div>
                </div>
                <div className={styles.sideBar}>
                  <h4 className={styles.sectionTitle}>AI Summaries</h4>
                  <div className={styles.summaryCard}>
                    <span className={styles.summaryTopic}>Algebra</span>
                    <p className={styles.summaryText}>Excellent understanding of substitution. Needs work on expansion.</p>
                  </div>
                  
                  <h4 className={styles.sectionTitle} style={{ marginTop: 'var(--spacing-4)' }}>Learning Tools</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>
                      <span>📅</span> Lesson Schedule
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>
                      <span>📝</span> Assignments
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>
                      <span>📚</span> Notes & Guides
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)' }}>
                      <span>🎥</span> Past Recordings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video Modal Popup */}
      {isVideoModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: '800px',
              aspectRatio: '16/9',
              backgroundColor: '#000000',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
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
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'; }}
            >
              ✕
            </button>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/QWCpJKIwZVQ?autoplay=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              style={{ width: '100%', height: '100%', display: 'block' }}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
