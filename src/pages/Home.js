import React from 'react'
import '../styles/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-core'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Home() {
  return (
    <>
    <header className='header'>
    <h1>Connor Thompson</h1>
    </header>
    <section className='section'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto ab molestiae labore consequuntur tempore nulla magnam possimus facere unde maiores aut sint modi distinctio, et autem commodi perspiciatis aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto ab molestiae labore consequuntur tempore nulla magnam possimus facere unde maiores aut sint modi distinctio, et autem commodi perspiciatis aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto ab molestiae labore consequuntur tempore nulla magnam possimus facere unde maiores aut sint modi distinctio, et autem commodi perspiciatis aspernatur.</p>
    </section>
    <i class="fa-solid fa-user"></i>
    <div className='flex justify-center'>
    {/* <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> */}
    </div>
    </>
  )
}

export default Home