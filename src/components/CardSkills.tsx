import { Tile } from "./Tile"

interface CardSkillsProps {
  title: string;
  skills: Object;
}

export const CardSkills = ({ title, skills }: CardSkillsProps) => {
  let titleIcon = ''; 

  switch (title) {
    case "Front-end":
      titleIcon = "bi bi-window-fullscreen mr-1";
      break;
    case "Back-end":
      titleIcon = "bi bi-pc mr-1";
      break;
  
    default:
      titleIcon = "bi bi-clipboard-plus-fill mr-1";
      break;
  }

 return (
  <div className="bg-neutral-800 w-full h-full rounded-md text-zinc-100 p-6 ">
    
    <h1 className="text-2xl font-semibold mb-4 border-b border-orange-600 pb-4">
    <i className={titleIcon}></i>
      {title}
    </h1>

    <div className="flex gap-4">
      <Tile item={skills} />

    </div>

  </div>
 ) 
}