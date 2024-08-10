import styled from 'styled-components'

export const ContactContainer = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    background: #010606;
    padding-top: 100px;
    color: white;
    @media screen and (max-width: 768px){
        height: 900px;
    }

`

export const ContactWrapper = styled.div`
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

export const ContactH1 = styled.h1`
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

export const ContactH2 = styled.h2`
    font-size: 1.5rem;
    color: #fff;
    justify-content: center;
    text-align: center;
    margin-bottom: 64px;
`
export const ContactContent = styled.div`
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
    font-size: 1rem;
`

export const ContactRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    justify-content: center;
    align-items: center;
    grid-template-areas:${({imgStart}) => (imgStart ? `'col3 col2 col1'` : `'col1 col2 col3'`)};
    
    @media screen and (max-width: 768px){
        grid-template-areas:${({imgStart}) => (imgStart ? `'col1' 'col2' 'col3'` : `'col1 col1' 'col2 col2' 'col3 col3'`)};
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


export const Column3 = styled.div`
    margin-bottom: 10px;
    padding: 0 15px;
    grid-area:col3;
`

export const Link = styled.a`
    text-decoration: none;
    color: white;
`
