'use client';

import React from 'react';
import Link from 'next/link';
import { AnalyticsMetric } from '@/components/dashboard';
import styles from './PricingHero.module.css';

export default function PricingHero() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const statsData = [
    {
      title: "Unbeatable Value",
      metricValue: "£18",
      metricLabel: "Per Session",
      metricTrend: "none" as const,
      desc: "At least 30-40% cheaper than nearest competitors."
    },
    {
      title: "Parent Satisfaction",
      metricValue: "96%",
      metricLabel: "Reported Improvement",
      metricTrend: "up" as const,
      desc: "Within 2 months of joining QuickStudy."
    },
    {
      title: "Quality Support",
      metricValue: "4.9/5",
      metricLabel: "Average Parent Rating",
      metricTrend: "up" as const,
      desc: "Consistent high-quality tutoring."
    },
    {
      title: "Community Service Excellence",
      metricValue: "UK",
      metricLabel: "We proudly serve families from all backgrounds in the UK",
      metricTrend: "none" as const,
      desc: ""
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % statsData.length);
      }, 400);
      setTimeout(() => {
        setAnimating(false);
      }, 800);
    }, 4500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentStat = statsData[currentIndex];

  return (
    <section className={styles.heroSection} style={{ backgroundColor: '#020617', paddingTop: 'calc(120px + 85px)', paddingBottom: '120px', marginTop: '-85px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative', overflow: 'hidden' }}>
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

      <div className={`container ${styles.container}`} style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px' }}>
        <div className={styles.content} style={{ flex: '1 1 500px', maxWidth: '650px' }}>
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
              marginBottom: '24px' 
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
            marginBottom: '40px' 
          }}>
            Personalised tutoring, AI learning tools, lesson recordings, progress tracking, and parent updates — all designed to help your child succeed.
          </p>
          
          <div className={styles.ctaGroup} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/survey" style={{ textDecoration: 'none', flex: '1 1 auto' }}>
              <button 
                style={{ 
                  width: '100%',
                  padding: '14px 24px', 
                  fontSize: '0.95rem', 
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
                Get Learning Profile
              </button>
            </Link>
            <Link href="/consultation" style={{ textDecoration: 'none', flex: '1 1 auto' }}>
              <button 
                style={{ 
                  width: '100%',
                  padding: '14px 24px', 
                  fontSize: '0.95rem', 
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
                Book Free Consultation
              </button>
            </Link>
            <Link href="/book-trial" style={{ textDecoration: 'none', flex: '1 1 auto' }}>
              <button 
                style={{ 
                  width: '100%',
                  padding: '14px 24px', 
                  fontSize: '0.95rem', 
                  backgroundColor: 'rgba(255, 255, 255, 0.04)', 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  border: '1px solid rgba(255, 255, 255, 0.15)', 
                  borderRadius: 'var(--radius-md)', 
                  fontWeight: 600, 
                  backdropFilter: 'blur(12px)', 
                  cursor: 'pointer', 
                  transition: 'all 0.2s ease'
                }} 
                onMouseOver={(e) => { 
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'; 
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-2px)'; 
                }} 
                onMouseOut={(e) => { 
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)'; 
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                  e.currentTarget.style.transform = 'translateY(0)'; 
                }}
              >
                Book A Free Trial
              </button>
            </Link>
          </div>
        </div>
        
        <div className={styles.visuals} style={{ flex: '1 1 400px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '380px', height: '400px' }}>
            
            {/* Card 3 (Deepest Stack) */}
            <div style={{
              position: 'absolute', top: '-20px', right: '-20px', width: '100%', height: '100%',
              background: 'rgba(255, 255, 255, 0.02)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.05)',
              transform: 'scale(0.9)', zIndex: 1
            }} />
            
            {/* Card 2 (Middle Stack) */}
            <div style={{
              position: 'absolute', top: '-10px', right: '-10px', width: '100%', height: '100%',
              background: 'rgba(255, 255, 255, 0.03)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.08)',
              transform: 'scale(0.95)', zIndex: 2
            }} />
            
            {/* Card 1 (Active Card) */}
            <div style={{
              position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
              background: 'rgba(9, 17, 36, 0.9)', border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '24px', padding: '32px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(12px)', zIndex: 3,
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateY(10px)' : 'translateY(0)'
            }}>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 800, marginBottom: '24px', textAlign: 'center' }}>{currentStat.title}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'calc(100% - 60px)' }}>
                {currentStat.title === "Community Service Excellence" ? (
                  <div style={{ fontSize: '2.5rem', marginBottom: '16px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', padding: '0 20px', lineHeight: 1.2 }}>
                    {["🇧🇩", "🇮🇳", "🇵🇰", "🇸🇴", "🇪🇹", "🇦🇫", "🇮🇷", "🇨🇳", "🇲🇾", "🇸🇦", "🌍", "🇬🇧"].map((flag, i) => (
                      <span key={i}>{flag}</span>
                    ))}
                  </div>
                ) : (
                  <AnalyticsMetric 
                    value={currentStat.metricValue} 
                    label="" 
                    trend={currentStat.metricTrend === 'none' ? undefined : currentStat.metricTrend as any} 
                    valueStyle={{ color: '#4ade80', fontSize: '3.5rem', fontWeight: 800, lineHeight: 1 }} 
                    labelStyle={{ display: 'none' }} 
                  />
                )}
                
                <p style={{ color: '#38bdf8', fontSize: '1.1rem', fontWeight: 700, marginTop: '16px', textAlign: 'center' }}>
                  {currentStat.metricLabel}
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', textAlign: 'center', marginTop: '8px' }}>
                  {currentStat.desc}
                </p>
              </div>
            </div>
            
          </div>
          
          {/* Dynamic Scrollable Navigation Dots */}
          <div style={{
            position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: '8px', zIndex: 20
          }}>
            {statsData.map((stat, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index !== currentIndex && !animating) {
                    setAnimating(true);
                    setTimeout(() => setCurrentIndex(index), 400);
                    setTimeout(() => setAnimating(false), 800);
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
                title={stat.title}
                aria-label={`Go to ${stat.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
