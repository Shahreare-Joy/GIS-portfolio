import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  return (
    <section className="bg-white py-20 sm:py-24" id="projects">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-pine">Projects</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">GIS class work as portfolio samples</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Each card is based on an exported GIS lab report from Temple coursework. The descriptions stay close
            to the evidence in the files and present the work as academic project experience.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
