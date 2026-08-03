import { Navigate } from 'react-router-dom'
import { portals } from '../data/site'
import Page from '../components/Page'
import Button from '../components/Button'

import TasksBody from '../content/tasks.mdx'
import TripsBody from '../content/trips.mdx'
import HomelabBody from '../content/homelab.mdx'

/*
  One component behind every project page. App.jsx passes a `slug`, which picks
  both the metadata (from `portals` in src/data/site.js) and the prose (an .mdx
  file in src/content/).

  To add a fourth project: add an entry to `portals`, drop a new .mdx file in
  src/content/, add it to BODIES below, and add a <Route> in App.jsx.
*/
const BODIES = {
  tasks: TasksBody,
  trips: TripsBody,
  homelab: HomelabBody,
}

export function Project({ slug }) {
  const portal = portals.find((entry) => entry.slug === slug)
  const Body = BODIES[slug]

  // A bad slug would otherwise render a blank page; send them to the index.
  if (!portal || !Body) return <Navigate to="/works" replace />

  return (
    <Page title={portal.title} intro={portal.tagline}>
      <article className="prose mx-auto max-w-2xl text-left text-parchment-dim">
        <Body />
      </article>

      <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
        {/*
          The first link is the one to press, so it leads. `target` is passed
          explicitly because Button only opens a new tab on its own for http(s)
          links, and an undeployed project points at the internal /crucible route.
        */}
        {portal.links.map((link, index) => (
          <Button
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            variant={index === 0 ? 'primary' : 'secondary'}
          >
            {link.label}
          </Button>
        ))}
        <Button to="/works" variant="secondary">
          Works
        </Button>
      </div>
    </Page>
  )
}
