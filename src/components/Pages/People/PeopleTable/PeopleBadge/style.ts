import styled from 'styled-components';

export const PeopleBadgeContainer = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 300px;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
`

export const PeopleBadgeTitle = styled.h3`
    font-size: clamp(1.75rem, 10vw, 1.75rem);
    margin-bottom: 1.5rem;
    font-weight: 300;
    padding: 0.25rem;
    border-bottom: 0.5px solid;
`