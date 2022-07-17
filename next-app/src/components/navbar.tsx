import Link from "next/link"

function Navbar(){
  return (
    <header className="w-full bg-black flex justify-center">
      <nav className="text-white text-3xl p-2 max-w-4xl">
        <ul className="flex space-between gap-5 justify-between">
          <li className="inline">
            <Link href='/'>Home</Link>
          </li>
          <li className="inline">
            <Link href='/Login'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar