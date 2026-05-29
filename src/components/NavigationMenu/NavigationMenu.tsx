import styles from './NavigationMenu.module.css';

export default function NavigationMenu() {
  return (
    <div id="navigation-wrapper" className={styles.wrapper}>
      <nav className={styles.menu}>
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
        <div className={styles.menuItem}>
          <a href="#">Profile</a>
        </div>
      </nav>
    </div>
  );
}
