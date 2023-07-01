import React from "react";
import Icon1 from '../../images/PetPals.png';
import Icon2 from '../../images/ZilHive2.png';
import { ProjectContainer, ProjectH1, ProjectWrapper, ProjectImg, Left, Right, ProjectContent, ProjectH2, ProjectP } from './ProjectElements'
const Project = () => {
    return (
        <ProjectContainer>
            <ProjectH1>Project</ProjectH1>
            {/* Project 1 */}
            <ProjectWrapper>
                <Left>
                    <ProjectImg src={Icon1}></ProjectImg>
                </Left>
                <Right>
                    <ProjectContent>
                        <ProjectH2>This is a heading</ProjectH2>
                        <ProjectP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ProjectP>
                    </ProjectContent>
                </Right>

            </ProjectWrapper>

            {/* Project 2 */}
            <ProjectWrapper>
                <Left>
                    <ProjectImg src={Icon2}></ProjectImg>
                </Left>
                <Right>
                    <ProjectContent>
                        <ProjectH2>This is a heading</ProjectH2>
                        <ProjectP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ProjectP>
                    </ProjectContent>
                </Right>

            </ProjectWrapper>
        </ProjectContainer>
    );
}
export default Project;