"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn, scrollToSection } from "@/lib/utils";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href.replace("#", ""));
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 font-plex font-[150]">
      <nav className="mx-auto flex h-14 items-center justify-end px-6 sm:px-8 md:justify-center">
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "text-xs uppercase tracking-[0.18em] transition-opacity duration-200 hover:opacity-100",
                    isActive ? "text-white opacity-100" : "text-white/45"
                  )}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white/45 transition-opacity hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "text-xs uppercase tracking-[0.18em] transition-opacity hover:opacity-100",
                      isActive ? "text-white opacity-100" : "text-white/45"
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
