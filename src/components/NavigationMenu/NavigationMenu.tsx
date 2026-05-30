'use client';

import { useState } from 'react';
import styles from './NavigationMenu.module.css';

export default function NavigationMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="navigation-wrapper" className={styles.wrapper}>
      <div role="navigation" className={styles.menu}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a href="#navigation-wrapper">Home</a>
          </li>
          <li className={styles.item}>
            <a href="#about-me-wrapper">About</a>
          </li>
          <li className={styles.item}>
            <a href="#projects-wrapper">Projects</a>
          </li>
          <li className={styles.item}>
            <a href="#footer-links-wrapper">Contact</a>
          </li>
        </ul>
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </button>
      </div>
      {menuOpen && (
        <ul className={styles.mobileMenu}>
          <li><a href="#navigation-wrapper" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about-me-wrapper" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#projects-wrapper" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#footer-links-wrapper" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      )}
    </div>
  );
}
