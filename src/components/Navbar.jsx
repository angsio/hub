import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site, navLinks } from '../data/site'
import List from './List'

/*
  Aesthetic (skin) only — colors, borders, type, hover. Layout classes (flex,
  sizing, spacing, position) stay inline in the JSX so the structure is visible
  where it's used. `navLayout` is the one layout string shared by every link.
*/
const styles = {
  header: 'border-b border-border/70 bg-void/80 backdrop-blur-md',
  brand: 'font-display text-xl tracking-wide text-parchment transition-colors hover:text-accent-bright',
  menuBorder: 'border-t border-border/70',
  toggle: 'text-2xl leading-none text-parchment',
  link: 'font-display text-parchment-dim transition-colors hover:text-accent-bright',
  linkActive: 'font-display text-parchment',
  // The ✦ marks the active page. Always rendered (so labels never shift) but
  // transparent until its page is current.
  star: 'text-accent',
  starIdle: 'text-transparent',
}

const navLayout = 'inline-flex items-center gap-2 py-2'

/*
  Top navigation. The bar is a fixed --nav-h tall (see index.css) so the hero
  can subtract exactly that. Brand → home; navLinks are the site's own pages,
  rendered with <NavLink> so the current page shows the ✦ star. Below md the
  links collapse behind the toggle.
*/
export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className={`sticky top-0 z-50 ${styles.header}`}>
      <nav className="mx-auto flex h-[var(--nav-h)] max-w-5xl items-center justify-between px-6">
        <Link to="/" className={styles.brand}>
          {site.name}
        </Link>

        {/* Desktop: links laid out inline */}
        <List
          items={navLinks}
          keyOf={(link) => link.to}
          className="hidden items-center gap-8 md:flex"
        >
          {(link) => <NavItem link={link} />}
        </List>

        {/* Mobile: one button toggles the dropdown below */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((isOpen) => !isOpen)}
          className={`md:hidden ${styles.toggle}`}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile: the dropdown, only in the DOM while open */}
      {open && (
        <List
          items={navLinks}
          keyOf={(link) => link.to}
          className={`flex flex-col gap-1 px-6 py-4 md:hidden ${styles.menuBorder}`}
        >
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
      className={({ isActive }) =>
        `${navLayout} ${isActive ? styles.linkActive : styles.link}`
      }
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
