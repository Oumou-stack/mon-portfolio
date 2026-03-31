import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-melon shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <span className="font-chewy text-2xl text-white">Oumou ✿</span>
        </Link>

        {/* Liens desktop */}
        <ul className="hidden md:flex gap-10 text-white font-poppins text-sm font-bold tracking-widest">
          <li><Link to="/" className="hover:underline decoration-2 underline-offset-8">ACCUEIL</Link></li>
          <li><Link to="/about" className="hover:underline decoration-2 underline-offset-8">À PROPOS</Link></li>
          <li><Link to="/projects" className="hover:underline decoration-2 underline-offset-8">PROJETS</Link></li>
          <li><Link to="/contact" className="hover:underline decoration-2 underline-offset-8">CONTACT</Link></li>
        </ul>

        {/* Bouton hamburger mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Croix
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Menu mobile déroulant */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-melon text-white font-poppins font-bold tracking-widest text-sm">
          <li><Link to="/" onClick={() => setIsOpen(false)}>ACCUEIL</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>À PROPOS</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>PROJETS</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link></li>
        </ul>
      )}
    </nav>
  )
}