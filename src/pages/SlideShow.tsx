import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { sccConnect, type Slide } from "../data";

function SlideContent({ slide }: { slide: Slide }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8 py-10 text-center sm:px-16">
      {slide.eyebrow && (
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
          {slide.eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl text-cloud sm:text-5xl">
        {slide.title}
      </h2>
      {slide.body && (
        <p className="mt-6 max-w-xl leading-relaxed text-fog sm:text-lg">
          {slide.body}
        </p>
      )}
      {slide.bullets && (
        <ul className="mt-8 space-y-3 text-left">
          {slide.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-fog sm:text-lg">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
      {slide.image && (
        <img
          src={slide.image.url}
          alt={slide.image.alt}
          className="mt-8 max-h-[45%] rounded-xl border border-line object-cover"
        />
      )}
    </div>
  );
}

export default function SlideShow() {
  const { deckId } = useParams();
  const deck = sccConnect.decks.find((d) => d.id === deckId);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const stageRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onChange = () =>
      setIsFullscreen(document.fullscreenElement === stageRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void stageRef.current?.requestFullscreen();
    }
  }, []);

  const count = deck?.slides.length ?? 0;

  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setIndex((i) => Math.min(Math.max(i + delta, 0), count - 1));
    },
    [count],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "f" || e.key === "F") toggleFullscreen();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, toggleFullscreen]);

  if (!deck) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-fog">Slide show not found.</p>
        <Link
          to="/scc-connect"
          className="mt-4 inline-block text-cloud underline underline-offset-4"
        >
          Back to SCC Connect
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <Link
            to="/scc-connect"
            className="mb-2 inline-flex items-center gap-2 font-mono text-xs text-fog transition-colors hover:text-cloud"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3.5 w-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m0 0l7 7m-7-7l7-7" />
            </svg>
            SCC Connect
          </Link>
          <h1 className="font-serif text-2xl text-cloud sm:text-3xl">
            {deck.title}
          </h1>
        </div>
        <span className="font-mono text-xs text-fog">
          {index + 1} / {count}
        </span>
      </div>

      {/* stage — this element goes fullscreen */}
      <div
        ref={stageRef}
        className={
          isFullscreen
            ? "flex h-full flex-col justify-center gap-6 bg-ink p-6 sm:p-10"
            : undefined
        }
      >
      {/* slide canvas */}
      <div
        className={`relative overflow-hidden rounded-2xl border border-line bg-paper shadow-sm ${
          isFullscreen ? "min-h-0 flex-1" : "aspect-[16/10] sm:aspect-[16/9]"
        }`}
      >
        <div aria-hidden className="dot-grid absolute inset-0" />
        <div aria-hidden className="grain absolute inset-0" />
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <SlideContent slide={deck.slides[index]} />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          onClick={toggleFullscreen}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-line bg-paper/80 text-fog backdrop-blur transition-colors hover:border-fog hover:text-cloud"
        >
          {isFullscreen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9L4 4m0 5V4h5m6 5l5-5m-5 0h5v5M9 15l-5 5m5 0H4v-5m11 0l5 5m0-5v5h-5" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 9V4h5m6 0h5v5m0 6v5h-5m-6 0H4v-5" />
            </svg>
          )}
        </button>
      </div>

      {/* controls */}
      <div className={isFullscreen ? "flex items-center justify-between" : "mt-6 flex items-center justify-between"}>
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
          disabled={index === 0}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line text-cloud transition-colors hover:border-fog disabled:cursor-default disabled:opacity-30"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {deck.slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 cursor-pointer rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-2 bg-line hover:bg-fog"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          disabled={index === count - 1}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line text-cloud transition-colors hover:border-fog disabled:cursor-default disabled:opacity-30"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      </div>

      <p className="mt-4 text-center font-mono text-[10px] text-fog">
        Tip: ← → arrows to navigate · F for fullscreen
      </p>
    </section>
  );
}
