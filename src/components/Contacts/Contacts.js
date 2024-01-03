import React, { useEffect } from 'react'
import './Contacts.css'
import Form from '../Form/Form'
import ScrollReveal from 'scrollreveal'

const Contacts = () => {
  const config1 = {
    origin: "top",
    duration: 1000,
    delay: 150,
    distance: "20px",
    scale: 1,
    easing: "ease",
  };

  const config2 = {
    origin: "bottom",
    duration: 1000,
    delay: 150,
    distance: "20px",
    scale: 1,
    easing: "ease",
  };

  useEffect(()=>{
    ScrollReveal().reveal('.contact-container h1', config1)
    ScrollReveal().reveal('form', config2)
  }, [])
  return (
    <section className="contact-section" id="contact">
        <div className="contact-container">
            <h1 className="section-heading">
                Contact <span>Me</span>
            </h1>
            <Form/>
        </div>
    </section>
  )
}

export default Contacts