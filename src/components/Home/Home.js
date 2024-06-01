import React, { useEffect } from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import html from '../../assets/Tech/HTML5.png'
import css from '../../assets/Tech/CSS3.png'
import js from '../../assets/Tech/JavaScript.png'
import react from '../../assets/Tech/React.png'
import redux from '../../assets/Tech/redux.png'
import ScrollReveal from 'scrollreveal'


const Home = () => {

  let config1 = {
    origin: "top",
    duration: 1000,
    delay: 150,
    distance: "20px",
    scale: 1,
    easing: "ease",
  };

  let config2 = {
    origin: "bottom",
    duration: 1000,
    delay: 150,
    distance: "20px",
    scale: 1,
    easing: "ease",
  };

  const config3 = {
    origin: "left",
    duration: 1000,
    delay: 150,
    distance: "20px",
    scale: 1,
    easing: "ease",
  };
  
  useEffect(()=>{
    ScrollReveal().reveal('.home-left-container', config1)
    ScrollReveal().reveal('.home-right-container', config2)
    ScrollReveal().reveal('.skills', config3)
  }, [])

  return (
    <section className='home-section' id='home'>
        <div className="home-container">
            <div className="home-content">
                <div className="home-left-container">
                    <p className='body-text'>Hi, I'm</p>
                    <h1 className='home-heading'>Aayush <span>Dobriyal</span></h1>
                    <p className='body-text'>
                        I’ m a Front-end Developer with a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                    </p>
                    <div className="home-links svg-links">
                        <a href="https://in.linkedin.com/in/aayush-dobriyal-896217192?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/Tweekaayush" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    <div className="home-buttons">
                        <a href='#contact' className='section-btn'>hire me</a>
                        <a href='#projects'>view my projects <FontAwesomeIcon className='arrow' icon={faArrowRight} /></a>
                    </div>
                </div>
                <div className="home-right-container">
                    <div className="profile-img-container"></div>
                </div>
            </div>
            <div className="skills">
                <h3 className='skills-heading'>Tech Stack</h3>
                <ul className="skills-list">
                    <li>
                        <img className='tech-icons' src={html} alt='html' />
                    </li>
                    <li>
                        <img className='tech-icons' src={css} alt='css' />
                    </li>
                    <li>
                        <img className='tech-icons' src={js} alt='js'/>
                    </li>
                    <li>
                        <img className='tech-icons' src={react} alt='react'/>
                    </li>
                    <li>
                        <img className='tech-icons' src={redux} alt='react'/>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Home