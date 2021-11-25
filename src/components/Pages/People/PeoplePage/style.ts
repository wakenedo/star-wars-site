import styled from 'styled-components'
import PeopleContainerImg from '../../../../assets/PeopleContainerImg.jpg'

export const PeoplePageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    color: var(--yellow);
    padding: 1rem;
    margin: 0 auto;
    align-items: center;
    text-transform: uppercase;
    font-size: clamp(1.5rem, 10vw, 2.5rem);
    box-shadow: 2.5px 3.5px var(--yellow);
`

export const TextTitle = styled.h4`
    font-size: clamp(0.75rem, 10vw, 0.75rem);
    margin-bottom: 1.5rem;
    padding: 0.25rem;
    border-bottom: 1px solid;

    
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3.50rem;
`

export const TextContainerRight = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    font-size: clamp(1rem, 10vw, 1.5rem);
    width: 300px;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;

    svg {
        margin-right: 1.5rem;
        margin-left: 4.5rem;
    }
`
export const TextContainerLeft = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    font-size: clamp(1rem, 10vw, 1.5rem);
    width: 300px;
    display: flex;
    flex-direction: column;

    svg {
        margin-right: 1.5rem;
        margin-left: 4.5rem;
    }
`

export const DescriptionContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
    url(${PeopleContainerImg}); 
    height: 50vh;
    background-position: center;
    background-size: cover; 
`
export const DescriptionText = styled.p`
    font-size: clamp(1rem, 10vw, 1.5rem);

    &:last-child {
        margin-bottom: 1.5rem;
    }
`
export const DescriptionImage = styled.img`
    width: 300px;
    height: 277px;
    background: var(--background-light);
    padding: 1rem;
`

export const HomeWorldContainer = styled.div` 
    height: 50vh;
    background-position: center;
    background-size: cover; 
`

export const HomeWorldContent = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3.5rem;
`
export const HomeWorldText = styled.p`
    font-size: clamp(1rem, 10vw, 1.5rem);

    &:last-child {
        margin-bottom: 1.5rem;
    }
`
export const HomeWorldImage = styled.img`
    width: 312px;
    height: 332px;
    background: var(--background-light);
    padding: 1rem;
    margin-left: 1.5rem;
`

export const FilmsContainer = styled.div`
`

export const SpeciesContainer = styled.div`
`
export const VehiclesContainer = styled.div`
`
export const StarShipsContainer = styled.div`
`