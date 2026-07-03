import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { profile } from "../data";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/meet", label: "Meet" },
  { to: "/classes", label: "Classes" },
  { to: "/projects", label: "Projects" },
];

function navClass({ isActive }: { isActive: boolean }) {
  return `relative text-sm transition-colors ${
    isActive
      ? "text-cloud font-medium after:absolute after:-bottom-[21px] after:left-0 after:h-px after:w-full after:bg-accent"
      : "text-fog hover:text-cloud"
  }`;
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link to="/" className="font-serif text-xl tracking-wide text-cloud">
          Beckett Dunlavy
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={navClass}>
              {l.label}
            </NavLink>
          ))}
          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-4 py-1.5 text-sm text-cloud transition-colors hover:border-accent hover:text-accent"
          >
            Résumé
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
        <button
          type="button"
          className="text-fog"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={navClass}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-fog hover:text-cloud"
            >
              Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
