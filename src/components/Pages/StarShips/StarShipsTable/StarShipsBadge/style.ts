import styled from "styled-components";

export const StarShipsBadgeTextContainer = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 330px;
    min-height: 480px;
    display: flex;
    flex-direction: column;
    margin: 1.5rem auto;
    border-radius: 5px;

    @media screen and (min-width: 350px) and (max-width: 375px) {
        min-height: 300px;
        
    };
    @media screen and (min-width: 400px) and (max-width: 500px) {

    }    
    
    svg {
        color: var(--yellow);
        margin-right: 1.5rem;
        margin-left: 4.5rem;
    }
`
export const StarShipsBadgeTextP = styled.p`
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