import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Justin Byun</h1>
      </div>
      <Link href='/'><a>home</a></Link>
      <Link href='/experiences'><a>Experiences</a></Link>
      <Link href='/about'><a>About</a></Link>
    </nav>
   );
}

export default Navbar;