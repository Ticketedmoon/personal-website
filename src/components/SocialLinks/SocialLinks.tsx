import styles from './SocialLinks.module.css';

const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/Ticketedmoon',
    image: '/images/links/github.jpg',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shane-creedon-49a142128/',
    image: '/images/links/linkedin.png',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCP2hCkdDohDOsrHyeDGV5Xw',
    image: '/images/links/youtube.png',
  },
];

export default function SocialLinks() {
  return (
    <div id="links-wrapper" className={styles.wrapper}>
      <span className={styles.subtitle}>Social Media Links</span>
      <div className={styles.container}>
        {links.map((link) => (
          <a key={link.name} href={link.url} aria-label={link.name}>
            <div
              className={styles.link}
              style={{ backgroundImage: `url('${link.image}')` }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
