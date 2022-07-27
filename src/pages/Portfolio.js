import React from 'react'
import '../styles/Portfolio.css'

function Portfolio() {
  return (
    <>
      <header className='header'>
        <h1>Portfolio</h1>
      </header>
      <section className='portfolio card-columns'>
        <div className='card col-sm-10 h-25 text-center'>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://1645558.github.io/CocktailAPI-group-project/'>
            Cocktail API
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://github.com/1645558/CocktailAPI-group-project'>
            Github
          </a>
        </div>
        <div className='card col-sm-10 h-25 text-center'>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://1645558.github.io/05-Work-Schedule/'>
            Work Schedule
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://github.com/1645558/05-Work-Schedule'>
            Github
          </a>
        </div>
        <div className='card col-sm-10 h-25 text-center'>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://1645558.github.io/06-Weather-Dashboard/'>
            Weather Dashboard
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://github.com/1645558/06-Weather-Dashboard'>
            Github
          </a>
        </div>
        <div className='card col-sm-10 h-25 text-center'>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://1645558.github.io/password-generator/'>
            Password Generator
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://github.com/1645558/password-generator'>
            Github
          </a>
        </div>
        <div className='card col-sm-10 h-25 text-center'>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://pacific-everglades-44013.herokuapp.com/'>
            Food Run
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://github.com/untjala/food-run'>
            Github
          </a>
        </div>
        <div className='card col-sm-10 h-25 text-center'>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://1645558.github.io/My-Portfolio/'>
            Other Portfolio
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://github.com/1645558/My-Portfolio'>
            Github
          </a>
        </div>
      </section>
    </>
  )
}

export default Portfolio