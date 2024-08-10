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
            <ul>
              <li>
                Developed CI/CD pipeline to automate terraform commands and ensure efficient delivery of updates and new features.
              </li>
              <li>
                Developed Python shell scripts to automate various tasks, streamlining workflows and increasing productivity
              </li>
              <li>
                Automated AWS infrastructure deployment using Terraform, significantly improving efficiency and reproducibility.
              </li>
              <li>
                Utilized AWS Security Hub and Terraform Checkov to enforce security best practices.
              </li>
              <li>
                Implemented comprehensive logging and monitoring solutions using AWS CloudWatch and CloudTrail to ensure system 
                health and compliance.
              </li>
            </ul>
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
                Established Azure Kubernetes clusters for build agents and application workloads.
              </li>
              <li>
                Migrated on-premises workloads to Azure, ensuring minimal
                downtime and smooth integration with existing infrastructure.
              </li>
              <li>
                Implemented code analysis tools in the pipeline's codebase and address security vulnerabilities to safeguard the pipeline.
              </li>
              <li>
                Set up monitoring and logging using Kusto Query Language to facilitate proactive responses to incidents.
              </li>
            </ul>
          </ExperienceP>
        </ExperienceCard>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};

export default Experience;