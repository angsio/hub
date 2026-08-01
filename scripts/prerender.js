import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

/*
  Turn the built single-page app into one real HTML file per route.

  Runs last in `npm run build`, after two Vite builds:
    dist/       the normal browser build (JS, CSS, fonts, index.html shell)
    dist-ssr/   the same app compiled to run under Node

  For each route it renders the markup, drops it into the shell's empty <div
  id="root">, rewrites the <head> for that page, and writes the file. The
  JavaScript still loads and takes over as before — this only changes what a
  visitor (or a crawler) receives before it does.

  Why it matters: LinkedIn, Slack, Discord and iMessage fetch a URL and read
  only the <head>. They do not run JavaScript. Without this they see an empty
  shell and render a blank card.
*/

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const dist = join(root, 'dist')

const ORIGIN = 'https://frangiclave.com'

// Update this when a purpose-built preview image exists. Link previews want a
// wide image, around 1200x630; a square icon renders as a small thumbnail.
const OG_IMAGE = `${ORIGIN}/frangiclave-circle.png`

const escape = (text) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

// The tags that decide what a shared link looks like.
const head = ({ path, title, description }) => {
  const url = `${ORIGIN}${path}`

  return `
    <title>${escape(title)}</title>
    <meta name="description" content="${escape(description)}" />
    <link rel="canonical" href="${url}" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Frangiclave" />
    <meta property="og:title" content="${escape(title)}" />
    <meta property="og:description" content="${escape(description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${OG_IMAGE}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(title)}" />
    <meta name="twitter:description" content="${escape(description)}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />`
}

const { render, routes } = await import(join(root, 'dist-ssr/entry-server.js'))

const template = await readFile(join(dist, 'index.html'), 'utf8')

for (const route of routes) {
  const markup = render(route.path)

  const html = template
    // Strip the shell's placeholder title and description; `head` supplies both.
    .replace(/\s*<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta\s+name="description"[\s\S]*?\/>/, '')
    .replace('</head>', `${head(route)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)

  // '/' is dist/index.html; '/works' is dist/works/index.html, which nginx
  // serves for /works thanks to `try_files $uri $uri/index.html`.
  const file =
    route.path === '/'
      ? join(dist, 'index.html')
      : join(dist, route.path, 'index.html')

  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, html)

  console.log(`prerendered ${route.path.padEnd(10)} ${html.length} bytes`)
}
