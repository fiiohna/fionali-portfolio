import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    padding: 60px 0 0 0;
`

export const ProjectH1 = styled.h1`
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

export const ProjectWrapper = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;

    @media screen and (min-width: 768px){
        flex-direction: row;
        align-items: flex-start;
    }
`

export const Left = styled.div`
    width: 100%;
    max-width: 500px;
    margin-bottom: 20px;

    @media screen and (min-width: 768px){
        width: 50%;
        margin-bottom: 0;
    }
`

export const ProjectImg = styled.img`
    width: 100%;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }
`

export const Right = styled.div`
    width: 100%;
    background-color: rgba(15, 0, 10, 0.5);
    padding: 20px;
    border-radius: 8px;

    @media screen and (min-width: 768px){
        width: 50%;
        margin-left: -50px;
        z-index: 1;
    }
`

export const ProjectContent = styled.div``

export const ProjectH2 = styled.h2`
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
    margin-bottom: 15px;
`

export const ProjectP = styled.p`
    color: #fff;
    margin-bottom: 20px;
`

export const ProjectBtn = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const ProjectBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: pink;
    opacity: 0.8;
    white-space: nowrap;
    padding: 8px 22px;
    color: black;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin: 10px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: white;
        color: black;
    }
`
