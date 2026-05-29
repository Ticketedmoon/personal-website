import styles from './Footer.module.css';

const contactLinks = [
  {
    name: 'Email',
    url: 'mailto:shane.creedon3@mail.dcu.ie?subject=?',
    image: '/images/links/gmail.jpg',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/shane_creedon',
    image: '/images/links/twitter.png',
  },
  {
    name: 'Steam',
    url: 'https://steamcommunity.com/profiles/76561198059760208/',
    image: '/images/links/steam.png',
  },
];

export default function Footer() {
  return (
    <footer id="footer-links-wrapper" className={styles.wrapper}>
      <p className={styles.subtitle}>
        My Name is{' '}
        <b>
          <i>
            <span className={styles.accent}>Shane</span>
          </i>
        </b>
      </p>
      <p className={styles.subtitle}>
        I&apos;m a{' '}
        <b>
          <i>
            <span className={styles.accent}>Software Engineer</span>
          </i>
        </b>
      </p>
      <p className={styles.subtitle}>
        And I{' '}
        <b>
          <i>
            <span className={styles.accent}>Love</span>
          </i>
        </b>{' '}
        Technology
      </p>

      <div className={styles.container}>
        {contactLinks.map((link) => (
          <a key={link.name} href={link.url} aria-label={link.name}>
            <div
              className={styles.link}
              style={{ backgroundImage: `url('${link.image}')` }}
            />
          </a>
        ))}
      </div>
    </footer>
  );
}
