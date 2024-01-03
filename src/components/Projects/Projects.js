import React, { useEffect } from 'react'
import './Projects.css'
import Card from '../Card/Card'
import projects from '../../projectlist'
import ScrollReveal from 'scrollreveal'

const Projects = () => {
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

  const config3 = {
    origin: "left",
    duration: 1000,
    delay: 150,
    distance: "20px",
    scale: 1,
    easing: "ease",
  };

  useEffect(()=>{
    ScrollReveal().reveal('.projects-container h1', config1)
    ScrollReveal().reveal('.projects-container h2', config3)
    ScrollReveal().reveal('.projects-grid', config2)
  }, [])
  
  return (
    <section className="projects-section" id="projects">
        <div className="projects-container">
            <h1 className="section-heading">Port<span>folio</span></h1>
            <h2 className='sub-heading'>Each project is a unique piece of development.</h2>
            <div className="projects-grid">
              {
                projects.map((card, i)=>{
                   return <Card id={i} key={i} {...card}/>
                })
              }
            </div>
        </div>
    </section>
  )
}

export default Projects