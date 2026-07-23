import { site } from '../data/site'
import Button from '../components/Button'

const styles = {
  // Fills the viewport and centers its content, so the hero owns the first
  // screen. The two rings are absolute, so they sit at its true middle.
  section:
    'relative flex min-h-svh flex-col items-center justify-center ' +
    'overflow-hidden px-6 py-20 text-center',
  content: 'w-full',
  ringOuter:
    'pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] ' +
    '-translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15',
  ringInner:
    'pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[22rem] w-[22rem] ' +
    '-translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15',
  domain: 'mb-6 font-display text-sm uppercase tracking-[0.35em] text-accent',
  title:
    'mx-auto max-w-3xl font-display text-5xl leading-tight text-parchment ' +
    'sm:text-7xl',
  tagline: 'mx-auto mt-6 max-w-xl font-display text-xl italic text-parchment-dim',
  intro: 'mx-auto mt-8 max-w-2xl text-parchment-dim',
  actions: 'mt-10 flex flex-wrap items-center justify-center gap-4',
}

/*
  Home — the landing hero. Name, pitch, intro, and two calls to action:
  "Great Works" routes to /works; "Reach Me" scrolls to the footer (#contact),
  which is the site's contact section on every page.
*/
export default function Home() {
  return (
    <section className={styles.section}>
      <div aria-hidden className={styles.ringOuter} />
      <div aria-hidden className={styles.ringInner} />

      <div className={styles.content}>
        <p className={styles.domain}>{site.domain}</p>
        <h1 className={styles.title}>{site.name}</h1>
        <p className={styles.tagline}>{site.tagline}</p>
        <p className={styles.intro}>{site.intro}</p>

        <div className={styles.actions}>
          <Button to="/works" variant="primary">
            Great Works
          </Button>
          <Button href="#contact" variant="secondary">
            Reach Me
          </Button>
        </div>
      </div>
    </section>
  )
}
