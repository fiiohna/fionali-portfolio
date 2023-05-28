import React from 'react'
import { SkillsContainer, SkillsH1, SkillsWrapper, SkillsContent, SkillsRow, Column1, Column2, SkillsH2 } from './SkillsElements'
const Skills = () => {
  return (
    <SkillsContainer>
        <SkillsH1>Skills</SkillsH1>
        <SkillsWrapper>
            <SkillsContent>
                <SkillsRow>
                    <Column1>
                    <SkillsH2>Devops</SkillsH2>
                    </Column1>
                    <Column2>
                    <SkillsH2>Devops</SkillsH2>
                    </Column2>
                </SkillsRow>
                <SkillsRow>
                    <Column1>
                    <SkillsH2>Devops</SkillsH2>
                        
                    </Column1>
                    <Column2>
                    <SkillsH2>Devops</SkillsH2>
                    </Column2>
                </SkillsRow>
            </SkillsContent>
        </SkillsWrapper>
    </SkillsContainer>
  )
}

export default Skills