import { ArrowDown, FileText } from 'lucide-react';

export function Hero() {
  const heroPreview = `${import.meta.env.BASE_URL}assets/previews/lab-6-healthy-food-store-site-selection.webp`;

  return (
    <section
      className="hero-map border-b border-slate-200"
      id="top"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(248, 250, 252, 0.98) 0%, rgba(248, 250, 252, 0.9) 46%, rgba(248, 250, 252, 0.58) 100%), url("${heroPreview}")`,
      }}
    >
      <div className="section-shell flex min-h-[650px] items-center py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase text-pine">Temple University GIS Coursework</p>
          <h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Shahreare Joy
          </h1>
          <p className="mt-4 text-2xl font-semibold text-ocean sm:text-3xl">
            GIS / Geospatial Analysis Portfolio
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            I completed GIS coursework at Temple University and worked with mapping, spatial analysis,
            data layers, and GIS project workflows. This portfolio collects class projects as concise,
            downloadable work samples.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-ocean px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-[#145B72]"
              href="#projects"
            >
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
              View Projects
            </a>
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-ink hover:border-ocean hover:text-ocean"
              href="#downloads"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              Work Samples
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
