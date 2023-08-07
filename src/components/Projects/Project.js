import React from "react";
import Icon1 from "../../images/PetPals.png";
import Icon2 from "../../images/ZilHive2.png";
import Icon3 from "../../images/Blook.png";
import {
  ProjectContainer,
  ProjectH1,
  ProjectWrapper,
  ProjectImg,
  Left,
  Right,
  ProjectContent,
  ProjectH2,
  ProjectP,
  ProjectBtn,
  ProjectBtnLink,
} from "./ProjectElements";
const Project = () => {
  return (
    <ProjectContainer id="projects">
      <ProjectH1>Projects</ProjectH1>
      {/* Project 1 */}
      <ProjectWrapper>
        <Left>
          <ProjectImg src={Icon1}></ProjectImg>
        </Left>
        <Right>
          <ProjectContent>
            <ProjectH2>Pet Pals</ProjectH2>
            <ProjectP>
              PetPals is a fully responsive website dedicated to facilitating
              the seamless matching process between pet owners and pet service
              providers in Singapore. Its primary objective is to provide an
              enhanced platform that surpasses existing websites, offering
              unparalleled convenience and efficiency.
              <ProjectBtn>
                <ProjectBtnLink to="https://drive.google.com/file/d/1UcGQ_MJUEI6uaZ3cDl22HEHrT7yfd-fl/view?usp=sharing">
                  Video Demo
                </ProjectBtnLink>
                <ProjectBtnLink to="https://g3t4petpals.vercel.app/">
                  Website
                </ProjectBtnLink>
                <ProjectBtnLink to="https://github.com/vickyyqu/petpals">
                  Code
                </ProjectBtnLink>
              </ProjectBtn>
            </ProjectP>
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
            <ProjectH2>PRISM</ProjectH2>
            <ProjectP>
              The PRISM Protocol is a decentralized finance (DeFi) protocol that
              draws inspiration from the Mirror Protocol. Its primary objective
              is to facilitate the creation of synthetic assets that accurately
              mirror real-world financial instruments, allowing users to derive
              value from stocks, commodities, and other underlying assets, all
              without the need for physical ownership.
              {/* The PRISM Protocol website encompasses two key features that distinguish its functionality: the Trade and Governance sections. These features enable users to engage in efficient asset trading while also participating in the protocol's governance mechanisms, fostering a collaborative ecosystem that empowers stakeholders to shape the platform's future direction. */}
              <ProjectBtn>
                <ProjectBtnLink to="https://github.com/ZILHive-Student-Practicum/Zil-Team-6">
                  Code
                </ProjectBtnLink>
              </ProjectBtn>
            </ProjectP>
          </ProjectContent>
        </Right>
      </ProjectWrapper>

      {/* Project 3 */}
      <ProjectWrapper>
        <Left>
          <ProjectImg src={Icon3}></ProjectImg>
        </Left>
        <Right>
          <ProjectContent>
            <ProjectH2>BLOOK</ProjectH2>
            <ProjectP>
              The PRISM Protocol is a decentralized finance (DeFi) protocol that
              draws inspiration from the Mirror Protocol. Its primary objective
              is to facilitate the creation of synthetic assets that accurately
              mirror real-world financial instruments, allowing users to derive
              value from stocks, commodities, and other underlying assets, all
              without the need for physical ownership.
              {/* The PRISM Protocol website encompasses two key features that distinguish its functionality: the Trade and Governance sections. These features enable users to engage in efficient asset trading while also participating in the protocol's governance mechanisms, fostering a collaborative ecosystem that empowers stakeholders to shape the platform's future direction. */}
              <ProjectBtn>
                <ProjectBtnLink to="https://drive.google.com/file/d/1yWa01oZ3ShQifpQ6KxKUOaTjHpOvF0jX/view">
                  Video Demo
                </ProjectBtnLink>
                <ProjectBtnLink to="https://github.com/fiiohna/blook">
                  Front End
                </ProjectBtnLink>
                <ProjectBtnLink to="https://github.com/yimengchai12/blook_backend">
                  Back End
                </ProjectBtnLink>
              </ProjectBtn>
            </ProjectP>
          </ProjectContent>
        </Right>
      </ProjectWrapper>
    </ProjectContainer>
  );
};
export default Project;
