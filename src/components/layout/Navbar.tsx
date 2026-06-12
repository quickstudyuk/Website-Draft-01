'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setIsVisible(true);
        return;
      }

      if (isOpen) {
        setIsVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      // Only hide if scrolled down past some threshold (85px) to prevent hiding at the top
      if (currentScrollY > lastScrollY && currentScrollY > 85) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <header ref={navRef} className={`${styles.navbar} ${isOpen ? styles.menuOpen : ''} ${!isVisible ? styles.hidden : ''}`}>
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
