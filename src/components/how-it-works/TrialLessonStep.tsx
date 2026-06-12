import React from 'react';
import { BaseCard } from '@/components/ui/cards';

const features = [
  "Live 1:1 tutoring session",
  "Structured teaching approach",
  "Introduction to QLE tools",
  "Real academic support on a difficult topic"
];

export default function TrialLessonStep() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'white', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-8)' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.15em', color: '#1e3a8a',
              background: 'rgba(30, 58, 138, 0.08)',
              border: '1px solid rgba(30, 58, 138, 0.2)',
              borderRadius: '100px', padding: '6px 18px',
              marginBottom: '16px'
            }}>Step 3: Trial</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
              Experience A Real QuickStudy Lesson
            </h2>
            <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '650px', margin: '12px auto 0 auto', lineHeight: 1.6 }}>
              This is a real learning session, not a demo. Students can join a free trial lesson to experience:
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-3)' }}>
            {features.map((feature, idx) => (
              <div key={idx} style={{ 
                padding: 'var(--spacing-4)', 
                backgroundColor: 'rgba(9, 17, 36, 0.95)', 
                border: '1px solid rgba(255, 255, 255, 0.15)', 
                textAlign: 'center', color: 'white',
                borderRadius: '16px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
              }}>
                <span style={{ fontSize: '1.05rem', fontWeight: 600 }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
