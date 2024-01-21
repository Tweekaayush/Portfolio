import React from 'react'
import './App.css'
import Navbar from './components/layout/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/layout/Footer/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  )
}

export default App