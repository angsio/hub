import { site, socials } from '../data/site'
import List from './List'

/*
  Persistent site footer, and the site's contact section — it carries id
  "contact", so the hero's "Reach Me" button (href="#contact") scrolls here on
  any page. A small heading, the social links (each opens in a new tab), and a
  colophon. Links come from src/data/site.js.
*/
const styles = {
  footer: 'border-t border-border/70 px-6 py-14',
  inner: 'mx-auto flex max-w-5xl flex-col items-center gap-4 text-center',
  heading: 'font-display text-sm uppercase tracking-[0.3em] text-accent',
  socialList: 'flex flex-wrap items-center justify-center gap-x-8 gap-y-2',
  socialLink:
    'font-display text-parchment-dim transition-colors hover:text-accent-bright',
  colophon: 'mt-2 font-display text-xs uppercase tracking-[0.3em] text-ash',
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.heading}>Reach me</p>

        <List items={socials} keyOf={(social) => social.label} className={styles.socialList}>
          {(social) => (
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {social.label}
            </a>
          )}
        </List>

        <p className={styles.colophon}>
          {site.name} · {site.domain} · {year}
        </p>
      </div>
    </footer>
  )
}
