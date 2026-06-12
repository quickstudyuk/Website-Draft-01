import React from 'react';
import styles from './DigitalWhiteboard.module.css';

export default function DigitalWhiteboard() {
  return (
    <section className="section-padding" style={{ 
      backgroundColor: '#ffffff',
      borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow effects */}
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
        <div className={styles.header}>
          <h2 className={styles.headline} style={{ color: '#0f172a' }}>Learning That Feels Side By Side</h2>
        </div>

        <div className={styles.dashboardMockup}>
          <div className={styles.mockupHeader}>
            <div className={styles.dots}>
              <span className={styles.dot} style={{ backgroundColor: '#ff5f56' }} />
              <span className={styles.dot} style={{ backgroundColor: '#ffbd2e' }} />
              <span className={styles.dot} style={{ backgroundColor: '#27c93f' }} />
            </div>
            <span className={styles.mockupTitle}>QuickStudy Interactive Canvas</span>
          </div>
          
          <div className={styles.whiteboardToolbar}>
            <span className={styles.toolIcon}>✏️</span>
            <span className={styles.toolIcon}>🖍️</span>
            <span className={styles.toolIcon}>📐</span>
            <span className={styles.toolIcon}>📝</span>
          </div>
          
          <div className={styles.whiteboardCanvas}>
            <div className={styles.paperMockup}>
              <div className={styles.paperHeader}>AQA Mathematics Paper 1</div>
              <div className={styles.questionBlock}>
                <p><strong>Q4.</strong> Solve the simultaneous equations:</p>
                <p className={styles.equation}>2x + y = 7</p>
                <p className={styles.equation}>3x - y = 8</p>
              </div>
              
              <div className={styles.annotationGroup}>
                <div className={styles.annotationTutor}>
                  <p>Add the equations together to eliminate y:</p>
                  <p>5x = 15  ➜  x = 3</p>
                </div>
                <div className={styles.annotationStudent}>
                  <p>Substitute x = 3 into the first equation:</p>
                  <p>2(3) + y = 7  ➜  6 + y = 7  ➜  y = 1</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.whiteboardFooter}>
            <div className={styles.participant}>👨‍🏫 Tutor Sarah</div>
            <div className={styles.participant}>👩‍🎓 Student</div>
          </div>
        </div>
        
        <div className={styles.highlightsGrid}>
          <div className={styles.highlight}>Real-time collaboration</div>
          <div className={styles.highlight}>Shared workspace</div>
          <div className={styles.highlight}>Live problem solving</div>
        </div>
      </div>
    </section>
  );
}
