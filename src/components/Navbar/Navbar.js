import React from 'react'
import FionaLogo from '../../images/fionalogo.png'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavbarLogo, NavLogoImg, MobileIcon, NavbarMenu, NavbarItem, NavbarLinks, NavBtn, ResumeHyperlink, ResumeBtnLink} from './NavbarElements.js'
import {animateScroll as scroll} from 'react-scroll'
import resume from '../../documents/LiBingqingFiona_Resume.pdf'

const Navbar = ( {toggle}) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          {/* Logo */}
          <NavbarLogo to="/" onClick={toggleHome}>
            <NavLogoImg src={FionaLogo} />
          </NavbarLogo>
          {/* Menu icon */}
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavbarMenu>
            <NavbarItem>
              <NavbarLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="experience" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Experience</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</NavbarLinks>
            </NavbarItem>
            {/* <NavbarItem>
              <NavbarLinks to="achievements">Achievements</NavbarLinks>
            </NavbarItem> */}
            <NavbarItem>
              <NavbarLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavbarLinks>
            </NavbarItem>
          </NavbarMenu>
          <NavBtn>
            <ResumeHyperlink href={resume} download="LiBingqingFiona_Resume">
            <ResumeBtnLink>Resume</ResumeBtnLink>
            </ResumeHyperlink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar