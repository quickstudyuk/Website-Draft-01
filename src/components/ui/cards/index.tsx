import React, { HTMLAttributes, ReactNode } from 'react';
import styles from './Cards.module.css';

interface BaseCardProps extends HTMLAttributes<HTMLDivElement> {}

export function BaseCard({ children, className = '', ...props }: BaseCardProps) {
  return (
    <div className={`${styles.base} ${className}`} {...props}>
      {children}
    </div>
  );
}

interface InteractiveCardProps extends BaseCardProps {}

export function InteractiveCard({ children, className = '', ...props }: InteractiveCardProps) {
  return (
    <div className={`${styles.base} ${styles.interactive} ${className}`} {...props}>
      {children}
    </div>
  );
}

interface DashboardCardProps extends BaseCardProps {
  title: string;
  value: ReactNode;
  icon?: ReactNode;
}

export function DashboardCard({ title, value, icon, children, className = '', ...props }: DashboardCardProps) {
  return (
    <BaseCard className={`${styles.dashboard} ${className}`} {...props}>
      <div className={styles.dashHeader}>
        <span className={styles.dashTitle}>{title}</span>
        {icon && <span>{icon}</span>}
      </div>
      <div className={styles.dashValue}>{value}</div>
      {children && <div>{children}</div>}
    </BaseCard>
  );
}

interface FeatureCardProps extends BaseCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export function FeatureCard({ title, description, icon, className = '', ...props }: FeatureCardProps) {
  return (
    <BaseCard className={`${styles.feature} ${className}`} {...props}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDesc}>{description}</p>
    </BaseCard>
  );
}
