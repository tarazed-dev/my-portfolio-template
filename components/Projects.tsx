"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { FadeInUp } from "@/components/FadeInUp";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-max mx-auto">
        <FadeInUp>
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of my recent work and open-source contributions"
          />
        </FadeInUp>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <FadeInUp key={project.id} delay={index * 0.1}>
              <article className="relative overflow-hidden rounded-lg border border-white/20">
                {/* Project image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>

                {/* Project info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded text-xs text-gray-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Action links */}
                  <div className="mt-4 flex gap-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:text-gray-300 flex items-center gap-1"
                    >
                      <ExternalLink size={16} /> Live demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white flex items-center gap-1"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </article>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
