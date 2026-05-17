import { Download, FileText } from 'lucide-react';
import { projects } from '../data/projects';

export function DownloadsSection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24" id="downloads">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-pine">Work Samples / Downloads</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">PDF reports and map outputs</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The original exports were copied into the site as deployment-ready assets with clean filenames.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white">
          {projects.map((project, index) => (
            <div
              className="grid gap-4 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[1fr_auto]"
              key={project.id}
            >
              <div className="flex gap-3">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-field text-pine">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {index + 1}. {project.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">Source export: {project.sourceFile}</p>
                </div>
              </div>
              <a
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-ink hover:border-ocean hover:text-ocean"
                download
                href={project.downloadUrl}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
