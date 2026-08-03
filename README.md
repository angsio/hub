# Hub

The portfolio site at [frangiclave.com](https://frangiclave.com). Project pages
are written in MDX; the whole site is prerendered to static HTML at build time
and served by nginx from a Raspberry Pi.

<!--
  Screenshot goes here. The home page at desktop width reads best:
      ![Home](docs/home.png)
-->

## Stack

React 19 · Vite 8 · react-router 7 · Tailwind 4 · MDX compiled at build time by
`@mdx-js/rollup` · oxlint · Docker Compose and nginx on a Raspberry Pi 4B.

## Prerendering, In Ninety Lines

A single-page app ships one HTML file with an empty `<div id="root">` and fills
it in once JavaScript runs. Link-preview bots do not run JavaScript. LinkedIn,
Slack, Discord and iMessage fetch the URL, read only the `<head>`, and find a
placeholder title and no description — so every link to this site shared as a
blank card. Search crawlers are better about it than they used to be, but a link
preview is the thing a stranger actually sees first.

The fix did not need a framework. `npm run build` runs Vite twice — once for the
browser, once with `--ssr` to compile the same `<App />` for Node — and then
`scripts/prerender.js` walks a list of routes, renders each one to a string with
`StaticRouter`, drops the markup into the shell's empty root, rewrites the
`<head>` with that page's title, description, canonical URL and Open Graph and
Twitter tags, and writes `dist/<route>/index.html`. About ninety lines, no
plugin, and the route list lives next to the render function so adding a page
means adding one entry.

Two things make it hold together. `main.jsx` checks whether the root already has
children and calls `hydrateRoot` if it does and `createRoot` if it does not, so
`npm run dev` still serves the plain shell and works unprerendered. And nginx
needs `try_files $uri $uri/index.html /index.html` — without the middle term it
serves the root `index.html` for every path and none of the prerendered files
are ever read, which looks exactly like the build silently not working.

Measured on this repo: `/` is **749 bytes** as a plain client build and about
**5.8 KB** prerendered, the difference being the actual text of the page.

## Known Limitations

Prerendering happens at build time, so anything per-visitor has to stay out of
it. The account button in the navbar is fetched in an effect, which never runs
during `renderToString`, so it appears after hydration rather than in the HTML —
correct, but it means a signed-in visitor sees one frame without it. Any future
content that depends on who is asking will need the same treatment or a real
server.

The Open Graph image is the site's circular icon. Previews want roughly 1200×630
and render a square as a small thumbnail, so the card is right but plain.

## Running Locally

```bash
npm install
npm run dev            # :5173, unprerendered
npm run build          # both Vite builds, then prerender
npm run preview        # serve dist/ as it will actually be served
```

`.env.production` holds `VITE_AUTH_URL`. It is committed on purpose: `VITE_`
values are compiled into the browser bundle, so they are public whether or not
the file is in the repository, and pretending otherwise would be worse than
saying so.

Content lives in [`src/content/`](src/content/) as MDX and
[`src/data/site.js`](src/data/site.js), which is the list of project cards. Both
are prose, not code — editing a page does not mean touching a component.
