import React from 'react'
import './Contacts.css'
import Form from '../Form/Form'

const Contacts = () => {
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