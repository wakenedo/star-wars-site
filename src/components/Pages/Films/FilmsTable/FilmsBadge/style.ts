import styled from 'styled-components'


export const FilmsBadgeContainer = styled.div`
    color: var(--text-body);
    background: var(--background-light);
    width: 400px;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 350px) and (max-width: 375px) {
        width: 295px;
        margin-bottom: 1.5rem;
        
    };
    @media screen and (min-width: 400px) and (max-width: 500px) {
        width: 335px;
        height: 390px
              
    }    
    

    svg {
        color: var(--yellow);
        margin-right: 1.5rem;
        margin-left: 4.5rem;
    }
`
export const FilmsBadgeTitle = styled.h3`
    font-size: clamp(0.75rem, 10vw, 0.75rem);
    font-weight: 300;
    padding: 0.25rem;
    color:var(--yellow);
    
`

export const FilmsBadgeImg = styled.img` 

`
