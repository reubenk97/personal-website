# Personal Website

Portfolio site: dashboards (Excel / Power BI, Tableau coming), resume, other
projects (Unity game, Line app), and a short personal block.

## Structure

```
index.html
scss/
  main.scss           entry point — @use's every partial below in cascade order
  base/
    _variables.scss   design tokens (color, type, spacing)
    _reset.scss
    _typography.scss
  components/
    _nav.scss         pinned nav, burger menu below 760px
    _buttons.scss
  sections/
    _hero.scss
    _dashboards.scss
    _resume.scss
    _projects.scss
    _about.scss       "Beyond work" block
    _contact.scss
css/                  compiled output (gitignored — built by CI, not committed)
js/main.js            burger menu + highlights the nav link for the section in view
assets/
  img/                dashboard screenshots, headshot
  resume/             resume PDF
```

## Local development

```bash
npm install
npm run watch     # recompiles css/main.css on every scss change
```

Open `index.html` directly in a browser, or serve the folder with any
static server (e.g. `npx serve`).

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs
dependencies, compiles the SCSS, and publishes the site to GitHub Pages
automatically. Compiled CSS is never committed.

One-time setup in the GitHub repo settings: **Settings → Pages → Source →
GitHub Actions**.

All links and asset paths in the site are relative, so it works the same on
`username.github.io/repo-name/` and on a custom domain.

## Adding a new section or project

1. Add a partial under `scss/sections/` (or `scss/components/` for reusable pieces).
2. Start it with `@use '../base/variables' as *;` to get the design tokens.
3. Add `@use 'sections/your-partial';` to `scss/main.scss`.
4. Add the markup to `index.html` with a heading class of `section-title`.
5. To list it in the nav, add `<li><a href="#your-id">…</a></li>` — the
   highlight script finds the section from the link's `href`.

## Maintenance notes

- Node version: set in `.github/workflows/deploy.yml` (`node-version`). Use a
  current LTS release and bump it when that release reaches end-of-life.
- Keep `package-lock.json` committed so CI builds use the same Sass version.
- Before adding photos, strip location/camera metadata (EXIF) and resize to
  roughly 800px wide.
