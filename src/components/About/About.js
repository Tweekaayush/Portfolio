import React, { useEffect } from 'react'
import './About.css'
import imgs from '../../assets/Tech/React.png'
import ScrollReveal from 'scrollreveal'

const About = () => {
  let arr = Array.from('Front-End Developer')

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
    ScrollReveal().reveal('.about-left-container', config1)
    ScrollReveal().reveal('.about-right-container', config2)
  }, [])

  const animateCircle = (e, i) =>{
    return (

      <span key={i} style={{transform: `rotate(${i * 12}deg)`}}>
        {e}
      </span>
    )
  }

  return (
    <section className="about-section" id="about">
        <div className="about-container">
            <div className="about-left-container">
              <div className="about-img-container">
                <div className='about-circle'>
                  <p>
                    {
                      arr.map(animateCircle)
                    }
                    <img src={imgs} alt="" />
                  </p>
                </div>
              </div>
            </div>
            <div className="about-right-container">
              <h1 className="section-heading">About <span>Me</span></h1>
              <h2 className='sub-heading'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
              <p className="body-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maiores dolore ex alias veniam? Vel maiores natus, odio autem similique reiciendis porro repudiandae velit facere rerum inventore iure suscipit saepe!</p>
              <a className='section-btn' href="" download="Resume">Download CV</a>
            </div>
        </div>
    </section>
  )
}

export default About