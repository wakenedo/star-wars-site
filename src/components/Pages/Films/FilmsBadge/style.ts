import styled from 'styled-components'
import Episode4 from '../../../../assets/moviescover/small/star-wars-episode-iv-a-new-hope_v2.jpg'

export const FilmsBadgeContainer = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 300px;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
`
export const FilmsBadgeTitle = styled.h3`
    font-size: clamp(0.75rem, 10vw, 0.75rem);
    font-weight: 300;
    padding: 0.25rem;
    border-bottom: 0.5px solid;
`
export const FilmsBadgeImg = styled.img`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
    url(${Episode4}); 
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
