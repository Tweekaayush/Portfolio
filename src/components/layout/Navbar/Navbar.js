import React, { useState} from 'react'
import './Navbar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faSun, faMoon} from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const [scroll, setScroll] = useState(false)
  // const [theme, setTheme] = useState(false)
  let resizeTimer

  window.addEventListener("scroll", ()=>{
    let sections = document.querySelectorAll('section')
    let links = document.querySelectorAll('nav ul li a')

    if(window.scrollY > 0) 
        setScroll(true);
    else{
        setScroll(false)
    } 
    sections.forEach((sec)=>{
      let top = window.scrollY
      let offset = sec.offsetTop - 150
      let height = sec.offsetHeight
      let id = sec.getAttribute('id')

      if(top >= offset && top < offset + height){
        links.forEach((link)=>{
          link.classList.remove('nav-item-active')
        })
        document.querySelector('nav ul li a[href*='+id+']').classList.add('nav-item-active')
      }
    })
  });
  
  window.addEventListener("resize", ()=>{
    if(document.body.clientWidth>1074)
        setToggle(false)
           document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          document.body.classList.remove("resize-animation-stopper");
        }, 400);
  });

  const resetNav = () =>{
    setToggle(false)
  }

  // const changeTheme = () =>{
  //   if(theme)
  //     document.body.classList.remove('dark-theme')
  //   else{
  //     document.body.classList.add('dark-theme');
  //   }
  //   setTheme(!theme)
  // }

  return (
    <nav className={scroll?'navbar scrolled':'navbar'}>
      <a href="/" className="nav-brand">
        Aayush
      </a>
      <ul className={toggle?"nav-links nav-active":"nav-links"}>
        <li className="nav-item" onClick={resetNav}>
          <a href="#home" >Home</a>
        </li>
        <li className="nav-item" onClick={resetNav}>
          <a href="#about">About</a>
        </li>
        <li className="nav-item" onClick={resetNav}>
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item" onClick={resetNav}>
          <a href="#contact">Contact</a>
        </li>
        {/* <li className="nav-item" onClick={changeTheme}>
          {
            theme ? <FontAwesomeIcon className='theme' icon={faSun} /> : <FontAwesomeIcon className='theme' icon={faMoon} />
          }
        </li> */}
      </ul>
      <div className={toggle?"nav-toggler toggle":"nav-toggler"} onClick={()=>setToggle(!toggle)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar