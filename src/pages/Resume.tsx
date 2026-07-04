import { motion } from "framer-motion";
import { profile } from "../data";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto max-w-5xl px-6 py-12"
    >
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-serif text-4xl text-cloud">Résumé</h1>
        <a
          href={profile.resumePdf}
          download="Beckett-Dunlavy-Resume.pdf"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-on-accent transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Download PDF
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14"
            />
          </svg>
        </a>
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-xl shadow-black/10">
        <object
          data={profile.resumePdf}
          type="application/pdf"
          className="h-[80vh] w-full"
        >
          <div className="flex h-[40vh] flex-col items-center justify-center gap-4 p-8 text-center">
            <p className="text-fog">
              Your browser can't display the PDF inline.
            </p>
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              Open the résumé in a new tab →
            </a>
          </div>
        </object>
      </div>
    </motion.div>
  );
}
