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

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <ExperienceH1>Experience</ExperienceH1>
      <ExperienceWrapper>
      <ExperienceCard>
          <ExperienceH2>Production Engineer Intern</ExperienceH2>
          <ExperienceH3>Monetary Authority of Singapore (2024 May - 2024 Aug)</ExperienceH3>
          <ExperienceP>
            Internship in progress...To be updated :)
          </ExperienceP>
        </ExperienceCard>

        <ExperienceCard>
          <ExperienceH2>Infrastructure Intern</ExperienceH2>
          <ExperienceH3>Accenture (2023 Dec - 2024 Feb)</ExperienceH3>
          <ExperienceP>
            <ul>
              <li>
                Create, manage, and automate infrastructure deployment using
                Terraform to increase efficiency and reproducibility.
              </li>
              <li>
                Leveraged AWS to configure and manage cloud resources,
                optimizing performance and cost-efficiency.
              </li>
              <li>
                Configure networking components like subnets and security groups
                to ensure seamless communication and data flow.
              </li>
            </ul>
          </ExperienceP>
        </ExperienceCard>

        <ExperienceCard>
          <ExperienceH2>DevOps Intern</ExperienceH2>
          <ExperienceH3>Accenture (2023 May - 2023 Nov)</ExperienceH3>
          <ExperienceP>
            <ul>
              <li>
                Developed and implemented CI/CD pipelines using Azure DevOps to
                automate deployment process.
              </li>
              <li>
                Troubleshoot and resolve issues related to deployments and
                continuous integration processes.
              </li>
              <li>
                Migrated on-premises workloads to Azure, ensuring minimal
                downtime and smooth integration with existing infrastructure.
              </li>
              <li>
                Collaborate with development teams to ensure applications are
                deployed correctly.
              </li>
            </ul>
          </ExperienceP>
        </ExperienceCard>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};

export default Experience;