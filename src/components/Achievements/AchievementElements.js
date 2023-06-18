import styled from 'styled-components'

export const AchievementContainer = styled.div`
    height: 500px;
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

export const AchievementH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const AchievementWrapper = styled.div`
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