import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function HowItWorksCTA() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'white', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--foreground)', marginBottom: 'var(--spacing-4)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          Start With Clarity About Your Child’s Learning Needs
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--gray-600)', marginBottom: 'var(--spacing-6)' }}>
          Begin with a personalised Learning Profile and choose the support path that suits your family best.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', alignItems: 'center', justifyContent: 'center' }}>
          <Link href="/survey" style={{ textDecoration: 'none', width: '100%', maxWidth: '400px' }}>
            <Button size="lg" fullWidth style={{ boxShadow: '0 8px 20px rgba(30, 58, 138, 0.2)' }}>
              Get Your Child’s Learning Profile
            </Button>
          </Link>
          <Link href="/consultation" style={{ textDecoration: 'none', width: '100%', maxWidth: '400px' }}>
            <Button size="lg" variant="outline" fullWidth>
              Book Free Parent Consultation
            </Button>
          </Link>
          <Link href="/book-trial" style={{ textDecoration: 'none', width: '100%', maxWidth: '400px' }}>
            <Button size="lg" variant="outline" fullWidth style={{ backgroundColor: 'var(--gray-50)' }}>
              Book Free Trial Lesson
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
