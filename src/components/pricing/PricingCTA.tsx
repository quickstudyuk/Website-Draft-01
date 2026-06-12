import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './PricingCTA.module.css';

export default function PricingCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.content}>
          <h2 className={styles.headline}>Find The Right Plan For Your Child</h2>
          <p className={styles.subheadline}>
            Start with a personalised Learning Profile and receive recommendations tailored to your child's academic needs.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/survey" style={{ textDecoration: 'none' }}>
              <Button size="lg" className={styles.primaryCta}>Get Your Child's Learning Profile</Button>
            </Link>
            <Link href="/book-trial" style={{ textDecoration: 'none' }}>
              <Button size="lg" variant="outline" className={styles.secondaryCta}>Book A Free Trial Lesson</Button>
            </Link>
          </div>
        </div>

        <div className={styles.visuals}>
          <div className={styles.reportMockup}>
            <div className={styles.reportHeader}>
              <div className={styles.reportTitle}>Learning Profile Report</div>
              <div className={styles.reportBadge}>Generated</div>
            </div>
            
            <div className={styles.reportBody}>
              <div className={styles.reportRow}>
                <span className={styles.reportLabel}>Risk Level</span>
                <span className={styles.reportValue} style={{ color: 'var(--warning)' }}>Moderate (Mathematics)</span>
              </div>
              <div className={styles.reportRow}>
                <span className={styles.reportLabel}>Improvement Timeline</span>
                <span className={styles.reportValue}>8–12 Weeks</span>
              </div>
              <div className={styles.reportRow}>
                <span className={styles.reportLabel}>Recommended Plan</span>
                <span className={styles.reportValue} style={{ color: 'var(--primary)', fontWeight: 700 }}>2 Lessons / Week + QLE Access</span>
              </div>
            </div>
            
            <div className={styles.reportFooter}>
              <div className={styles.qlePreview}>
                Includes full access to AI Lesson Summaries and Progress Tracking Dashboard.
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
