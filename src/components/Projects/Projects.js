import React, { useEffect, useRef, useState } from 'react'
import './Projects.css'
import Card from '../Card/Card'
import projects from '../../projectlist'
import ScrollReveal from 'scrollreveal'
import Pagination from '../Pagination/Pagination'


const Projects = () => {

  const [projectArray, setProjectArray] = useState(projects)
  const all = useRef(null)
  const vanilla = useRef(null)
  const react = useRef(null)
  const [pageNo, setPageNo] = useState(1)
  const paginate = 4

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

  const createProjectCard = (item, i) =>{  
    return <Card id={item.id} key={item.id} {...item}/>
  }

  const search = (ch, list) =>{
    for(let i of list){
      if(i === ch)
        return true
    }
    return false
  }

  const switchList = (e) =>{

    if(e === 'vanilla'){
      all.current.classList.remove('active-btn')
      vanilla.current.classList.add('active-btn')
      react.current.classList.remove('active-btn')
    }else if(e === 'react'){
      all.current.classList.remove('active-btn')
      vanilla.current.classList.remove('active-btn')
      react.current.classList.add('active-btn')
    }else{
      all.current.classList.add('active-btn')
      vanilla.current.classList.remove('active-btn')
      react.current.classList.remove('active-btn')
    }

    let newArr = projects.filter((item)=>{
      return search(e, item.type)
    })

    setProjectArray(newArr) 
    setPageNo(1)
  }

  useEffect(()=>{
    ScrollReveal().reveal('.projects-container h1', config1)
    ScrollReveal().reveal('.projects-grid', config2)
    ScrollReveal().reveal('.projects-container h2', config3)
    ScrollReveal().reveal('.projects-button', config3)
  }, [])

  return (
    <section className="projects-section" id="projects">
        <div className="projects-container">
            <h1 className="section-heading">Port<span>folio</span></h1>
            <h2 className='sub-heading'>Each project is a unique piece of development</h2>

            <div className='projects-button'>
              <button ref={all} className='active-btn' onClick={()=>switchList('all')}>All</button>
              <button ref={vanilla} onClick={()=>switchList('vanilla')}>Html / Css / Js</button>
              <button ref={react} onClick={()=>switchList('react')}>React</button>
            </div>

            <div className="projects-grid">
              {
                projectArray.slice((pageNo-1) * paginate, pageNo*paginate).map(createProjectCard)
              }
            </div>
            <Pagination pageNo={pageNo} setPageNo={setPageNo} totalPages={Math.ceil(projectArray.length/paginate)}/>
        </div>
    </section>
  )
}

export default Projects