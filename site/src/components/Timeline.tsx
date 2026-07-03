import { motion } from "framer-motion";
import { experience } from "../data";
import BrandIcon from "./BrandIcon";

// Adapted from 21st.dev "Timeline-02" by ruixen.ui
export default function Timeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* vertical line */}
      <div className="absolute bottom-2 left-[27px] top-2 w-px bg-line" />

      {experience.map((job, index) => (
        <motion.div
          key={`${job.organization}-${job.title}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="relative mb-10 flex gap-6 last:mb-0"
        >
          {/* logo node on the line */}
          <a
            href={job.logoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex h-14 w-14 flex-none items-center justify-center overflow-hidden rounded-full border border-line bg-paper text-cloud"
            aria-label={job.organization}
          >
            {job.logo ? (
              <img
                src={job.logo}
                alt={`${job.organization} logo`}
                className="h-9 w-9 object-contain"
              />
            ) : job.logoSlug ? (
              <BrandIcon slug={job.logoSlug} className="h-7 w-7" color="currentColor" />
            ) : null}
          </a>

          <div className="flex-1 pt-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-cloud">{job.title}</h3>
              <p className="font-mono text-xs text-fog">
                {job.startDate}
                {job.endDate && ` – ${job.endDate}`}
              </p>
            </div>
            <p className="mt-0.5 text-sm text-fog">
              {job.organization} · {job.location}
              {job.current && (
                <span className="ml-2 inline-block rounded-full border border-sage/50 px-2 py-px text-xs text-sage">
                  Current
                </span>
              )}
            </p>

            {job.responsibilities.length > 0 && (
              <ul className="mt-3 space-y-1.5 rounded-2xl border border-line bg-paper p-4 text-sm leading-relaxed text-fog">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="mt-[7px] h-1 w-1 flex-none rounded-full bg-accent" />
                    {r}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
