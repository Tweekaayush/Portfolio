import React from 'react'
import './Projects.css'
import Card from '../Card/Card'
import projects from '../../projectlist'

const Projects = () => {
  
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