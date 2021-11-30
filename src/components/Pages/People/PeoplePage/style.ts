import styled from 'styled-components'
import PeopleContainerImg from '../../../../assets/PeopleContainerImg.jpg'
import SpeciesContainerImg from '../../../../assets/SpeciesContainerImg.jpg'
import StarshipsContainerImg from '../../../../assets/StarshipsContainerImg.jpg'

export const PeoplePageContainer = styled.div`
    display: flex;
    flex-direction: column;
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
    border-bottom: 0.5px solid;
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    margin-top: 4.5rem;
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
export const TextContainerRight = styled.div`
    color: var(--text-body);
    background: var(--background-light);
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
    width: 300px;
    display: flex;
    flex-direction: column;
    margin-left: 45rem;
`
export const TextContainerLarge = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 630px;
    display: flex;
    flex-direction: column;
    margin-left: 45.5rem;
    margin-top: 1.15rem;
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
    font-weight: 100;

    &:last-child {
        margin-bottom: 1.5rem;
    }
`
export const DescriptionImage = styled.img`
    width: 300px;
    height: 277px;
    background: var(--background-light);
    padding: 1rem;
    margin-left: 45.5rem;
`
export const HomeWorldContainer = styled.div` 
    height: 50vh; 
`
export const HomeWorldContent = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3.85rem;
`
export const HomeWorldText = styled.p`
    font-size: clamp(1.35rem, 10vw, 1.35rem);
    font-weight: 100;
    margin-left: 0.75rem;
    padding: 0.1rem;

    &:last-child {
        margin-bottom: 1.5rem;
    }
`
export const HomeWorldImage = styled.img`
    width: 320px;
    background: var(--background-light);
    padding: 1rem;
    margin-left: 1.5rem;
`
export const SpeciesContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
    url(${SpeciesContainerImg}); 
    height: 50vh;
    background-position: center;
    background-size: cover; 
`
export const SpeciesContent = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2.5rem;
`
export const SpeciesText = styled.p`
    font-size: clamp(1rem, 10vw, 1.25rem);
    font-weight: 100;
    margin-left: 0.75rem;
    padding: 0.1rem;

    &:last-child {
        margin-bottom: 1.5rem;
    }
`
export const FilmsContainer = styled.div`
    height: 50vh;
`
export const StarShipsContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
    url(${StarshipsContainerImg}); 
    height: 50vh;
    background-position: center;
    background-size: cover; 
`
export const StarShipsContent = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2.15rem;
    margin-left: 43.5rem;
`
export const StarShipsBadge = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 300px;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
`
export const VehiclesContainer = styled.div`
    height: 50vh;
`
export const VehiclesContent = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3.5rem;
    margin-left: 43.5rem;
`
export const VehiclesBadge = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 300px;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
`