import styled from 'styled-components';

export const SkillsContainer = styled.div`
height: 700px;
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
export const SkillsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const SkillsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr; 
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

export const SkillsContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 24px 24px;
    display: grid;
    // flex-direction: column;
    // align-items: center;

    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`

export const SkillsRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    justify-content: center;
    align-items: center;
    grid-template-areas:${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width: 768px){
        grid-template-areas:${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area:col1;
    margin-left: 20px;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area:col2;
`
export const SkillsH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 5px;
`
