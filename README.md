# Personal Website

Portfolio site: resume, analytics dashboards (Excel / Power BI / Tableau),
and other projects (Unity/Blender game, Line app).

## Structure

```
index.html
scss/
  main.scss          entry point — imports everything below in cascade order
  base/
    _variables.scss   design tokens (color, type, spacing)
    _reset.scss
    _typography.scss
  components/
    _nav.scss
    _buttons.scss
  sections/
    _hero.scss
    _resume.scss
    _dashboards.scss
    _projects.scss
css/                  compiled output (gitignored — built by CI, not committed)
js/main.js
assets/
  img/
  resume/             resume PDF lives here
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
dependencies, compiles the SCSS, and publishes to GitHub Pages automatically
— no need to commit compiled CSS or run a manual build step before pushing.

One-time setup in the GitHub repo settings: **Settings → Pages → Source →
GitHub Actions**.

## Adding a new section/project

1. Add a partial under `scss/sections/` (or `scss/components/` for reusable pieces).
2. `@use '../base/variables' as *;` at the top to access design tokens.
3. Import it from `scss/main.scss`.
4. Add the matching markup block in `index.html`.

## Status

Structure and design tokens are in place; page content (copy, dashboard
embeds, project writeups) comes next.
