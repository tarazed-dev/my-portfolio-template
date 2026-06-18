"use client";

import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { aboutText, siteConfig, stats, avatarAbout } from "@/lib/data";
import { FadeInUp } from "@/components/FadeInUp";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-max mx-auto">
        <FadeInUp>
          <SectionHeading
            title="About Me"
            subtitle="Get to know the person behind the code"
          />
        </FadeInUp>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Avatar and bio */}
          <FadeInUp delay={0.1}>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
              <div className="relative shrink-0">
                <div className="relative h-36 w-36 overflow-hidden rounded-full border border-white/20 sm:h-44 sm:w-44">
                  <Image
                    src={avatarAbout}
                    alt={siteConfig.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 144px, 176px"
                  />
                </div>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-gray-400">{aboutText}</p>
                <div className="mt-6 flex gap-4">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm hover:border-white/40 hover:text-white"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm hover:border-white/40 hover:text-white"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Stats cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <FadeInUp key={stat.label} delay={0.2 + index * 0.1}>
                <div className="rounded-lg p-6 text-center">
                  <p className="text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
