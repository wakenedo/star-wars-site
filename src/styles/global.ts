import styled from 'styled-components';

import { createGlobalStyle } from "styled-components";
import Background from '../assets/Background/background.svg'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: url(${Background});
        /* background by SVGBackgrounds.com */
        --background-light: #202020;
        --yellow: #FFE81F;
        --red: #E62E4D;
        --purple: #5429CC;
        --green: #33CC95;

        
        --text-title: ;
        --text-body: #ffff;
    }
        
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    // font-size: 16px (desktop padrão)
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        
        @media (max-width: 720px) {
            font-size: 87.5%; // 15px
        }
    }
    // REM  = 1rem = 16px
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
export const Title = styled.h1`
    color: var(--yellow);
    padding: 1rem;
    font-weight: 500;
    margin: 0 auto;
    align-items: center;
    text-transform: uppercase;
    font-size: clamp(1.5rem, 10vw, 2.5rem);
    box-shadow: 1.5px 1.5px var(--yellow);
`
export const TextTitle = styled.h4`
    font-size: clamp(1.35rem, 10vw, 1.35rem);
    margin-bottom: 1.5rem;
    font-weight: 500;
    padding: 0.25rem;
    color: var(--yellow);
    border-bottom: 0.5px solid;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 4.5rem 40.5rem auto;
`
export const BadgeText = styled.p`
    font-size: clamp(0.5rem, 10vw, 1rem);
    font-weight: 100;
    margin-left: 0.75rem;
    padding: 0.1rem;

    &:last-child {
        margin-bottom: 1.5rem;
    }
`
export const TextContainerA = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 400px;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;

    svg {
        color: var(--yellow);
        margin-right: 1.5rem;
        margin-left: 4.5rem;
    }
`
export const TextContainerB = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 300px;
    display: flex;
    flex-direction: column;
`
export const TextContainerLarge = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 630px;
    display: flex;
    flex-direction: column;
    margin: 2.25rem auto;
`
export const IsLoadingImg = styled.img`
    width: 300px;
    margin: 15rem 50.5rem; 
`