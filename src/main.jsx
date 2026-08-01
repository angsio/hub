import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '@fontsource/philosopher/latin-400.css'
import '@fontsource/philosopher/latin-700.css'
import '@fontsource/philosopher/latin-400-italic.css'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

/*
  A production build arrives with the page already rendered into #root by
  scripts/prerender.js, so React adopts that markup instead of rebuilding it —
  no flash, and the text is readable before the JavaScript finishes.

  `npm run dev` serves the plain shell with an empty #root, and hydrating
  nothing is an error, so fall back to a normal render there.
*/
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
