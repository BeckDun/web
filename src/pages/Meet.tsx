import { meet } from "../data";

export default function Meet() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
        Calendar
      </p>
      <h1 className="font-serif text-4xl text-cloud sm:text-5xl">
        Meet with me
      </h1>
      <p className="mt-4 text-fog">
        Grab a time that works for you — my live availability is below.
      </p>

      <div className="mb-10 mt-8">
        <a
          href={meet.bookingsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-on-accent transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Schedule a meeting
        </a>
      </div>

      <div className="overflow-hidden rounded-xl border border-line bg-paper">
        <iframe
          src={meet.calendarUrl}
          title="Beckett's calendar"
          className="h-[70vh] w-full border-0 bg-white"
        />
      </div>
    </section>
  );
}
