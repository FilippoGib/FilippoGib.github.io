import { Experience, Project, Education } from './types';

export const PERSONAL_INFO = {
  name: "Filippo Gibertini",
  title: "Autonomous Driving & AI Engineer",
  tagline: "Developing autonomous systems, computer vision pipelines, and deep learning solutions.",
  email: "filippogib@gmail.com",
  github: "https://github.com/FilippoGib",
  linkedin: "https://www.linkedin.com/in/filippo-gibertini", // Please verify this URL is correct
  resumeLink: "/filippo_gibertini_curriculum.pdf", // We will move the PDF file in the next step
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Autonomous Driving Lead",
    company: "MMR E-Driverless",
    period: "Sept 2024 — Present",
    description: [
      "Leading the autonomous driving division of a Formula Student Driverless team.",
      "Managing a cross-functional team of computer, software, and AI engineering students.",
      "Overseeing the design, development, and deployment of perception, planning, simulation, and control software."
    ]
  },
  {
    role: "Autonomous Driving Software Engineer",
    company: "MMR E-Driverless",
    period: "Sept 2023 — Sept 2024",
    description: [
      "Collaborated with the team on the development and testing of path-planning and control modules.",
      "Contributed to the software architecture for autonomous racing vehicles."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Visual Mapping Pipeline",
    description: "Visual-Inertial Simultaneous Localization and Mapping (SLAM) pipeline tailored for Formula Student competitions, leveraging deep learning and classical CV.",
    technologies: ["Python", "C++", "OpenCV", "PyTorch", "SLAM"],
    link: "https://github.com/FilippoGib" // Update if you have a specific repo link
  },
  {
    title: "Real-Time Race-Line Tracker",
    description: "Real-time control algorithm based on LQR for race-line tracking, achieving a 35% reduction in lateral deviation during simulation and track tests.",
    technologies: ["Control Theory", "LQR", "Simulation", "C++"],
    link: "https://github.com/FilippoGib"
  },
  {
    title: "Smart Fridge",
    description: "Hardware-Software IoT solution exploiting object detection and OCR to track groceries and reduce food waste.",
    technologies: ["Computer Vision", "OCR", "Object Detection", "IoT"],
    link: "https://github.com/FilippoGib"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Master's in AI Engineering",
    school: "University of Modena and Reggio-Emilia",
    year: "2024 — Present"
  },
  {
    degree: "B.S. Computer Engineering",
    school: "University of Modena and Reggio-Emilia",
    year: "2021 — 2024"
  }
];