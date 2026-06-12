import React from 'react';
import { InteractiveCard } from '@/components/ui/cards';

export default function LearningExamples() {
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

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-10)' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.15em', color: '#60a5fa',
            background: 'rgba(96, 165, 250, 0.1)',
            border: '1px solid rgba(96, 165, 250, 0.2)',
            borderRadius: '100px', padding: '6px 18px',
            marginBottom: '16px'
          }}>Inside QLE</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', margin: 0 }}>
            Realistic Learning Examples
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '650px', margin: '12px auto 0 auto', lineHeight: 1.6 }}>
            See exactly how our AI-powered environment enhances the traditional tutoring experience.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-6)', maxWidth: '1100px', margin: '0 auto' }}>
          
          <div style={{ 
            backgroundColor: 'rgba(9, 17, 36, 0.95)', 
            borderRadius: '24px', 
            padding: 'var(--spacing-6) var(--spacing-5)', 
            boxShadow: '0 15px 35px rgba(0,0,0,0.3)', 
            border: '1px solid rgba(255, 255, 255, 0.15)' 
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: 'var(--spacing-3)', marginBottom: 'var(--spacing-3)' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'white' }}>Mathematics Lesson Summary</h3>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8', backgroundColor: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)', padding: '4px 8px', borderRadius: '100px' }}>AI Generated</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase' }}>Topic:</span>
                <div style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>Simultaneous Equations</div>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4ade80', textTransform: 'uppercase' }}>Strength:</span>
                <div style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>Excellent substitution skills.</div>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase' }}>Needs Attention:</span>
                <div style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>Word problems.</div>
              </div>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: 'var(--spacing-3)' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#60a5fa', textTransform: 'uppercase' }}>Next Lesson:</span>
                <div style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>Graphical methods.</div>
              </div>
            </div>
          </div>
          
          <InteractiveCard style={{ 
            padding: 'var(--spacing-6) var(--spacing-5)', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'var(--spacing-4)',
            backgroundColor: 'rgba(9, 17, 36, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '24px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
          }}>
            <div style={{ alignSelf: 'flex-start', backgroundColor: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#38bdf8', padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
              Example Quiz Question
            </div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white' }}>Expand: (x + 3)(x + 4)</h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-2)' }}>
              <div style={{ padding: 'var(--spacing-3)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '12px', textAlign: 'center', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)' }}>x² + 12x + 7</div>
              <div style={{ padding: 'var(--spacing-3)', backgroundColor: 'rgba(74, 222, 128, 0.15)', color: '#4ade80', border: '1px solid rgba(74, 222, 128, 0.3)', borderRadius: '12px', textAlign: 'center', fontWeight: 700 }}>x² + 7x + 12 ✓</div>
              <div style={{ padding: 'var(--spacing-3)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '12px', textAlign: 'center', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)' }}>x² + 7x + 7</div>
            </div>
          </InteractiveCard>
          
        </div>
      </div>
    </section>
  );
}
