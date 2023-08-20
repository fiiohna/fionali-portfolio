import React from "react";
import {
  ContactContainer,
  ContactH1,
  ContactH2,
  ContactWrapper,
  ContactContent,
  ContactRow,
  Column1,
  Column2,
  Column3,
  Link,
} from "./ContactElements";
import { FaGithub, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactH1>Contact</ContactH1>
      <ContactWrapper>
        <ContactContent>
          <ContactH2>
            I am currently looking for internship opportunities as a solutions
            architect and/or infrastructure engineer. Feel
            free to reach out to me!
          </ContactH2>
          <ContactRow>
            <Column1>
              <Link href="https://github.com/fiiohna">
                <div>
                  <FaGithub font-size="3rem" />
                </div>{" "}
                <div>github.com/fiiohna</div>
              </Link>
            </Column1>
            <Column2>
              <Link href="https://www.linkedin.com/in/fionali02/">
                <div>
                  <FaLinkedin font-size="3rem" />
                </div>
                <div>linkedin.com/in/fionali02/</div>
              </Link>
            </Column2>
            <Column3>
              <Link href="mailto:fiona.li.2021@scis.smu.edu.sg">
                <div>
                  <FaEnvelopeSquare font-size="3rem" />
                </div>{" "}
                <div>fiona.li.2021@scis.smu.edu.sg</div>
              </Link>
            </Column3>
          </ContactRow>
        </ContactContent>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
