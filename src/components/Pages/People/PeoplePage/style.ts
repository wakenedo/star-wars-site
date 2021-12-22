import styled from 'styled-components'

export const TextContainerA = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 330px;
    margin: 1.5rem;
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
    width: 330px;
    display: flex;
    flex-direction: column;
    margin: 1.5rem;
`
export const TextContainerLarge = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 630px;
    display: flex;
    flex-direction: column;
    margin: auto;
`
export const CharacterPlaceholderImg = styled.img`
    width: 325px;
    background: var(--background-light);
    padding: 2rem;
    margin: 1.5rem;
`
export const HomeWorldPlaceholderImage = styled.img`
    width: 370px;
    background: var(--background-light);
    padding: 1rem;
    margin-left: 1.5rem;
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
export const FilmsContent = styled.div`
    display: flex;
    margin: 1.65rem 18rem auto;
`
export const StarShipsBadge = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 300px;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
`
export const VehiclesBadge = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 300px;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
`