import { Experience, Project, Education } from './types';

export const PERSONAL_INFO = {
  name: "Alex Dev",
  title: "Senior Software Engineer",
  tagline: "Building accessible, pixel-perfect, performant web experiences.",
  email: "alex.dev@example.com",
  github: "https://github.com/alexdev",
  linkedin: "https://linkedin.com/in/alexdev",
  resumeLink: "./resume.pdf", // Relative path for GitHub Pages compatibility
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Nebula Stream",
    period: "2021 — Present",
    description: [
      "Architected a streaming dashboard used by 50k+ daily users using React and WebSockets.",
      "Reduced bundle size by 35% through code splitting and tree shaking strategies.",
      "Mentored 3 junior developers and established internal code quality standards."
    ]
  },
  {
    role: "Software Engineer",
    company: "TechFlow Solutions",
    period: "2018 — 2021",
    description: [
      "Developed a SaaS platform for workflow automation using TypeScript and Node.js.",
      "Implemented a comprehensive design system ensuring UI consistency across 4 products.",
      "Collaborated with UX designers to improve user retention by 15%."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "EcoTrack",
    description: "A carbon footprint calculator web app visualizing personal environmental impact.",
    technologies: ["React", "D3.js", "Firebase", "Tailwind"],
    link: "https://ecotrack.demo"
  },
  {
    title: "CodeSync",
    description: "Real-time collaborative code editor supporting multiple languages.",
    technologies: ["Next.js", "WebSockets", "Monaco Editor"],
    link: "https://codesync.demo"
  },
  {
    title: "VisionUI",
    description: "An open-source accessible component library for React applications.",
    technologies: ["TypeScript", "React", "Aria", "Storybook"],
    link: "https://visionui.demo"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.S. Computer Science",
    school: "University of Technology",
    year: "2018"
  }
];