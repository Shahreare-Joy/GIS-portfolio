import { CheckCircle2 } from 'lucide-react';

const focusAreas = [
  'Translating lab instructions into clear map outputs',
  'Explaining GIS methods and map interpretation in reports',
  'Working with demographic, environmental, urban, and raster datasets',
];

export function AboutSection() {
  return (
    <section className="bg-white py-20 sm:py-24" id="about">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase text-pine">About</p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Engineering student with GIS coursework experience</h2>
        </div>
        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-slate-700">
            I am an Electrical Engineering student at Temple University with GIS coursework experience.
            Through these labs, I practiced building maps, managing spatial layers, reading attribute data,
            comparing projections, and documenting spatial analysis workflows.
          </p>
          <p className="mt-5 text-base leading-7 text-slate-600">
            This portfolio is intended as an honest academic work sample for GIS, map interpretation, and
            geospatial AI trainer roles where clear reasoning about spatial data matters.
          </p>
          <div className="mt-8 grid gap-3">
            {focusAreas.map((area) => (
              <div className="flex gap-3" key={area}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-pine" aria-hidden="true" />
                <span className="text-sm font-medium leading-6 text-slate-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
