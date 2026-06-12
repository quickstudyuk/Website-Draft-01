import Link from 'next/link';
import styles from './MobileNav.module.css';

export default function MobileNav() {
  return (
    <nav className={styles.mobileNav}>
      <Link href="/" className={styles.navItem}>
        <span className={styles.icon}>🏠</span>
        <span className={styles.label}>Home</span>
      </Link>
      <Link href="/qle" className={styles.navItem}>
        <span className={styles.icon}>💻</span>
        <span className={styles.label}>Platform</span>
      </Link>
      <div className={styles.ctaWrapper}>
        <Link href="/survey" className={styles.primaryCta}>
          Start
        </Link>
      </div>
      <Link href="/pricing" className={styles.navItem}>
        <span className={styles.icon}>🏷️</span>
        <span className={styles.label}>Pricing</span>
      </Link>
      <Link href="/dashboard" className={styles.navItem}>
        <span className={styles.icon}>👤</span>
        <span className={styles.label}>Login</span>
      </Link>
    </nav>
  );
}
