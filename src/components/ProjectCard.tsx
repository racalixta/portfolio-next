import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

interface ProjectCardProps {
  id: number,
  image: string,
  title: string, 
  icons: Array<string>
}

function randomNumber() {
  let num = Math.random() * 100;
  return num;

}

export const ProjectCard = ({ id, image, title, icons }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${id}`} className="w-full h-auto group">
    {/* <div className="bg-cover bg-center h-72 md:h-36 lg:h-48 w-auto rounded-t-lg flex items-center justify-center text-center px-6" style={{
          backgroundImage: `url(${image})`,
        }}>    
      
    </div> */}

    <Image 
      src={image} 
      width={1400} 
      height={900} 
      className="w-full h-72 md:h-36 lg:h-56  rounded-t-lg flex items-center justify-center text-center border-b border-zinc-400 group-hover:border-b group-hover:border-violet-600"
      alt="Imagem projeto"
    />

    {/* text area  */}
    <div className="bg-zinc-200 text-zinc-800 w-auto h-12 px-2 flex justify-between items-center group-hover:bg-violet-600 group-hover:text-white  ">

      <h2 className="text-lg font-semibold">{title}</h2>
      
      {/* tech icons  */}
      <div className="flex gap-2 w-fit">
        {icons.map((item) => (
          <img className="h-7 w-7 sm:h-10 sm:w-10 md:h-7 md:w-7" src={item} alt="" key={`${id} ${randomNumber()}`} />
        ))}

      </div>

    </div>
  </Link>
  )
}

