import styled from 'styled-components';

export const AboutContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    // align-items: center;
    padding: 20px 30px;
    height: 700px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px){
        height: 1000px;
    }
    /* Add :before styles */
`

export const AboutBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const  VideoBackground = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const AboutContent = styled.div`
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

export const AboutTitle = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const AboutRow = styled.div`
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

export const AboutParagraph = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    // text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const ImgWrap = styled.div`
    max-width: 400px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    object-fit: contain;
    // position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: 10px;
    padding-right: 0;

    @media screen and (max-width: 768px){
        width: 100%;
        height: auto;
    }
`;