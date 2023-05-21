import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavbarLogo, MobileIcon, NavbarMenu, NavbarItem, NavbarLinks, NavBtn, NavBtnLink} from './NavbarElements.js'

const Navbar = ( {toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          {/* Logo */}
          <NavbarLogo to="/">
            dolla
          </NavbarLogo>
          {/* Menu icon */}
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavbarMenu>
            <NavbarItem>
              <NavbarLinks to="about">About</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="experience">Experience</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="projects">Projects</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="skills">Skills</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="achievements">Achievements</NavbarLinks>
            </NavbarItem>
            <NavbarItem>
              <NavbarLinks to="contact">Contact</NavbarLinks>
            </NavbarItem>
          </NavbarMenu>
          {/* Resume button */}
          <NavBtn>
            <NavBtnLink to="/resume">Resume</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar