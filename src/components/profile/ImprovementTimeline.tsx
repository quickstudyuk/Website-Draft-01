import React from 'react';
import styles from './ImprovementTimeline.module.css';

interface ImprovementTimelineProps {
  timeline: {
    visible: string;
    strong: string;
    longTerm: string;
  };
}

export default function ImprovementTimeline({ timeline }: ImprovementTimelineProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Estimated Improvement Timeline</h3>
      <div className={styles.timeline}>
        <div className={styles.track}>
          <div className={styles.fill} style={{ width: '100%' }} />
        </div>
        
        <div className={styles.milestones}>
          <div className={styles.milestone}>
            <div className={styles.dot} />
            <span className={styles.label}>{timeline.visible}</span>
            <span className={styles.desc}>Visible Improvement</span>
          </div>
          
          <div className={styles.milestone}>
            <div className={styles.dot} />
            <span className={styles.label}>{timeline.strong}</span>
            <span className={styles.desc}>Strong Progress</span>
          </div>
          
          <div className={styles.milestone}>
            <div className={`${styles.dot} ${styles.dotHighlight}`} />
            <span className={styles.label}>{timeline.longTerm}</span>
            <span className={styles.descHighlight}>Long-term Mastery</span>
          </div>
        </div>
      </div>
    </div>
  );
}
