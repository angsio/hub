# Frangiclave — portfolio hub

Landing site for `frangiclave.com`. A Vite + React SPA styled with Tailwind v4,
themed after *Cultist Simulator*'s **Mansus** — deep indigo dark, moonlit text,
a luminous azure accent, and layered blue gradients. Multi-page: **Home**
(hero), **Works** (a grid of self-hosted containers), and **About**. Contact
isn't a page — it lives in the footer (`#contact`) on every route.

## Develop

```bash
npm install       # once
npm run dev       # local dev server with hot reload
npm run build     # production build -> dist/
npm run preview   # serve the built dist/ locally
npm run lint      # oxlint
```

> Adding, deleting, or moving files while `npm run dev` is running can leave
> Vite serving a stale module graph (empty routes, old content). Restart the
> dev server and hard-refresh if things look wrong.

## Project shape

- **`src/pages/`** — one file per route: `Home`, `Works`, `About`. These are the
  `<Route>` targets in `src/App.jsx`.
- **`src/components/`** — the building blocks: `Navbar`, `Footer`, `Button`,
  `Page` (shared page shell), `SectionCard`, `List`, `ScrollToTop`.
- **`src/data/site.js`** — single source of truth for copy and links.
- **`src/index.css`** — theme tokens + base document styling.

## Where to edit

- **Content & links:** `src/data/site.js` — `site` (name, tagline, intro),
  `navLinks`, `about`, `portals` (the container cards), and `socials`.
- **Theme / colours:** `src/index.css` — the `@theme` block holds every colour
  and font token (`--color-accent`, `--color-void`, `--font-display`, …).
  **Change those values and the whole site re-themes**, no component edits.
  `--nav-h` (just below, outside `@theme`) is the navbar height the hero
  subtracts from the viewport.
- **Add a page:** new file in `src/pages/`, a `<Route>` in `src/App.jsx`, and an
  entry in `navLinks`. It inherits the shell (Navbar + Footer) and theme.

## Styling convention

The Tailwind classes on each component are split by **purpose**, so the JSX
reads as structure and the "skin" is named and reusable:

- **Layout stays inline in the JSX** — `flex`/`grid`, `items-*`/`justify-*`,
  `gap-*`, sizing (`w-*`, `h-*`, `max-w-*`, `flex-1`), spacing (`p-*`, `mt-*`,
  `mx-auto`), and position (`absolute`, `sticky`, `z-*`). You see the structure
  where it happens.
- **Aesthetic goes in a `styles` object** at the top of the file — colour
  (`text-*`, `bg-*`, `border-*`), `rounded-*`, typography (`font-*`, text size,
  `tracking-*`, `italic`), and effects (`transition`, `hover:*`, `backdrop-blur`).

```jsx
const styles = {
  card: 'rounded-md border border-border bg-obsidian/60 hover:border-accent/50',
}
// layout inline, skin named:
<a className={`flex h-full flex-col p-7 ${styles.card}`}>…</a>
```

Two things to know when reusing this:

- **Only colour and font actually inherit** (plus a few text props like
  `letter-spacing`). Box styles — `bg`, `border`, `rounded`, `shadow`, and any
  `hover:` — do **not** cascade; they must sit on the element itself. The base
  look is consistent for free because `body` sets `color` + `font-family`
  globally; e.g. `About`'s paragraphs take their colour from the wrapper's
  `text-parchment-dim` and carry no class of their own.
- **Leaf primitives that render a single element** (`Button`) keep their layout
  in a `layout` constant rather than inline JSX — there's no structure to put it
  next to.

`List` and `Page` are the reusable primitives: `List` owns the loop + keys and
takes its layout as a `className`; `Page` gives every routed page the same
width, padding, and heading.

## Deploying on the Raspberry Pi

`npm run build` emits a static `dist/`. Serve it with any static host (nginx,
Caddy, `serve`). It uses client-side routing (`BrowserRouter`) with real routes
(`/works`, `/about`), so the server **must** fall back to `index.html` for
unknown paths, or loading those URLs directly will 404. In nginx:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

(Alternatively, switch `BrowserRouter` to `HashRouter` in `src/main.jsx` to
avoid needing the fallback.)
