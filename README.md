# CV-Portfolio

Valeriia Iakovleva’s personal CV–portfolio, built with Astro, TypeScript, and ordinary CSS. It presents work experience, selected completed and ongoing projects, education, skills, languages, and professional contact details in English, Polish, and Ukrainian.

## Development

Requires Node.js 22.12+; Node.js 24 is used in CI. Use npm with the committed lockfile.

```sh
npm ci
npm run dev
```

Use the address returned by the environment’s preview mechanism. A localhost address works only when your browser can reach the machine hosting the server; it is not automatically accessible from a cloud task. The site base is `/CV-Portfolio/` and the entry leads to `/CV-Portfolio/en/`.

```sh
npm run check
npm run build
npm run preview
```

`check` validates Astro and TypeScript. `build` generates four static pages in `dist/`: the entry and three language versions. The introduction, CV content, navigation, and native project disclosures work without client JavaScript. A small optional script enables printing/saving as PDF and preserves the current section when switching languages.

## Content and components

- `src/content/profile.ts`: shared facts, employment dates, links, project status, and tool names. Employment periods do not imply the date of a promotion.
- `src/content/en.ts`, `pl.ts`, `uk.ts`: translated text matching `types.ts`. Dates use the selected locale.
- `src/content/types.ts`: shared content contracts and IDs.
- `src/components/ExperienceList.astro`: reusable career history.
- `src/components/ProjectEntry.astro`: project status, native details, and real source/PR links.
- `src/components/SectionHeading.astro`, `Arrow.astro`, and `LanguageSwitcher.astro`: shared UI.
- `src/pages/[lang]/index.astro`: one page template for all languages.
- `src/layouts/BaseLayout.astro`: metadata, navigation, footer, and progressive enhancements.
- `src/styles/global.css`: shared colours, typography, responsive and print layouts.
- `docs/content-review.md`: evidence boundaries and details awaiting the owner's review.

System Georgia and Arial/Helvetica stacks support Latin and Cyrillic without external font requests. Print styles produce a condensed CV; use the Print / save as PDF button or the browser's own print command. No outdated PDF is presented as a current downloadable CV.

## Editing

Keep facts and translated wording separate. Add work-history records and status/link facts in `profile.ts`, update the associated IDs in `types.ts`, and supply copy in all three language files. The shared page and components render the additions without copying entire pages.

Project links are rendered only for real artifacts. Internal professional work is described at a high level; the website's own repository and merged PR provide public technical evidence. Confirm completion status before changing an in-progress project to implemented. Do not introduce fictional metrics or employer screenshots.

## GitHub Pages

`.github/workflows/pages.yml` runs checks and the build on PRs. Successful builds on `main` deploy `dist/` using GitHub Pages. Pages is configured to use GitHub Actions.

The deployment destination is https://valeriia-iakovleva.github.io/CV-Portfolio/ . The source in a review branch is not live until merged and successfully deployed. The current expansion should be reviewed before merging.

The Astro base, internal links, language alternates, canonical metadata, and favicon use `/CV-Portfolio/`. If moving the repository or changing domains, update the configuration and verify generated URLs.

## Verification

Astro/TypeScript checks and production build pass. Browser checks cover language switching, preserved section anchors, native project disclosures, desktop rendering, and narrow layouts in all languages. `docs/QA.md` records results and limits.
