import React from 'react'
import './About.css'

const About = () => {
  let arr = Array.from('FrontEnd Developer')
  return (
    <section className="about-section" id="about">
        <div className="about-container">
            <div className="about-left-container">
            </div>
            <div className="about-right-container">
                <h1 className="section-heading">About <span>Me</span></h1>
                <h2 className='sub-heading'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                <p className="body-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maiores dolore ex alias veniam? Vel maiores natus, odio autem similique reiciendis porro repudiandae velit facere rerum inventore iure suscipit saepe!</p>
                <button className='section-btn'>Download CV</button>
            </div>
        </div>
    </section>
  )
}

export default About