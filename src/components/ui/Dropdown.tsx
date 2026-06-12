import React, { SelectHTMLAttributes } from 'react';
import styles from './FormElements.module.css';

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  error?: string;
}

export function Dropdown({ label, options, error, className = '', ...props }: DropdownProps) {
  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}
      <select 
        className={`${styles.input} ${styles.select} ${error ? styles.inputError : ''}`} 
        {...props}
      >
        <option value="" disabled>Select an option</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
