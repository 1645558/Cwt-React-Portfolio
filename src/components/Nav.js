import React from 'react'

function Nav({ setPage }) {
  return (
    <div>
      <a href="#portfolio" onClick={() => setPage('portfolio')}>Portfolio</a>
      <a href="#about" onClick={() => setPage('about')}>About</a>
      <a href="#contact" onClick={() => setPage('contact')}>Contact</a>
      <a href="#resume" onClick={() => setPage('resume')}>Resume</a>
    </div>
  )
}

export default Nav