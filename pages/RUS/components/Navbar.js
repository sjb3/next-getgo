import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>navbar LISTS</h1>
      </div>
      <Link href='/RUS/'><a>home</a></Link>
      <Link href='/RUS/about'><a>About</a></Link>
      <Link href='/RUS/listtings'><a>listings</a></Link>
    </nav>
   );
}

export default Navbar;