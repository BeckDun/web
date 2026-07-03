import { motion } from "framer-motion";
import { semesters } from "../data";

export default function Classes() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
        Coursework
      </p>
      <h1 className="font-serif text-4xl text-cloud sm:text-5xl">Classes</h1>
      <p className="mt-4 text-fog">
        Everything I've taken at the University of New Mexico and abroad.
      </p>

      <div className="mt-14 space-y-12">
        {semesters.map((semester, i) => (
          <motion.div
            key={semester.term}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: Math.min(i, 3) * 0.05 }}
          >
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <h2 className="text-lg font-semibold text-cloud">
                {semester.term}
              </h2>
              <span className="font-mono text-xs text-fog">
                {semester.courses.reduce((sum, c) => sum + c.credits, 0)} cr
              </span>
            </div>

            <ul className="divide-y divide-line border-y border-line">
              {semester.courses.map((course, j) => (
                <li
                  key={`${course.code}-${j}`}
                  className="flex items-baseline gap-4 py-3"
                >
                  <span className="w-24 flex-none font-mono text-sm text-accent">
                    {course.code}
                  </span>
                  <span className="flex-1 text-sm text-cloud">
                    {course.name}
                  </span>
                  <span className="flex-none font-mono text-xs text-fog">
                    {course.credits}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
