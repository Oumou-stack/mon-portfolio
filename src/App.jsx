// C'est ici qu'on import ses composants et qu'on les assemble pour construire notre application
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter basename="/mon-portfolio/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>La route n'est pas trouvée !</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}