import Head from 'next/head'
import styles from '../styles/Experiences.module.css'

const Experiences = () => {
  return (
    <>
      <Head>
        <title>Exprience</title>
        <meta keywords='resume' />
      </Head>
      <div>
        <h2 className={styles.title}>Employment/Experiences</h2><br/>
        <h3>Sr Full Stack Developer, QDSolutions (06/21 - current, contract) Austin, TX</h3>
        <p>- Build and maintain/ship Django apps</p>
        <p>- Build and maintain/ship clients' sites with ReactJS</p>
        <p>- Build and maintain with Amazon Web Services and their various components such as cloudfront, EC2, S3, and RDS</p>
        <p>- Manage database technology such as MySQL, Oracle and PostgreSQL</p>
        <br/>
        <h3>Training Logistic Coordinator, UW IT (11/20 - 04/21, contract) Seattle, WA</h3>
        <p>- Register, track, report, and communicate all aspects of training for end users affected by the Epic Implementation scheduled.</p>
        <p>- Work with the Training Program Manager and Training Lead to coordinate and reserve training rooms at 4 (possibly more) project training locations.</p>
        <br/>
        <h3>Full Stack Developer, Interline Vacation & Travel (12/18-08/19, contract) Austin, TX</h3>
        <p>- Work with senior engineers to manage large, complex design projects for upcoming website</p>
        <p>- Develop project concepts and maintain optimal workflow</p>
        <p>- Complete detailed programming and development tasks for frontend public and internal websites</p>
        <p>- Collaborate with designers to create clean interfaces and simple, intuitive interactions and experiences</p>
        <p>- Carry out quality assurance tests to discover errors and optimize usability</p>
        <p>- Followed policies and procedures related to application method and quality standards at all times</p>
        <p>- Related skills: python/django/flask, postgreSQL, d3JS, ReactJS, CMS(wagtail), JIRA</p>
        <br/>
        <h3>Data Librarian Intern, City of Seattle (10/18-02/19) Seattle, WA</h3>
        <p>- Code review/3rd party vendors review</p>
        <p>- Creating internal documents and archiving: documents are completed and tested out for production level ready (Tableau and PowerBI docs)</p>
        <p>- Oracle SQL and MS SQL review/test to resolve end user level errors </p>
        <br/>
        <h3>Information Tech2, Harborview Medical Center/ Health Info Management Team (08/17 - 02/18, contract ) Seattle WA</h3>
        <p>- Prepare and quality control/QA patients data in EPIC and ORCA system</p>
        <br/>
        <h3>Open source Contributor, heyduwamish.org (12/16 - 07/17) Seattle, WA </h3>
        <p>- Portrays the history of Duwamish river and proper over time and the environmental effects due to city development, and the users can log in and report and/or share the images </p>
        <p>- Related skills: python/django, backboneJS, ReactJS, BootstrapJS</p>
        <br/>
      </div>
    </>
  );
}

export default Experiences