import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.content}>
      <div className={styles.description}>
        <h1 className={styles.name}>
          Shane <span className={styles.accent}>Creedon</span>
        </h1>
        <h4 className={styles.title}>Software engineer</h4>
        <h6 className={styles.passions}>Music | Programming | Gaming</h6>

        <div className={styles.passionIcons}>
          <div className={`${styles.passionImage} ${styles.imageMusic}`} />
          <div className={`${styles.passionImage} ${styles.imageProgramming}`} />
          <div className={`${styles.passionImage} ${styles.imageGaming}`} />
        </div>
      </div>
    </section>
  );
}
