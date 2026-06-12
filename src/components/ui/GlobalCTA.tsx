import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './GlobalCTA.module.css';

interface GlobalCTAProps {
  headline?: string;
  subheadline?: string;
}

export default function GlobalCTA({ headline, subheadline }: GlobalCTAProps) {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.wrapper}>
          
          <div className={styles.messagingBlock}>
            {headline ? (
              <>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--foreground)', marginBottom: '16px' }}>{headline}</h2>
                <p style={{ fontSize: '1.25rem', color: 'var(--gray-700)', lineHeight: 1.5 }}>{subheadline}</p>
              </>
            ) : (
              <p className={styles.messageText}>
                Start with a personalised Learning Profile or speak to our team in a free consultation. Students can also experience a free trial lesson.
              </p>
            )}
          </div>

          <div className={styles.ctaGroup}>
            <div className={styles.ctaItem}>
              <Link href="/survey" style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
                <Button size="lg" fullWidth className={styles.primaryBtn}>
                  Get Your Child’s Learning Profile
                </Button>
              </Link>
            </div>
            
            <div className={styles.ctaItem}>
              <Link href="/consultation" style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
                <Button size="lg" variant="outline" fullWidth className={styles.secondaryBtn}>
                  Book Free Parent Consultation
                </Button>
              </Link>
            </div>
            
            <div className={styles.ctaItem}>
              <Link href="/book-trial" style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
                <Button size="lg" variant="outline" fullWidth className={styles.tertiaryBtn}>
                  Book Free Trial Lesson
                </Button>
              </Link>
            </div>
          </div>

          <div className={styles.trustIndicators}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>£18 per session</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon} style={{ color: '#fbbf24' }}>★</span>
              <span>4.9/5 average parent rating</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>96% improvement within 2 months</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>🇬🇧</span>
              <span>Based in Birmingham, supporting families across the UK</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
