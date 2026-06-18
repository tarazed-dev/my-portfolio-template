# 🚀 Minimalist Portfolio Template

A modern, production-ready portfolio template built with **Next.js 14**, **React**, **TypeScript**, and **Tailwind CSS**. Fully customizable with a single configuration file.

![Portfolio Template](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop)

## ✨ Features

- ✅ **Minimalist Design** — Clean, modern aesthetic with subtle animations
- ✅ **Hero Section** — Animated typing effect with synthwave background
- ✅ **Smart Avatar System** — Use your own images or auto-generated SVG fallback
- ✅ **Skills Showcase** — Categorized skills with progress bars and color indicators
- ✅ **Project Portfolio** — Featured projects with descriptions and tech stacks
- ✅ **Testimonials** — Rotating carousel of client reviews
- ✅ **Contact Form** — Built-in contact form with server-side validation
- ✅ **Responsive Design** — Mobile-first, works on all devices
- ✅ **SEO Optimized** — Metadata, Open Graph, favicons included
- ✅ **Type-Safe** — Full TypeScript support
- ✅ **Single Config File** — Edit ONLY `lib/data.ts` to customize everything

## 🎯 One-File Customization

**Everything is controlled from `lib/data.ts`** — no need to touch component files!

```typescript
// lib/data.ts
export const siteConfig = {
  name: "Your Name",
  email: "your@email.com",
  github: "https://github.com/yourname",
  linkedin: "https://linkedin.com/in/yourname",
  // ... edit these 9 sections
};

# Install dependencies
npm install
```

### 2. Customize

Open `lib/data.ts` and update:
- **SECTION 1**: Personal information (name, email, links)
- **SECTION 2**: Avatar images (or leave empty for SVG)
- **SECTION 3**: Navigation links
- **SECTION 4**: Statistics/metrics
- **SECTION 5**: Skills and technologies
- **SECTION 6**: Featured projects
- **SECTION 7**: Testimonials
- **SECTION 8**: About/bio text
- **SECTION 9**: Hero code snippet

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── actions/
│   │   └── contact.ts           # Server action for contact form
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Main page
│   └── globals.css              # Global styles
├── components/
│   ├── About.tsx                # About section with avatar & stats
│   ├── Contact.tsx              # Contact form and info
│   ├── FadeInUp.tsx            # Fade-in animation wrapper
│   ├── Footer.tsx               # Site footer
│   ├── Hero.tsx                # Hero section with typing effect
│   ├── Navbar.tsx              # Navigation bar
│   ├── Projects.tsx             # Featured projects
│   ├── Skills.tsx               # Skills showcase
│   ├── SectionHeading.tsx       # Section title component
│   ├── Testimonials.tsx         # Testimonials carousel
│   ├── SubmitButton.tsx         # Contact form submit button
│   └── SynthwaveBackground.tsx  # Animated background
├── lib/
│   ├── data.ts                  # 📌 MAIN CONFIG FILE
│   └── utils.ts                 # Utility functions
├── public/
│   ├── favicon.svg              # Site favicon
│   └── assets/                  # Your images go here
├── lib/data.ts                  # Configuration (ONLY file to edit!)
├── SETUP_GUIDE.md              # Detailed setup instructions
├── CHECKLIST.md                # Pre-release checklist
└── package.json
```

## 🎨 Customization Guide

### Change Your Name & Contact Info
Edit `lib/data.ts` SECTION 1:
```typescript
export const siteConfig = {
  name: "Your Name",
  email: "your@email.com",
  phone: "+1 (555) 123-4567",
  github: "https://github.com/yourname",
  linkedin: "https://linkedin.com/in/yourname",
};
```

### Add Your Projects
Edit `lib/data.ts` SECTION 6:
```typescript
export const projects: Project[] = [
  {
    id: "unique-id",
    title: "Project Name",
    description: "What does this project do?",
    stack: ["Tech1", "Tech2", "Tech3"],
    liveUrl: "https://project.com",
    githubUrl: "https://github.com/user/repo",
    image: "https://images.unsplash.com/...",
  },
  // Add more projects...
];
```

### Update Skills
Edit `lib/data.ts` SECTION 5:
```typescript
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "advanced", progress: 85 },
      { name: "Next.js", level: "advanced", progress: 80 },
      // Edit or add more...
    ],
  },
];
```

### Add Testimonials
Edit `lib/data.ts` SECTION 7:
```typescript
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Client Name",
    role: "Their Job Title",
    avatar: avatarTest1, // or image URL
    content: "Their testimonial...",
  },
];
```

### Use Your Own Avatar Images
Place images in `/public/assets/` and update SECTION 2:
```typescript
export const avatarImgAbout = "/assets/avatar-about.png";
export const avatarImgTest1 = "/assets/avatar-test1.png";
```

Leave empty (`""`) to use auto-generated SVG fallback.

**Image Placement:**
```
public/
├── assets/
│   ├── avatar-about.png
│   ├── avatar-test1.png
│   ├── avatar-test2.png
│   └── avatar-test3.png
```

## 🌍 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy with one click

### Netlify
1. Build: `npm run build`
2. Deploy folder: `.next`
3. Follow Netlify deployment guide

### Other Platforms
Any platform supporting Next.js 14 works (AWS, Heroku, etc.)

## 📧 Contact Form

The contact form uses a server action. To enable email notifications:

1. Update the email in `lib/data.ts`:
   ```typescript
   email: "your.email@example.com"
   ```

2. Configure email service in `app/actions/contact.ts` (optional)

## 🔒 No Hardcoded Content

All text and links are in **ONE file**: `lib/data.ts`

✅ Easy to customize
✅ No need to edit components
✅ Version control friendly
✅ Perfect for selling as template

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React
- **Canvas**: Custom 2D graphics

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 📄 License

This template is provided as-is. Customize and use for your portfolio or as a template to sell.

## 🐛 Troubleshooting

**Build fails?**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

**Images not loading?**
- Check image URLs are correct and accessible
- Images must be in `/public` folder or use external URLs
- Hard refresh browser (Ctrl+Shift+R)

**Changes not showing?**
- Save `lib/data.ts`
- Hard refresh browser
- Restart dev server

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org)

## 🎯 For Template Buyers

If you purchased this template:

1. **Start with SETUP_GUIDE.md** — Complete customization guide
2. **Edit only lib/data.ts** — Don't touch component files
3. **Follow CHECKLIST.md** — Pre-release verification
4. **Deploy to Vercel** — Free and easy deployment

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed instructions.

---

**Ready to ship your portfolio?** 🚀

Start with `npm run dev` and customize `lib/data.ts`.
