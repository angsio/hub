import { site, socials } from '../data/site'
import List from './List'

const styles = {
  footer: 'border-t border-border/70',
  heading: 'font-display text-sm uppercase tracking-[0.3em] text-accent',
  socialLink: 'font-display text-parchment-dim transition-colors hover:text-accent-bright',
  colophon: 'font-display text-xs uppercase tracking-[0.3em] text-ash',
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className={`px-6 py-14 ${styles.footer}`}>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <p className={styles.heading}>Reach me</p>

        <List
          items={socials}
          keyOf={(social) => social.label}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2"
        >
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

        <p className={`mt-2 ${styles.colophon}`}>
          {site.name} · {site.domain} · {year}
        </p>
      </div>
    </footer>
  )
}
