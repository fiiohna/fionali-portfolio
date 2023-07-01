import React from "react";
import Video from "../../videos/video.mp4";
import Image from "../../images/fiona.jpg";
import {
  AboutContainer,
  AboutBackground,
  VideoBackground,
  AboutContent,
  AboutTitle,
  AboutParagraph,
  AboutRow,
  Column1,
  Column2,
  ImgWrap,
  Img,
} from "./AboutElements";

const About = () => {
  return (
    <AboutContainer>
      <AboutBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </AboutBackground>
      <AboutContent>
        <AboutRow>
        <Column1>
        <AboutTitle>Hey there! Welcome to my portfolio!</AboutTitle>
          <AboutParagraph>
            Hello! I'm Fiona Li, an ambitious Solutions Architect and Data
            Scientist with a passion for leveraging data and cloud solutions to
            tackle complex business challenges and drive digital transformation.
            <br></br>
            <br></br>
            Feel free to take a look at my portfolio and connect with me via any
            of my socials in the NavBar! Thank you for taking the time to visit my website, I look forward to hearing
            from you!
          </AboutParagraph>
        </Column1>

        <Column2>
        <ImgWrap>
          <Img src={Image} />
          </ImgWrap>
        </Column2>
        </AboutRow>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;