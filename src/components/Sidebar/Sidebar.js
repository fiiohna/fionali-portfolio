import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements.js'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        {/* Close icon */}
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        {/* Sidebar menu */}
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="experience" onClick={toggle}>Experience</SidebarLink>
                <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
                <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
                {/* <SidebarLink to="achievements" onClick={toggle}>Achievements</SidebarLink> */}
                <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
            </SidebarMenu>
            {/* Resume button */}
            <SideBtnWrap>
                <SidebarRoute to="/resume">Resume</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar