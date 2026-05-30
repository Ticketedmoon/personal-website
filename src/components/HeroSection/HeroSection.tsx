import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.content}>
      <div className={styles.description}>
        <div className={styles.fadeIn}>
          <p className={styles.name}>
            Shane <span className={styles.accent}>Creedon</span>
          </p>
          <p className={styles.title}>Software Development Engineer</p>

          <div className={styles.passionIcons}>
            <div className={`${styles.passionImage} ${styles.imageMusic}`} />
            <div className={`${styles.passionImage} ${styles.imageProgramming}`} />
            <div className={`${styles.passionImage} ${styles.imageGaming}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
