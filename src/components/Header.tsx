import Link from "next/link"
import { Navbar } from "./Navbar"

export const Header = () => {
  return (
    <header className="bg-neutral-900 grid grid-cols-2 px-8 py-4 w-full md:h-18 md:flex md:items-center md:justify-between fixed z-10">

      <Link 
        href="/" 
        className="text-5xl font-bold text-orange-500 hover:text-violet-500"
      >
        <i className="bi bi-snow2" id="snow-logo"></i>     
      </Link>

      <Navbar />

    </header>
  )
}
