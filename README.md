# Frangiclave — portfolio hub

Landing page for `frangiclave.com`. A Vite + React SPA styled with Tailwind v4,
themed after *Cultist Simulator* (aged parchment, candle-gold, occult darks).
The navbar links out to portfolio subdomains; the "Doors" grid does the same.

## Develop

```bash
npm install       # once
npm run dev       # local dev server with hot reload
npm run build     # production build -> dist/
npm run preview   # serve the built dist/ locally
npm run lint      # oxlint
```

## Where to edit

- **Content & links:** `src/data/site.js` — name, tagline, intro, nav links,
  the portfolio "doors", and socials. Update these and the page follows.
- **Theme / colours:** `src/index.css` — the `@theme` block holds every colour
  and font token (`--color-gold`, `--color-void`, `--font-display`, …). This
  file is loaded by `src/main.jsx` (`import './index.css'`), which is what pulls
  Tailwind and these tokens into the app.
- **Layout components:** `src/components/` — `Navbar`, `Hero`, `Portals`,
  `SectionCard`, `Footer`. Each keeps its Tailwind classes in a small `styles`
  object at the top of the file, so the JSX below reads as plain structure.
- **`List`:** `src/components/List.jsx` — a layout-agnostic list primitive
  (owns the loop + keys, takes the layout as a `className`). It's wired into
  `Portals` (card grid), `Navbar` (nav links), and `Footer` (socials).

## Deploying on the Raspberry Pi

`npm run build` emits a static `dist/`. Serve it with any static host (nginx,
Caddy, `serve`). Because it uses client-side routing (`BrowserRouter`), the
server must fall back to `index.html` for unknown paths, e.g. nginx:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

If you'd rather avoid that, switch `BrowserRouter` to `HashRouter` in
`src/main.jsx`. For now the only route is `/`, so it works without the fallback
too — you'll need it once you add in-app pages.
