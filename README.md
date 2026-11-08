# CV-Portfolio

Valeriia Iakovleva’s personal CV–portfolio: work experience, implemented and ongoing projects, education, skills, and GitHub contact in English, Polish, and Ukrainian. Built with Astro, TypeScript, and ordinary CSS; deployed as static files on GitHub Pages.

## Development

Use Node.js 24 (`.nvmrc`, also used in CI) and npm with the committed lockfile. The installed Astro version requires Node.js 22.23.4 or later; `package.json` records that minimum.

```sh
nvm use                   # optional, if nvm is installed
npm ci
npm run dev
```

Open the printed development address under `/CV-Portfolio/`. That entry redirects to `/CV-Portfolio/en/`; `/pl/` and `/uk/` are the other language routes beneath the same base. Cloud environments may require their own forwarded preview address.

```sh
npm run check             # Astro and TypeScript diagnostics
npm run build             # generate dist/
npm run test:site         # check the generated output; run after building
npm run test:html         # validate HTML and accessibility markup
npm run preview           # serve the production build
```

The project has no remote fonts or client framework. System Georgia and Arial/Helvetica stacks support Latin and Cyrillic. Navigation, CV content, and native project disclosures work without JavaScript. The optional script exposes the print button and preserves the section anchor across language switches, including copied language links.

## Structure and content

- `src/content/profile.ts`: shared facts, official job titles, dates, tools, project statuses, and evidence URLs.
- `src/content/types.ts`: supported locales, content IDs, and contracts for facts and translated copy.
- `src/content/en.ts`, `pl.ts`, `uk.ts`: translated wording; facts stay shared. Dates use the selected locale.
- `src/pages/[lang]/index.astro`: one page template for all three languages; `src/pages/index.astro` redirects to English.
- `src/layouts/BaseLayout.astro`: metadata, navigation, footer, and progressive enhancements.
- `src/components/`: career history, project entries, section headings, language navigation, and the decorative arrow.
- `src/styles/global.css`: palette, typography, responsive rules, focus states, and print layout.
- `scripts/check-site.mjs`: dependency-free regression checks against the built pages.
- `docs/`: content boundaries, readable CV draft, verification notes, and actual browser screenshots.

### Add experience or skills

Add an experience ID to `types.ts`, its facts to `experience` in `profile.ts`, and matching copy to all three translations. Keep official job titles shared. An `end` of `null` marks a current role; employment dates do not establish the date of a promotion. Add shared tool names to the relevant record or `skillTools`, and translate explanatory wording separately.

### Add projects or evidence

Add a project ID to `types.ts`, one `projectFacts` record, and matching `projects` copy in all three language files. The page groups projects from the shared `status` value (`completed` or `in-progress`); do not duplicate the grouping in the template. Confirm implementation before changing status.

Set `repo`, `pullRequest`, and `live` to real public URLs, or `null` when there is no public artifact. Each link renders independently. The live link points to production even when viewing a development preview. Internal professional work remains a high-level summary without fabricated source, metrics, or employer screenshots. A merged PR is evidence for its project, not a separate achievement.

Contact is GitHub-only. Do not add personal phone numbers, email addresses, private CV files, employer data, credentials, or local configuration. Use a GitHub privacy-safe noreply identity for commits. Review notes in `docs/content-review.md` and `docs/cv-draft-review.md` retain the content boundaries and owner review items.

## Validation and print

`test:html` validates all generated pages against html-validate’s standard, accessibility, and document presets, with zero warnings allowed. Integrity checks apply to cross-origin resources. This is markup validation, not a complete WCAG audit.

`test:site` checks the instant English redirect, locale pages and active navigation, matching official titles, unique IDs, local link targets, section anchors, base-prefixed scripts/styles/favicon, and absence of email addresses or personal contact URLs in source and output. It does not replace browser, accessibility, translation, or external-link review.

The Print / save as PDF button uses browser printing. Print CSS sets A4 margins, keeps project summaries and evidence links, hides controls and detailed case studies, and avoids splitting individual roles or the contact section. No generated PDF is committed as a current downloadable CV. Browser/PDF results and screenshots are recorded in [docs/QA.md](docs/QA.md).

## GitHub Pages

The site is hosted at https://valeriia-iakovleva.github.io/CV-Portfolio/ . `astro.config.mjs` defines the origin, `/CV-Portfolio` base, and trailing slashes. Update the configuration and regression-check expectations together if moving it.

`.github/workflows/pages.yml` installs with `npm ci`, checks types, builds, checks the generated site, and validates HTML on PRs and `main`. PR and feature-branch manual runs upload a `cv-review-<run ID>` artifact containing `dist/`, QA notes, and the committed screenshots for 14 days. Download it from the Actions run page; it is a review bundle, not a hosted preview. Serve its `dist/` under `/CV-Portfolio/` to retain correct asset paths. PRs do not upload a Pages artifact or deploy. The deploy job runs only for `main`, with Pages and identity write permissions confined to that job; the build needs only repository read access. Manual workflow runs on feature branches cannot deploy. Pages must be configured to use GitHub Actions.

Source on a review branch is not live until merged and successfully deployed. Review this CV expansion before merging; no merge or production deployment is part of the maintenance work.

