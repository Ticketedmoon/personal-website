import styles from './AboutSection.module.css';

function calculateAge(): number {
  const birth = new Date(1996, 10, 27); // Nov 27, 1996
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

const rows = [
  {
    image: 'andorra-me.jpg',
    title: 'My Story',
    content: (
      <>
        Hi, I&apos;m Shane, a {calculateAge()}-year-old software engineer from Dublin, Ireland.{' '}
        <br />
        I hold a{' '}
        <b>
          B.Sc (Hons) in Computer Applications and Software Engineering
        </b>{' '}
        from Dublin City University and currently work at{' '}
        <a href="https://www.microsoft.com/">Microsoft</a> as a Software
        Development Engineer II.
        <br />
        <br />
        Technology has been a driving force in my life for as long as I can
        remember. What started as a curiosity during school evolved into a
        deep passion that led me to pursue a Computer Science degree. Four
        years later, I graduated with first-class honours, and that same drive
        to build, learn, and solve complex problems continues to fuel my
        career every day.
      </>
    ),
  },
  {
    image: 'hobby-gaming-controller-icon.png',
    title: 'Hobbies and Interests',
    content: (
      <>
        Growing up in the late 1990s and early 2000s, video games sparked my
        earliest fascination with technology. That curiosity about how things
        work under the hood ultimately led me to Computer Science.
        <br />
        <br />
        Outside of work, I enjoy playing guitar across a range of genres,
        staying active through running (you can find me on Strava), and
        tinkering with side projects that let me explore new technologies. I
        also contribute to open-source projects when the opportunity arises.
      </>
    ),
  },
  {
    image: 'software-team.png',
    title: 'Aspirations and Career Goals',
    content: (
      <>
        I am focused on deepening my expertise in distributed systems,
        large-scale platform engineering, and performance optimization. I
        enjoy working at the intersection of reliability and developer
        experience, building tools and services that empower other engineers
        to ship with confidence.
        <br />
        <br />
        My career so far has spanned web application development, search
        infrastructure, data tooling, and cloud services. I want to continue
        growing as an engineer, tackling increasingly complex challenges, and
        collaborating with talented people who share a passion for building
        great software.
      </>
    ),
  },
];

export default function AboutSection() {
  return (
    <div id="about-me-wrapper" className={styles.wrapper}>
      <span className={styles.sectionTitle}>About me</span>

      {rows.map((row) => (
        <div key={row.title} className={styles.contentRow}>
          <div
            className={styles.rowImage}
            style={{
              backgroundImage: `url('/images/general/${row.image}')`,
            }}
          />
          <div className={styles.rowDescription}>
            <p className={styles.headerField}>{row.title}</p>
            {row.content}
          </div>
        </div>
      ))}
    </div>
  );
}
