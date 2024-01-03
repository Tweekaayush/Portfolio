import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {faAnglesUp} from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {

  const [date, setDate] = useState(new Date().getFullYear()) 
  
  useEffect(()=>{
    setDate(new Date().getFullYear())
  }, [])

  return (
    <footer className='footer'>
        <div className="footer-container">
            <a href="#home">
                <button className='footer-button'>
                    <FontAwesomeIcon icon={faAnglesUp} />
                </button>
            </a>
            <div className="footer-content">
                <p className="copyright">
                    Copyright &copy; {date}. All rights are reserved
                </p>
                <div className="footer-links svg-links">
                    <a href="" target='_blank'>
                        <FontAwesomeIcon className='icon' icon={faLinkedin} />
                    </a>
                    <a href="" target='_blank'>
                        <FontAwesomeIcon className='icon' icon={faGithub} />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer