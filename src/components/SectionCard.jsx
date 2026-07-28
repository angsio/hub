import { Link } from 'react-router-dom'

const styles = {
  card: 'rounded-md border border-border bg-obsidian/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-crypt',
  title: 'font-display text-2xl text-parchment transition-colors group-hover:text-accent-bright',
  blurb: 'text-parchment-dim',
  open: 'font-display text-sm text-accent',
  arrow: 'transition-transform duration-300 group-hover:translate-x-1',
}

export default function SectionCard({ title, blurb, href, to, external = true }) {
  const className = `group relative flex h-full flex-col p-7 ${styles.card}`
  const body = (
    <>
      <h3 className={styles.title}>{title}</h3>
      <p className={`mt-3 flex-1 ${styles.blurb}`}>{blurb}</p>

      <span className={`mt-6 inline-flex items-center gap-2 ${styles.open}`}>
        Open
        <span className={styles.arrow}>→</span>
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={className}>
        {body}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={className}
    >
      {body}
    </a>
  )
}
