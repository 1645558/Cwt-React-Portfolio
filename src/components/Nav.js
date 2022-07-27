import React from 'react'
import '../styles/Navbar.css'

function Nav({ setPage }) {
    return (
        <div className='navbar navbar-expand-sm flex-row-reverse'>
            <a href="#contact" onClick={() => setPage('contact')}>Contact</a>
            <a href="#resume" onClick={() => setPage('resume')}>Resume</a>
            <a href="#portfolio" onClick={() => setPage('portfolio')}>Portfolio</a>
            <a href="#about" onClick={() => setPage('about')}>About</a>
            <a href='#home' onClick={() => setPage('home')}>Home</a>
        </div>
    )
}

export default Nav