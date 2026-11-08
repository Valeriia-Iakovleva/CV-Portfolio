import type { PortfolioContent } from "./types";
import { profile } from "./profile";

export default {
  title: `${profile.name} — CV & Portfolio`,
  description:
    "Valeriia Iakovleva: Data Maintenance Specialist, Computer Science graduate, and practical process automation. Experience, selected projects, and work in progress.",
  languageNavigation: "Choose language",
  introductionLabel: "CV & Portfolio",
  location: "Warsaw, Poland",
  headline: "Business understanding. Practical improvements.",
  introduction:
    "I work with business data, processes, and automation at Dentons. I enjoy understanding how work gets done, investigating what could work better, and turning that understanding into useful tools.",
  githubLabel: "GitHub profile",
  focusTitle: "Where I’m heading",
  focus:
    "Growing from data operations and automation toward digital solutions engineering, with a Computer Science foundation and a business-first approach.",
  about: [
    "My experience connects finance-related data operations with process improvement. I work with international stakeholders, investigate issues, and help colleagues turn complex processes into clear, repeatable work.",
    "I’m especially interested in the whole path from understanding a business need to building a solution, testing it, documenting it, and helping people use it. My longer-term direction is solution architecture.",
  ],
  nav: {
    experience: "Experience",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  },
  ui: {
    skip: "Skip to content",
    explore: "Explore my projects",
    readCV: "Read my experience",
    print: "Print / save as PDF",
    present: "Present",
    current: "Current role",
    previous: "Previously Junior Data Maintenance Specialist",
    experienceIntro:
      "The roles and responsibilities that shaped how I approach a problem.",
    experienceTitle: "Work experience",
    educationTitle: "Education",
    skillsTitle: "Tools & strengths",
    languagesTitle: "Languages",
    aboutTitle: "A little about me",
    projectsTitle: "Selected projects",
    projectsIntro:
      "Practical work, explained through the problem, my contribution, and the current result.",
    completed: "Implemented",
    inProgress: "In progress",
    completedGroup: "Completed work",
    inProgressGroup: "Work in progress",
    details: "Explore the project",
    problem: "The problem",
    contribution: "My contribution",
    outcome: "Result / next step",
    scope: "Scope",
    viewSource: "View source",
    viewLive: "View website",
    viewPR: "Merged pull request",
    duration: "Internship",
    contactTitle: "Let’s connect.",
    contactText:
      "For conversations about my experience, projects, and digital solutions.",
    email: "Email me",
    footer: "Personal CV & portfolio",
    statusNote: "",
    ongoingWebsite: "Live foundation · expanding the CV and portfolio",
  },
  experience: {
    epam: {
      summary:
        "Backend development internship focused on migrating an application from .NET Framework to .NET Core.",
      bullets: [
        "Contributed to rewriting an existing application as part of its migration from .NET Framework to .NET Core.",
        "Worked in a ticket-driven environment using Jira/Asana, with a strong focus on technical requirements.",
      ],
      note: "Approximate start: September 2021. Internship ended on 22 February 2022.",
    },
    dentons: {
      summary:
        "Business and client data operations, workflow automation, and support for teams across an international law firm.",
      note: "Promoted to Specialist; the employment period below includes my previous Junior role.",
      bullets: [
        "Maintain and validate business data, investigate inconsistencies, and work with stakeholders to resolve operational issues.",
        "Build and test Power Automate workflows, bringing together reporting outputs and Excel-based enrichment.",
        "Support 3E implementation through process guidance, manuals, and practical tools.",
        "Create trackers and process documentation, train colleagues, and help teams adopt new workflows.",
      ],
    },
    pontera: {
      summary:
        "Financial data operations supporting clients in the American financial market.",
      bullets: [
        "Reviewed sensitive financial data and managed operational work under reporting deadlines and quality requirements.",
        "Investigated errors and restored incomplete or inconsistent legacy database records.",
        "Developed data-processing scripts and collaborated with Finance Operations and Customer Support on process issues.",
      ],
    },
    worknest: {
      summary:
        "Structured data maintenance and task coordination in an international remote team.",
      bullets: [
        "Processed and reviewed operational data using Excel, Google Sheets, and internal systems.",
        "Used task-tracking and documentation tools to keep daily work and project updates organized.",
        "Collected information for operational reporting while maintaining quality in KPI-based workflows.",
      ],
    },
  },
  education: {
    degree: "Bachelor’s degree in Computer Science",
    track: "Artificial Intelligence track",
    topics:
      "Database design, SQL, programming, web applications, data analysis, algorithms, and intelligent systems.",
  },
  skills: {
    automation: {
      title: "Automation & reporting",
      description:
        "Practical workflows, reporting, spreadsheet tools, and structured operational tracking.",
    },
    data: {
      title: "Data & programming",
      description:
        "Data processing, Python/R scripting, SQL fundamentals, and spreadsheet automation with TypeScript, Office Scripts, VBA, and Power Query.",
    },
    collaboration: {
      title: "Business & people",
      description:
        "Understanding requirements, improving processes, documenting decisions, and supporting users.",
    },
  },
  spokenLanguages: {
    en: {
      name: "English",
      level: "Professional working proficiency · B2+",
    },
    pl: {
      name: "Polish",
      level: "B2 placement result · working communication",
    },
    uk: {
      name: "Ukrainian",
      level: "Native",
    },
    ru: {
      name: "Russian",
      level: "Native",
    },
  },
  projects: {
    "daily-report": {
      title: "Master File reporting & workflow tool",
      context: "Professional work · Dentons",
      summary:
        "A Jira-dashboard-inspired operational tool combining daily reporting, Master File splitting, and exception handling within a restricted toolset.",
      problem:
        "The team needed a clear view of daily work and individual exceptions. Available tools were limited, and stakeholders required a deliberately simple user experience.",
      contribution: [
        "Designed and implemented one workflow covering daily reporting and Master File splitting, rather than separate projects.",
        "Connected Power BI and paginated report output with Excel enrichment, notes, and individual exceptions through Power Automate.",
        "Adapted a dashboard-inspired approach to the permitted tools and strict stakeholder requirements for simplicity.",
        "Prepared process guidance and helped colleagues use the tool in daily work.",
      ],
      outcome:
        "Implemented for team use, supporting more consistent reporting and less repetitive preparation. No numerical impact is claimed.",
      limitation:
        "High-level professional summary. Employer data, internal code, system details, and confidential instructions are not published.",
    },
    "follow-up": {
      title: "Email follow-up automation",
      context: "Professional project · Dentons",
      summary:
        "An ongoing workflow for structured follow-up, with a designed decision matrix and log-data extraction and status views in development.",
      problem:
        "Follow-up should make pending communication visible while preventing incorrect, duplicate, or unintended messages to senior stakeholders.",
      contribution: [
        "Designed the follow-up decision matrix.",
        "Designing the data-extraction list for logging and visualizations of current status.",
        "Finishing the Power Automate flow and investigating user lookup by first name and surname.",
        "Identified reliable recipient resolution and prevention of unintended or duplicate messages as requirements before release.",
      ],
      outcome:
        "In progress. Current work focuses on extraction and logging design, status visualization, completion of the flow, and reliable recipient lookup.",
      limitation:
        "No production-ready or safely automated sending is claimed. Recipient validation and protection against unintended messages remain requirements to verify before release.",
    },
    portfolio: {
      title: "This CV & portfolio",
      context: "Personal project",
      summary:
        "A multilingual home for my experience and projects, built step by step with Astro and TypeScript.",
      problem:
        "I wanted a personal, maintainable CV website that works in English, Polish, and Ukrainian.",
      contribution: [
        "Chose the stack, visual direction, content structure, and three-language approach.",
        "Developing the site with Codex assistance, shared templates, typed content, and ordinary CSS.",
        "Published the introduction through GitHub Actions and GitHub Pages; now expanding the CV and project content.",
      ],
      outcome:
        "The multilingual introduction is live. This expansion adds experience and project summaries for review.",
      limitation:
        "Work in progress. Code and content are developed with AI assistance and reviewed as the site evolves.",
    },
  },
} satisfies PortfolioContent;
