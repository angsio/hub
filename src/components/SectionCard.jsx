/* Class strings live here so the card's structure reads cleanly below. */
const styles = {
  // h-full lets the card fill its grid cell, so cards in a row match height
  // regardless of how long each blurb is.
  card:
    'group relative flex h-full flex-col rounded-md border border-border ' +
    'bg-obsidian/60 p-7 transition-all duration-300 ' +
    'hover:-translate-y-1 hover:border-accent/50 hover:bg-crypt',
  title:
    'font-display text-2xl text-parchment ' +
    'transition-colors group-hover:text-accent-bright',
  blurb: 'mt-3 flex-1 text-parchment-dim',
  open: 'mt-6 inline-flex items-center gap-2 font-display text-sm text-accent',
  arrow: 'transition-transform duration-300 group-hover:translate-x-1',
}

/*
  A single container card — a link to one destination.
  Give it a title, a blurb, and an href; it renders a hover-lifting card.
  External links (the default) open in a new tab. Works feeds it from site data.
*/
export default function SectionCard({ title, blurb, href, external = true }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={styles.card}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.blurb}>{blurb}</p>

      <span className={styles.open}>
        Open
        <span className={styles.arrow}>→</span>
      </span>
    </a>
  )
}
