import React, { useState } from 'react'
import { usePath } from '../hooks/usePath';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  const general = "text-zinc-200 font-medium hover:text-violet-500";
  const current = "text-orange-500 font-bold";
  const { isCurrentPage } = usePath();

  const [menuShow, setMenuShow] = useState(true);
  const [menuHidden, setMenuHidden] = useState(false);

  function onToggleMenu() {
    setMenuShow(!menuShow);
    setMenuHidden(!menuHidden);
  }

  return (
    <nav className="flex flex-col items-end md:flex-row md:items-center">

      {/* mobile menu */}
      <div className="flex items-center gap-6 md:hidden">
        <button className='text-3xl text-zinc-100 cursor-pointer' onClick={onToggleMenu}>

          {
            menuShow ? (
  
              // <span className="text-white text-3xl">=</span>
              <i className="bi bi-list text-zinc-100" id="snow-logo"></i>     
              ) : (
              <i className="bi bi-x text-zinc-100" id="snow-logo"></i>     
              
            )
          }

        </button>
      </div>

      <ul className={menuHidden ? "text-lg space-y-4 md:space-x-6 md:space-y-0 md:flex md:items-center" : "hidden"}>
        
        <li>
          <button onClick={onToggleMenu}>
            <Link href="/" className={isCurrentPage('/') ? current : general}>Página Inicial</Link>

          </button>
        </li>
      
        <li>
          <button onClick={onToggleMenu}>
            <Link href="/projects" className={isCurrentPage('/projects') ? current : general}>Projetos</Link>
          </button>
        </li>

        <li>
          <button onClick={onToggleMenu}>
            <a href="/#about" className={isCurrentPage('/#about') ? current : general}>Sobre</a>
          </button>
        </li>

        <li>
          <button onClick={onToggleMenu}>
            <a href="/#contact" className={isCurrentPage('/#contact') ? current : general}>Contato</a>
          </button>
        </li>
      </ul>
      
      {/* medium row menu  */}
      <ul className="hidden text-lg space-y-4 md:space-x-6 md:space-y-0 md:flex md:items-center">

        <li> 
            <Link href="/" className={isCurrentPage('/') ? current : general}>Página Inicial</Link>
        </li>

        <li>           
            <Link href="/projects" className={isCurrentPage('/projects') ? current : general}>Projetos</Link>
        </li>

        <li>
            <a href="/#about" className={isCurrentPage('/#about') ? current : general}>Sobre</a>
        </li>

        <li>
            <a href="/#contact" className={isCurrentPage('/#contact') ? current : general}>Contato</a>
        </li>
      </ul>

    </nav>
  )


 

}
