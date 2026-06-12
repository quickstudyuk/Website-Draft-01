import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function PricingPreview() {
  return (
    <section className="section-padding" style={{ 
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: 'white' }}>
          High-Quality Support Without Premium Pricing
        </h2>
        
        <div style={{ 
          marginTop: 'var(--spacing-6)', 
          background: 'rgba(255,255,255,0.07)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: 'var(--spacing-6)', 
          borderRadius: 'var(--radius-xl)', 
          border: '1px solid rgba(255,255,255,0.15)', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)' 
        }}>
          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Flat Rate</div>
          <div style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', fontWeight: 800, color: '#38bdf8', lineHeight: 1 }}>£18</div>
          <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginBottom: 'var(--spacing-4)' }}>Per Session</div>
          
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', alignItems: 'center', marginBottom: 'var(--spacing-6)', color: 'rgba(255,255,255,0.8)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--success)' }}>✓</span> Personalised lessons</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--success)' }}>✓</span> QLE access</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--success)' }}>✓</span> AI summaries</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--success)' }}>✓</span> Progress tracking</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: 'var(--success)' }}>✓</span> Parent communication</li>
          </ul>
          
          <Link href="/pricing" style={{ textDecoration: 'none' }}>
            <Button size="lg" fullWidth style={{ maxWidth: '300px' }}>View Pricing</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
