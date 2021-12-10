import styled from 'styled-components';

export const PeopleBadgeContainer = styled.div`    
    width: 1000px;
    margin: 1.5rem 31rem;  
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export const PeopleBadgeTitle = styled.h3`
    font-size: clamp(1.75rem, 10vw, 1.75rem);
    margin-bottom: 1.5rem;
    font-weight: 300;
    padding: 0.25rem;
    border-bottom: 0.5px solid;
`
export const TextContainer = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 300px;    
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;

    svg {
        margin-right: 1.5rem;
        margin-left: 4.5rem;
    }
`
export const DescriptionText = styled.p`
    font-size: clamp(1rem, 10vw, 1.5rem);
    font-weight: 100;

    &:last-child {
        margin-bottom: 1.5rem;
    }
`

export const IsLoadingImg = styled.img`
    width: 300px;
    margin: 15rem 50.5rem; 
`
