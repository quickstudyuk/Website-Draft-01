'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${isOpen ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoWrapper} onClick={closeMenu}>
          <img src="/logo.png" alt="QuickStudy" className={styles.logoImage} />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.navLinks}>
          <Link href="/qle" className={styles.link}>QLE</Link>
          <Link href="/subjects" className={styles.link}>Subjects</Link>
          <Link href="/pricing" className={styles.link}>Pricing</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/faq" className={styles.link}>FAQ</Link>
          <Link href="/notes" className={styles.link}>Notes</Link>
          <Link href="/blog" className={styles.link}>Blog</Link>
        </nav>

        {/* Desktop CTA */}
        <div className={styles.actions}>
          <Link href="/consultation" style={{ textDecoration: 'none' }}>
            <Button size="sm">Book Free Consultation</Button>
          </Link>
        </div>

        {/* Hamburger Icon / '3 Lines' Button for Mobile */}
        <button 
          className={styles.hamburger} 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuVisible : ''}`}>
        <nav className={styles.mobileNavLinks}>
          <Link href="/qle" className={styles.mobileLink} onClick={closeMenu}>QLE</Link>
          <Link href="/subjects" className={styles.mobileLink} onClick={closeMenu}>Subjects</Link>
          <Link href="/pricing" className={styles.mobileLink} onClick={closeMenu}>Pricing</Link>
          <Link href="/about" className={styles.mobileLink} onClick={closeMenu}>About</Link>
          <Link href="/faq" className={styles.mobileLink} onClick={closeMenu}>FAQ</Link>
          <Link href="/notes" className={styles.mobileLink} onClick={closeMenu}>Notes</Link>
          <Link href="/blog" className={styles.mobileLink} onClick={closeMenu}>Blog</Link>
          <div className={styles.mobileActions}>
            <Link href="/consultation" style={{ textDecoration: 'none', width: '100%' }} onClick={closeMenu}>
              <Button style={{ width: '100%' }}>Book Free Consultation</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
