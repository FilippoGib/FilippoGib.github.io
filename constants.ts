import { Experience, Project, Education, ExperienceAbroad } from './types';

export const PERSONAL_INFO = {
  name: "Filippo Gibertini",
  title: "Autonomous Driving & AI Engineering student",
  tagline: "Developing autonomous behaviour algorithms, computer vision applications, and ML solutions.",
  email: "filippogib@gmail.com",
  github: "https://github.com/FilippoGib",
  linkedin: "https://www.linkedin.com/in/filippo-gibertini-219519288/", 
  resumeLink: "/filippo_gibertini_curriculum.pdf", 
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Computer Vision Research Intern",
    company: "Sony Europe",
    location: "Zurich, Switzerland",
    period: "Feb 2026 — Jul 2026",
    description: [
      "Developing computer vision algorithms for advanced camera systems used in industrial robotics applications.",
      "Specialized in handling, processing, and synthesizing High Dynamic Range image data.",
      "Gained a strong understanding of project development workflows while significantly improving software engineering skills."
    ]
  },
  {
    role: "Autonomous Driving Lead",
    company: "MMR E-Driverless",
    location: "Modena, Italy",
    period: "Sept 2024 — Jan 2026",
    description: [
      "Leading the autonomous driving division of a Formula Student Driverless team.",
      "Managing a cross-functional team of computer, software, and AI engineering students.",
      "Overseeing the design, development, and deployment of perception, planning, simulation, and control software."
    ]
  },
  {
    role: "Autonomous Driving Software Engineer",
    company: "MMR E-Driverless",
    location: "Modena, Italy",
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
    link: "https://github.com/FilippoGib/visual_mapper.git" 
  },
  {
    title: "Real-Time Race-Line Tracker",
    description: "Real-time control algorithm based on LQR for race-line tracking, achieving a 35% reduction in lateral deviation during simulation and track tests.",
    technologies: ["Control Theory", "LQR", "Simulation", "C++"],
    link: "https://github.com/FilippoGib/new_LQR_control.git"
  },
  {
    title: "Smart Fridge",
    description: "Hardware-Software IoT solution exploiting object detection and OCR to track groceries and reduce food waste.",
    technologies: ["Computer Vision", "OCR", "Object Detection", "IoT"],
    link: "https://github.com/FilippoGib/Smart_Fridge.git"
  },
  {
    title: "Autonomous Driving Systems",
    description: "Developing autonomous driving solutions for the university course of Autonomous Driving Systems.",
    technologies: ["LiDAR", "Kalman Filter", "Computer Vision", "Vehicle Dynamics"],
    link: "https://github.com/FilippoGib/Autonomous_Driving_Systems.git"
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

export const EXPERIENCE_ABROAD: ExperienceAbroad[] = [
  {
    program: "Erasmus+ Traineeship",
    location: "Zurich, Switzerland",
    period: "Feb 2026 — Jul 2026"
  },
  {
    program: "Highschool Exchange Student Program",
    location: "Sydney, Australia",
    period: "Aug 2019 — Dec 2019"
  }
];