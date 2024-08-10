import React from 'react'
import { SkillsContainer, SkillsH1, SkillsWrapper, SkillsContent, SkillsRow, Column, SkillsH2, SkillItem } from './SkillsElements'
import { FaReact, FaVuejs, FaJs, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaPython, FaPhp, FaDatabase, FaDesktop, FaDocker, FaMicrosoft, FaGit, FaBox, FaFigma, FaPenFancy, FaAws, FaJira, FaGitlab} from 'react-icons/fa';

const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <SkillsH1>Skills</SkillsH1>
            <SkillsWrapper>
                <SkillsContent>
                    <SkillsRow>
                        <Column>
                            <SkillsH2>Front-end</SkillsH2>
                            <SkillItem>React.js <FaReact /></SkillItem>
                            <SkillItem>Vue.js <FaVuejs /></SkillItem>
                            <SkillItem>Javascript <FaJs /></SkillItem>
                            <SkillItem>HTML <FaHtml5 /></SkillItem>
                            <SkillItem>CSS/SASS <FaCss3Alt /><FaSass /></SkillItem>
                            <SkillItem>Bootstrap <FaBootstrap /></SkillItem>
                        </Column>
                        <Column>
                            <SkillsH2>Back-end</SkillsH2>
                            <SkillItem>Python <FaPython /></SkillItem>
                            <SkillItem>PHP <FaPhp /></SkillItem>
                            <SkillItem>MySQL <FaDatabase /></SkillItem>
                            <SkillItem>Pandas <FaPython /></SkillItem>
                            <SkillItem>Postman API Platform <FaDesktop /></SkillItem>
                            <SkillItem>RabbitMQ <FaDesktop /></SkillItem>
                        </Column>
                    </SkillsRow>
                    <SkillsRow>
                        <Column>
                            <SkillsH2>Prototyping/Design</SkillsH2>
                            <SkillItem>Figma <FaFigma /></SkillItem>
                            <SkillItem>Canvas <FaPenFancy /></SkillItem>
                            <SkillItem>Drawio <FaPenFancy /></SkillItem>
                            <SkillItem>Maze Testing <FaPenFancy /></SkillItem>
                        </Column>
                        <Column>
                            <SkillsH2>Others</SkillsH2>
                            <SkillItem>AWS <FaAws /></SkillItem>
                            <SkillItem>Azure <FaMicrosoft /></SkillItem>
                            <SkillItem>Azure DevOps <FaMicrosoft /></SkillItem>
                            <SkillItem>Terraform</SkillItem>
                            <SkillItem>Docker <FaDocker /></SkillItem>
                            <SkillItem>Kubernetes <FaBox /></SkillItem>
                            <SkillItem>Sonarqube </SkillItem>
                            <SkillItem>Git <FaGit /></SkillItem>
                            <SkillItem>Gitlab <FaGitlab /></SkillItem>
                            <SkillItem>Jira <FaJira /></SkillItem>
                        </Column>
                    </SkillsRow>
                </SkillsContent>
            </SkillsWrapper>
        </SkillsContainer>
    )
}

export default Skills
