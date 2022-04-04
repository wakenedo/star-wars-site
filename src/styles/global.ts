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

    @media screen and (min-width: 350px) and (max-width: 375px) {
        border-bottom: 1.5px solid var(--yellow);
        box-shadow: none;
    };
    @media screen and (min-width: 400px) and (max-width: 500px) {
        border-bottom: 1.5px solid var(--yellow);
        box-shadow: none;     
    }
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
export const SmallDefaultTextP = styled.p`
    font-size: clamp(1.05rem, 10vw, 1.05rem);
    padding: 0.25rem;
    font-weight: 100;
    text-decoration: none;
    margin-left: 0.5rem;

    &:last-child {
        margin-bottom: 1.5rem;
    }
`
//-----------------------------------------------//

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
    margin: 0.85rem auto;
    
`

// Sections
export const DefaultSectionDiv = styled.div`
    display: flex;
    margin: 0 auto;

    @media screen and (min-width: 350px) and (max-width: 375px) {
        flex-direction: column;
    };
    @media screen and (min-width: 400px) and (max-width: 500px) {
        flex-direction: column;    
    }
`

// Default Div for Sections
export const PageDiv = styled.div`
    
`

// NoBackground 
export const SectionNoBackground = styled.div` 
    min-height: 50vh; 
`
//Default Section noBackground noVh
export const SectionNoBackgroundNoVh = styled.div`
    min-height: 50vh;    
`

// Backgrounds
export const SectionBackground1 = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
    url(${PeopleContainerImg}); 
    min-height: 50vh;
    background-position: center;
    background-size: cover; 
`
export const SectionBackground2 = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
    url(${SpeciesContainerImg}); 
    min-height: 50vh;
    background-position: center;
    background-size: cover; 
`
export const SectionBackground3 = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
    url(${StarshipsContainerImg}); 
    min-height: 50vh;
    background-position: center;
    background-size: cover;
`
//

//FilmPageEP1-6 FilmCover Component Styles

//Div 

//FilmCover Components of FilmPageEP1-6 Container
export const FilmCoverContainer = styled.div`
    background: var(--background-light);
    width: 685px;
    height: 900px;
    margin-left: 1.5rem;

    @media screen and (min-width: 350px) and (max-width: 375px) {
        width: 375px;
        height: 700px;
        margin-left: 0;
        margin-bottom: 0.5rem;
    };
    @media screen and (min-width: 400px) and (max-width: 500px) {
        width: 375px;
        height: 800px;
        margin-left: 0;     
    }
    
`
//FilmCover Components of FilmPageEP1-6 
//Container Text P 
export const FilmCoverContainerTextP = styled.p`
    font-size: clamp(1rem, 10vw, 1.5rem);
    font-weight: 100;
    color : var(--text-body);
    margin: 0.5rem 1.5rem;
`
//FilmCover Components of FilmPageEP1-6 
//Container Text CrawP
export const CrawlTextP = styled.p`
    font-size: clamp(1.95rem, 10vw, 1.75rem);
    font-weight: 100;
    color: var(--yellow);
    text-align: justify;
    margin: 2.5rem;

    @media screen and (min-width: 350px) and (max-width: 375px) {
        font-size: 1.5rem;
    };
    @media screen and (min-width: 400px) and (max-width: 500px) {
        font-size: 1.5rem;   
    }
    
`
//FilmCover Components of FilmPageEP1-6 
//Image Cover
export const FilmImg = styled.img`
    width: 685px;
    height: 800px;

    @media screen and (min-width: 350px) and (max-width: 375px) {
        width: 375px;
        height: 600px;
        margin-bottom: 1.5rem;

    };
    @media screen and (min-width: 400px) and (max-width: 500px) {
        width: 685px;
        height: 800px;      
    }
`

//PlanetPage Default Styles
//Planet Page Container Text 
export const PlanetContainerText = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 360px;    
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    margin-left: 1.5rem;
    height: 465px;

    @media screen and (min-width: 350px) and (max-width: 375px) {
        width: 320px;
        margin-left: 0.5rem;
        height: 450px;
    };
    @media screen and (min-width: 400px) and (max-width: 500px) {
        width: 335px;
              
    }
`
//PlanetPage Planet Component Image
export const PlanetImage = styled.img`
    width: 375px;
    height: 375px;
    background: var(--background-light);
    padding: 2rem;

    @media screen and (min-width: 350px) and (max-width: 375px) {
        width: 320px;
        height: 320px;
        margin-left: 0.5rem;
        margin-bottom: 1rem;
    };
    @media screen and (min-width: 400px) and (max-width: 500px) {
        width: 335px;
        height: 335px
              
    }    
`

//PlanetPage Default Styles
//PlanetPage Residents Component Section Div 
export const PlanetResidentsSectionDiv = styled.div`
    display: flex;
    width: 66%;
    //justify-content: space-between; 
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
    
`

//PlanetPage Films Component Section Div Image
export const PlanetFilmSectionDiv = styled.div`
    display: flex;
    //justify-content: space-between; 
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
   
`
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
//PlanetPage Residents Badges Styles
//Badge Div
export const ResidentsBadge = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem auto;
`
//Badge Text Container
export const PlanetResidentsBadgeTextContainer = styled.div`
    background: var(--background-light);
    margin: 1.25rem 0;
    width: 240px;
    border-radius : 50% 50% 0 0;
`
//Badge Text h2
export const PlanetResidentsBadgeText = styled.h2`
    font-size: clamp(1rem, 10vw, 1rem);
    font-weight: 100;
    color: var(--yellow);
    text-align: center;
    padding: 1rem;
    font-weight: bold;   
`
//Badge Default Image Container 
export const PlanetsResidentsBadgeContainerImage = styled.div`
    width: 120px;
    height: 120px;
    background-color: var(--background-light);
    border-radius: 50%;
`
//Badge Default Image
export const PlanetResidentsBadgeImage = styled.img`
    width: 110px;
    height: 110px;
    padding: 1.25rem;
    margin: 0 0.25rem;
`
//PlanetsPage Films Badges Styles
export const BadgePlanetFilmsContainer = styled.div`    
    margin: 1.5rem;  
    align-items: center;
    display: flex;
    flex-wrap: wrap;

    &:last-child {
        //margin: 0 auto;
    }
`
export const FilmsBadgeContainer = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 400px;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    
    @media screen and (min-width: 350px) and (max-width: 375px) {
        width: 320px
    };
    @media screen and (min-width: 400px) and (max-width: 500px) {
        width: 335px;
              
    }

    svg {
        color: var(--yellow);
        margin-right: 1.5rem;
        margin-left: 4.5rem;
    }
`
export const FilmsBadgeTitle = styled.h3`
    font-size: clamp(0.75rem, 10vw, 0.75rem);
    font-weight: 300;
    padding: 0.25rem;
    color:var(--yellow);
    
`

export const FilmsBadgeImg = styled.img` 
    
`
export const DescriptionText = styled.p`
    font-size: clamp(1rem, 10vw, 1.5rem);
    font-weight: 100;
`

//-----------------------------------------------//

// Loading SVG

export const IsLoadingImg = styled.img`
    width: 300px;
    margin: 15rem auto; 
`
//-----------------------------------------------//

// No data from api SVG

export const NoDataFromApi = styled.img`
    width: 500px;
    margin: auto; 
`
//-----------------------------------------------//