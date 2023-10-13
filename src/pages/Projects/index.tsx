import { ProjectCard } from "../../components/ProjectCard"
import { mockProjects } from "../../core/mockProjects"

export const ProjectsPage = () => {
  return(
    <main className="bg-neutral-800 h-auto w-full pb-16">

      <section className="p-8 sm:w-full md:w-10/12 md:mx-auto space-y-6">

        <h1 className="text-orange-500 font-bold text-4xl mb-3">Projetos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockProjects.map((item) => (

            <ProjectCard key={item.id} id={item.id} image={item.image} title={item.title} icons={item.icons} />

          ))}
        </div>

      </section>

    </main>
  )
}