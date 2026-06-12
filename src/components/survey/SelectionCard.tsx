import React, { InputHTMLAttributes } from 'react';
import styles from './SurveyUI.module.css';

interface SelectionCardProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

export function SelectionCard({ label, description, icon, className = '', ...props }: SelectionCardProps) {
  const isSelected = props.checked;

  return (
    <label className={`${styles.selectionCard} ${isSelected ? styles.selected : ''} ${className}`}>
      <input type="radio" className="sr-only" {...props} />
      <div className={styles.selectionContent}>
        <div className={styles.selectionMain}>
          {icon && <span className={styles.selectionIcon}>{icon}</span>}
          <div className={styles.selectionText}>
            <span className={styles.selectionLabel}>{label}</span>
            {description && <span className={styles.selectionDesc}>{description}</span>}
          </div>
        </div>
        <div className={`${styles.radioIndicator} ${isSelected ? styles.radioIndicatorActive : ''}`} />
      </div>
    </label>
  );
}
