import styled from 'styled-components'
import BackgroundImg from '../../assets/BackgroundImg.jpg'

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
    url(${BackgroundImg}); 
    height: 100vh;
    background-position: center;
    background-size: cover;
`;

export const HeroContent = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw - 1000px) /2);
`
export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 1050px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

export const HeroH1 = styled.div`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    color: var(--yellow);
    border-bottom: 5px solid var(--yellow);
    letter-spacing: 3px;
    display: flex;
    align-items: center;

    img {
        width: 150px;
        margin: 1.5rem;
    }

    @media screen and (max-width: 650px) {
        
    }
`

export const HeroP = styled.div`
    font-size: clamp(1rem, 2.5vw, 2rem);
    margin-bottom: 2rem;
`

