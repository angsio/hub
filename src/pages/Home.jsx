import { site } from '../data/site'
import Button from '../components/Button'

const styles = {
  ring: 'rounded-full border border-accent/15',
  domain: 'font-display text-sm uppercase tracking-[0.35em] text-accent',
  title: 'font-display text-5xl leading-tight text-parchment sm:text-7xl',
  tagline: 'font-display text-xl italic text-parchment-dim',
  intro: 'text-parchment-dim',
}

export default function Home() {
  return (
    <section className="relative flex min-h-[calc(100svh-var(--nav-h))] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      
      <div
        aria-hidden
        className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 h-136 w-136 -translate-x-1/2 -translate-y-1/2 ${styles.ring}`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 h-88 w-88 -translate-x-1/2 -translate-y-1/2 ${styles.ring}`}
      />

      <div className="w-full">
        <p className={`mb-6 ${styles.domain}`}>{site.domain}</p>
        <h1 className={`mx-auto max-w-3xl ${styles.title}`}>{site.name}</h1>
        <p className={`mx-auto mt-6 max-w-xl ${styles.tagline}`}>{site.tagline}</p>
        <p className={`mx-auto mt-8 max-w-2xl ${styles.intro}`}>{site.intro}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button to="/works" variant="primary">
            My Works
          </Button>
          <Button href="#contact" variant="secondary">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}
