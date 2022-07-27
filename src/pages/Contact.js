import React, { useState } from 'react'
import '../styles/Contact.css'

function Contact() {

  const [names, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!names || !email) {
      setErrorMessage('Name or Email is invalid');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');

  }

  return (
    <>
      <header className='header'>
        <h1>Contact Me</h1>
      </header>
      <section className='section'>

        <form className='form'>
          <input
            value={names}
            onChange={handleInputChange}
            type="text"
            name="name"
            placeholder='Name' />

          <input
            value={email}
            onChange={handleInputChange}
            type="text"
            name="email"
            placeholder='Email' />

          <input 
          value={message}
          onChange={handleInputChange}
          type="text" 
          name="message" 
          placeholder='Message' />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </section>
    </>
  )
}

export default Contact