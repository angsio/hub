/*
  Shared page shell. Every routed page (Works, About) renders through this, so
  their width, padding, and heading style stay identical — change it once here
  and every page follows. The Home hero is the deliberate exception: it's
  full-screen, so it styles itself.

  Aesthetic (skin) only below; layout (width, spacing, centering) is inline.
*/
const styles = {
  title: 'font-display text-4xl text-parchment sm:text-5xl',
  intro: 'text-parchment-dim',
}

export default function Page({ title, intro, children }) {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      {(title || intro) && (
        <header className="mb-12 text-center">
          {title && <h1 className={styles.title}>{title}</h1>}
          {intro && <p className={`mx-auto mt-3 max-w-xl ${styles.intro}`}>{intro}</p>}
        </header>
      )}
      {children}
    </section>
  )
}
