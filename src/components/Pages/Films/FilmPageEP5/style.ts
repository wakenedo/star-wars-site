import styled from 'styled-components'

import PeopleContainerImg from '../../../../assets/PeopleContainerImg.jpg'
import StarshipsContainerImg from '../../../../assets/StarshipsContainerImg.jpg'
import SpeciesContainerImg from '../../../../assets/SpeciesContainerImg.jpg'

export const FilmPageContainer = styled.div`
`



export const Title = styled.h1`
    color: var(--yellow);
    padding: 1rem;
    font-weight: 300;
    margin: 0 auto;
    align-items: center;
    text-transform: uppercase;
    font-size: clamp(1.5rem, 10vw, 2.5rem);
    box-shadow: 1.5px 1.5px var(--yellow);
`
export const TextTitle = styled.h4`
    font-size: clamp(0.75rem, 10vw, 0.75rem);
    margin-bottom: 1.5rem;
    font-weight: 300;
    padding: 0.25rem;
    color: var(--yellow);
    border-bottom: 0.5px solid;
`

export const ContentFilmPage = styled.div`
    display: flex;
    align-items: center;
    margin: 1.5rem;
`

export const FilmPageInformation = styled.div`
    background: var(--background-light);
    width: 685px;
    height: 800px;
    margin-left: 1.5rem;
`

export const DescriptionTextFilmsInfo = styled.p`
    font-size: clamp(1rem, 10vw, 1.5rem);
    font-weight: 100;
    color : var(--text-body);
    margin: 0.5rem 1.5rem;
`

export const DescriptionTextFilmsCrawlInfo = styled.p`
    font-size: clamp(1.95rem, 10vw, 1.75rem);
    font-weight: 100;
    color: var(--yellow);
    text-align: justify;
    margin: 2.5rem;
`

export const TitleFilmsInfo = styled.h4`
    font-size: clamp(0.75rem, 10vw, 0.75rem);
    margin-bottom: 1.5rem;
    font-weight: 300;
    color : var(--yellow);
    padding: 0.25rem;
    border-bottom: 0.5px solid;
`

export const FilmDescriptionContainer = styled.div`
`

export const FilmPageCoverImg = styled.img`
    width: 685px;
    height: 800px;
`

export const FilmPageCharactersContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
    url(${PeopleContainerImg}); 
    height: 50vh;
    background-position: center;
    background-size: cover; 
`
export const FilmPageCharactersContent = styled.div`
    display: flex;
    flex-direction: column;
`
export const FilmPageCharactersColumn = styled.div`
    display: flex;
`

export const FilmPagePlanetsContainer = styled.div` 
    height: 50vh; 
`
export const FilmPagePlanetsContent = styled.div`
    display: flex;
    align-items: center;
    margin: 1.5rem;
`
export const FilmPagePlanetsTextContainer = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 300px;
    display: flex;
    flex-direction: column;
    margin-right: 1.5rem;
`
export const FilmPagePlanetsText = styled.p`
    font-size: clamp(1.35rem, 10vw, 1.35rem);
    font-weight: 100;
    margin-left: 0.75rem;
    padding: 0.1rem;

    &:last-child {
        margin-bottom: 1.5rem;
    }
`

export const FilmPageStarShipsContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
    url(${StarshipsContainerImg}); 
    height: 50vh;
    background-position: center;
    background-size: cover;
`
export const FilmPageVehiclesContainer = styled.div`
    height: 50vh;
    align-items: center;
    background-position: center;
    background-size: cover;
`

export const FilmPageSpeciesContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
    url(${SpeciesContainerImg}); 
    height: 50vh;
    background-position: center;
    background-size: cover; 
`