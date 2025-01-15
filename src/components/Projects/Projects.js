import React, { useEffect, useRef, useState } from 'react'
import './Projects.css'
import Card from '../Card/Card'
import projects from '../../projectlist'
import ScrollReveal from 'scrollreveal'
import {Pagination} from 'react-bootstrap'
import { act } from 'react'


const Projects = () => {

  const [projectArray, setProjectArray] = useState([])
  const [paginationArray, setPaginationArray] = useState([])
  const [page, setPage] = useState(1)
  const all = useRef(null)
  const vanilla = useRef(null)
  const react = useRef(null)
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
    setProjectArray(newArr.slice((page-1)*paginate, paginate*page))
    setPaginationArray(new Array(Math.ceil(newArr?.length/paginate)).fill(0))
    setPage(1)
  }

  useEffect(()=>{
    ScrollReveal().reveal('.projects-container h1', config1)
    ScrollReveal().reveal('.projects-grid', config2)
    ScrollReveal().reveal('.projects-container h2', config3)
    ScrollReveal().reveal('.projects-button', config3)
    setProjectArray(projects.slice((page-1)*paginate, paginate*page))
    setPaginationArray(new Array(Math.ceil(projects?.length/paginate)).fill(0))
  }, [])

  useEffect(()=>{
    setProjectArray(projects.slice((page-1)*paginate, paginate*page))
  }, [page])

  return (
    <section className="projects-section" id="projects">
        <div className="projects-container">
            <h1 className="section-heading">
              Port<span>folio</span>
            </h1>
            <h2 className='sub-heading text-align-center'>Each project is a unique piece of development</h2>

            <div className='projects-button'>
              <button ref={all} className='active-btn' onClick={()=>switchList('all')}>All</button>
              <button ref={vanilla} onClick={()=>switchList('vanilla')}>Html / Css / Js</button>
              <button ref={react} onClick={()=>switchList('react')}>React</button>
            </div>

            <div className="projects-grid">
              {
                projectArray.map(createProjectCard)
              }
            </div>
            <Pagination className='align-self-center mt-5 gap-2'>
              <Pagination.Prev/>
              {
                paginationArray.map((_, i)=>{
                  return <Pagination.Item key={i} active={i === page-1} onClick={()=>setPage(i+1)}>{i+1}</Pagination.Item>
                })
              }
              <Pagination.Next/>
            </Pagination>
        </div>
    </section>
  )
}

export default Projects