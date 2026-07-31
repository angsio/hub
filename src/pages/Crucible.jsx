const styles = {
  ring: 'rounded-full border border-accent/15',
  eyebrow: 'font-display text-sm uppercase tracking-[0.35em] text-accent',
  title: 'font-display text-4xl text-parchment sm:text-6xl',
  body: 'text-parchment-dim',
}

export function Crucible() {
  return (
    <section className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <div
        aria-hidden
        className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 h-88 w-88 -translate-x-1/2 -translate-y-1/2 ${styles.ring}`}
      />

      <div className="w-full">
        <p className={`mb-6 ${styles.eyebrow}`}>Work in progress</p>
        <h1 className={`mx-auto max-w-2xl ${styles.title}`}>Still Forging</h1>
        <p className={`mx-auto mt-6 max-w-md ${styles.body}`}>
          This page is not yet ready for display.
        </p>
      </div>
    </section>
  )
}
