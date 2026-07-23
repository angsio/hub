/*
  Shared page shell. Every routed page (Works, About) renders through this, so
  their width, padding, and heading style stay identical — change the
  look once here and every page follows. The Home hero is the deliberate
  exception: it's full-screen, so it styles itself.
*/
const styles = {
  section: 'mx-auto w-full max-w-5xl px-6 py-20',
  header: 'mb-12 text-center',
  title: 'font-display text-4xl text-parchment sm:text-5xl',
  intro: 'mx-auto mt-3 max-w-xl text-parchment-dim',
}

export default function Page({ title, intro, children }) {
  return (
    <section className={styles.section}>
      {(title || intro) && (
        <header className={styles.header}>
          {title && <h1 className={styles.title}>{title}</h1>}
          {intro && <p className={styles.intro}>{intro}</p>}
        </header>
      )}
      {children}
    </section>
  )
}
