'use client';

import React from 'react';
import Link from 'next/link';
import { AnalyticsMetric } from '@/components/dashboard';
import styles from './SubjectsHero.module.css';

const pathwayData = [
  {
    title: "Mathematics Pathway",
    step1Title: "Diagnostic",
    step1Desc: "Identify knowledge gaps in Algebra.",
    step2Title: "Weekly Mentoring",
    step2Desc: "Targeted problem-solving practice.",
    step3Title: "Confidence Built",
    metricValue: "84%",
    metricLabel: "Topic Mastery",
    metricTrend: "up" as const
  },
  {
    title: "Physics Pathway",
    step1Title: "Concept Check",
    step1Desc: "Identify gaps in mechanics & energy.",
    step2Title: "Structured Practice",
    step2Desc: "Mastering equations & problem solving.",
    step3Title: "Exam Ready",
    metricValue: "88%",
    metricLabel: "Problem Solving Speed",
    metricTrend: "up" as const
  },
  {
    title: "English Pathway",
    step1Title: "Writing Assessment",
    step1Desc: "Analyse essay structure & expression.",
    step2Title: "Weekly Coaching",
    step2Desc: "Active comprehension & essay planning.",
    step3Title: "Fluent Expression",
    metricValue: "92%",
    metricLabel: "Essay Writing Marks",
    metricTrend: "up" as const
  },
  {
    title: "Biology Pathway",
    step1Title: "Diagnostic Quiz",
    step1Desc: "Identify gaps in cell biology & ecology.",
    step2Title: "Active Recall",
    step2Desc: "Spaced repetition of biological processes.",
    step3Title: "Knowledge Secured",
    metricValue: "87%",
    metricLabel: "Terminology Precision",
    metricTrend: "up" as const
  },
  {
    title: "Chemistry Pathway",
    step1Title: "Formula Audit",
    step1Desc: "Check understanding of bonding & moles.",
    step2Title: "Step-by-Step Guidance",
    step2Desc: "Practice chemical equation balancing.",
    step3Title: "Concepts Mastered",
    metricValue: "85%",
    metricLabel: "Equation Accuracy",
    metricTrend: "up" as const
  },
  {
    title: "Combined Sciences Pathway",
    step1Title: "General Science Audit",
    step1Desc: "Map core Biology, Chemistry & Physics gaps.",
    step2Title: "All-Round Mentoring",
    step2Desc: "Dual-science syllabus coverage & exam prep.",
    step3Title: "Integrated Success",
    metricValue: "90%",
    metricLabel: "Double Award Prediction",
    metricTrend: "up" as const
  }
];

export default function SubjectsHero() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      // Wait 400ms (midpoint of 800ms cardFlip animation) to swap content
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % pathwayData.length);
      }, 400);

      // Animation complete after 800ms
      setTimeout(() => {
        setAnimating(false);
      }, 800);
    }, 4500); // Cycles every 4.5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentPathway = pathwayData[currentIndex];

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div>
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
        
        <div className={styles.visuals}>
          <div className={styles.cardStack}>
            {/* Card 3 (Deepest Stack) */}
            <div className={styles.stackCard3} />
            
            {/* Card 2 (Middle Stack) */}
            <div className={styles.stackCard2} />
            
            {/* Card 1 (Active Card) */}
            <div className={`${styles.mockupContainer} ${styles.activeCard} ${animating ? styles.animating : ''}`}>
              <div className={styles.pathwayCard}>
                <h3 className={styles.pathwayTitle} style={{ color: '#ffffff' }}>{currentPathway.title}</h3>
                <div className={styles.pathwaySteps}>
                  <div className={styles.step}>
                    <div className={styles.stepDot} style={{ color: 'rgba(255, 255, 255, 0.8)', borderColor: 'rgba(255, 255, 255, 0.3)' }}>1</div>
                    <div className={styles.stepInfo}>
                      <h4 style={{ color: '#ffffff' }}>{currentPathway.step1Title}</h4>
                      <p style={{ color: '#ffffff', opacity: 0.9 }}>{currentPathway.step1Desc}</p>
                    </div>
                  </div>
                  <div className={styles.stepLine} style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />
                  <div className={styles.step}>
                    <div className={styles.stepDot} style={{ color: 'rgba(255, 255, 255, 0.8)', borderColor: 'rgba(255, 255, 255, 0.3)' }}>2</div>
                    <div className={styles.stepInfo}>
                      <h4 style={{ color: '#ffffff' }}>{currentPathway.step2Title}</h4>
                      <p style={{ color: '#ffffff', opacity: 0.9 }}>{currentPathway.step2Desc}</p>
                    </div>
                  </div>
                  <div className={styles.stepLine} style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />
                  <div className={styles.step}>
                    <div className={styles.stepDotActive}>3</div>
                    <div className={styles.stepInfo}>
                      <h4 style={{ color: '#ffffff', marginBottom: '8px' }}>{currentPathway.step3Title}</h4>
                      <AnalyticsMetric 
                        value={currentPathway.metricValue} 
                        label={currentPathway.metricLabel} 
                        trend={currentPathway.metricTrend} 
                        valueStyle={{ color: '#4ade80' }} 
                        labelStyle={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem' }} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Scrollable Navigation Dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '28px',
            position: 'relative',
            zIndex: 20
          }}>
            {pathwayData.map((pathway, index) => (
              <button
                key={index}
                onMouseEnter={() => {
                  if (index !== currentIndex && !animating) {
                    setAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                    }, 400);
                    setTimeout(() => {
                      setAnimating(false);
                    }, 800);
                  }
                }}
                onClick={() => {
                  if (index !== currentIndex && !animating) {
                    setAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                    }, 400);
                    setTimeout(() => {
                      setAnimating(false);
                    }, 800);
                  }
                }}
                style={{
                  width: index === currentIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: index === currentIndex ? '#60a5fa' : 'rgba(255, 255, 255, 0.3)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: index === currentIndex ? '0 0 8px rgba(96, 165, 250, 0.6)' : 'none'
                }}
                title={pathway.title}
                aria-label={`Go to ${pathway.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
