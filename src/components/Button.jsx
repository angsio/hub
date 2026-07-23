import { Link } from 'react-router-dom'

/*
  One button style, three behaviours — so every call-to-action on the site
  looks identical whether it routes internally, leaves to another site, or
  just fires an onClick.

    <Button to="/works">…</Button>          internal route  → <Link>
    <Button href="https://…">…</Button>      external link   → <a> (new tab)
    <Button href="#contact">…</Button>       in-page anchor  → <a> (same tab)
    <Button onClick={fn}>…</Button>          action          → <button>

  `variant` picks the look; `href` auto-opens in a new tab only when it's
  http(s), and stays same-tab for anchors and mailto:.
*/
const base =
  'inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 ' +
  'font-display transition-colors'

const variants = {
  primary:
    'border border-accent/60 bg-accent/10 text-accent-bright hover:bg-accent/20',
  secondary:
    'border border-border text-parchment-dim ' +
    'hover:border-parchment-dim hover:text-parchment',
}

export default function Button({
  variant = 'primary',
  to,
  href,
  children,
  className = '',
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    const isExternal = /^https?:/.test(href)
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
