import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    padding: 60px 0 80px 0;

    @media screen and (max-width: 768px) {
        padding: 40px 0 50px;
    }
`

export const ExperienceWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    grid-gap: 32px;
    padding: 0 50px;

    @media screen and (max-width: 768px){
        padding: 0 20px;
        grid-gap: 24px;
    }
`

export const ExperienceCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        box-shadow: 0 0 20px rgba(255, 228, 210, 0.8);
    }

    @media screen and (max-width: 768px){
        padding: 20px;
    }
`

export const ExperienceH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 48px;

    animation: glow 1s ease-in-out infinite alternate;

    @-webkit-keyframes glow {
        from {
          text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #f551a3, 0 0 40px #f551a3, 0 0 50px #f551a3, 0 0 60px #f551a3, 0 0 70px #f551a3;
        }
        
        to {
          text-shadow: 0 0 20px #fff, 0 0 30px #f772b5, 0 0 40px #f772b5, 0 0 50px #f772b5, 0 0 60px #f772b5, 0 0 70px #f772b5, 0 0 80px#f772b5;
        }
    }
    
    @media screen and (max-width: 480px) {
        font-size: 2rem;
        margin-bottom: 32px;
    }
`

export const ExperienceH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 5px;
    text-align: center;
`

export const ExperienceH3 = styled.h3`
    font-size: 0.8rem;
    margin-bottom: 10px;
    text-align: center;
`

export const ExperienceP = styled.p`
  font-size: 1rem;
  text-align: left;
  width: 100%;

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 768px){
    font-size: 0.9rem;
  }
`;
