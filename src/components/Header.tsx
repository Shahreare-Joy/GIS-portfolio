import { MapPinned } from 'lucide-react';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Downloads', href: '#downloads' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-4">
        <a className="focus-ring flex items-center gap-2 rounded-md text-sm font-semibold text-ink" href="#top">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-field text-pine">
            <MapPinned className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>GIS Project Portfolio</span>
        </a>

        <div className="hidden items-center gap-1 sm:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
