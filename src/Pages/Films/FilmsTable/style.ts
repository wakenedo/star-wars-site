import styled from 'styled-components'

export const FilmsTableContainer = styled.div`    
`
export const FilmsTableH1 = styled.div`
    color: var(--yellow);
    padding: 1rem;
    font-weight: 300;
    margin: 0 auto;
    align-items: center;
    text-transform: uppercase;
    font-size: clamp(1.5rem, 10vw, 2.5rem);
    box-shadow: 1.5px 1.5px var(--yellow);
   
       
`

export const FilmsTableArray = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 68.5%;
    margin: 1.5rem auto;

    @media screen and (min-width: 350px) and (max-width: 375px) {
        margin: 0; 
    };
    @media screen and (min-width: 400px) and (max-width: 500px) {
        margin: 0;
              
    }    
`