import Head from 'next/head'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta keywords='resume' />
      </Head>
      <div>
        <div className={styles.title}>
          <h3>Education</h3>
          <hr/>
          <h4>North Seattle College, Seattle WA</h4>
          <p>Application Development and Linux Admin: main focus(python3, java8, MySQL): Dec, 2018</p>
          <h4>CodeFellows, Seattle WA </h4>
          <p>Certificate in Advanced Full-Stack JavaScript Dev: Sept, 2016h</p>
          <h4>University of Washington, Seattle WA </h4>
          <p>Bachelor’s of Sciences in Biochemistry and Microbiology: May, 2005 </p>
        </div>
        <br/><br/>
        <div className={styles.title}>
          <h3 className={styles.title}>Skill HIghlights</h3>
          <hr/>
          <br/><br/>
          <p>javaScript, jQuery, nodeJS, typeScript, expressJS, buebirdJS, React/Redux, NextJS, VueJS, python/django, webPack, REST API, GraphQL, Apollo, R/R-Studio, HTML5, CSS3/SASS, Boostrap/Semantic-ui/Material-ui, SQL(MySQL, postgreSQL), noSQL(mongoDB, RethinkDB), Wagtail(CMS), AWS(serverless), java(8), version control(gitHub, gitLab), Linux/Unix, Jira,
    C++, C#, dotnet/asp.NET, google/firebase, numpy, pandas, sklearn, streamlit, bioPython, Blockchain/Ethereum dapp(Truffle, Ganache, Metamask)</p>
        </div>
      </div>
    </>
  );
}

export default About;