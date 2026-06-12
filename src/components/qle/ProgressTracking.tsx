import React from 'react';
import styles from './ProgressTracking.module.css';

const metrics = [
  { label: 'Confidence', value: 85, color: '#ffbd2e' },
  { label: 'Topic Mastery', value: 92, color: '#27c93f' },
  { label: 'Exam Readiness', value: 75, color: '#ff5f56' },
  { label: 'Attendance', value: 100, color: '#3b82f6' },
  { label: 'Consistency', value: 88, color: '#8b5cf6' }
];

export default function ProgressTracking() {
  return (
    <section className="section-padding" style={{ 
      background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 60%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className={styles.headline} style={{ color: 'white' }}>See Progress Clearly</h2>
        
        <div className={styles.dashboardMockup}>
          <div className={styles.mockupHeader}>
            <div className={styles.dots}>
              <span className={styles.dot} style={{ backgroundColor: '#ff5f56' }} />
              <span className={styles.dot} style={{ backgroundColor: '#ffbd2e' }} />
              <span className={styles.dot} style={{ backgroundColor: '#27c93f' }} />
            </div>
            <span className={styles.mockupTitle}>QuickStudy Progress Tracker</span>
          </div>
          <div className={styles.mockupBody}>
            <div className={styles.chartGrid}>
              {metrics.map((metric, idx) => (
                <div key={idx} className={styles.barWrapper}>
                  <div className={styles.barLabel}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{metric.label}</span>
                    <span style={{ fontWeight: 800, color: 'white' }}>{metric.value}%</span>
                  </div>
                  <div className={styles.barTrack}>
                    <div 
                      className={styles.barFill} 
                      style={{ 
                        width: `${metric.value}%`, 
                        backgroundColor: metric.color,
                        boxShadow: `0 0 12px ${metric.color}80`
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.chartFooter}>
              Parents can easily monitor improvement over time and identify areas needing support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
