import styled from 'styled-components'

export const ExperienceContainer = styled.div`
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    padding-bottom: 80px;
    @media screen and (max-width: 768px){
        height: 900px;
    }

`

export const ExperienceWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr; 
    // grid-template-columns: 1fr 1fr; 
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1f;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ExperienceCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        box-shadow: 0 0 20px rgba(255, 228, 210, 0.8);
    }
`

export const ExperienceH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    animation: glow 1s ease-in-out infinite alternate;

    @-webkit-keyframes glow {
        from {
          text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #f551a3, 0 0 40px #f551a3, 0 0 50px #f551a3, 0 0 60px #f551a3, 0 0 70px #f551a3;
        }
        
        to {
          text-shadow: 0 0 20px #fff, 0 0 30px #f772b5, 0 0 40px #f772b5, 0 0 50px #f772b5, 0 0 60px #f772b5, 0 0 70px #f772b5, 0 0 80px#f772b5;
        }
    }
    
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ExperienceH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 5px;
`

export const ExperienceH3 = styled.h3`
    font-size: 0.8rem;
    margin-bottom: 10px;
`

export const ExperienceP = styled.p`
  font-size: 1rem;
  text-align: left; // Change from 'center' to 'left'

  li {
    margin-bottom: 0.5rem; // Add spacing between list items
  }
`;
