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

export const about = [
  '' +
  '' +
  '',
  ''
]

/*
  Each portal is a card on /works AND a page of its own.

    slug       matches the .mdx file in src/content/ and the route in App.jsx
    blurb      the card copy on /works
    tagline    the one-line intro at the top of the project page
    to         the internal route the card links to
    live       where the button at the bottom of the project page goes;
               '/crucible' until the real thing is deployed
    liveLabel  that button's text
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
    live: 'https://tasks.frangiclave.com',
    liveLabel: 'Open Tasks',
  },
  {
    slug: 'trips',
    title: 'Voice Agent',
    blurb:
      'Vocalbridge API allows voice agent ' +
      'applications. Set up business trips ' +
      'for multiple employees by setting up an agent to record attendance.',
    tagline: 'A voice interface for booking travel and recording attendance.',
    to: '/trips',
    live: '/crucible',
    liveLabel: 'Project status',
  },
  {
    slug: 'homelab',
    title: 'Home Lab',
    blurb:
      'My private and secure hub for my growing technical domain. ' +
      'My Raspberry Pi setup runs my containers for my personal services.',
    tagline: 'The Raspberry Pi that serves every site on this domain.',
    to: '/homelab',
    live: '/crucible',
    liveLabel: 'GitHub Page',
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/angsio' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/amir-nasirov' },
  { label: 'Email', href: 'mailto:amir@frangiclave.com' }
]
