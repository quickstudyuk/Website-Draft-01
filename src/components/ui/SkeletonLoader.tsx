import React from 'react';
import styles from './SkeletonLoader.module.css';

interface SkeletonLoaderProps {
  type?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function SkeletonLoader({ 
  type = 'text', 
  width, 
  height, 
  className = '' 
}: SkeletonLoaderProps) {
  const inlineStyles = {
    width: width || (type === 'text' ? '100%' : '100%'),
    height: height || (type === 'text' ? '1rem' : type === 'circular' ? '40px' : '100px'),
    borderRadius: type === 'circular' ? '50%' : 'var(--radius-md)',
  };

  return (
    <div 
      className={`${styles.skeleton} ${className}`} 
      style={inlineStyles}
      aria-hidden="true"
    />
  );
}
