import React from 'react';
import Button from '@/components/ui/Button';
import styles from './FinalRecommendation.module.css';
import Link from 'next/link';

interface FinalRecommendationProps {
  recommendation: string;
}

export default function FinalRecommendation({ recommendation }: FinalRecommendationProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon}>🎓</div>
        <h3 className={styles.title}>Our Final Recommendation</h3>
        <p className={styles.text}>{recommendation}</p>
      </div>
      
      <div className={styles.actions}>
        <Button size="lg" fullWidth className={styles.primaryBtn}>
          Book a Free Trial Lesson
        </Button>
        <Link href="/qle" className={styles.secondaryBtn}>
          Explore the QuickStudy Learning Environment
        </Link>
      </div>
    </div>
  );
}
