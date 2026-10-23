# Reuben Kuruvila — Portfolio Website

Source code for my personal portfolio site: business analytics dashboards,
resume, and projects.

**Live site:** https://reubenk97.github.io/personal-website/

## What's on the site

- **Dashboards** — interactive analytics work with write-ups of the question,
  approach, and findings:
  - *Superstore Sales Analysis* (Excel): regional and category performance,
    profit margin, and year-over-year sales trends.
  - *Employee Attrition Analysis* (Power BI): where attrition is highest and
    what drives it, built on the IBM HR Analytics dataset.
- **Resume** — experience, education, and skills, with a PDF download.
- **Other projects** — software and game development work in progress.
- **Contact** — email and LinkedIn.

Both dashboards are built on public sample datasets (Superstore Sales and
IBM HR Analytics from Kaggle), not on any employer or client data.

## How it's built

I wrote the site by hand rather than using a site builder, so the code itself
is part of the portfolio.

- **HTML, SCSS, and vanilla JavaScript** — no frameworks or UI libraries.
- **SCSS** organized into partials (design tokens, base styles, components,
  sections) and compiled with [Sass](https://sass-lang.com/).
- **Responsive layout** with a pinned navigation bar, a mobile menu, and
  highlighting of the section currently in view.
- **Accessibility basics** — semantic markup, visible keyboard focus, text
  contrast checked against the palette, and reduced-motion support.
- **Progressive enhancement** — the page remains usable if JavaScript is off.
- **Automated deployment** — GitHub Actions compiles the SCSS and publishes to
  GitHub Pages on every push to `main`.

## Project structure

```
index.html
scss/       styles, split into base / components / sections partials
js/         navigation behavior
assets/     images and the resume PDF
css/        compiled stylesheet (generated during the build, not committed)
```

## Run it locally

Requires [Node.js](https://nodejs.org/) (current LTS).

```bash
npm install
npm run watch    # compiles scss/ to css/main.css and recompiles on change
```

Then open `index.html` in a browser.

## Contact

- Email: reubenk97@gmail.com
- LinkedIn: https://www.linkedin.com/in/reuben-kuruvila

## Usage

The writing, screenshots, and resume are my own work. Please don't reuse them
without asking.
