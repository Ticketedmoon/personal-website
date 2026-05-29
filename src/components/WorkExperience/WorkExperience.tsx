import styles from './WorkExperience.module.css';

const jobs = [
  {
    company: 'Microsoft',
    period: 'Jan 2025 \u2013 Present',
    role: 'Software Development Engineer II (L62)',
    image: 'microsoft.png',
    url: 'https://www.microsoft.com/',
    description: (
      <>
        Software Development Engineer II on the Geneva Diagnostics Services
        team within Azure Core.
        <br /><br />
        Working on large-scale distributed systems that power observability
        and diagnostics across Azure, processing telemetry data at massive
        scale. Contributing to platform reliability, deployment automation,
        and developer tooling for the team.
      </>
    ),
  },
  {
    company: 'Shutterstock',
    period: '2 Years',
    role: 'Software Engineer (Search)',
    image: 'sstk.jpeg',
    url: 'https://www.shutterstock.com/',
    description: (
      <>
        Software Engineer on the Search team at Shutterstock.
        <br /><br />
        Built features and performance improvements for the search service
        (Java/Spring Boot), enabling faster querying across the content index
        (Apache Solr), improved content segmentation, and refactored boosting
        logic to reduce development time.
        <br />
        Developed a parity compliance job to verify index integrity against
        upstream APIs within configurable time windows.
        <br />
        Extended Editorial Search capabilities using Elasticsearch and
        integrated Datadog monitoring via Terraform for cluster-wide
        observability.
        <br />
        Managed A/B testing within the Search Platform to optimize ranking
        parameters and improve key performance indicators.
      </>
    ),
  },
  {
    company: 'Brightflag',
    period: '2 Years, 6 Months',
    role: 'Software Engineer (Product/Tooling)',
    image: 'brightflag.png',
    url: 'https://www.brightflag.com/',
    description: (
      <>
        Full-stack Software Engineer at Brightflag, a legal technology
        company focused on legal spend management.
        <br /><br />
        Developed and maintained core product features and internal tooling
        across the full stack (Java/Spring Boot, React, SQL). Grew
        significantly in software design, cross-team collaboration, and
        understanding of enterprise SaaS patterns.
        <br /><br />
        Key contributions:
        <br />
        {'\u2022'} Data migration tooling (MVC architecture)
        <br />
        {'\u2022'} Public API development and maintenance
        <br />
        {'\u2022'} SME for SAML-based Single Sign-On and SCIM user provisioning
        <br />
        {'\u2022'} Internal tooling (React)
        <br />
        {'\u2022'} AWS services (S3, CloudWatch, EC2, SQS, SNS)
      </>
    ),
  },
  {
    company: 'Bloomberg Polarlake',
    period: '6 Months',
    role: 'Software Engineer Intern',
    image: 'bpl.png',
    url: 'https://www.bloombergpolarlake.com/',
    description: (
      <>
        Software Engineer Intern on the DevOps team at Bloomberg Polarlake.
        <br /><br />
        Contributed to several microservice backends, implementing features
        for disaster recovery and operational automation. Gained hands-on
        experience with <b>Spring, Angular, Django, and Ansible</b> in a
        fast-paced financial technology environment.
      </>
    ),
  },
  {
    company: "Christopher's Furniture Services",
    period: '3 Months',
    role: 'Furniture Movement Employee',
    image: 'christophers_furniture.png',
    url: null,
    description: (
      <>
        General Laborer, Christopher&apos;s Furniture. I Worked in{' '}
        <b>Team A</b> and gained great social &amp; team-building skills. I was
        a strong energizer of the group, kept my team focused, and consistently
        determined.
      </>
    ),
  },
  {
    company: "Hemingway's Seafood Restaurant",
    period: '2 Years',
    role: 'Waiter and Kitchen Porter',
    image: 'hemmingways.png',
    url: null,
    description: (
      <>
        Worked with my Employer &amp; Colleagues in a team environment to
        fulfill the desires of customers. Took customer orders, served food,
        served customers needs &amp; wants. Responsibility to maintain the
        restaurant in absence of the manager or supervisor.
      </>
    ),
  },
  {
    company: 'Spar Retail Store',
    period: '1 Year',
    role: 'Retail Store Clerk',
    image: 'spar.jpg',
    url: null,
    description: (
      <>
        Helping customers throughout the store with their various needs and
        wants relating to shop items. Responsibility to maintain the store &amp;
        tills. Kept the store clean and stocked throughout a particular shift
        and helped other staff when I had spare time. Focus was customer
        satisfaction &amp; team-interaction.
      </>
    ),
  },
];

export default function WorkExperience() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.sectionTitle}>My Work Experience</span>

      {jobs.map((job) => (
        <div key={job.company} className={styles.contentRow}>
          <div className={styles.itemWrapper}>
            <div
              className={styles.rowImage}
              style={{
                backgroundImage: `url('/images/work-experience/${job.image}')`,
              }}
            />
            <div className={styles.rowDescription}>
              <p className={styles.headerField}>
                {job.company} ({job.period})
              </p>
              <br />
              <b>{job.role}</b>
              <br />
              {job.url && (
                <>
                  <a href={job.url}>{job.url}</a>
                  <br />
                </>
              )}
              <br />
              {job.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
