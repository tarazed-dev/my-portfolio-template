"use client";

import { skillGroups, type SkillLevel } from "@/lib/data";
import { FadeInUp } from "@/components/FadeInUp";
import SectionHeading from "@/components/SectionHeading";

const levelLabels: Record<SkillLevel, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
};

const levelColors: Record<SkillLevel, string> = {
  beginner: "bg-amber-500 text-amber-100",
  intermediate: "bg-sky-500 text-sky-100",
  advanced: "bg-violet-500 text-violet-100",
  expert: "bg-emerald-500 text-emerald-100",
};

const groupCardStyles: Record<string, string> = {
  Frontend: "border-violet-500/20",
  Backend: "border-emerald-500/20",
  Tools: "border-sky-500/20",
};

const groupTitleStyles: Record<string, string> = {
  Frontend: "text-white",
  Backend: "text-white",
  Tools: "text-white",
};

/** Tech icon placeholder using first letter */
function SkillIcon({ name, level }: { name: string; level: SkillLevel }) {
  return (
    <div
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded ${levelColors[level]} bg-opacity-25`}
    >
      {name.charAt(0)}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-max mx-auto">
        <FadeInUp>
          <SectionHeading
            title="Skills & Technologies"
            subtitle="Tools and technologies I use to bring ideas to life"
          />
        </FadeInUp>

        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <FadeInUp key={group.title} delay={groupIndex * 0.15}>
              <div className={`rounded-lg border p-6 ${groupCardStyles[group.title] ?? "border-white/20"}`}>
                <h3 className={`mb-6 text-lg font-semibold ${groupTitleStyles[group.title] ?? "text-white"}`}>
                  {group.title}
                </h3>
                <ul className="space-y-4">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <SkillIcon name={skill.name} level={skill.level} />
                          <span className="text-sm font-medium text-white">{skill.name}</span>
                        </div>
                        <span className={`rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.16em] ${levelColors[skill.level]}`}>
                          {levelLabels[skill.level]}
                        </span>
                      </div>

                      <div className="mt-2 h-2 w-full rounded bg-white/10">
                        <div
                          className={`h-full rounded ${levelColors[skill.level]}`}
                          style={{ width: `${skill.progress}%`, opacity: 0.85 }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
