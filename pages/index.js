import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import {enUS, KR} from '../translations'

export default function Home() {
  const router = useRouter()
  const {locale} = router
  const t = (locale === 'en-US') ? (enUS) : (KR)

  const hadleLanguageToggle = () => {
    switch(locale) {
      case 'en-US':
        router.push('/', '/', {locale: 'KR'})
        break
      case 'KR':
        router.push('/', '/', {locale: 'en-US'})
        break
    }
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta keywords='resume' />
      </Head>
      <div>
        <h4 className={styles.title}>
          {t.home_intro}
        </h4>

        <p className={styles.text}>
          <a href='mailto:klofseattle@hotmail.com'><img className={styles.icon} src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-email-alert-icongeek26-linear-colour-icongeek26-1.png"/></a>
          <a href='https://github.com/sjb3'><img className={styles.icon} src="https://img.icons8.com/color/48/000000/github-2.png"/></a>
          <a href='https://www.linkedin.com/in/justin-byun/'><img className={styles.icon} src="https://img.icons8.com/clouds/100/000000/linkedin.png"/></a></p>
      </div>
    </>
  )
}
