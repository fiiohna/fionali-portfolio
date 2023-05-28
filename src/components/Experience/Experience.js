import React from 'react'
import { ExperienceContainer, ExperienceH1, ExperienceWrapper, ExperienceCard, ExperienceH2, ExperienceH3, ExperienceP } from './ExperienceElements'
// import Icon1 from '../../images/svg-1.svg'
// import Icon2 from '../../images/svg-2.svg'
const Experience = () => {
  return (
    <ExperienceContainer id="experience">
        <ExperienceH1>Experience</ExperienceH1>
        <ExperienceWrapper>
            <ExperienceCard>
                <ExperienceH2>SMU-Accenture partnership with AWS</ExperienceH2>
                <ExperienceH3>SMU SCIS Work-Study Elective Program Intern (2023 May - 2023 Nov)</ExperienceH3>
                <ExperienceP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 1</ExperienceP>
            </ExperienceCard>
            <ExperienceCard>
                <ExperienceH2>SMU-Accenture partnership with AWS</ExperienceH2>
                <ExperienceH3>SMU SCIS Work-Study Elective Program Intern (2023 May - 2023 Nov)</ExperienceH3>
                <ExperienceP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 1</ExperienceP>
            </ExperienceCard>
        </ExperienceWrapper>
    </ExperienceContainer>
  )
}

export default Experience