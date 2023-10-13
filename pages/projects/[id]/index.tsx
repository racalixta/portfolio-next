import { useRouter } from 'next/router'
import React from 'react'
import { mockProjects } from '../../../src/core/mockProjects';
import { Button } from '../../../src/components/Button';

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  let value;
  let icons;

  mockProjects.map((pj) => {

    if(Number(id) === Number(pj.id)) {
      return value = pj

    }

  });

  function randomNumber() {
    let num = Math.floor(Math.random() * 100);
    return num;

  }
  
  
  if(id) {
    icons = value.icons;
  return (
    <div id="projects" className="bg-neutral-800 w-full min-h-screen pb-16">

      <div className="p-8 sm:w-full md:w-7/12 md:mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-orange-500">Detalhes do Projeto </h1>

        <div className="bg-zinc-500 w-full h-auto rounded-t-lg">

          <div className="">
            {/* Image */}
            <img src={value.image} className="w-full h-auto rounded-t-lg flex items-center justify-center" />
  

            {/* text area  */}
            <div className="bg-zinc-200 text-zinc-800 w-auto h-auto px-4 py-2 space-y-2 border-t border-zinc-400">

              <div className="w-full flex justify-between items-center border-b border-zinc-600">
                <h2 className="text-2xl font-semibold mb-1">{value.title}</h2>

                {/* tech icons  */}
                <div className="flex items-center gap-3 mb-2">
                
                  
                {
                  icons.map((item) => (
                    <img className="h-10 w-10" src={item} alt="" key={`${id} + ${randomNumber()}`} />
                  ))
                }
                    
                </div>

              </div>

              <div className="font-semibold mx-auto py-2 text-lg text-justify space-y-3">
                <p> <span className="mr-4"></span>
                  {value.description}
                </p>

                <div className="mx-auto grid grid-cols-2 gap-3">
                  <Button variant='primary'>
                    <a href={value.linkSite} target="_blank" rel="noreferrer" >
                      Abrir Site
                    </a>      
                  </Button>
                  <Button variant="tertiary">
                    <a href={value.linkRepository} target="_blank" rel="noreferrer" >
                      Abrir Repositório
                    </a>      
                  </Button>
                </div>

              </div>

            </div>

          </div>

        </div>


      </div>

    </div>
  )
  } else {

    return (
      <span></span>
    )

  }
}

export default ProjectDetails