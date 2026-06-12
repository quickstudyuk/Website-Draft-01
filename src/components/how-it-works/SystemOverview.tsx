import React from 'react';
import styles from './SystemOverview.module.css';

const steps = [
  {
    title: "Learning Profile Diagnosis",
    desc: "Understand your child’s strengths, weaknesses, and academic needs."
  },
  {
    title: "Free Parent Consultation",
    desc: "Speak with our team to understand the results and recommended learning path."
  },
  {
    title: "Personalised Learning Plan",
    desc: "A structured academic roadmap tailored to your child."
  },
  {
    title: "Weekly 1:1 Tutoring Sessions",
    desc: "Focused lessons aligned with goals and weak areas."
  },
  {
    title: "QLE Learning Environment",
    desc: "Ongoing support through recordings, summaries, quizzes, and resources."
  },
  {
    title: "AI Learning Insights",
    desc: "Continuous analysis of progress and performance."
  },
  {
    title: "Parent Progress Tracking",
    desc: "Clear visibility into learning, improvement, and engagement."
  },
  {
    title: "Academic Improvement Over Time",
    desc: "Structured, consistent progress built through the system."
  }
];

export default function SystemOverview() {
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
          }}>The Journey</span>
          <h2 className={styles.headline} style={{ margin: 0 }}>A Fully Connected Learning System</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '650px', margin: '12px auto 0 auto', lineHeight: 1.6 }}>
            QuickStudy is built around a structured academic journey, where every step connects to the next.
          </p>
        </div>
        
        <div className={styles.flowContainer}>
          <div className={styles.flowLine} />
          <div className={styles.flowGrid}>
            {steps.map((item, idx) => (
              <div key={idx} className={styles.stepWrapper}>
                <div className={styles.stepNode}>{idx + 1}</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Step {idx + 1}: {item.title}</h4>
                  <p className={styles.stepDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
