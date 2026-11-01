export const languages = ['en', 'pl', 'uk'] as const;
export type Language = (typeof languages)[number];

export interface PortfolioContent {
  title: string;
  description: string;
  languageNavigation: string;
  introductionLabel: string;
  introduction: string;
  githubLabel: string;
}
