import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes with conditional logic */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Scroll to a section by id with smooth behavior */
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
