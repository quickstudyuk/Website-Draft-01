import React from 'react';
import styles from './TraditionalVsQLE.module.css';

const traditionalQuestions = [
  "What was covered?",
  "Is my child improving?",
  "Are they revising?",
  "What should they work on next?",
  "How do I track progress?"
];

export default function TraditionalVsQLE() {
  return (
    <section className="section-padding" style={{ 
      backgroundColor: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Abstract blob decorations */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: '500px', height: '500px', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        background: 'radial-gradient(circle, rgba(30,58,138,0.04) 0%, transparent 70%)',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute', bottom: '-15%', left: '-8%',
        width: '400px', height: '400px', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.grid}>
          <div className={styles.traditionalSide}>
            <h3 className={styles.title}>Traditional tutoring leaves parents with questions:</h3>
            <ul className={styles.questionList}>
              {traditionalQuestions.map((q, idx) => (
                <li key={idx} className={styles.questionItem}>
                  <span className={styles.questionIcon}>?</span>
                  {q}
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.qleSide}>
            <h3 className={styles.qleTitle} style={{ color: '#ffffff' }}>QLE answers all of these automatically.</h3>
            <p className={styles.qleDesc}>
              No more guessing. No more waiting for updates. Our technology provides complete transparency into your child's academic journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
