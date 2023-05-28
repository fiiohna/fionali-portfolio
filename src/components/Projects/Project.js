import React from 'react';
import Icon1 from '../../images/PetPals.png';
import Icon2 from '../../images/ZilHive2.png';
import { ProjectContainer, ProjectH1, ProjectWrapper, ProjectCard, IconWrap, ProjectIcon, ProjectH2, ProjectP } from './ProjectElements'
const Project = () => {
  return (
    <ProjectContainer>
        <ProjectH1>Project</ProjectH1>
        <ProjectWrapper>
            <ProjectCard>
                <IconWrap><ProjectIcon src={Icon1}></ProjectIcon></IconWrap>
                <ProjectH2>PetPals</ProjectH2>
                <ProjectP>Some quick example text to build on the card title and make up
                  the bulk of the card's content.</ProjectP>
            </ProjectCard>
            <ProjectCard>
            <IconWrap><ProjectIcon src={Icon2}></ProjectIcon></IconWrap>
                <ProjectH2>ZilHive</ProjectH2>
                <ProjectP></ProjectP>
            </ProjectCard>
            <ProjectCard>
            <IconWrap><ProjectIcon src={Icon1}></ProjectIcon></IconWrap>
                <ProjectH2>PetPals</ProjectH2>
                <ProjectP>Some quick example text to build on the card title and make up
                  the bulk of the card's content.</ProjectP>
            </ProjectCard>
            <ProjectCard>
            <IconWrap><ProjectIcon src={Icon2}></ProjectIcon></IconWrap>
                <ProjectH2>ZilHive</ProjectH2>
                <ProjectP>Some quick example text to build on the card title and make up
                  the bulk of the card's content.</ProjectP>
            </ProjectCard>
        </ProjectWrapper>
    </ProjectContainer>
  )
}

export default Project