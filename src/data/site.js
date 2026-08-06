export const site = {
  name: 'Amir Nasirov',
  domain: 'frangiclave.com',
  tagline: 'My Personal and Professional Hub.',
  intro:
    'I study Engineering Science at the University of Toronto. I love to ' +
    'think in systems because order enables scale. Explore who I am, check out my projects, or contact me.',
}

export const navLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'Works', to: '/works' },
  { label: 'About', to: '/about' },
]

/*
  Each portal is a card on /works AND a page of its own.

    slug       matches the .mdx file in src/content/ and the route in App.jsx
    blurb      the card copy on /works
    tagline    the one-line intro at the top of the project page
    to         the internal route the card links to
    links      the buttons at the bottom of the project page, { href, label }.
               The first one leads and is styled as the primary action; the
               rest follow. '/crucible' stands in until a thing is deployed
*/
export const portals = [
  {
    slug: 'tasks',
    title: 'Scheduling Agent',
    blurb:
      'A board and weekly timetable for tasks, events and reminders, with an ' +
      'assistant that reads your schedule and shows you every change before it ' +
      'makes one.',
    tagline: 'A scheduling app with an assistant that reads your board, and asks before it writes.',
    to: '/tasks',
    links: [
      { href: 'https://tasks.frangiclave.com', label: 'Open Tasks' },
      { href: 'https://github.com/angsio/task-app', label: 'Source' },
    ],
  },
  {
    slug: 'trips',
    title: 'Voice Trip Coordinator',
    blurb:
      'Organise a business trip and everyone on it gets a phone call rather ' +
      'than a form. A voice agent asks who is coming, where they are leaving ' +
      'from and when they would rather travel, and writes the answers back.',
    tagline: 'Employees are phoned by a voice agent instead of being sent a form.',
    to: '/trips',
    links: [
      { href: 'https://github.com/angsio/vocalbridge-trips', label: 'Source' },
    ],
  },
  {
    slug: 'homelab',
    title: 'Frangiclave',
    blurb:
      'My Raspberry Pi serves the whole site. The portfolio, the accounts ' +
      'layer and the task app get a Docker Compose stack each, sitting behind ' +
      'a Cloudflare tunnel to avoid open router ports.',
    tagline: 'The self-hosted platform every site on this domain runs on.',
    to: '/homelab',
    // The homelab is not one repo, it is the several this domain runs on, so
    // this points at the profile that holds them all rather than at one of them.
    links: [
      { href: 'https://github.com/angsio', label: 'The Repositories' },
    ],
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/angsio' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/amir-nasirov' },
  { label: 'Email', href: 'mailto:amir@frangiclave.com' }
]
