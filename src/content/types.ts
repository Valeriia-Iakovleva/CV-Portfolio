export const languages = ["en", "pl", "uk"] as const;
export type Language = (typeof languages)[number];
export type ExperienceId = "dentons" | "pontera" | "worknest" | "epam";
export type ProjectId = "daily-report" | "follow-up" | "portfolio";
export type SkillId = "automation" | "data" | "collaboration";
export interface ExperienceCopy {
  summary: string;
  bullets: string[];
  note?: string;
}
export interface ProjectCopy {
  title: string;
  summary: string;
  context: string;
  problem: string;
  contribution: string[];
  outcome: string;
  limitation: string;
}
export interface PortfolioContent {
  title: string;
  description: string;
  languageNavigation: string;
  introductionLabel: string;
  introduction: string;
  githubLabel: string;
  location: string;
  headline: string;
  focus: string;
  focusTitle: string;
  about: string[];
  nav: { experience: string; projects: string; about: string; contact: string };
  ui: {
    skip: string;
    explore: string;
    readCV: string;
    print: string;
    present: string;
    current: string;
    previous: string;
    experienceIntro: string;
    experienceTitle: string;
    educationTitle: string;
    skillsTitle: string;
    languagesTitle: string;
    aboutTitle: string;
    projectsTitle: string;
    projectsIntro: string;
    completed: string;
    inProgress: string;
    completedGroup: string;
    inProgressGroup: string;
    details: string;
    problem: string;
    contribution: string;
    outcome: string;
    scope: string;
    viewSource: string;
    viewLive: string;
    viewPR: string;
    duration: string;
    contactTitle: string;
    contactText: string;
    email: string;
    footer: string;
    statusNote: string;
    ongoingWebsite: string;
  };
  experience: Record<ExperienceId, ExperienceCopy>;
  education: { degree: string; track: string; topics: string };
  skills: Record<SkillId, { title: string; description: string }>;
  spokenLanguages: Record<
    "en" | "pl" | "uk" | "ru",
    { name: string; level: string }
  >;
  projects: Record<ProjectId, ProjectCopy>;
}
