import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const faqs = [
  { q: "Will online tutoring work for my child?", a: "Yes, our interactive tools and expert tutors ensure an engaging experience that rivals in-person sessions." },
  { q: "How quickly can we expect improvement?", a: "Most parents see a noticeable shift in confidence within 4 weeks, with clear academic improvements by week 8." },
  { q: "Can I monitor progress?", a: "Absolutely. The QLE Dashboard gives you 24/7 access to attendance, confidence scores, and target grade tracking." },
  { q: "How are tutors selected?", a: "We rigorously vet our tutors for subject expertise, teaching ability, and their capacity to build student confidence." },
  { q: "What is included in QLE?", a: "QLE includes lesson recordings, AI summaries, direct tutor chat, and progress dashboards." }
];

export default function FAQPreview() {
  return (
    <section className="section-padding" style={{
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: 'white', marginBottom: 'var(--spacing-6)' }}>
          Frequently Asked Questions
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ 
              padding: 'var(--spacing-4)', 
              background: 'rgba(255,255,255,0.07)', 
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.15)', 
              borderRadius: 'var(--radius-md)' 
            }}>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white', marginBottom: 'var(--spacing-1)' }}>{faq.q}</h4>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)' }}>{faq.a}</p>
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--spacing-6)' }}>
          <Link href="/faq" style={{ textDecoration: 'none' }}>
            <Button variant="outline">View All FAQs</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
