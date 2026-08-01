import { useState, useEffect, useCallback } from 'react'

import { fetchAccount, logout } from './auth'

// Tabs on this origin talk to each other over this. Other subdomains are a
// separate origin and cannot be messaged, so they re-check on focus instead.
const CHANNEL = 'frangiclave-session'

/*
  Who is signed in, for the navbar.

  In:  nothing
  Out: { account, ready, signOut }
       account  { id, email, apps } | null
       ready    boolean. False until the first check comes back, so the navbar
                can wait rather than flash the wrong button
       signOut  () -> Promise<void>, ends the session everywhere on the domain

  Signing out is announced to the other tabs on this origin, which clear
  themselves at once. The same check runs again whenever this tab is looked at,
  which is what catches a sign-out that happened on another subdomain.
*/
export default function useAccount() {
  const [account, setAccount] = useState(null)
  const [ready, setReady] = useState(false)

  const check = useCallback(async () => {
    const user = await fetchAccount()
    setAccount(user)
    setReady(true)
  }, [])

  useEffect(() => {
    check()

    const channel = new BroadcastChannel(CHANNEL)
    channel.onmessage = check

    const onVisible = () => {
      if (document.visibilityState === 'visible') check()
    }

    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('focus', onVisible)

    return () => {
      channel.close()
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('focus', onVisible)
    }
  }, [check])

  const signOut = async () => {
    await logout()
    setAccount(null)

    const channel = new BroadcastChannel(CHANNEL)
    channel.postMessage('signed-out')
    channel.close()
  }

  return { account, ready, signOut }
}
