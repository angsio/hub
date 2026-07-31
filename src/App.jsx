import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { Home, Works, Project, Crucible, About } from './pages'

export default function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/tasks" element={<Project slug="tasks" />} />
          <Route path="/trips" element={<Project slug="trips" />} />
          <Route path="/homelab" element={<Project slug="homelab" />} />
          <Route path="/crucible" element={<Crucible />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
