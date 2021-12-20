import styled from 'styled-components'
import PeopleContainerImg from '../../../../assets/PeopleContainerImg.jpg'
import SpeciesContainerImg from '../../../../assets/SpeciesContainerImg.jpg'
import StarshipsContainerImg from '../../../../assets/StarshipsContainerImg.jpg'

export const PeoplePageContainer = styled.div`
    display: flex;
    flex-direction: column;
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
    width: 295px;
    background: var(--background-light);
    padding: 2rem;
`
export const HomeWorldContainer = styled.div` 
    height: 50vh; 
`
export const HomeWorldContent = styled.div`
    display: flex;
    align-items: center;
    margin: 3.5rem 39.5rem auto;
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
    width: 325px;
    background: var(--background-light);
    padding: 3rem;
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
    margin: 1.15rem auto;
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
export const FilmsContent = styled.div`
    display: flex;
    margin: 1.65rem 18rem auto;
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
    margin: 2.15rem  39rem auto;
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
    align-items: center;
    background-position: center;
    background-size: cover;
`
export const VehiclesContent = styled.div`
    display: flex;    
    margin: 2.15rem 39rem auto;
`
export const VehiclesBadge = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 300px;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
`