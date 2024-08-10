import styled from 'styled-components';

export const AboutContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    padding: 60px 30px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px) {
        padding: 40px 15px 100px 15px;
    }
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
    width: 100%;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding: 0 12px;
    }
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
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    width: 100%;
    
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
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

export const NameText = styled.span`
  color: pink;
`;

export const ImgWrap = styled.div`
    max-width: 400px;
    height: 100%;

    @media screen and (max-width: 768px) {
        max-width: 250px;
        max-height: 250px;
        margin: 0 auto;
    }
`

export const Img = styled.img`
    width: 100%;
    object-fit: cover;
    margin-left: 10px;
    padding-right: 0;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        margin-left: 0;
    }
`;
