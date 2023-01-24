import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <nav className="Nav-container nav-grid-item">
      <a href="/" className="Nav-links">About</a>
      <a href="/" className="Nav-links">Projects</a>
      <a href="/" className="Nav-links">Connect</a>
    </nav>
  )
}

export default Nav