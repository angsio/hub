/*
  Aesthetic (skin) only — color, border, rounding, type, hover. Layout (flex,
  sizing, spacing) stays inline in the JSX below. `group` sits inline on the
  card because it's a behavioural hook, not a style; the group-hover:* skins on
  the title and arrow read off it.
*/
const styles = {
  card: 'rounded-md border border-border bg-obsidian/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-crypt',
  title: 'font-display text-2xl text-parchment transition-colors group-hover:text-accent-bright',
  blurb: 'text-parchment-dim',
  open: 'font-display text-sm text-accent',
  arrow: 'transition-transform duration-300 group-hover:translate-x-1',
}

/*
  A single container card — a link to one destination. Give it a title, a
  blurb, and an href; it renders a hover-lifting card. External links (the
  default) open in a new tab. `h-full` (inline) lets it fill its grid cell so a
  row of cards matches height. Works feeds it from site data.
*/
export default function SectionCard({ title, blurb, href, external = true }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group relative flex h-full flex-col p-7 ${styles.card}`}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={`mt-3 flex-1 ${styles.blurb}`}>{blurb}</p>

      <span className={`mt-6 inline-flex items-center gap-2 ${styles.open}`}>
        Open
        <span className={styles.arrow}>→</span>
      </span>
    </a>
  )
}
