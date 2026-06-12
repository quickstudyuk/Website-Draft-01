import React from 'react';
import { BaseCard } from '@/components/ui/cards';

const reasons = [
  "Personalised Support",
  "Progress Tracking",
  "Affordable Pricing",
  "Flexible Scheduling",
  "Expert Tutors",
  "AI Learning Tools",
  "Transparent Communication"
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-10)' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#1e3a8a',
            background: 'rgba(30, 58, 138, 0.08)',
            border: '1px solid rgba(30, 58, 138, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>The QuickStudy Difference</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
            Why Parents Choose QuickStudy
          </h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '650px', margin: '12px auto 0 auto', lineHeight: 1.6 }}>
            The perfect blend of expert human tutoring and advanced AI tools to guarantee your child's success.
          </p>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
          {reasons.map((reason, idx) => (
            <div key={idx} style={{ 
              padding: '16px 32px', 
              borderRadius: '100px', 
              backgroundColor: 'rgba(9, 17, 36, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'transform 0.2s ease, border-color 0.2s ease'
            }}>
              <span style={{ color: '#38bdf8', fontSize: '1.25rem', lineHeight: 1 }}>✓</span>
              <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white' }}>
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
