import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-melon py-8 text-center text-cream">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://www.linkedin.com/in/oumou-bathily/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-veranda-blue transition-colors duration-300"
        >
          <i className="devicon-linkedin-plain text-2xl"></i>
        </a>
        <a
          href="https://github.com/oumou-stack"
          target="_blank"
          rel="noreferrer"
          className="hover:text-veranda-blue transition-colors duration-300"
        >
          <i className="devicon-github-plain text-2xl"></i>
        </a>
      </div>
      <p className="font-poppins text-sm">© 2026 Oumou Bathily. Tous droits réservés.</p>
    </footer>
  )
}