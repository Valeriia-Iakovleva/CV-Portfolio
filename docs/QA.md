# Verification — CV expansion

Checked 7 November 2026.

- Astro/TypeScript: zero errors, warnings, or hints.
- Production build: four static routes, including all three language pages and English entry redirect.
- Desktop browser: CV layout renders, career history includes all four organizations, and language navigation works.
- Native project disclosure opens and exposes the case-study copy.
- English-to-Polish switching preserves the selected `#projects` section when JavaScript is enabled.
- Ukrainian page: correct language, all four roles, and no unresolved same-page anchor links.
- Responsive browser fixture at 320 pixels: English, Polish, and Ukrainian show no horizontal document overflow (305-pixel content viewport excluding scrollbar).
- Responsive fixture at 390 pixels: mobile visual inspection passed.
- Responsive fixture at 768 pixels: Ukrainian page shows no horizontal document overflow (753-pixel content viewport).
- Temporary responsive fixtures are outside the repository and are not included in the change.

The production output is served by the supported static preview workflow. The Astro dev command exited after launching a background process in this environment, so browser QA uses the actual static build rather than a separate improvised dev server.

Print styles and progressive print-button wiring are present. Physical printing, PDF pagination, screen-reader testing, and additional browser engines have not been verified. Responsive frames are layout checks, not physical-device emulation.

No new dependencies or hosting changes. Public project evidence links use the existing repository and confirmed merged PR #1. Content review is documented separately; draft project status is not upgraded to completed without evidence.

## Content correction checks — 8 November 2026

The updated content passes Astro/TypeScript checks and builds all four static routes. Updated facts cover the EPAM dates and migration work, confirmed programming tools, the single Master File/reporting project, and the ongoing follow-up work. Contact rendering is conditional and personal email is unset. The upload payload must be scanned for personal contact details before submission.

## Repository maintenance and visual polish — 8 November 2026

PR #2 was confirmed open and draft at inspection; its preceding build passed and deploy was skipped. The work continues on `feat/cv-and-project-evidence`. No AGENTS.md files were found in the checkout or applicable workspace locations. The previous chat itself was unavailable; the uploaded brief and existing review notes supplied the scope.

### Current validation

- Node 24.22.1, npm 11.9.0. `npm ci` succeeds with the unchanged dependency versions and lockfile (a writable external npm cache was needed in this cloud sandbox). Astro's installed package declares Node >=22.23.4; the old README minimum was corrected. `.nvmrc` selects Node 24 for development and CI.
- `npm run check`: zero errors, warnings, or hints. Production build emits the English redirect and three language pages.
- `npm run test:site`: checks the built redirect, locale metadata and active navigation, shared official titles, unique IDs, internal links/anchors, base-prefixed assets, and contact privacy. No test dependency was added.
- Headless Chromium 156, using Playwright available in the environment: all three languages at viewport widths 320, 390, 768, and 1440 have no horizontal document overflow. Language and section navigation targets are at least 44px tall.
- All three native disclosures open with Enter and close with Space. The first Tab exposes a visible skip-link focus outline; Enter focuses the main content. Language switches preserve `#projects`; language hrefs also carry the hash for new-tab/copy behavior.
- JavaScript-disabled pages retain content, native disclosures, and language navigation; the optional print button stays hidden. With JavaScript enabled its click calls `window.print()`.
- Reduced-motion preference keeps automatic scrolling. Browser checks recorded no page errors or failed asset responses.
- Generated A4 PDFs in all three languages contain three pages. Print inspection found and fixed an orphaned contact section; project summaries and real evidence links remain, while case-study disclosures and controls are hidden. English PDF pages were rasterized and visually reviewed. PDF text was checked across languages for contact content and page boundaries. PDFs are temporary QA output, not published CV downloads.
- Source/output privacy scan found no email addresses or personal contact URLs. Contact is GitHub-only; unused email/LinkedIn hooks were removed. New Git metadata uses a GitHub noreply identity. Existing Git history was not rewritten.

### Visual evidence

Actual screenshots from the built site, captured 8 November 2026:

- [English desktop, 1440 × 1000](screenshots/desktop-en.png)
- [Ukrainian mobile viewport, 390 × 844](screenshots/mobile-uk.png)
- [Polish project disclosure, 1280 × 1000](screenshots/projects-pl.png)
- [English print layout, page 3](screenshots/print-en.png)

![English desktop](screenshots/desktop-en.png)

![Ukrainian mobile](screenshots/mobile-uk.png)

The screenshots show the existing layout and system typography with larger prose, roomier navigation, and restrained status highlighting. They are browser evidence, not physical-device tests.

### Workflow compatibility and limits

Updated checkout and setup-node to v7 and upload-pages-artifact to v5 after reading their official versioned READMEs and release notes. The Node 24 action runtime requires runner >=2.327.1; this workflow uses GitHub-hosted `ubuntu-latest`. Checkout credential persistence is disabled. No registry authentication is configured, so setup-node v7's removal of the dummy auth-token fallback does not affect installation. PRs retain build-only behavior; deploy remains restricted to `main`.

References: [checkout v7](https://github.com/actions/checkout/tree/v7), [setup-node v7](https://github.com/actions/setup-node/tree/v7), [upload-pages-artifact v5](https://github.com/actions/upload-pages-artifact/tree/v5).

Screen readers, physical printing/devices, Firefox, and Safari were not tested. Translation/editorial approval and the existing factual review items remain with the owner. External project evidence is the real public repository, production site, and merged PR #1; employer work has no public artifact. No merge or production deployment was performed.


## Branch artifact and standards checks — 8 November 2026

This follow-up validates the current PR branch without merging or deploying it.

- Added the development-only `html-validate` 11.19.0 dependency and `npm run test:html`. All four production HTML files pass the standard, accessibility, and document presets with zero warnings. Integrity checks apply to cross-origin resources; the site’s hashed CSS is served from the same origin.
- The validator identified the generated entry redirect’s two-second delay. Changed it to a permanent static redirect with zero delay and added an instant-redirect regression assertion.
- Added a GitHub Actions review artifact, `cv-review-<run ID>`, containing the tested static output, these QA notes, and existing screenshots, retained for 14 days. The job summary explains the checks and limits. Production deployment remains restricted to main; PR runs never deploy.
- Chromium browser review of the production output: English, Polish, and Ukrainian at frame widths 320, 390, 768, and 1440 pixels have no horizontal document overflow. Scrollbars reduce each content width by 15 pixels. Each page has one H1 and the correct document language. Desktop and mobile layouts were visually inspected. Frames test responsive layout, not physical devices.
- First Tab reaches the skip link; Enter focuses main. A native project disclosure opens with Enter and closes with Space. Switching English to Polish preserves `#projects`. The root redirect reaches English.
- Browser logs inspected during this review contained extension-origin metadata errors, with no site-origin warning/error entries.

The earlier print, no-JavaScript, and reduced-motion results above are from the preceding maintenance review; they were not rerun in this follow-up. HTML/accessibility markup validation is not a complete WCAG conformance assessment. Screen readers, Safari, Firefox, and physical devices remain untested. No design or career-content changes were made in this follow-up.

## Final branch review and repeatable artifact downloads — 8 November 2026

Started from the newer branch commit `7317f0f` after fetching PR #2; preserved its HTML validator, instant redirect, and artifact work. PR #2 was open and draft, based on unchanged `main` commit `13ba78f`. The website and confirmed content needed no further changes after this review.

### Changes made

- Review artifact names now include the run attempt: `cv-review-<run ID>-<attempt>`. Rerunning checks creates a distinct review bundle instead of colliding with an immutable artifact from the preceding attempt. Retention remains 14 days.
- The job summary links directly to the artifact. The README explains how to serve the extracted `dist/` under `/CV-Portfolio/` with Python 3.
- Both the Pages artifact and deploy job are now explicitly restricted to `main` and excluded from pull-request events. PRs still automatically install, check, build, validate HTML, and upload the tested review bundle.
- Added current [768px Ukrainian tablet](screenshots/tablet-uk.png) and [320px Polish narrow layout](screenshots/narrow-pl.png) screenshots. Earlier screenshots were recaptured and remained unchanged.

### Tests performed again on the current source

- `npm ci` from the committed lockfile; Node 24.22.1 / npm 11.9.0. No dependency changes were needed in this review.
- `npm run check`: zero errors, warnings, or hints. `npm run build`, `npm run test:site`, and `npm run test:html` passed. All four generated pages pass HTML standard, accessibility markup, and document checks with zero warnings allowed.
- Chromium 156 and Playwright: all 12 language/viewport combinations (English, Polish, Ukrainian × 320, 390, 768, 1440px) passed document overflow, language metadata, active-language state, minimum 44px language/section targets, career-history rendering, and keyboard disclosure checks. Screenshots at all 12 combinations were visually inspected for readability, wrapping, margins, and hierarchy; representative open project disclosures were also inspected.
- The root route redirects instantly to English. Every section-nav link reaches its matching hash. Language switching preserves `#projects` across all three locales. The built-site check verifies local scripts, styles, favicon, links, IDs, and base paths. Browser requests recorded no failed assets or page errors.
- Sequential Tab navigation traversed 21 controls per locale with visible outlines. First Tab reaches the skip link; Enter focuses `main`. All three project disclosures open with Enter and close with Space. No-JavaScript language links and disclosures work, and the optional print button stays hidden. Its enabled click calls `window.print()`. Reduced-motion scrolling remains automatic.
- Axe-core 4.14.0 was run from temporary tooling outside the repository, on all 12 combinations with disclosures open, against WCAG 2 A/AA, WCAG 2.1 A/AA, and best-practice rules. It reported no violations. Four decorative glyph spans per page required manual colour-contrast review; they are `aria-hidden`, while adjacent link/status text conveys the meaning. These incomplete results were reviewed rather than counted as automatic passes.
- Calculated solid-colour contrast ratios: charcoal/paper **14.55:1**, secondary text/paper **5.95:1**, orange/paper **5.02:1**, orange/apricot **4.61:1**, white/orange button **5.13:1**, and secondary text/tag background **5.29:1**. All tested normal-text pairs exceed 4.5:1. This is not a complete accessibility conformance claim.
- Print-button wiring and print media were retested. English, Polish, and Ukrainian PDFs each contain three A4 pages, with project summaries/evidence and contact retained and controls/disclosures hidden. All PDF text was checked for content/page boundaries and personal contact details; representative rasterized PDF pages in each language were visually inspected. Physical printing was not tested.
- Source, output, changed files, and screenshot content were reviewed for privacy. No personal contact details, private CV files, employer screenshots, or confidential artifacts are included. Contact remains GitHub-only. The new commit uses the established GitHub noreply identity; career facts, project statuses, and existing PR evidence were preserved.

Axe and browser fixtures remain temporary environment tools, not project dependencies. Screen-reader testing, Firefox, Safari, physical devices/printers, and a full WCAG audit remain unperformed. Translation/editorial and factual-review items already documented above remain with the owner. The final Actions run and downloadable artifact are linked in PR #2; verify the run's head SHA when reviewing a bundle. No merge or production deployment is part of this work.
