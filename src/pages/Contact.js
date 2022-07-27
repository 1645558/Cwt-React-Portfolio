import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <>
      <header className='header'>
        <h1>Contact Me</h1>
      </header>
      <section className='section'>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>

      </section>
    </>
  )
}

export default Contact