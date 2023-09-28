import { CardSkills } from "./CardSkills"
import { Techs } from "../core/mockTechs"

export const Skills = () => {
  const front = Techs.frontEnd;
  const back = Techs.backEnd;
  const others = Techs.others;

  return (
    <section id="skills" className="bg-neutral-950 h-auto sm:px-8 py-8">

      <div className="sm:w-full lg:w-8/12 md:mx-auto">
        <h1 className="text-orange-500 font-bold text-4xl mb-3">Habilidades</h1>
      </div>

      <div className="flex flex-col justify-between mx-auto md:w-8/12 gap-6">
        <CardSkills title="Front-end" skills={front} />
        <CardSkills title="Back-end" skills={back} />
        {/* <CardSkills title="Outros" skills={others} /> */}
        {/* <span className="h-96 w-full bg-orange-400 rounded-md"></span> */}

      </div>

    </section>
  )
}

