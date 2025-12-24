export interface FileInfo {
  url: string;
}

export interface PersonalInfo {
  firstname: string;
  lastname: string;
  title: string;
  description?: string;
  aboutMe?: string;
  email: string;
  phone?: string;
  location?: string;
  cvUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  file?: FileInfo;
}

export interface SkillCategory {
  name: string;
}

export interface Skill {
  name: string;
  level: string;
  category: SkillCategory;
  file?: FileInfo;
  icon?: string | null;
}

export interface SkillsByCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  location: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  file?: FileInfo;
  skills: Skill[];
}

export interface Settings {
  titleAbout?: string | null;
  subTitleAbout?: string | null;
  titleSkills?: string | null;
  subTitleSkills?: string | null;
  titleExperiences?: string | null;
  subTitleExperiences?: string | null;
  titleProjects?: string | null;
  subTitleProjects?: string | null;
  titleContact?: string | null;
  subTitleContact?: string | null;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skillsByCategory: SkillsByCategory[];
  experiences: Experience[];
  projects: Project[];
  settings?: Settings;
}

export interface ContactMessageData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
