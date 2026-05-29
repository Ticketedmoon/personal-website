import styles from './WorkExperience.module.css';

const jobs = [
  {
    company: 'Shutterstock',
    period: 'Current',
    role: 'Software Engineer (Search)',
    image: 'sstk.jpeg',
    url: 'https://www.shutterstock.com/',
    description: (
      <>
        Currently employed as a Software Engineer (Search) at Shutterstock.
        <br /><br />
        Added features and improvements to the search service (Java/SpringBoot),
        enabling faster searching in our index (Apache Solr), more segmentation
        of content for different use cases, and refactoring of the way in which
        content is boosted, reducing development time.
        <br />
        Built a parity compliance job that can be executed to verify that the
        content in our index is valid and up-to-date within a specified time
        period, cross-referencing many other internal APIs.
        <br />
        Built new ways of searching for content in our Editorial Search Index
        (Elastic Search).
        <br />
        Utilised Terraform to integrate Datadog with our Elastic Search Index to
        provide monitoring and alerting of core metrics across all instance
        replicas.
        <br />
        Added automation improvements within the Jenkins pipeline to reduce
        development time, and reduce the need for manual developer intervention.
        Executed and managed A/B testing within the Search Platform to hone
        ranking parameter values and improve Key Performance Indicators (KPIs).
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
        Full-Stack Software Engineer at Brightflag.
        <br /><br />
        I worked at Brightflag for 2 years, 6 months and have grown a lot in
        terms of my software ability and understanding of how teams interact
        within an organisation, as well as ways to optimize those interactions.
        <br /><br />
        In terms of technical knowledge, my ability with Spring/SpringBoot,
        Java, and SQL have improved immensely and I have learned many new skills
        like React, and a proper grounding with the Model-View-Controller (MVC)
        design pattern.
        <br /><br />
        Areas of expertise gained:
        <br />
        {'\u2022'} Data migration Tooling (MVC)
        <br />
        {'\u2022'} Building/Maintaining public APIs (MVC)
        <br />
        {'\u2022'} SME for SAML (Single Sign On) and SCIM for user provisioning
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
        Software Engineer Intern role at Bloomberg Polarlake.
        <br /><br />
        Worked as a member of the DevOps team where I learned countless new
        technologies and worked well with my team. Some of these technologies
        include <b>Spring, Angular6, Ext, Django, Ansible</b> etc. Worked on
        several microservice architectural backends where I implemented several
        features for future disaster recovery and Development Operations.
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
