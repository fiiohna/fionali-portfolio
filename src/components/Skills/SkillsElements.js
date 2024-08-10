import styled from 'styled-components';

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    padding: 60px 0;
    color: white;
`

export const SkillsWrapper = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Ensure content stays centered */

    @media screen and (max-width: 768px){
        padding: 0 15px;
    }
`


export const SkillsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    text-align: center;

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
        margin-bottom: 32px;
    }
`

export const SkillsContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const SkillsRow = styled.div`
    display: flex;
    justify-content: center; /* Centering the content horizontally */
    gap: 80px;
    flex-wrap: wrap; /* Ensuring the columns wrap on smaller screens */

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center; /* Ensure the columns are centered on smaller screens as well */
    }
`;

export const Column = styled.div`
    flex: 1;
    max-width: 45%; /* Limit the max width of each column */
    min-width: 200px; /* Set a minimum width to ensure good appearance */
    
    @media screen and (max-width: 768px) {
        max-width: 100%; /* Full width on smaller screens */
    }
`;


export const SkillsH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: pink;
    text-decoration: underline;
`

export const SkillItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    font-size: 1.1rem;

    svg {
        font-size: 1.3rem;
    }
`
