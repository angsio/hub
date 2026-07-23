import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Works from './pages/Works'
import About from './pages/About'

/*
  App shell: a persistent Navbar + Footer wrap whichever page the route
  resolves to. Every page renders into <main>, so the theme, font, and chrome
  are identical across routes. Contact isn't a page — the Footer carries it
  (id="contact") on every route. Add a page = add a <Route> here plus an entry
  in navLinks (src/data/site.js).
*/
export default function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
