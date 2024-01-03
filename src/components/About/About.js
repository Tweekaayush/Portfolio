import React, { useEffect, useState } from 'react'
import './About.css'
import imgs from '../../assets/Tech/React.png'

const About = () => {
  let arr = Array.from('Front-End Developer')
  const [angle, setAngle] = useState(12)

  useEffect(()=>{    
    window.addEventListener('resize', ()=>{
      if(window.innerWidth <= 480){
        setAngle(15)
      }
      else{
        setAngle(12)
      }
    })
  }, [])

  const animateCircle = (e, i) =>{
    return (

      <span style={{transform: `rotate(${i * angle}deg)`}}>
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
              <button className='section-btn'>Download CV</button>
            </div>
        </div>
    </section>
  )
}

export default About