import { useState, useEffect } from 'react'

import { fetchAccount, logout } from './auth'

/*
  Who is signed in, for the navbar.

  In:  nothing
  Out: { account, ready, signOut }
       account  { id, email, apps } | null
       ready    boolean. False until the first check comes back, so the navbar
                can wait rather than flash the wrong button
       signOut  () -> Promise<void>, ends the session everywhere on the domain
*/
export default function useAccount() {
  const [account, setAccount] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let live = true

    fetchAccount().then((user) => {
      if (!live) return
      setAccount(user)
      setReady(true)
    })

    return () => {
      live = false
    }
  }, [])

  const signOut = async () => {
    await logout()
    setAccount(null)
  }

  return { account, ready, signOut }
}
