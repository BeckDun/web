import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillGroups, type Skill } from "../data";
import BrandIcon, { brandColor } from "./BrandIcon";

const filters = ["All", ...skillGroups.map((g) => g.label)];

type FlatSkill = Skill & { group: string };

const allSkills: FlatSkill[] = skillGroups.flatMap((group) =>
  group.skills.map((skill) => ({ ...skill, group: group.label })),
);

export default function SkillBubbles() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? allSkills : allSkills.filter((s) => s.group === active);

  return (
    <div>
      {/* soft sort pills */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {filters.map((filter) => {
          const isActive = active === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
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

      {/* static logo circles */}
      <motion.div
        layout
        className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-4"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25 }}
              className="group relative"
            >
              <div
                aria-label={skill.name}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-paper shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-fog sm:h-[4.5rem] sm:w-[4.5rem]"
              >
                <BrandIcon
                  slug={skill.slug}
                  className="h-7 w-7 text-cloud sm:h-8 sm:w-8"
                  color={brandColor(skill.slug)}
                />
              </div>
              {/* name tooltip */}
              <span className="pointer-events-none absolute -bottom-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-line bg-paper px-3 py-1 font-mono text-[10px] text-cloud opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
