export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  location:string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface ExperienceAbroad {
  program: string;
  location: string;
  period: string;
}