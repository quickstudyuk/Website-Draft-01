import React from 'react';
import styles from './SurveyUI.module.css';

interface ConfidenceSliderProps {
  value: number; // 0, 1, 2 representing Low, Medium, High
  onChange: (val: number) => void;
}

export function ConfidenceSlider({ value, onChange }: ConfidenceSliderProps) {
  const options = ['Low', 'Medium', 'High'];
  const percentage = (value / 2) * 100;

  return (
    <div className={styles.confidenceSliderContainer}>
      <div className={styles.sliderTrack}>
        <div className={styles.sliderFill} style={{ width: `${percentage}%` }} />
        {options.map((opt, idx) => (
          <button
            key={opt}
            type="button"
            className={`${styles.sliderStop} ${value === idx ? styles.sliderStopActive : ''}`}
            style={{ left: `${(idx / 2) * 100}%` }}
            onClick={() => onChange(idx)}
            aria-label={`Set confidence to ${opt}`}
          />
        ))}
      </div>
      <div className={styles.sliderLabels}>
        {options.map((opt, idx) => (
          <span 
            key={opt} 
            className={`${styles.sliderLabel} ${value === idx ? styles.sliderLabelActive : ''}`}
            onClick={() => onChange(idx)}
          >
            {opt}
          </span>
        ))}
      </div>
    </div>
  );
}
