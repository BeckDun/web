import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { sc26, type Sc26Member } from "../data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-baseline gap-4">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
        {children}
      </p>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

function MemberCard({ member }: { member: Sc26Member }) {
  const external = member.url?.startsWith("http");
  return (
    <a
      href={member.url}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-start gap-4 rounded-2xl border border-line bg-paper p-5 transition-colors hover:border-accent"
    >
      <img
        src={member.photo}
        alt={member.name}
        loading="lazy"
        className="h-16 w-16 flex-none rounded-full border border-line object-cover"
      />
      <div className="min-w-0">
        <p className="font-medium text-cloud group-hover:text-accent">
          {member.name}
        </p>
        <p className="font-mono text-xs text-fog">{member.role}</p>
        {member.bio && (
          <p className="mt-2 text-sm leading-relaxed text-fog">{member.bio}</p>
        )}
      </div>
    </a>
  );
}

function MemberGrid({ members }: { members: Sc26Member[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {members.map((m, i) => (
        <motion.div
          key={m.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <MemberCard member={m} />
        </motion.div>
      ))}
    </div>
  );
}

export default function Sc26() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap items-center gap-6"
      >
        <img
          src={sc26.logo}
          alt="SC26"
          className="h-20 w-20 rounded-2xl border border-line bg-paper object-contain p-2"
        />
        <div>
          <h1 className="font-serif text-4xl text-cloud sm:text-5xl">
            {sc26.title}
          </h1>
          <p className="mt-2 text-fog">{sc26.subtitle}</p>
          <p className="font-mono text-xs text-fog">{sc26.meta}</p>
        </div>
      </motion.div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={sc26.overviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line px-4 py-1.5 text-sm text-cloud transition-colors hover:border-accent hover:text-accent"
        >
          Competition overview ↗
        </a>
        <Link
          to="/scc-connect"
          className="rounded-full border border-line px-4 py-1.5 text-sm text-cloud transition-colors hover:border-sage hover:text-sage"
        >
          We're competing in SCC Connect →
        </Link>
      </div>

      {/* Timeline */}
      <div className="mt-16">
        <SectionLabel>Timeline</SectionLabel>
        <ol className="relative ml-2 space-y-8 border-l border-line pl-8">
          {sc26.timeline.map((item) => (
            <li key={item.date} className="relative">
              <span
                className={`absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full ${
                  item.done ? "bg-accent" : "border border-fog bg-ink"
                }`}
              />
              <p className="font-mono text-xs text-accent">{item.date}</p>
              {item.labels.map((label) => (
                <p key={label} className="mt-1 text-cloud">
                  {label}
                </p>
              ))}
            </li>
          ))}
        </ol>
      </div>

      {/* Team manager */}
      <div className="mt-16">
        <SectionLabel>Team Manager</SectionLabel>
        <MemberGrid members={sc26.manager} />
      </div>

      {/* Team */}
      <div className="mt-16">
        <SectionLabel>Team</SectionLabel>
        <MemberGrid members={sc26.team} />
      </div>

      {/* Coaches */}
      <div className="mt-16">
        <SectionLabel>Coaches</SectionLabel>
        <MemberGrid members={sc26.coaches} />
      </div>
    </section>
  );
}
