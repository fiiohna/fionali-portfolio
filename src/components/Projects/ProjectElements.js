import styled from 'styled-components'

export const ProjectContainer = styled.div`
height: 1000px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;

@media screen and (max-width: 768px){
    height: 1500px;
}

`

export const ProjectWrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    align-items: center;
    grid-gap: 30px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1f;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProjectCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    min-height: 300px;
    max-height: 700px;
    padding: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const IconWrap = styled.div`
    padding: 0;
    margin: 0;
`

export const ProjectIcon = styled.img`
    height: auto;
    width: 100%;
    object-fit: contain;
    margin-bottom: 10px;
`

export const ProjectH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ProjectH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 5px;
`

export const ProjectH3 = styled.h3`
    font-size: 0.8rem;
    margin-bottom: 10px;
`

export const ProjectP = styled.p`
    font-size: 1rem;
    text-align: center;
`
