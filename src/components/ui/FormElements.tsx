import React, { InputHTMLAttributes } from 'react';
import styles from './FormElements.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}
      <input 
        className={`${styles.input} ${error ? styles.inputError : ''}`} 
        {...props} 
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}

interface RadioCardProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  selected?: boolean;
}

export function RadioCard({ label, description, selected, className = '', ...props }: RadioCardProps) {
  return (
    <label className={`${styles.radioCard} ${selected ? styles.selected : ''} ${className}`}>
      <input type="radio" className={styles.srOnly} {...props} />
      <div className={styles.radioContent}>
        <div className={styles.radioHeader}>
          <span className={styles.radioLabel}>{label}</span>
          <div className={`${styles.radioCircle} ${selected ? styles.radioCircleSelected : ''}`} />
        </div>
        {description && <span className={styles.radioDescription}>{description}</span>}
      </div>
    </label>
  );
}
