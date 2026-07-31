/*
  The auth site's origin. It serves both the login pages and the /auth API, so
  one value covers both. Dev default is the auth client's vite server, which
  proxies /auth through to the service on 5002 — the same shape nginx gives us
  in production.
*/
const AUTH = import.meta.env.VITE_AUTH_URL ?? 'http://localhost:5175'

/*
  Who is signed in?

  In:  nothing — the session cookie travels on its own
  Out: Promise<{ id, email, apps } | null>, null when nobody is signed in.

  Never throws. Being signed out is the normal case rather than an error, and if
  the auth service is down the hub should still render — it is a public site.
*/
export const fetchAccount = async () => {
    try {
        const response = await fetch(`${AUTH}/auth/me`, { credentials: 'include' })
        if (!response.ok) return null

        const { user } = await response.json()
        return user
    } catch {
        return null
    }
}

// () -> Promise<void>. Safe to call when already signed out.
export const logout = async () => {
    try {
        await fetch(`${AUTH}/auth/logout`, { method: 'POST', credentials: 'include' })
    } catch {
        // Nothing useful to do; the caller clears its own state either way.
    }
}

/*
  Where to send someone to sign in.

  In:  returnTo  absolute URL to come back to, defaulting to this page
  Out: string, the auth site's login page carrying ?next

  The auth app validates that ?next points at frangiclave.com before using it.
*/
export const loginUrl = (returnTo = window.location.href) =>
    `${AUTH}/login?next=${encodeURIComponent(returnTo)}`
