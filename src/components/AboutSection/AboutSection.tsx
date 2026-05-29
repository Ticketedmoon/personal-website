import styles from './AboutSection.module.css';

const rows = [
  {
    image: 'andorra-me.jpg',
    title: 'My Story',
    content: (
      <>
        Hi, I&apos;m Shane, a 25 year old software engineer from Dublin, Ireland.{' '}
        <br />
        I Studied{' '}
        <b>
          B.Sc in Computer Applications and Software engineering (DC121)
        </b>{' '}
        in DCU (Dublin City University) and currently work at{' '}
        <a href="https://www.shutterstock.com/">Shutterstock</a>.
        <br />
        <br />
        I&apos;ve always had an interest in technology. As a result of this
        interest, I started programming in small doses during school and began to
        involve myself in the software community in general. School never gave me
        the knowledge from any direct course or module to understand how
        technology in general worked, so I decided to pursue this interest and
        enroll in a Computer Science degree. Four years later, I&apos;ve
        graduated with a first-class honors degree, and that fire to build more
        software projects still burns everyday.
      </>
    ),
  },
  {
    image: 'hobby-gaming-controller-icon.png',
    title: 'My Hobbies and Interests',
    content: (
      <>
        Like most children growing up during the 1990s and early 2000s, video
        games were a big part of my life. Upon playing my very first game, I felt
        an immediate attachment and love for it. Gaming was certainly the primary
        reason why I had a curiosity about Computer Science.
        <br />
        <br />
        Similarly, music has also been a passion of mine. I play guitar on a
        regular basis. Often playing pieces from a variety of genres that I
        enjoy. I like working on programming side-projects, or learning a new
        technology that helps explore my interests, I also like to contribute to
        Open Source in my spare time.
      </>
    ),
  },
  {
    image: 'software-team.png',
    title: 'My Aspirations and Career Goals',
    content: (
      <>
        I want to grow in the space of Web and Game development. I want to
        understood things at a very low level inside a computer. For example,
        working with the GPU and optimising memory allocation and read/write
        speed are some areas for knowledge growth. I already have built projects
        spanning many domains in the field, whether that be Web Application
        Development, Mobile development, Machine Learning modeling/Data Science
        and Game Development.
        <br />
        <br />
        I want to be the best I can at my job and meet great people along the
        way. I also want to work for a company that which I care about the work
        they do and strive to pursue each and every day. Alternatively, setting
        up my own business is another ambition I hope to realise one day, but
        until that day, I will keep doing what I love.
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
