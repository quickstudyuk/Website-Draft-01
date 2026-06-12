import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center', height: '60px', overflow: 'visible', marginBottom: '16px' }}>
              <img src="/logo.png" alt="QuickStudy" style={{ height: '120px', width: 'auto', objectFit: 'contain' }} />
            </Link>
            <p className={styles.tagline}>Intelligent learning for UK students.</p>
          </div>
          <div className={styles.linksGrid}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Platform</h3>
              <Link href="/qle" className={styles.link}>Learning Environment</Link>
              <Link href="/subjects" className={styles.link}>Subjects</Link>
              <Link href="/pricing" className={styles.link}>Pricing</Link>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Company</h3>
              <Link href="/about" className={styles.link}>About Us</Link>
              <Link href="/faq" className={styles.link}>FAQ</Link>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Legal</h3>
              <Link href="/legal/privacy" className={styles.link}>Privacy Policy</Link>
              <Link href="/legal/terms" className={styles.link}>Terms of Service</Link>
              <Link href="/legal/refund" className={styles.link}>Refund Policy</Link>
              <Link href="/legal/safeguarding" className={styles.link}>Safeguarding & Transparency</Link>
              <Link href="/login" className={styles.link} style={{ marginTop: '12px', opacity: 0.5 }}>Admin Login</Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} QuickStudy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
