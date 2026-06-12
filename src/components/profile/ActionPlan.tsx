import React from 'react';
import styles from './ActionPlan.module.css';

interface ActionPlanProps {
  plan: {
    sessionsPerWeek: string;
    focusAreas: string[];
  };
}

export default function ActionPlan({ plan }: ActionPlanProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Recommended Learning Plan</h3>
      
      <div className={styles.topSection}>
        <div className={styles.frequencyBadge}>
          <span className={styles.iconWrapper}>⏱️</span>
          <span>{plan.sessionsPerWeek}</span>
        </div>
      </div>

      <div className={styles.focusSection}>
        <h4 className={styles.cardTitle}>Focus Areas:</h4>
        <ul className={styles.list}>
          {plan.focusAreas.map((area, i) => (
            <li key={i}>{area}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
