import React, { useState } from 'react'
import './Form.css'

const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) =>{
    const { name, value } = e.target

    console.log(name)

    setFormData({...formData, [name]: value})

  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <form action={`mailto:${process.env.REACT_APP_EMAIL}`} method="post" className='contact-form' onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" value={formData.name}  onChange={handleChange} placeholder='Your Name...'/>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder='example@gmail.com' />
        <textarea name="message" id="message" cols="30" rows="10" value={formData.message} onChange={handleChange} placeholder='Your Message...'></textarea>
        <input type="submit" value="Submit"  className='section-btn'/>
    </form>
  )
}

export default Form