import type { ExperienceFact, Language, ProjectFact, SkillId } from "./types";

// Shared facts. Dates refer to employment, not to the unconfirmed promotion date.
export const profile = {
  name: "Valeriia Iakovleva",
  currentRole: "Data Maintenance Specialist",
  employer: "Dentons Business Services EMEA",
  github: "https://github.com/Valeriia-Iakovleva",
  repository: "https://github.com/Valeriia-Iakovleva/CV-Portfolio",
  degreeInstitution: "Kharkiv National University of Radio Electronics",
  degreeStart: "2020",
  degreeEnd: "2024",
} as const;
export const experience = [
  {
    id: "dentons",
    title: "Data Maintenance Specialist",
    employer: profile.employer,
    start: "2024-10",
    end: null,
    tools: ["Power Automate", "Power BI", "Excel", "Microsoft Lists", "3E"],
  },
  {
    id: "pontera",
    title: "Account Operations Analyst",
    employer: "Pontera",
    start: "2023-08",
    end: "2024-08",
    tools: [],
  },
  {
    id: "worknest",
    title: "Data Entry Specialist",
    employer: "WorkNest Technologies",
    start: "2022-07",
    end: "2023-08",
    tools: ["Excel", "Google Sheets", "Jira", "Confluence"],
  },
  {
    id: "epam",
    title: "Junior Backend Specialist",
    employer: "EPAM",
    start: "2021-09",
    end: "2022-02-22",
    tools: [".NET Framework", ".NET Core", "Jira", "Asana"],
  },
] as const satisfies readonly ExperienceFact[];
export const projectFacts = [
  {
    id: "daily-report",
    status: "completed",
    tools: ["Power Automate", "Power BI", "Paginated reports", "Excel"],
    repo: null,
    pullRequest: null,
    live: null,
  },
  {
    id: "follow-up",
    status: "in-progress",
    tools: ["Power Automate"],
    repo: null,
    pullRequest: null,
    live: null,
  },
  {
    id: "portfolio",
    status: "in-progress",
    tools: ["Astro", "TypeScript", "CSS", "GitHub Pages"],
    repo: profile.repository,
    pullRequest: "https://github.com/Valeriia-Iakovleva/CV-Portfolio/pull/1",
    live: "https://valeriia-iakovleva.github.io/CV-Portfolio/",
  },
] as const satisfies readonly ProjectFact[];
export const skillTools = {
  automation: [
    "Power Automate",
    "Power BI",
    "Excel",
    "Microsoft Lists",
    "SharePoint",
  ],
  data: [
    "Python",
    "R",
    "SQL",
    "TypeScript",
    "Office Scripts",
    "VBA",
    "Power Query",
    "Jupyter Notebook",
  ],
  collaboration: [],
} as const satisfies Record<SkillId, readonly string[]>;
export function formatPeriod(
  start: string,
  end: string | null,
  language: Language,
  present: string,
) {
  const locale = { en: "en-GB", pl: "pl-PL", uk: "uk-UA" }[language];
  const format = (value: string) =>
    new Intl.DateTimeFormat(locale, {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(
      new Date(`${value.length === 10 ? value : value + "-01"}T00:00:00Z`),
    );
  if (start.length === 4) return `${start} — ${end ?? present}`;
  return `${format(start)} — ${end ? format(end) : present}`;
}
