/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * PORTFOLIO CONFIGURATION FILE
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * This is the ONLY file you need to edit to customize your entire portfolio.
 * All content on the website is pulled from this configuration.
 * 
 * Do NOT edit component files unless you know what you're doing.
 * This file controls: text, links, images, skills, projects, testimonials, and more.
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

/**
 * SECTION 1: PERSONAL & SITE INFO
 * 
 * Edit these fields to match your information:
 * - name: Your full name (displayed in navbar, hero, footer)
 * - title: SEO title (shown in browser tab and search results)
 * - description: Short SEO description
 * - role: Your job title (Backend Developer, Full-Stack Engineer, etc.)
 * - tagline: Your personal tagline/slogan
 * - email: Your email (used in contact form and footer)
 * - phone: Your phone number (optional, used in contact page)
 * - github: Full GitHub profile URL
 * - linkedin: Full LinkedIn profile URL
 * - cvPath: Path to your resume PDF (stored in /public folder)
 * - url: Your portfolio website domain
 */
export const siteConfig = {
  name: "Tarazed",
  title: "Tarazed — Backend Developer",
  description:
    "Backend Developer specializing in Node.js, React, REST APIs, and PostgreSQL. Building scalable, production-ready applications.",
  url: "https://yourportfolio.dev",
  email: "tarazed.dev@gmail.com",
  phone: "+1 (555) 123-4567",
  role: "Backend Developer",
  tagline: "I build scalable APIs and full-stack solutions that ship fast and scale reliably.",
  github: "https://github.com/tarazed-dev",
  linkedin: "https://linkedin.com/in/your-username",
  cvPath: "/cv.pdf",
};

/**
 * SECTION 2: AVATAR CONFIGURATION
 * 
 * SMART AVATAR SYSTEM: Use your own images, or fallback to auto-generated SVGs
 * 
 * How to use:
 * 1. Add your image paths below (relative to /public folder)
 * 2. System automatically uses your images if path is provided
 * 3. If you leave path EMPTY (""), SVG generator takes over as backup
 * 
 * Example:
 *   avatarImgAbout = "assets/avatar-about.png"  // Uses your image
 *   avatarImgAbout = ""                         // Falls back to SVG
 * 
 * Supported formats: PNG, JPG, SVG, WebP, GIF
 */

// ============ STEP 1: DEFINE YOUR IMAGE PATHS ============
// Leave empty ("") to use auto-generated SVG fallback
// Note: Paths must start with "/" and images go in /public folder
export const avatarImgAbout = "/assets/avatar-about.png";
export const avatarImgTest1 = "/assets/avatar-test1.png";
export const avatarImgTest2 = "/assets/avatar-test2.png";
export const avatarImgTest3 = "/assets/avatar-test3.png";

// ============ STEP 2: SVG FALLBACK SYSTEM (Don't modify) ============
// These are auto-generated SVG avatars used when image path is empty
const svgToDataUrl = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const avatarSvg1 = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120' width='120' height='120'>
  <rect width='120' height='120' rx='18' fill='#0f172a' />
  <circle cx='60' cy='48' r='26' fill='#fde68a' />
  <rect x='36' y='74' width='48' height='18' rx='6' fill='#7c3aed' />
  <circle cx='52' cy='44' r='3' fill='#111827' />
  <circle cx='68' cy='44' r='3' fill='#111827' />
</svg>`;

const avatarSvg2 = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120' width='120' height='120'>
  <rect width='120' height='120' rx='18' fill='#021124' />
  <ellipse cx='60' cy='50' rx='26' ry='28' fill='#ffd6a5' />
  <path d='M30 78c8-10 28-12 60 0' fill='#ffb4a2' opacity='0.1'/>
  <rect x='34' y='78' width='52' height='16' rx='6' fill='#06b6d4' />
  <circle cx='50' cy='48' r='3' fill='#0f172a' />
  <circle cx='70' cy='48' r='3' fill='#0f172a' />
</svg>`;

const avatarSvg3 = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120' width='120' height='120'>
  <rect width='120' height='120' rx='18' fill='#071834' />
  <circle cx='60' cy='50' r='26' fill='#c7f9cc' />
  <rect x='34' y='76' width='52' height='14' rx='6' fill='#f472b6' />
  <circle cx='52' cy='48' r='3' fill='#04232b' />
  <circle cx='68' cy='48' r='3' fill='#04232b' />
</svg>`;

// ============ STEP 3: SMART SELECTOR (Automatically uses image or SVG) ============
// This function checks if image path is provided; if not, uses SVG fallback
const getAvatarUrl = (imagePath: string, svgFallback: string): string => {
  // If image path is provided and not empty, use it; otherwise use SVG
  return imagePath.trim() !== "" ? imagePath : svgToDataUrl(svgFallback);
};

// ============ FINAL EXPORTS (Used in components) ============
export const avatarAbout = getAvatarUrl(avatarImgAbout, avatarSvg1);
export const avatarTest1 = getAvatarUrl(avatarImgTest1, avatarSvg1);
export const avatarTest2 = getAvatarUrl(avatarImgTest2, avatarSvg2);
export const avatarTest3 = getAvatarUrl(avatarImgTest3, avatarSvg3);

/**
 * SECTION 3: NAVIGATION LINKS
 * 
 * These define the navigation menu items shown in the navbar.
 * href values must match section IDs on the page (e.g., #skills, #projects).
 */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/**
 * SECTION 4: STATISTICS (displayed in About section)
 * 
 * These are the key metrics shown as cards in your portfolio.
 * Example: Years of Experience, Projects Completed, Happy Clients
 * You can add, remove, or edit any stat here.
 */
export const stats = [
  { label: "Years of Experience", value: "4+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Happy Clients", value: "15+" },
];

/**
 * SECTION 5: SKILLS & TECHNOLOGIES
 * 
 * Edit the skillGroups array to change skills displayed on your site.
 * 
 * level: "beginner" | "intermediate" | "advanced" | "expert"
 * progress: number from 0 to 100 (shown as progress bar)
 * 
 * Each group (Frontend, Backend, Tools) displays as a separate card.
 * Colors: Frontend=violet, Backend=emerald, Tools=sky
 */
export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface Skill {
  name: string;
  level: SkillLevel;
  progress: number;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "advanced", progress: 85 },
      { name: "Next.js", level: "advanced", progress: 80 },
      { name: "TypeScript", level: "advanced", progress: 88 },
      { name: "Tailwind CSS", level: "expert", progress: 92 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "expert", progress: 95 },
      { name: "Express", level: "expert", progress: 90 },
      { name: "NestJS", level: "advanced", progress: 85 },
      { name: "PostgreSQL", level: "advanced", progress: 88 },
      { name: "Redis", level: "advanced", progress: 82 },
      { name: "Prisma", level: "advanced", progress: 86 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Docker", level: "advanced", progress: 80 },
      { name: "Git", level: "expert", progress: 92 },
      { name: "GitHub Actions", level: "advanced", progress: 78 },
      { name: "Postman", level: "expert", progress: 90 },
      { name: "Figma", level: "intermediate", progress: 65 },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
}

/**
 * SECTION 6: FEATURED PROJECTS
 * 
 * Add your projects here. Each project card displays:
 * - title: Project name
 * - description: Short description (2-3 sentences)
 * - stack: List of technologies used
 * - liveUrl: Link to live demo
 * - githubUrl: Link to GitHub repository
 * - image: Project screenshot URL (you can use unsplash.com for free images)
 * 
 * To add/remove projects, simply add/remove objects from the array.
 */
export const projects: Project[] = [
  {
    id: "project-1-cloud-sync",
    title: "CloudSync Pro",
    description:
      "Real-time file synchronization service with automatic conflict resolution. Features end-to-end encryption, version history, and collaborative editing capabilities.",
    stack: ["Node.js", "Express", "PostgreSQL", "WebSocket", "Docker", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
  },
  {
    id: "project-2-analytics",
    title: "DataInsight Analytics",
    description:
      "Full-stack analytics platform for SaaS metrics. Includes real-time dashboards, custom report builder, and predictive analytics powered by machine learning.",
    stack: ["Next.js", "TypeScript", "React", "PostgreSQL", "Redis", "TensorFlow"],
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  },
  {
    id: "project-3-workflow",
    title: "WorkflowHub",
    description:
      "Automation platform for team workflows. Build, schedule, and monitor complex automation processes without coding. Includes 200+ pre-built integrations.",
    stack: ["React", "Node.js", "MongoDB", "RabbitMQ", "Docker", "Kubernetes"],
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
  },
  {
    id: "project-4-security",
    title: "SecureVault",
    description:
      "Enterprise password management and secrets vault. Zero-knowledge encryption, audit logging, and API-first architecture for seamless team integration.",
    stack: ["NestJS", "PostgreSQL", "Redis", "Cryptography", "Docker", "Vault"],
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

/**
 * SECTION 7: TESTIMONIALS / CLIENT REVIEWS
 * 
 * Add quotes from clients or colleagues here.
 * Each testimonial displays on a carousel in the testimonials section.
 * avatar: Uses auto-generated SVGs (avatarTest1/2/3) or you can use image URLs
 */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Emma Richardson",
    role: "CTO at InnovateTech",
    avatar: avatarTest1,
    content:
      "Excellent work on the API architecture. The code is clean, performant, and production-ready. Their attention to security best practices is outstanding.",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "Founder at DataFlow Systems",
    avatar: avatarTest2,
    content:
      "Professional, reliable, and incredibly skilled. They delivered the analytics platform on time and exceeded our expectations. Highly recommended for any backend project.",
  },
  {
    id: "3",
    name: "Lisa Watanabe",
    role: "Engineering Lead at CloudTech",
    avatar: avatarTest3,
    content:
      "Outstanding technical expertise and communication. They understood our complex requirements and built a scalable solution that's been rock-solid in production for months.",
  },
];

export const socialLinks = [
  { label: "GitHub", href: siteConfig.github, icon: "github" as const },
  { label: "LinkedIn", href: siteConfig.linkedin, icon: "linkedin" as const },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: "mail" as const },
];

/**
 * SECTION 8: ABOUT TEXT & BIO
 * 
 * This is displayed in the About section of your portfolio.
 * Edit this to tell your professional story in 2-3 sentences.
 */
export const aboutText = `I'm a Backend Developer with a passion for building robust, scalable server-side applications. I specialize in Node.js ecosystems, designing RESTful APIs, and architecting database solutions with PostgreSQL. With several years of experience in full-stack development, I've worked with teams to deliver production-grade applications that handle millions of requests. When I'm not writing code, I'm exploring new technologies and contributing to the developer community.`;

/**
 * SECTION 9: HERO CODE SNIPPET
 * 
 * This code snippet is displayed as a visual element in the Hero section.
 * It creates a visual appeal and gives visitors a quick sense of who you are.
 * You can change the object to match your real skills/info.
 * 
 * ⚠️ IMPORTANT: Keep the structure the same (const developer = { ... })
 *    The animation effects depend on this structure staying intact!
 */
export const heroCodeSnippet = `const developer = {
  name: "Your Name",
  role: "Backend Developer",
  stack: ["Node.js", "React", "PostgreSQL"],
  available: true,
  build: () => "scalable APIs",
};`;
