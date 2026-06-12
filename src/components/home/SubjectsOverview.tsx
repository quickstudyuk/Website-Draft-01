import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { InteractiveCard } from '@/components/ui/cards';

const subjects = [
  { title: 'Mathematics', desc: 'Build foundational skills and tackle complex problem solving.' },
  { title: 'English', desc: 'Enhance comprehension, analytical writing, and communication.' },
  { title: 'Biology', desc: 'Master life sciences with active recall and structured diagrams.' },
  { title: 'Chemistry', desc: 'Understand chemical reactions, formulas, and practical applications.' },
  { title: 'Physics', desc: 'Simplify complex formulas and theoretical concepts.' },
  { title: 'GCSE Preparation', desc: 'Intensive exam technique and comprehensive syllabus coverage.' },
  { title: 'A-Level Preparation', desc: 'Advanced mentoring for university-level readiness.' }
];

export default function SubjectsOverview() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--gray-50)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--foreground)', marginBottom: 'var(--spacing-6)' }}>
          Support Across Key Subjects
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-4)' }}>
          {subjects.map((sub, idx) => (
            <InteractiveCard key={idx}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--foreground)', marginBottom: 'var(--spacing-2)' }}>
                {sub.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--gray-600)' }}>
                {sub.desc}
              </p>
            </InteractiveCard>
          ))}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--spacing-6)' }}>
          <Link href="/subjects" style={{ textDecoration: 'none' }}>
            <Button size="lg" variant="outline">Explore Subjects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
