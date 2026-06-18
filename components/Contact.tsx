"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/data";
import { FadeInUp } from "@/components/FadeInUp";
import SectionHeading from "@/components/SectionHeading";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="container-max mx-auto">
        <FadeInUp>
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a project in mind? Let&apos;s build something great together."
          />
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="max-w-2xl mx-auto text-center rounded-lg border border-white/10 bg-gradient-to-b from-black/40 to-black/30 p-8">
            <p className="text-gray-300 mb-4">I&apos;m open to freelance and full-time opportunities. Reach out and let&apos;s talk.</p>

            <div className="flex flex-col items-center gap-3">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-gray-200 hover:text-white">
                <Mail size={20} />
                <span className="text-sm">{siteConfig.email}</span>
              </a>

              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-gray-200 hover:text-white">
                <Phone size={20} />
                <span className="text-sm">{siteConfig.phone}</span>
              </a>
            </div>

            <div className="mt-6 flex justify-center gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="flex h-10 w-10 items-center justify-center rounded bg-white/5 text-gray-200 hover:bg-white/10">
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </div>

            <div className="mt-6">
              <span className="inline-block rounded-full bg-emerald-500/10 text-emerald-400 px-3 py-1 text-xs">Available for hire</span>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}