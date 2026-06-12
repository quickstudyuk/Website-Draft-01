import React from 'react';
import { BaseCard } from '@/components/ui/cards';

const differences = [
  { title: "Structured Learning Plans", desc: "Clear academic roadmap for every child" },
  { title: "Lesson Recordings", desc: "Every lesson is saved for revision" },
  { title: "AI Learning Support", desc: "Summaries, quizzes, and revision tools" },
  { title: "Parent Transparency", desc: "Full visibility into learning and progress" },
  { title: "Expert Tutors", desc: "Focused on understanding and confidence building" }
];

export default function QuickStudyDifference() {
  return (
    <section className="section-padding" style={{ 
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: 'white', marginBottom: 'var(--spacing-6)' }}>
          Why Parents Choose QuickStudy
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-4)' }}>
          {differences.map((item, idx) => (
            <BaseCard key={idx} style={{ 
              padding: 'var(--spacing-4)', 
              background: 'rgba(255,255,255,0.07)', 
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.15)' 
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#38bdf8', marginBottom: '8px' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                {item.desc}
              </p>
            </BaseCard>
          ))}
        </div>
      </div>
    </section>
  );
}
