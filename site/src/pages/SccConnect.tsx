import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { sccConnect } from "../data";

export default function SccConnect() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link
        to="/projects"
        className="mb-8 inline-flex items-center gap-2 font-mono text-xs text-fog transition-colors hover:text-cloud"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3.5 w-3.5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m0 0l7 7m-7-7l7-7" />
        </svg>
        All projects
      </Link>

      <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
        Project
      </p>
      <h1 className="font-serif text-4xl text-cloud sm:text-5xl">SCC Connect</h1>
      <p className="mt-4 leading-relaxed text-fog">{sccConnect.intro}</p>

      <div className="mt-14">
        <div className="mb-6 flex items-baseline gap-4">
          <h2 className="font-serif text-2xl text-cloud">Slide shows</h2>
          <span className="h-px flex-1 bg-line" />
        </div>

        <div className="space-y-4">
          {sccConnect.decks.map((deck, i) => (
            <motion.div
              key={deck.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to={`/projects/scc-connect/${deck.id}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-paper p-5 transition-colors hover:border-fog/50"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-medium text-cloud">{deck.title}</h3>
                    <span className="font-mono text-xs text-fog">{deck.date}</span>
                  </div>
                  <p className="mt-1 truncate text-sm text-fog">
                    {deck.description}
                  </p>
                </div>
                <span className="flex flex-none items-center gap-2 font-mono text-xs text-fog transition-colors group-hover:text-accent">
                  {deck.slides.length} slides
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m0 0l-7-7m7 7l-7 7" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
