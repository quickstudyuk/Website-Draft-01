import React from 'react';
import styles from './LearningInsights.module.css';

interface LearningInsightsProps {
  insights: string[];
}

export default function LearningInsights({ insights }: LearningInsightsProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Key Learning Challenges</h3>
      <p className={styles.subtitle}>Your child may currently be experiencing:</p>
      
      <div className={styles.insightsList}>
        {insights.map((insight, index) => (
          <div key={index} className={styles.insightCard}>
            <span className={styles.icon}>⚠️</span>
            <span className={styles.text}>{insight}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
