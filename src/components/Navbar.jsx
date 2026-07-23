import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site, navLinks } from '../data/site'
import List from './List'

/* Class strings kept out of the markup so the structure below stays readable. */
const styles = {
  header: 'sticky top-0 z-50 border-b border-border/70 bg-void/80 backdrop-blur-md',
  bar: 'mx-auto flex max-w-5xl items-center justify-between px-6 py-4',
  brand:
    'font-display text-xl tracking-wide text-parchment ' +
    'transition-colors hover:text-accent-bright',
  desktopMenu: 'hidden items-center gap-8 md:flex',
  mobileMenu: 'flex flex-col gap-1 border-t border-border/70 px-6 py-4 md:hidden',
  toggle: 'text-2xl leading-none text-parchment md:hidden',
  link:
    'inline-flex items-center gap-2 py-2 font-display text-parchment-dim ' +
    'transition-colors hover:text-accent-bright',
  linkActive: 'inline-flex items-center gap-2 py-2 font-display text-parchment',
  // The ✦ marks the active page. It's always rendered (so labels never shift)
  // but transparent until its page is the current one.
  star: 'text-accent',
  starIdle: 'text-transparent',
}

/*
  Top navigation.
  - Brand → home.
  - navLinks are the site's own pages (SPA routes), rendered with <NavLink> so
    the current page shows the ✦ star.
  - Below md, the links collapse behind a single open/close button.
  Desktop and mobile share the same <List> of links; only their classes differ.
*/
export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.bar}>
        <Link to="/" className={styles.brand}>
          {site.name}
        </Link>

        {/* Desktop: links laid out inline */}
        <List items={navLinks} keyOf={(link) => link.to} className={styles.desktopMenu}>
          {(link) => <NavItem link={link} />}
        </List>

        {/* Mobile: one button toggles the dropdown below */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((isOpen) => !isOpen)}
          className={styles.toggle}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile: the dropdown, only in the DOM while open */}
      {open && (
        <List items={navLinks} keyOf={(link) => link.to} className={styles.mobileMenu}>
          {(link) => <NavItem link={link} onNavigate={() => setOpen(false)} />}
        </List>
      )}
    </header>
  )
}

/*
  One navigation entry. <NavLink> tells us whether its route is active; when it
  is, the leading star lights up azure. `end` keeps "/" from matching every
  path. `onNavigate` lets the mobile menu close itself after a tap.
*/
function NavItem({ link, onNavigate }) {
  return (
    <NavLink
      to={link.to}
      end={link.end}
      onClick={onNavigate}
      className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
    >
      {({ isActive }) => (
        <>
          <span aria-hidden className={isActive ? styles.star : styles.starIdle}>
            ✦
          </span>
          {link.label}
        </>
      )}
    </NavLink>
  )
}
