export type SupportedLanguage = "en" | "pt";

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface ProfileContent {
  name: string;
  role: string;
  headline: string;
  heroDescription: string;
  about: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  type?: "cover" | "gallery";
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  result: string;
  features?: string[];
  technologies: string[];
  images: ProjectImage[];
  links?: ProjectLink[];
  confidentialityNote?: string;
}

export interface SeoContent {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  language: string;
  canonicalPath: string;
}

export interface PortfolioContent {
  navigation: NavigationItem[];
  profile: ProfileContent;
  skills: SkillGroup[];
  projects: Project[];
  seo: SeoContent;
  contact: {
    title: string;
    description: string;
    cta: string;
  };
  footer: {
    text: string;
  };
}
