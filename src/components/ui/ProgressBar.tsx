import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  progress: number; // 0 to 100
  label?: string;
  showPercentage?: boolean;
}

export default function ProgressBar({
  progress,
  label,
  showPercentage = false,
}: ProgressBarProps) {
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={styles.wrapper}>
      {(label || showPercentage) && (
        <div className={styles.header}>
          {label && <span className={styles.label}>{label}</span>}
          {showPercentage && <span className={styles.percentage}>{clampedProgress}%</span>}
        </div>
      )}
      <div className={styles.track}>
        <div 
          className={styles.fill} 
          style={{ width: `${clampedProgress}%` }}
          aria-valuenow={clampedProgress}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
        />
      </div>
    </div>
  );
}
