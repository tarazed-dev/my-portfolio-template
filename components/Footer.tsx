import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/20">
      <div className="container-max mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-gray-400">{siteConfig.role}</p>
          </div>

          {/* Footer navigation */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="text-gray-400 hover:text-white"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
