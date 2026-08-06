import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import { site, portals } from './data/site'
import App from './App.jsx'

/*
  The server-side twin of main.jsx.

  main.jsx mounts the app into a live browser with a BrowserRouter. This renders
  the same <App /> to a string at build time, with a StaticRouter told which URL
  to pretend it is on. scripts/prerender.js calls it once per route and writes
  the result into dist/, so every page arrives as real HTML.

  Effects never run during renderToString, which is what keeps this safe: the
  navbar's sign-in check, ScrollToTop's window.scrollTo and BroadcastChannel all
  live in useEffect and simply do not fire here. The account button appears
  after hydration, as it should — it is per-visitor and must not be baked in.
*/

// Every route that gets its own HTML file, with the metadata link-preview bots
// and search crawlers read. Adding a page means adding it here too, or it falls
// back to the generic shell.
export const routes = [
  {
    path: '/',
    title: `${site.name} · ${site.domain}`,
    description: site.intro,
  },
  {
    path: '/works',
    title: `Works · ${site.name}`,
    description:
      'Projects built and self-hosted on a Raspberry Pi: a scheduling agent, a voice trip coordinator, and the home lab that serves them.',
  },
  ...portals.map((portal) => ({
    path: portal.to,
    title: `${portal.title} · ${site.name}`,
    description: portal.tagline,
  })),
  {
    path: '/about',
    title: `About · ${site.name}`,
    description: site.intro,
  },
  {
    path: '/crucible',
    title: `Still Forging · ${site.name}`,
    description: 'This page is not yet ready for display.',
  },
]

// (path: string) -> string, the app's markup for that URL.
export const render = (path) =>
  renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>,
  )
