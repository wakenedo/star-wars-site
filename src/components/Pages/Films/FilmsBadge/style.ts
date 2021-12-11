import styled from 'styled-components'


export const FilmsBadgeContainer = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 300px;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
`
export const FilmsBadgeTitle = styled.h3`
    font-size: clamp(0.75rem, 10vw, 0.75rem);
    font-weight: 300;
    padding: 0.25rem;
    color:var(--yellow);
    border-bottom: 0.5px solid;
`
export const FilmsBadgeImg = styled.img` 
    width: 300px;
    height: 350px;
`
export const DescriptionText = styled.p`
    font-size: clamp(1rem, 10vw, 1.5rem);
    font-weight: 100;

    &:last-child {
        margin-bottom: 1.5rem;
    }
`
