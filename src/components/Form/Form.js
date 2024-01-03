import React, { useState } from 'react'
import './Form.css'

const Form = () => {
  return (
    <form action={`mailto:${process.env.REACT_APP_EMAIL}`} method="post" className='contact-form'>
        <input type="text" name="name" id="name" placeholder='Your Name...'/>
        <input type="email" name="email" id="email" placeholder='example@gmail.com' />
        <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message...'></textarea>
        <input type="submit" value="Submit"  className='section-btn'/>
    </form>
  )
}

export default Form