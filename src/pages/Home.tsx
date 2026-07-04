import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { events, personalPhotos, profile } from "../data";
import PhotoCarousel from "../components/PhotoCarousel";
import SkillBubbles from "../components/SkillBubbles";
import SocialIcons from "../components/SocialIcons";
import Timeline from "../components/Timeline";

function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12 flex items-baseline gap-4">
        <span className="font-mono text-sm text-accent">{index}</span>
        <h2 className="font-serif text-3xl text-cloud sm:text-4xl">{title}</h2>
        <span className="hidden h-px flex-1 bg-line sm:block" />
      </div>
      {children}
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="blob h-[28rem] w-[28rem] -left-24 -top-32"
        style={{ background: "var(--accent)", animationDelay: "0s" }}
      />
      <div
        className="blob h-[24rem] w-[24rem] right-[-6rem] top-8"
        style={{ background: "var(--sage)", animationDelay: "-8s", animationDuration: "26s" }}
      />
      <div
        className="blob h-[20rem] w-[20rem] left-1/3 bottom-[-8rem]"
        style={{ background: "var(--gold)", animationDelay: "-15s", animationDuration: "30s" }}
      />
      <div className="dot-grid absolute inset-0" />
      <div className="grain absolute inset-0" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="relative">
        <HeroBackdrop />
        <section className="relative mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 sm:py-28 md:grid-cols-[3fr_2fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-3 py-1.5 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs text-cloud">
                SWE Intern @ Tesla — Palo Alto
              </span>
            </div>

            <h1 className="font-serif text-5xl leading-[1.05] text-cloud sm:text-7xl">
              Beckett
              <br />
              Dunlavy
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-fog">
              {profile.title} at the {profile.university}, focused on{" "}
              <span className="text-cloud">High Performance Computing</span>{" "}
              and parallel architectures.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={profile.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-on-accent transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                View my resume
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 17L17 7M17 7H8M17 7v9"
                  />
                </svg>
              </a>
              <Link
                to="/meet"
                className="rounded-full border border-line bg-paper/60 px-6 py-2.5 text-sm text-cloud backdrop-blur transition-colors hover:border-sage hover:text-sage"
              >
                Meet with me
              </Link>
            </div>

            <div className="mt-9">
              <SocialIcons />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: 1.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-sm justify-self-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 rotate-2 rounded-3xl border border-line bg-paper/50" />
              <img
                src={profile.photo}
                alt="Beckett Dunlavy"
                className="relative max-h-[420px] w-full rounded-2xl object-cover shadow-xl shadow-black/10"
              />
            </div>

            <Link
              to="/projects/scc-connect"
              className="group mt-8 flex items-center justify-between gap-3 rounded-2xl border border-line bg-paper px-4 py-3 transition-colors hover:border-accent"
            >
              <span className="truncate text-sm font-medium text-cloud">
                SCC Connect
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-4 w-4 flex-none text-fog transition-all group-hover:translate-x-0.5 group-hover:text-accent"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m0 0l-7-7m7 7l-7 7" />
              </svg>
            </Link>
          </motion.div>
        </section>
      </div>

      {/* Experience timeline */}
      <div className="border-t border-line">
        <Section id="experience" index="01" title="Experience">
          <Timeline />
        </Section>
      </div>

      {/* Skills */}
      <div className="border-t border-line">
        <Section id="skills" index="02" title="Skills">
          <SkillBubbles />
        </Section>
      </div>

      {/* Events & photos */}
      <div className="border-t border-line">
        <Section id="events" index="03" title="Events & Photos">
          <div className="space-y-16">
            {events.map((event) => (
              <div key={event.name}>
                <div className="mb-6 rounded-2xl border border-line bg-paper p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-cloud">
                        {event.name}
                      </h3>
                      <p className="mt-1 text-sm text-fog">{event.fullName}</p>
                    </div>
                    <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-fog">
                      {event.date}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-fog">
                    <span>
                      {event.description} · {event.location}
                    </span>
                    {event.url && (
                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cloud underline-offset-4 hover:underline"
                      >
                        Learn more →
                      </a>
                    )}
                  </div>
                </div>
                <PhotoCarousel photos={event.photos} />
              </div>
            ))}

            <div>
              <h3 className="mb-6 text-xl font-semibold text-cloud">
                Around campus & beyond
              </h3>
              <PhotoCarousel photos={personalPhotos} />
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
