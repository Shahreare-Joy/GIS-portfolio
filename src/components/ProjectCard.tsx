import { Download, ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <img
        alt={`${project.title} preview`}
        className="h-56 w-full border-b border-slate-200 object-cover"
        loading="lazy"
        src={project.previewImage}
      />
      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-field px-2.5 py-1 text-xs font-semibold text-pine">{project.lab}</span>
          <span className="text-xs font-medium text-slate-500">{project.dateLabel}</span>
        </div>
        <h3 className="text-xl font-bold leading-snug text-ink">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700" key={skill}>
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <a
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            href={project.downloadUrl}
            rel="noreferrer"
            target="_blank"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            View PDF
          </a>
          <a
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-ink hover:border-pine hover:text-pine"
            download
            href={project.downloadUrl}
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download
          </a>
        </div>
      </div>
    </article>
  );
}
