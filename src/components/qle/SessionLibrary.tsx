import React from 'react';
import { LessonCard } from '@/components/dashboard';
import styles from './SessionLibrary.module.css';

const lessons = [
  { title: "Mathematics: Calculating Percentages", duration: "56 min", thumbnailUrl: "/depreciation_maths.png" },
  { title: "Physics: Refraction of Light", duration: "52 min", thumbnailUrl: "/refraction_physics.png" },
  { title: "Chemistry: Calculating Empirical Formula", duration: "58 min", thumbnailUrl: "/empirical_chemistry.png" },
  { title: "English: Example of Improved Writing", duration: "61 min", thumbnailUrl: "/writing_english.png" }
];

export default function SessionLibrary() {
  return (
    <section className="section-padding" style={{ 
      backgroundColor: '#ffffff',
      borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-5%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          backgroundColor: 'rgba(9, 17, 36, 0.95)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1.5px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '32px',
          padding: 'calc(var(--spacing-6) * 1.5) var(--spacing-6)',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.35)',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          <div className={styles.header}>
            <h2 className={styles.headline} style={{ color: '#ffffff' }}>Every Lesson. Available Anytime.</h2>
            <p className={styles.subheadline} style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Students never lose access to valuable explanations.</p>
          </div>
          
          <div className={styles.gallery}>
            {lessons.map((lesson, idx) => (
              <div key={idx} className={styles.galleryItem}>
                <LessonCard title={lesson.title} duration={`Duration: ${lesson.duration}`} thumbnailUrl={lesson.thumbnailUrl} />
              </div>
            ))}
          </div>
          
          <div style={{
            height: '1px',
            background: 'rgba(255, 255, 255, 0.12)',
            margin: 'var(--spacing-6) 0'
          }} />
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitColumn}>
              <h4 className={styles.benefitTitle} style={{ color: 'white' }}>Benefits for Students</h4>
              <ul className={styles.benefitList} style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                <li>✓ Rewatch difficult concepts</li>
                <li>✓ Revise before exams</li>
                <li>✓ Learn at their own pace</li>
              </ul>
            </div>
            <div className={styles.benefitColumn}>
              <h4 className={styles.benefitTitle} style={{ color: 'white' }}>Benefits for Parents</h4>
              <ul className={styles.benefitList} style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                <li>✓ Complete lesson transparency</li>
                <li>✓ Full visibility into teaching quality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
