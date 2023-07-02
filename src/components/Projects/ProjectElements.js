import styled from 'styled-components'

export const ProjectContainer = styled.div`
    height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    padding-bottom: 80px;
    @media screen and (max-width: 768px){
        height: 1200px;
    }

`

export const ProjectH1 = styled.h1`
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

export const ProjectWrapper = styled.div`
    max-width: 1000px;
    margin: 0 0 64px 0;
    display: grid;
    grid-template-columns: 1fr; 
    // grid-template-columns: 1fr 1fr; 
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    position: relative;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1f;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const Left = styled.div`
    width: 80%;
    @media screen and (max-width: 768px){
        width: 100%;
    }

    &:hover{
        cursor: pointer;
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`

export const ProjectImg = styled.img`
    width: 100%;
`

export const Right = styled.div`
    display: flex;
    margin-left: 50%;
    background-color: rgba(15, 0, 10, 0.5);
    z-index: 1;
    position: absolute;
    padding: 12px;
    border-radius: 8px;
    text-align: center;
    
    @media screen and (max-width: 768px){
        width: 100%;
        margin: 0;
        position: static;
    }
`

export const ProjectContent = styled.div`
`

export const ProjectH2 = styled.h2`
    font-size: 1.5rem;
    color: #fff;
    text-align: right;
    @media screen and (max-width: 768px){
        text-align: center;
    }
`

export const ProjectP = styled.p`
color: #fff;
`