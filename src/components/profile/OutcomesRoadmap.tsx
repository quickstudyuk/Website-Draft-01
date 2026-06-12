import React from 'react';
import styles from './OutcomesRoadmap.module.css';

interface OutcomesRoadmapProps {
  outcomes: {
    weeks8: string;
    weeks12: string;
    months6: string;
  };
}

export default function OutcomesRoadmap({ outcomes }: OutcomesRoadmapProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Expected Outcomes</h3>
      <p className={styles.subtitle}>Based on our personalized roadmap:</p>
      
      <div className={styles.roadmap}>
        <div className={styles.milestone}>
          <div className={styles.timeframe}>Within 8 weeks</div>
          <div className={styles.outcome}>
            <span className={styles.check}>✓</span> {outcomes.weeks8}
          </div>
        </div>
        
        <div className={styles.milestone}>
          <div className={styles.timeframe}>Within 12 weeks</div>
          <div className={styles.outcome}>
            <span className={styles.check}>✓</span> {outcomes.weeks12}
          </div>
        </div>
        
        <div className={styles.milestone}>
          <div className={styles.timeframe}>Within 6 months</div>
          <div className={styles.outcome}>
            <span className={styles.check}>✓</span> {outcomes.months6}
          </div>
        </div>
      </div>
    </div>
  );
}
