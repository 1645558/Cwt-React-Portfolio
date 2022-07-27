import React from 'react'
import '../styles/About.css'
import Avatar from '../images/AvatarMaker.png'

function About() {
  return (
    <>
    <header className='header'>
    <h1>About Me</h1>
    <img src={Avatar} alt='avatar' className='avatar'></img>
    </header>
    <section className='about'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto ab molestiae labore consequuntur tempore nulla magnam possimus facere unde maiores aut sint modi distinctio, et autem commodi perspiciatis aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto ab molestiae labore consequuntur tempore nulla magnam possimus facere unde maiores aut sint modi distinctio, et autem commodi perspiciatis aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto ab molestiae labore consequuntur tempore nulla magnam possimus facere unde maiores aut sint modi distinctio, et autem commodi perspiciatis aspernatur.</p>
    </section>
    </>
  )
}

export default About