import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Works from './pages/Works'
import About from './pages/About'
import Crucible from './pages/Crucible'

export default function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/crucible" element={<Crucible />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
