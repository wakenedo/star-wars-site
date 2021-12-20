import styled from 'styled-components';

export const PeopleBadgeContainer = styled.div`    
    margin: 1.5rem;  
    align-items: center;
    display: flex;
    flex-wrap: wrap;
`
export const PeopleBadgeTitle = styled.h3`
    color: var(--yellow);
    font-size: clamp(1.45rem, 10vw, 1.45rem);
    font-weight: 500;
    padding: 0.25rem;
    display: flex;
`
export const PeopleBadgeTitleContainer = styled.div`
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
export const DescriptionTextContainer = styled.div`
    margin-top: 1.5rem;
`

export const TextContainer = styled.div`
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
export const DescriptionText = styled.p`
    font-size: clamp(1rem, 10vw, 1.5rem);
    font-weight: 100;
    text-decoration: none;

    &:last-child {
        margin-bottom: 1.5rem;
    }
`

export const IsLoadingImg = styled.img`
    width: 300px;
    margin: 15rem 50.5rem; 
`
