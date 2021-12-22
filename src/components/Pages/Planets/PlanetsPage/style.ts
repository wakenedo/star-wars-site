import styled from "styled-components";
import PeopleContainerImg from '../../../../assets/PeopleContainerImg.jpg'

export const PlanetsPageContainer = styled.div`
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

export const PlanetBadgeTextContainer = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 360px;    
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    margin-left: 1.5rem;
    min-height: 375px;

    {/*svg {
        color: var(--yellow);
        margin-right: 1.5rem;
        margin-left: 4.5rem;
    }*/}
`

export const PlanetBadgeTextP = styled.p`
    font-size: clamp(1rem, 10vw, 1.25rem);
    padding: 0.25rem;
    font-weight: 100;
    text-decoration: none;
    margin-left: 0.5rem;

    &:last-child {
        margin-bottom: 1.5rem;
    }
`

export const DescriptionImage = styled.img`
    width: 295px;
    background: var(--background-light);
    padding: 2rem;
`