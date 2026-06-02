import styles from './ValuesSection.module.css';

const values = [
  { keyword: 'Happiness', text: 'Look inwards to find where your', suffix: ' lies.' },
  { keyword: 'Passions', text: 'Pursue', suffix: ', not paychecks.' },
  { keyword: 'Values', text: 'Do not give up your', suffix: ' in the face of fear.' },
  { keyword: 'Modesty', text: '', suffix: ' is both alluring and powerful.' },
];

export default function ValuesSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.description}>
        <h2 className={styles.title}>
          My <span className={styles.accent}>Values</span> For Life
        </h2>
        {values.map((v) => (
          <p key={v.keyword} className={styles.protocol}>
            {v.text}{' '}
            <span className={styles.accent}>
              <b>{v.keyword}</b>
            </span>
            {v.suffix}
          </p>
        ))}
      </div>

      <div className={styles.area}>
        <ul className={styles.circles}>
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
