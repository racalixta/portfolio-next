import Image from 'next/image';
// import { mockTechIcons } from '../core/mockTechIcons';

export const About = () => {
  return(
    <section id="about" className="bg-neutral-900 w-full h-auto px-4 sm:px-8 py-8">

      <div className="sm:w-full lg:w-8/12 md:mx-auto">
        <h1 className="text-orange-500 font-bold text-4xl mb-3">Sobre</h1>
      </div>

      <div className="bg-neutral-700 sm:w-full lg:w-8/12 h-full flex flex-col md:flex-row items-start mx-auto rounded-md shadow-md px-4 py-4 md:space-x-4 ">

        <aside className="bg-neutral-800 py-4 px-4 rounded-md flex w-full items-stretch flex-col justify-around space-y-4 md:flex-col md:justify-center md:w-48 h-auto">

          <div className="w-full flex justify-center space-x-4 md:space-x-0 md:flex-col md:w-full md:space-y-2 ">
            <Image 
              src="/images/me-img.jpg" 
              width={720} 
              height={720} 
              alt="Rafael Calixta" 
              className='flex h-36 w-36 rounded-full justify-center items-center border-2 border-orange-500 md:mx-auto md:mb-2'
            />
           

            <div className="md:mx-auto text-zinc-100 space-y-2 ">
              <p><span className="font-bold">Local:</span> Brasília, Brasil.</p>

              
              <p>
                <a className="text-zinc-100 hover:text-violet-500" href="https://www.linkedin.com/in/rafael-calixta-047344234/" rel="noreferrer" >
                  <i className="bi bi-linkedin mr-1 text-xl"></i>
                  <span className="font-bold ">Linkedin</span>
                </a>
              </p>  

              <p>
                <a className="text-zinc-100 hover:text-violet-500" href="https://github.com/racalixta" rel="noreferrer" >
                  <i className="bi bi-github text-xl mr-1"></i> 
                  <span className="font-bold">Github</span>   
                </a>
              </p>

              

            </div>

          </div>

          <div className="w-full flex flex-col justify-center space-y-3">
            <h2 className="text-xl font-bold text-orange-500">Formação</h2>
            
          
            <p className='text-zinc-100 font-semibold'>
              <i className="bi bi-mortarboard-fill mr-2"></i>
              Análise e Desenvolvimento de Sistemas - 2020/2021
            </p>
            <p className='text-zinc-100 font-semibold'>
              <i className="bi bi-mortarboard-fill mr-2"></i>
              Segurança da Informação - 2022/2024
            </p>
            

          </div>


        </aside>

        <section className="text-justify text-zinc-100 font-medium leading-8 w-full md:w-8/12 lg:w-10/12 p-2">
          <p> <span className='mr-6'></span>
            Meu nome é Rafael Calixta, tenho 24 anos e sou formado em Análise e Desenvolvimento de Sistemas pela Universidade Paulista (Unip). Atualmente, estou cursando pós-graduação em Segurança da Informação. Sou um grande entusiasta por desenvolvimento web e estou em busca de oportunidades que me desafiem e me permitam crescer profissionalmente.
          </p>

          <p> <span className='mr-6'></span>
            Durante minha jornada acadêmica, enfrentei desafios significativos ao estudar em uma cidade do interior com condições de internet precárias. No entanto, minha perseverança me levou a concluir minha graduação em 2021 e me estabelecer em Brasília-DF, onde moro atualmente.
          </p>

          <p> <span className='mr-6'></span>
            Com meus conhecimentos em Desenvolvimento Web, ofereço soluções digitais personalizadas. Sou adepto da simplicidade para resolver problemas complexos e acredito que a disciplina é fundamental para alcançar metas de longo prazo. Estou pronto para assumir projetos como freelancer, mas meu objetivo é encontrar uma empresa que me proporcione crescimento profissional e a oportunidade de aplicar e aprimorar minhas habilidades.
          </p>

        </section>

      </div>

    </section>
  )
}