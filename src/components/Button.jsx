import { Link } from 'react-router-dom'

const layout = 'inline-flex items-center justify-center gap-2 px-6 py-3'

const skin = {
  base: 'rounded-sm font-display transition-colors',
  primary: 'border border-accent/60 bg-accent/10 text-accent-bright hover:bg-accent/20',
  secondary: 'border border-border text-parchment-dim hover:border-parchment-dim hover:text-parchment',
}

export default function Button({
  variant = 'primary',
  to,
  href,
  children,
  className = '',
  ...rest
}) {
  const classes = `${layout} ${skin.base} ${skin[variant]} ${className}`

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
