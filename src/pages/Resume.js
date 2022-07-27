import React from 'react'
import '../styles/Resume.css'

function Resume() {
  return (
    <>
    <header className='header'>
    <h1>Resume</h1>
    </header>
    <section className='section'>
      <a href={require('../resume/Connor-Thompson.pdf')} download>Download</a>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto ab molestiae labore consequuntur tempore nulla magnam possimus facere unde maiores aut sint modi distinctio, et autem commodi perspiciatis aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto ab molestiae labore consequuntur tempore nulla magnam possimus facere unde maiores aut sint modi distinctio, et autem commodi perspiciatis aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto ab molestiae labore consequuntur tempore nulla magnam possimus facere unde maiores aut sint modi distinctio, et autem commodi perspiciatis aspernatur.</p>
    </section>
    </>
  )
}

export default Resume