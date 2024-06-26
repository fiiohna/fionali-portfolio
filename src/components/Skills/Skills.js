import React from 'react'
import { SkillsContainer, SkillsH1, SkillsWrapper, SkillsContent, SkillsRow, Column1, Column2, SkillsH2 } from './SkillsElements'
import { FaReact, FaVuejs, FaJs, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaPython, FaPhp, FaDatabase, FaDesktop, FaDocker, FaMicrosoft, FaGit, FaBox, FaFigma, FaPenFancy, FaAws, FaJira} from 'react-icons/fa';
const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <SkillsH1>Skills</SkillsH1>
            <SkillsWrapper>
                <SkillsContent>
                    <SkillsRow>
                        <Column1>
                            <SkillsH2>Front-end</SkillsH2>
                            <div>React.js <FaReact /></div>
                            <div>Vue.js <FaVuejs /></div>
                            <div>Javascript <FaJs /></div>
                            <div>HTML <FaHtml5 /></div>
                            <div>CSS/SASS <FaCss3Alt /><FaSass /></div>
                            <div>Bootstrap <FaBootstrap /></div>
                        </Column1>
                        <Column2>
                            <SkillsH2>Back-end</SkillsH2>
                            <div>Python <FaPython /></div>
                            <div>PHP <FaPhp /></div>
                            <div>MySQL <FaDatabase /></div>
                            <div>Pandas <FaPython /></div>
                            <div>Postman API Platform <FaDesktop /></div>
                            <div>RabbitMQ <FaDesktop /></div>
                        </Column2>
                    </SkillsRow>
                    <SkillsRow>
                        <Column1>
                            <SkillsH2>Prototyping/Design</SkillsH2>
                            <div>Figma <FaFigma /></div>
                            <div>Canvas <FaPenFancy /></div>
                            <div>Drawio <FaPenFancy /></div>
                            <div>Maze Testing <FaPenFancy /></div>
                        </Column1>
                        <Column2>
                            <SkillsH2>Others</SkillsH2>
                            <div>AWS <FaAws /></div>
                            <div>Azure <FaMicrosoft /></div>
                            <div>Azure DevOps <FaMicrosoft /></div>
                            <div>Docker <FaDocker /></div>
                            <div>Kubernetes <FaBox /></div>
                            <div>Git <FaGit /></div>
                            <div>Jira <FaJira /></div>
                        </Column2>
                    </SkillsRow>
                </SkillsContent>
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default Skills