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

`check` validates Astro and TypeScript. `build` generates static output in `dist/`. GitHub Pages must serve that output under `/CV-Portfolio/`; the GitHub Actions workflow in `.github/workflows/pages.yml` checks pull requests and deploys successful builds from `main`.

## Structure

- `src/content/en.ts`, `pl.ts`, `uk.ts`: translated text, checked against `types.ts`.
- `src/content/profile.ts`: shared name, official job title, employer, and GitHub URL.
- `src/pages/`: root redirect and the template generating three language pages.
- `src/layouts/`: shared document structure and metadata.
- `src/components/`: language navigation.
- `src/styles/global.css`: ordinary CSS; edit the `:root` variables for colours.
- `public/images/`: future static images.

Typography currently uses system Georgia and Arial/Helvetica, without external font downloads. Review translations and typography before expanding the site.

## Preview this checkpoint

After `npm run dev`, open `http://localhost:4321/CV-Portfolio/` in your local browser. To inspect production output, run `npm run build` followed by `npm run preview`, and use the same path. Switch languages using the header links; no client-side JavaScript is required.

This checkpoint contains only an introduction and GitHub profile link. The official job title and name remain unchanged across languages. On mobile, the wordmark sits above right-aligned language navigation to keep every link readable.

## GitHub Pages deployment

In repository Settings → Pages, choose **GitHub Actions** as the source. Pull requests run type checks and a production build; merging to `main` builds and deploys `dist/` using GitHub’s Pages artifact workflow. Deployment can also be requested manually from Actions on `main`.

The configured destination is `https://valeriia-iakovleva.github.io/CV-Portfolio/`. The root leads to English, with Polish and Ukrainian available through ordinary links. The destination is live only after a successful Pages deployment.
