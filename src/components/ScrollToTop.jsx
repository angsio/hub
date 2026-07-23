import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/*
  Client-side routing keeps the scroll position when you change pages, which
  feels broken (you can land halfway down a fresh page). This resets to the top
  on every route change. Renders nothing.
*/
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
