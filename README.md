# CV-Portfolio

Valeriia Iakovleva’s personal CV–portfolio. This first step provides a static Astro foundation with TypeScript and ordinary CSS, a shared layout, and English, Polish, and Ukrainian introductions. It does not yet include full CV or project sections.

## Development

Requires Node.js 22.12+ (Node.js 24 LTS recommended) and npm.

In restricted cloud shells, run `export ASTRO_TELEMETRY_DISABLED=1` before Astro commands to avoid writing telemetry settings outside the workspace.

```sh
npm ci
npm run dev
```

The site uses `/CV-Portfolio/` as its base path. The root redirects to `/CV-Portfolio/en/`; the language switcher links to `en/`, `pl/`, and `uk/` within that base path.

```sh
npm run check
npm run build
npm run preview
```

`check` validates Astro and TypeScript. `build` generates static output in `dist/`. GitHub Pages must serve that output under `/CV-Portfolio/`; deployment automation is intentionally deferred.

## Structure

- `src/content/`: translated text and a shared content type. Add only confirmed facts.
- `src/pages/`: root redirect and the template generating three language pages.
- `src/layouts/`: shared document structure and metadata.
- `src/components/`: language navigation.
- `src/styles/`: ordinary CSS and the agreed color palette.
- `public/images/`: future static images.

Typography currently uses system Georgia and Arial/Helvetica, without external font downloads. Review translations and typography before expanding the site.
