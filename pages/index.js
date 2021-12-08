import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta keywords='resume' />
      </Head>
      <div>
        <h4 className={styles.title} >Software Developer specializing in full stack development with interests in data science, front end/single page application.  Experienced with all stages of the development cycle for dynamic web projects.  Well-versed in numerous programming languages including javaScript/ReactJS, SQL/noSQL, python/django and AWS.</h4>

        <p className={styles.text}>
          <a href='mailto:klofseattle@hotmail.com'><img className={styles.icon} src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-email-alert-icongeek26-linear-colour-icongeek26-1.png"/></a>
          <a href='https://github.com/sjb3'><img className={styles.icon} src="https://img.icons8.com/color/48/000000/github-2.png"/></a>
          <a href='https://www.linkedin.com/in/justin-byun/'><img className={styles.icon} src="https://img.icons8.com/clouds/100/000000/linkedin.png"/></a></p>
      </div>
    </>
  )
}
