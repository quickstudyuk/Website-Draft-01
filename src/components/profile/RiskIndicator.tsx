import React from 'react';
import Badge from '@/components/ui/Badge';
import styles from './RiskIndicator.module.css';

interface RiskIndicatorProps {
  level: 'Low Risk' | 'Moderate Risk' | 'High Risk';
}

export default function RiskIndicator({ level }: RiskIndicatorProps) {
  const getBadgeVariant = () => {
    switch(level) {
      case 'Low Risk': return 'success';
      case 'Moderate Risk': return 'warning';
      case 'High Risk': return 'danger';
      default: return 'default';
    }
  };

  const getMessage = () => {
    switch(level) {
      case 'Low Risk': return 'On track, but needs consistency and targeted practice to maintain top grades.';
      case 'Moderate Risk': return 'Some knowledge gaps identified. Structured support recommended to build confidence.';
      case 'High Risk': return 'Significant academic risk. Immediate intervention advised to prevent falling further behind.';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Academic Risk Level</h3>
        <Badge variant={getBadgeVariant()}>{level}</Badge>
      </div>
      <p className={styles.message}>{getMessage()}</p>
    </div>
  );
}
