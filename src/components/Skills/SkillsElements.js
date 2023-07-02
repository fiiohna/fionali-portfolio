import styled from 'styled-components';

export const SkillsContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;
padding-bottom: 80px;
color: white;
@media screen and (max-width: 768px){
    height: 900px;
}
`
export const SkillsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr; 
    // grid-template-columns: 1fr 1fr; 
    align-items: center;
    grid-gap: 16px;
    padding: 0 10px 0 100px; // this to to make the Skills' content be centralised with the 'Skills' heading

    @media screen and (max-width: 1000px){
        grid-template-columns: 1f;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const SkillsH1 = styled.h1`
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

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const SkillsContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: relative;
    padding: 0px 24px;
    display: grid;
    // flex-direction: column;
    // align-items: center;

    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    font-size: 1.5rem;
`

export const SkillsRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    justify-content: center;
    align-items: center;
    grid-template-areas:${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    margin-bottom: 30px;
    @media screen and (max-width: 768px){
        grid-template-areas:${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 10px;
    padding: 0 15px;
    grid-area:col1;

`

export const Column2 = styled.div`
    margin-bottom: 10px;
    padding: 0 15px;
    grid-area:col2;
`
export const SkillsH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 5px;
    color: pink;
    text-decoration: underline;
`
