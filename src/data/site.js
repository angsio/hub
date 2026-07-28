/*
  Single source of truth for the site's links and copy.
  Edit these arrays to update the whole page — the components map over them.
*/

export const site = {
  name: 'Amir Nasirov',
  domain: 'frangiclave.com',
  tagline: 'My Personal and Professional Hub.',
  intro:
    'I study Engineering Science at the University of Toronto. I love to ' +
    'think in systems because order enables scale. Explore who I am, check out my projects, or contact me.',
}

// The site's own pages, in navbar order. These are SPA routes (`to`), so the
// navbar renders them with <NavLink> and stars the active one. `end` keeps the
// home route from matching every path.
export const navLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'Works', to: '/works' },
  { label: 'About', to: '/about' },
]

// About-page copy, one string per paragraph.
export const about = [
  'Hello' +
  '',
  'Hello'
]

// The container cards on the Works page — each links out to a subdomain and
// opens in a new tab.
export const portals = [
  {
    title: 'Scheduling Agent',
    blurb:
      'A tool that books tasks, events, reminders. Built end to end with MongoDB, ' +
      'complete with a self-hosted agent using RAG for tools with Supabase.',
    href: 'https://tasks.frangiclave.com',
  },
  {
    title: 'Voice Agent',
    blurb:
      'Vocalbridge API allows voice agent ' +
      'applications. Set up business trips ' +
      'for multiple employees by setting up an agent to record attendance.',
    href: 'https://trips.frangiclave.com',
  },
  {
    title: 'Home Lab',
    blurb:
      'My private and secure hub for my growing technical domain. ' +
      'My Raspberry Pi setup runs my containers for my personal services.',
    href: 'https://lab.frangiclave.com',
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/angsio' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/amir-nasirov' },
  { label: 'Email', href: 'mailto:amir@frangiclave.com' },
]
