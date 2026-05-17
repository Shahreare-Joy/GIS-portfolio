import { BarChart3, Database, Globe2, Layers3, Map, ScanLine } from 'lucide-react';
import { portfolioSkills } from '../data/projects';

const icons = [Map, Layers3, Database, Globe2, ScanLine, BarChart3];

export function SkillsSection() {
  return (
    <section className="border-y border-slate-200 bg-skywash py-20 sm:py-24" id="skills">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-pine">Skills</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Supported by the submitted coursework</h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            These skills are limited to what the lab reports show: map creation, spatial data handling,
            coordinate systems, vector analysis, and introductory raster workflows.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioSkills.map((skill, index) => {
            const Icon = icons[index % icons.length];
            return (
              <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={skill.title}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-field text-pine">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-ink">{skill.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{skill.evidence}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
