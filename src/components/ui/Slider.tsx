import React, { InputHTMLAttributes } from 'react';
import styles from './FormElements.module.css';

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  value: number;
}

export function Slider({ label, min = 0, max = 100, step = 1, value, className = '', ...props }: SliderProps) {
  // Calculate percentage for background fill
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      {label && (
        <div className={styles.sliderHeader}>
          <label className={styles.label}>{label}</label>
          <span className={styles.sliderValue}>{value}</span>
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        className={styles.slider}
        style={{ '--slider-fill': `${percentage}%` } as React.CSSProperties}
        {...props}
      />
      <div className={styles.sliderMarks}>
        <span>Low</span>
        <span>High</span>
      </div>
    </div>
  );
}
