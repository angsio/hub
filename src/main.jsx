import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Philosopher — the Cultist Simulator display face, self-hosted via npm
// (@fontsource). These CSS files declare @font-face and ship the .woff2 files
// with the build, so no CDN and nothing extra to install on the Pi.
import '@fontsource/philosopher/latin-400.css'
import '@fontsource/philosopher/latin-700.css'
import '@fontsource/philosopher/latin-400-italic.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
