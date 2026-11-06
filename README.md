# Noah B Johnson personal site

Source for <https://noahbjohnson.net>: a single-page resume built with [Astro](https://astro.build).

## Layout
- `src-astro/pages/index.astro`: the page content
- `src-astro/pages/404.astro`: sends old or unknown URLs back to the homepage
- `src-astro/layouts/BaseLayout.astro`: head, SEO and link preview tags
- `public-astro/`: static files (avatar, favicon, link preview image, `resume/resume.pdf`, CNAME)

## Develop
1. `npm ci`
2. `npm start` for a local dev server, or `npm run build` to build into `./build`

## Deploy
`npm run deploy` builds the site and pushes `./build` (dotfiles included, so `.nojekyll` ships) to the `master` branch of
[noahbjohnson.github.io](https://github.com/noahbjohnson/noahbjohnson.github.io), which GitHub Pages serves at noahbjohnson.net.
