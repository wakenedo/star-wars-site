import styled from 'styled-components'

export const TextTitle = styled.h4`
    font-size: clamp(0.75rem, 10vw, 0.75rem);
    margin-bottom: 1.5rem;
    font-weight: 300;
    padding: 0.25rem;
    color: var(--yellow);
    border-bottom: 0.5px solid;
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