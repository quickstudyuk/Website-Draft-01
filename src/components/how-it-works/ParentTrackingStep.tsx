import React from 'react';
import { BaseCard } from '@/components/ui/cards';

const features = [
  "Attendance & scheduling",
  "AI lesson summaries",
  "Direct tutor feedback",
  "Progress graph updates",
  "Weekly learning insights"
];

export default function ParentTrackingStep() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#0f172a', position: 'relative', overflow: 'hidden' }}>
      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-10%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-6)', alignItems: 'center' }}>
          
          <div style={{ order: 1 }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.15em', color: '#60a5fa',
              background: 'rgba(96, 165, 250, 0.1)',
              border: '1px solid rgba(96, 165, 250, 0.2)',
              borderRadius: '100px', padding: '6px 18px',
              marginBottom: '16px'
            }}>Step 6: Transparency</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: 'var(--spacing-3)' }}>
              Always Know How Your Child Is Progressing
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: 'var(--spacing-4)' }}>
              No guesswork. Full transparency. Parents have continuous access to their child's learning data.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
              {features.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.05rem', color: 'white', fontWeight: 600 }}>
                  <span style={{ color: '#38bdf8', fontSize: '1.2rem' }}>✓</span> {feature}
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ order: 2 }}>
             <div style={{ backgroundColor: 'rgba(9, 17, 36, 0.95)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '24px', padding: 'var(--spacing-6)', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-4)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: 'var(--spacing-3)' }}>
                 <div style={{ fontWeight: 700, color: 'white' }}>Mathematics Progress</div>
                 <div style={{ color: '#38bdf8', fontWeight: 800 }}>84%</div>
               </div>
               <div style={{ height: '150px', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', display: 'flex', alignItems: 'flex-end', padding: 'var(--spacing-3)', gap: '8px' }}>
                 {[40, 50, 45, 60, 75, 70, 84].map((height, i) => (
                   <div key={i} style={{ flex: 1, backgroundColor: i === 6 ? '#38bdf8' : 'rgba(56, 189, 248, 0.2)', height: `${height}%`, borderRadius: '4px 4px 0 0', opacity: i === 6 ? 1 : 0.6 }} />
                 ))}
               </div>
               <div style={{ marginTop: 'var(--spacing-4)', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.5)', textAlign: 'center' }}>
                 Target Grade: 5 → 7
               </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
