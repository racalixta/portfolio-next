import Link from "next/link"
import { Navbar } from "./Navbar"

export const Header = () => {
  return (
    <header className="fixed bg-neutral-900 grid grid-cols-2 px-8 py-4 w-full md:h-16 md:flex md:items-center md:justify-between">

      <Link 
        href="/" 
        className="text-4xl font-bold text-orange-500 hover:text-violet-500"
      >
        Logo
      </Link>

      <Navbar />

    </header>
  )
}
