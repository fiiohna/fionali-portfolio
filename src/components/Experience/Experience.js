import React from "react";
import {
  ExperienceContainer,
  ExperienceH1,
  ExperienceWrapper,
  ExperienceCard,
  ExperienceH2,
  ExperienceH3,
  ExperienceP,
} from "./ExperienceElements";
// import Icon1 from '../../images/svg-1.svg'
// import Icon2 from '../../images/svg-2.svg'
const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <ExperienceH1>Experience</ExperienceH1>
      <ExperienceWrapper>
        <ExperienceCard>
          <ExperienceH2>SMU-Accenture partnership with AWS</ExperienceH2>
          <ExperienceH3>
            SMU SCIS Work-Study Elective Program Intern (2023 May - 2023 Nov)
          </ExperienceH3>
          <ExperienceP>
            <div>• Developed and implemented CI/CD pipelines using Azure DevOps to
            automate the</div>
            <div> deployment process.</div>
            <div>• Troubleshoot and resolve issues related to deployments and continuous integration processes. </div>
            <div>• Migrated on-premises workloads to Azure, ensuring minimal downtime and smooth </div>
            <div>integration with existing infrastructure.</div>
            <div>• Collaborate with development teams to ensure applications are deployed correctly.</div>
          </ExperienceP>
        </ExperienceCard>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};

export default Experience;
