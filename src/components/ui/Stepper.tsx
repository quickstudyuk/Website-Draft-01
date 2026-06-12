import React from 'react';
import styles from './Stepper.module.css';

interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

export function Stepper({ currentStep, totalSteps }: StepperProps) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className={styles.stepperContainer}>
      {steps.map(step => (
        <React.Fragment key={step}>
          <div 
            className={`
              ${styles.stepCircle} 
              ${step === currentStep ? styles.active : ''} 
              ${step < currentStep ? styles.completed : ''}
            `}
          >
            {step < currentStep ? '✓' : step}
          </div>
          {step < totalSteps && (
            <div className={`${styles.stepLine} ${step < currentStep ? styles.lineCompleted : ''}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
