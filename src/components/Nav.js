import React from 'react'
import '../styles/Navbar.css'

function Nav({ setPage }) {
  return (
    <div className='navbar'>
      <a href="#portfolio" onClick={() => setPage('portfolio')}>Portfolio</a>
      <a href="#about" onClick={() => setPage('about')}>About</a>
      <a href="#contact" onClick={() => setPage('contact')}>Contact</a>
      <a href="#resume" onClick={() => setPage('resume')}>Resume</a>
    </div>
  )
}

export default Nav