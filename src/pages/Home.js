import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import About from '../components/About/About'
import Experience from '../components/Experience/Experience'
import Project from '../components/Projects/Project'
import Skills from '../components/Skills/Skills'
// import Achievement from '../components/Achievements/Achievement'
import Contact from  '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <About />
        <Experience />
        <Project />
        <Skills />
        {/* <Achievement /> */}
        <Contact />
        <Footer />
    </>
  )
}

export default Home