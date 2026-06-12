import React from 'react';
import styles from './SurveyUI.module.css';

interface QuestionLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function QuestionLayout({ title, subtitle, children }: QuestionLayoutProps) {
  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionHeader}>
        <h2 className={styles.questionTitle}>{title}</h2>
        {subtitle && <p className={styles.questionSubtitle}>{subtitle}</p>}
      </div>
      <div className={styles.questionContent}>
        {children}
      </div>
    </div>
  );
}
