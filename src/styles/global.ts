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
// Title, Pages / Sections

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
//-----------------------------------------------//

// Title for section containers

export const TextTitle = styled.h4`
    font-size: clamp(1.35rem, 10vw, 1.35rem);
    margin-bottom: 1.5rem;
    font-weight: 500;
    padding: 0.25rem;
    color: var(--yellow);
    border-bottom: 0.5px solid;
`
//-----------------------------------------------//

// Section Containers and BadgesDefault text p tags
export const DefaultTextP = styled.p`
    font-size: clamp(1rem, 10vw, 1.35rem);
    padding: 0.25rem;
    font-weight: 100;
    text-decoration: none;
    margin-left: 0.5rem;

    &:last-child {
        margin-bottom: 1.5rem;
    }
`
//-----------------------------------------------//


export const BadgeText = styled.p`
    font-size: clamp(0.5rem, 10vw, 1rem);
    font-weight: 100;
    margin-left: 0.75rem;
    padding: 0.1rem;

    &:last-child {
        margin-bottom: 1.5rem;
    }
`

//Pages Sections Default Styles and img imports 

import PeopleContainerImg from '../assets/PeopleContainerImg.jpg'
import SpeciesContainerImg from '../assets/SpeciesContainerImg.jpg'
import StarshipsContainerImg from '../assets/StarshipsContainerImg.jpg'

// Default PageContainer master div 
export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`
// Default Content
export const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 1.5rem auto;
`
//
// Sections
// NoBackground 
export const SectionNoBackground = styled.div` 
    height: 50vh; 
`
// Backgrounds
export const SectionBackground1 = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
    url(${PeopleContainerImg}); 
    height: 50vh;
    background-position: center;
    background-size: cover; 
`
export const SectionBackground2 = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
    url(${SpeciesContainerImg}); 
    height: 50vh;
    background-position: center;
    background-size: cover; 
`
export const SectionBackground3 = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
    url(${StarshipsContainerImg}); 
    height: 50vh;
    background-position: center;
    background-size: cover;
`
//

//-----------------------------------------------//

// Table Pages Styles

export const TableContainer = styled.div`       
`
export const TableArray = styled.div`
    display: grid;
`
//-----------------------------------------------//

// Badges Default Styles

export const BadgeContainer = styled.div`    
    margin: 1.5rem;  
    align-items: center;
    display: flex;
    flex-wrap: wrap;
`
export const BadgeTitle = styled.h3`
    color: var(--yellow);
    font-size: clamp(1.45rem, 10vw, 1.45rem);
    font-weight: 500;
    padding: 0.25rem;
    display: flex;
`
export const BadgeTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.5px solid var(--yellow);
    
    a {
        svg {
            font-size: 1.5rem;
        }
    }
`
export const BadgeTextContainer = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 330px;    
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
    
    svg {
        color: var(--yellow);
        margin-right: 1.5rem;
        margin-left: 4.5rem;
    }
`
export const BadgeTextContainerDiv = styled.div`
    margin-top: 1.5rem;
`
export const BadgeTextP = styled.p`
    font-size: clamp(1rem, 10vw, 1.5rem);
    font-weight: 100;
    text-decoration: none;
    
    &:last-child {
        margin-bottom: 1.5rem;
    }
`
//-----------------------------------------------//

// Loading SVG

export const IsLoadingImg = styled.img`
    width: 300px;
    margin: 15rem 50.5rem; 
`
//-----------------------------------------------//