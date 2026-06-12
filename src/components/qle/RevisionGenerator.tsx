import React from 'react';
import styles from './RevisionGenerator.module.css';
import { InteractiveCard } from '@/components/ui/cards';

export default function RevisionGenerator() {
  return (
    <section className="section-padding" style={{ 
      background: 'transparent',
      position: 'relative'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 60%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.header}>
          <h2 className={styles.headline} style={{ color: 'white' }}>Revision Created Automatically</h2>
          <p className={styles.subheadline} style={{ color: 'rgba(255,255,255,0.65)' }}>Transform lessons into personalised learning resources.</p>
        </div>

        <div className={styles.flowContainer}>
          <div className={styles.flowStep}>
            <div className={styles.stepCard} style={{
              background: 'rgba(255,255,255,0.07)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'white'
            }}>
              <span className={styles.icon}>📄</span>
              <h4 style={{ margin: 0, color: 'white' }}>Lesson Transcript</h4>
            </div>
          </div>
          
          <div className={styles.flowArrow} style={{ color: 'rgba(255,255,255,0.4)' }}>↓</div>
          
          <div className={styles.flowStep}>
            <div className={styles.stepCardActive}>
              <span className={styles.icon}>🤖</span>
              <h4 style={{ margin: 0 }}>AI Processing</h4>
            </div>
          </div>
          
          <div className={styles.flowArrow} style={{ color: 'rgba(255,255,255,0.4)' }}>↓</div>
          
          <div className={styles.flowOutput}>
            <div className={styles.outputGrid}>
              <div className={styles.outputItem} style={{
                background: 'rgba(56,189,248,0.08)',
                border: '1px dashed rgba(56,189,248,0.4)',
                color: '#38bdf8'
              }}>Revision Notes</div>
              <div className={styles.outputItem} style={{
                background: 'rgba(56,189,248,0.08)',
                border: '1px dashed rgba(56,189,248,0.4)',
                color: '#38bdf8'
              }}>Flashcards</div>
              <div className={styles.outputItem} style={{
                background: 'rgba(56,189,248,0.08)',
                border: '1px dashed rgba(56,189,248,0.4)',
                color: '#38bdf8'
              }}>Quiz Questions</div>
              <div className={styles.outputItem} style={{
                background: 'rgba(56,189,248,0.08)',
                border: '1px dashed rgba(56,189,248,0.4)',
                color: '#38bdf8'
              }}>Exam Practice Tasks</div>
            </div>
          </div>
        </div>

        <div className={styles.exampleContainer}>
          <InteractiveCard className={styles.questionCard} style={{ 
            background: 'rgba(255,255,255,0.07)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
          }}>
            <div className={styles.questionBadge} style={{
              backgroundColor: 'rgba(56,189,248,0.15)',
              color: '#38bdf8'
            }}>Exam Practice</div>
            <h4 className={styles.questionTitle} style={{ marginTop: '12px', color: 'white' }}>Expand (x + 4)(x + 2)</h4>
            <div className={styles.optionsGrid}>
              <div className={styles.optionItem} style={{
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.85)',
                background: 'rgba(255,255,255,0.05)'
              }}>x² + 6x + 8</div>
              <div className={styles.optionItem} style={{
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.85)',
                background: 'rgba(255,255,255,0.05)'
              }}>x² + 8x + 6</div>
              <div className={styles.optionItem} style={{
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.85)',
                background: 'rgba(255,255,255,0.05)'
              }}>x² + 2x + 8</div>
              <div className={styles.optionItem} style={{
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.85)',
                background: 'rgba(255,255,255,0.05)'
              }}>x² + 4x + 2</div>
            </div>
          </InteractiveCard>
        </div>

        <div className={styles.benefitsGrid}>
          <p className={styles.benefitText} style={{ color: 'rgba(255,255,255,0.8)' }}>
            <strong style={{ color: '#38bdf8' }}>Students revise exactly</strong> what they learned.
          </p>
          <p className={styles.benefitText} style={{ color: 'rgba(255,255,255,0.8)' }}>
            <strong style={{ color: '#38bdf8' }}>Active recall</strong> improves retention.
          </p>
        </div>
      </div>
    </section>
  );
}
