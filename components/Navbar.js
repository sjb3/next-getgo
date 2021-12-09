import Link from 'next/link'
import { useRouter } from 'next/router'
import {enUS, KR} from '../translations'

const Navbar = () => {
  const locales = ['en-US', 'KR']
  const router = useRouter()
  const {locale} = router
  const t = (locale === 'en-US') ? (enUS) : (KR)

  const languages = [
    {
      iso_code: "US",
      name: "US - English",
      country_code: "us",
      language_code: 'en-US'
    },
    {
      iso_code: "KR",
      name: "한국어",
      country_code: "kr",
      language_code: 'KR'
    },
  ]

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
    <nav>
      <div className="logo">
        <h1>Justin Byun</h1>
      </div>

      <Link href='/'><a>{t.nav_home}</a></Link>
      <Link href='/experiences'><a>{t.nav_experiences}</a></Link>
      <Link href='/about'><a>{t.nav_about}</a></Link>
      <h5 onClick={hadleLanguageToggle}>{t.Toggle_to_change}</h5>
    </nav>
   );
}

export default Navbar;