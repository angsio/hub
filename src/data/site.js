/*
  Single source of truth for the site's links and copy.
  Edit these arrays to update the whole page — the components map over them.
*/

export const site = {
  name: 'Amir Nasirov',
  domain: 'frangiclave.com',
  tagline: 'A hub for the software I build.',
  role: '',
  intro:
    'I study Engineering Science at the University of Toronto, drawn to structure that enables ' +
    'scale. Each container below is a finished piece of mine — take a look.',
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
  'I study Engineering Science at the University of Toronto, where I lean ' +
    'toward the systems side of things — how software is structured, deployed, ' +
    'and kept running rather than just written.',
  'Most of what I build I also self-host, on a Raspberry Pi. It keeps me honest ' +
    'about the whole stack, from the code down to the container it ships in. ' +
    'The Works page is the current crop.',
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
      'Experiments and prototypes still finding their shape — the Raspberry ' +
      'Pi setup, small hardware hacks, and works in progress.',
    href: 'https://lab.frangiclave.com',
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/angsio' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/amir-nasirov' },
  { label: 'Email', href: 'mailto:amir@frangiclave.com' },
]
