import styled from "styled-components";

export const VehiclesBadgeTextContainer = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 330px;
    min-height: 380px;
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
export const VehiclesBadgeTextP = styled.p`
    font-size: clamp(1rem, 10vw, 1.05rem);
    padding: 0.25rem;
    font-weight: 100;
    text-decoration: none;
    margin-left: 0.5rem;

    &:last-child {
        margin-bottom: 1.5rem;
    }
`
export const VehiclesBadgeTitle = styled.h3`
    color: var(--yellow);
    font-size: clamp(1rem, 10vw, 1rem);
    font-weight: 500;
    padding: 0.25rem;
    display: flex;
`