import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  const general = "text-zinc-100 font-medium hover:text-violet-500";

  return (
    <footer className="bg-neutral-900 w-full px-4 sm:px-8 py-6 border-t border-zinc-600">
 
      <div className="sm:w-full lg:w-8/12 mx-auto border-b-2 border-b-orange-600 space-y-3 pb-3 border-t-2 border-t-orange-600">


        <div className="flex items-center space-x-4">
          <a className="text-5xl font-bold text-orange-500 hover:text-violet-500" href="/#home"  rel="noreferrer" >
            <i className="bi bi-snow2" id="snow-logo"></i>     
          </a>

        </div>

        <div className="grid grid-cols-2 gap-4 px-8 py-2 space-x-4 ">
          <div className="flex flex-col border-r border-zinc-500 space-y-2">

            <h2 className="text-orange-500 font-bold text-2xl">Menu</h2>

            <a href="/#home" className={general} >Página Inicial</a>
            <Link href="/projects" className={general} >Projetos</Link>
            <a href="/#about" className={general}>Sobre</a>
            <a href="/#contact" className={general}>Contato</a>

          </div>

          <div className="flex flex-col space-y-2">

            <h2 className="text-orange-500 font-bold text-2xl">Redes Sociais</h2>

            <a href="https://www.linkedin.com/in/rafael-calixta-047344234/" target="_blank" rel="noreferrer" className={general}>
              <i className="bi bi-linkedin mr-1 text-xl"></i>
              <span className="font-bold ">Linkedin</span>
            </a>

            <a href="https://github.com/racalixta" target="_blank" rel="noreferrer" className={general}>
              <i className="bi bi-github text-xl mr-1"></i> 
              <span className="font-bold">Github</span> 
            </a>


          </div>
        </div>


      </div>


      <div className="flex justify-between text-zinc-100 sm:w-full md:w-8/12 md:mx-auto mt-4">
        <p className='font-semibold'>
          Rafael Calixta © 2023
        </p>
        <p className='font-semibold'>
          Espero o seu contato <i className="bi bi-bug text-orange-600"></i>
        </p>
      </div>

      

    </footer>
  )
}

export default Footer