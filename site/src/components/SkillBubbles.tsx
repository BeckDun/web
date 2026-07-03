import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillGroups, type Skill } from "../data";
import BrandIcon, { brandColor } from "./BrandIcon";

// Orbital display adapted from 21st.dev "Orbiting Skills" (olovajs) and
// "MultiOrbitSemiCircle" (ruixen.ui): logos revolve slowly on concentric
// rings; hover/tap a logo to read it in the center hub.

const filters = ["All", ...skillGroups.map((g) => g.label)];

type FlatSkill = Skill & { group: string };

const allSkills: FlatSkill[] = skillGroups.flatMap((group) =>
  group.skills.map((skill) => ({ ...skill, group: group.label })),
);

function useIsSmall() {
  const [small, setSmall] = useState(
    () => matchMedia("(max-width: 639px)").matches,
  );
  useEffect(() => {
    const mq = matchMedia("(max-width: 639px)");
    const onChange = (e: MediaQueryListEvent) => setSmall(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return small;
}

/** Split skills across up to three rings, inner → outer. */
function toRings(skills: FlatSkill[]): FlatSkill[][] {
  if (skills.length <= 7) return [skills];
  if (skills.length <= 13) {
    const inner = Math.floor(skills.length / 2.6);
    return [skills.slice(0, inner), skills.slice(inner)];
  }
  const a = Math.round(skills.length * 0.28);
  const b = Math.round(skills.length * 0.62);
  return [skills.slice(0, a), skills.slice(a, b), skills.slice(b)];
}

export default function SkillBubbles() {
  const [active, setActive] = useState("All");
  const [focused, setFocused] = useState<FlatSkill | null>(null);
  const isSmall = useIsSmall();

  const visible =
    active === "All" ? allSkills : allSkills.filter((s) => s.group === active);
  const rings = toRings(visible);

  // Radii per ring position; single ring sits at a middle radius.
  const radiiSets = isSmall
    ? [[104], [76, 132], [64, 100, 136]]
    : [[160], [110, 200], [96, 160, 226]];
  const radii = radiiSets[rings.length - 1];
  const containerSize = isSmall ? 320 : 520;

  return (
    <div>
      {/* soft sort pills */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {filters.map((filter) => {
          const isActive = active === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => {
                setActive(filter);
                setFocused(null);
              }}
              className={`cursor-pointer rounded-full px-4 py-1.5 font-mono text-xs transition-colors ${
                isActive
                  ? "bg-accent text-on-accent"
                  : "border border-line text-fog hover:border-fog hover:text-cloud"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* orbit field */}
      <div
        className="relative mx-auto"
        style={{ width: containerSize, height: containerSize }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {rings.map((ringSkills, r) => {
              const radius = radii[r];
              const reverse = r % 2 === 1;
              const duration = 70 + r * 35;
              const paused = focused !== null && ringSkills.some((s) => s.name === focused.name);
              return (
                <div key={r}>
                  {/* ring guide */}
                  <div
                    aria-hidden
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-line"
                    style={{ width: radius * 2, height: radius * 2 }}
                  />
                  {/* rotating layer */}
                  <div
                    className="orbit-ring absolute inset-0"
                    style={{
                      ["--spin" as string]: `${duration}s`,
                      ["--spin-dir" as string]: reverse ? "reverse" : "normal",
                      ["--spin-counter-dir" as string]: reverse
                        ? "normal"
                        : "reverse",
                      animationPlayState: paused ? "paused" : undefined,
                    }}
                  >
                    {ringSkills.map((skill, i) => {
                      const angle = (i / ringSkills.length) * 360;
                      const isFocused = focused?.name === skill.name;
                      return (
                        <div
                          key={skill.name}
                          className="absolute left-1/2 top-1/2"
                          style={{
                            transform: `rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`,
                          }}
                        >
                          <div
                            className="orbit-counter"
                            style={{
                              ["--spin" as string]: `${duration}s`,
                              ["--spin-counter-dir" as string]: reverse
                                ? "normal"
                                : "reverse",
                              animationPlayState: paused ? "paused" : undefined,
                            }}
                          >
                            <button
                              type="button"
                              aria-label={skill.name}
                              onMouseEnter={() => setFocused(skill)}
                              onMouseLeave={() => setFocused(null)}
                              onFocus={() => setFocused(skill)}
                              onClick={() => setFocused(skill)}
                              className={`flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-paper shadow-sm transition-all duration-300 sm:h-12 sm:w-12 ${
                                isFocused
                                  ? "scale-125 border-accent"
                                  : "border-line hover:border-fog"
                              }`}
                            >
                              <BrandIcon
                                slug={skill.slug}
                                className="h-5 w-5 text-cloud sm:h-6 sm:w-6"
                                color={brandColor(skill.slug)}
                              />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* center hub */}
        <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-line bg-paper text-center shadow-sm sm:h-32 sm:w-32">
          {focused ? (
            <>
              <span className="max-w-[90%] truncate px-2 text-sm font-medium text-cloud">
                {focused.name}
              </span>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-fog">
                {focused.group}
              </span>
            </>
          ) : (
            <>
              <span className="text-sm font-medium text-cloud">{active}</span>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-fog">
                {visible.length} skills
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
