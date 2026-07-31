import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site, navLinks } from '../data/site'
import { loginUrl } from '../auth'
import useAccount from '../useAccount'
import List from './List'

const styles = {
  header: 'border-b border-border/70 bg-void/80 backdrop-blur-md',
  brand: 'font-display text-xl tracking-wide text-parchment transition-colors hover:text-accent-bright',
  // An email is far longer than a name, so it gets a smaller size to sit in the bar.
  brandEmail: 'font-display text-base tracking-wide text-parchment transition-colors hover:text-accent-bright',
  menuBorder: 'border-t border-border/70',
  toggle: 'text-2xl leading-none text-parchment',
  link: 'font-display text-parchment-dim transition-colors hover:text-accent-bright',
  linkActive: 'font-display text-parchment',
  star: 'text-accent',
  starIdle: 'text-transparent',
  account: 'rounded-sm border border-accent/50 bg-accent/15 font-display text-sm text-accent-bright transition-colors hover:bg-accent/25',
}

const navLayout = 'inline-flex items-center gap-2 py-2'
const accountLayout = 'inline-flex shrink-0 items-center px-3 py-1'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { account, ready, signOut } = useAccount()

  return (
    <header className={`sticky top-0 z-50 ${styles.header}`}>
      <nav className="mx-auto flex h-(--nav-h) max-w-5xl items-center justify-between gap-4 px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Link to="/" className={`truncate ${account ? styles.brandEmail : styles.brand}`}>
            {account ? account.email : site.name}
          </Link>

          {/* Held back until the first check lands, so it never flashes the wrong one. */}
          {ready && (account ? (
            <button
              type="button"
              onClick={signOut}
              className={`${accountLayout} ${styles.account}`}
            >
              Logout
            </button>
          ) : (
            <a href={loginUrl()} className={`${accountLayout} ${styles.account}`}>
              Signup / Login
            </a>
          ))}
        </div>

        <List
          items={navLinks}
          keyOf={(link) => link.to}
          className="hidden items-center gap-8 md:flex"
        >
          {(link) => <NavItem link={link} />}
        </List>

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
