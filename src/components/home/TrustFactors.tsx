import React from 'react';
import { BaseCard } from '@/components/ui/cards';

const factors = [
  { title: 'Transparent Lesson Recordings', desc: 'Parents Know What Is Being Taught' },
  { title: 'AI Lesson Summaries', desc: 'Stay Updated Without Watching Full Lessons' },
  { title: 'Progress Tracking', desc: 'Clear Visibility Of Improvement' },
  { title: 'Affordable Pricing', desc: 'Accessible Support For Families' },
  { title: 'Expert Mentors', desc: 'Focused On Confidence And Results' }
];

export default function TrustFactors() {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--foreground)', marginBottom: 'var(--spacing-6)' }}>
          Why Parents Choose QuickStudy
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-4)' }}>
          {factors.map((factor, idx) => (
            <BaseCard key={idx} style={{ textAlign: 'center', padding: 'var(--spacing-5)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 'var(--spacing-2)' }}>
                {factor.title}
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--gray-700)' }}>
                {factor.desc}
              </p>
            </BaseCard>
          ))}
        </div>
      </div>
    </section>
  );
}
