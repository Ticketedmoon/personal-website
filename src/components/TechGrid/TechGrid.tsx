import styles from './TechGrid.module.css';

const technologies = [
  { name: 'Azure', image: 'azure.png' },
  { name: 'AWS', image: 'aws.png' },
  { name: 'Java', image: 'java.png' },
  { name: 'C#', image: 'csharp.png' },
  { name: 'Spring Boot', image: 'spring-boot.png' },
  { name: 'Python', image: 'python.png' },
  { name: 'SQL', image: 'sql.png' },
  { name: 'Elasticsearch', image: 'elastic.svg' },
  { name: 'Redis', image: 'redis.png' },
  { name: 'C++', image: 'c_plus_plus.png' },
  { name: 'React', image: 'react.png' },
  { name: 'Node.js', image: 'node.png' },
];

export default function TechGrid() {
  return (
    <div id="projects-wrapper" className={styles.wrapper}>
      <span className={styles.subtitle}>
        My Favourite Languages, Libraries and Frameworks
      </span>
      <div className={styles.grid}>
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className={styles.gridItem}
            role="img"
            aria-label={tech.name}
            style={{
              backgroundImage: `url('/images/technologies/${tech.image}')`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
