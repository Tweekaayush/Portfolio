import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import html from '../../assets/Tech/HTML5.png'
import css from '../../assets/Tech/CSS3.png'
import js from '../../assets/Tech/JavaScript.png'
import react from '../../assets/Tech/React.png'
import './Home.css'

const Home = () => {
  return (
    <section className='home-section' id='home'>
        <div className="home-container">
            <div className="home-content">
                <div className="home-left-container">
                    <p className='body-text'>Hi, I'm</p>
                    <h1 className='home-heading'>Aayush <span>Dobriyal</span></h1>
                    <p className='body-text'>I’ m a passionate Front-end Developer based in Delhi NCR, India.  I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
                    <div className="home-links svg-links">
                        <a href="" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    <div className="home-buttons">
                        <a href='#contact' className='home-btn section-btn'>hire me</a>
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
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Home