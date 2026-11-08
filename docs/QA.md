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
