import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function FinalCTA() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--primary)', color: 'white', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '800px', padding: 'var(--spacing-6) 0' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: 'var(--spacing-4)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Ready To See What Your Child Could Achieve?
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: 'var(--spacing-6)' }}>
          Start with a personalised Learning Profile and discover a clear path forward.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', alignItems: 'center', justifyContent: 'center' }}>
          <Link href="/survey" style={{ textDecoration: 'none', width: '100%', maxWidth: '400px' }}>
            <Button size="lg" fullWidth style={{ backgroundColor: 'white', color: 'var(--primary)', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
              Get Your Child's Learning Profile
            </Button>
          </Link>
          <Link href="/book-trial" style={{ textDecoration: 'none', width: '100%', maxWidth: '400px' }}>
            <Button size="lg" variant="outline" fullWidth style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              Book A Free Trial Lesson
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
