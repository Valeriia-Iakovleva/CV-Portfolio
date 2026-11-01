import type { PortfolioContent } from './types';
import { profile } from './profile';

export default {
  title: `${profile.name} — Резюме та портфоліо`,
  description: "Працюю з бізнес-даними, процесами та автоматизацією в Dentons. Маю освіту в галузі комп’ютерних наук і розвиваюся в напрямі інженерії цифрових рішень.",
  languageNavigation: "Оберіть мову",
  introductionLabel: "Резюме та портфоліо",
  introduction: "Працюю з бізнес-даними, процесами та автоматизацією в Dentons. Маю освіту в галузі комп’ютерних наук і розвиваюся в напрямі інженерії цифрових рішень.",
  githubLabel: "Мій профіль на GitHub",
} satisfies PortfolioContent;
