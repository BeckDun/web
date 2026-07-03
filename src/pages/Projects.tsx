import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data";
import BrandIcon from "../components/BrandIcon";

export default function Projects() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
        Work
      </p>
      <h1 className="font-serif text-4xl text-cloud sm:text-5xl">Projects</h1>
      <p className="mb-12 mt-4 text-fog">
        Things I've built and researched — more coming soon.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex flex-col rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-fog/50"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-lg font-semibold text-cloud">{project.title}</h2>
              <span className="font-mono text-xs text-fog">{project.date}</span>
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line px-3 py-1 text-xs text-fog"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <Link
                to={project.link}
                className="mt-5 inline-flex items-center gap-2 text-sm text-cloud underline-offset-4 hover:underline"
              >
                View project
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m0 0l-7-7m7 7l-7 7" />
                </svg>
              </Link>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm text-cloud underline-offset-4 hover:underline"
              >
                <BrandIcon slug="github" className="h-4 w-4" color="currentColor" />
                View on GitHub
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
