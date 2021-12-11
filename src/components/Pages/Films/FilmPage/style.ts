import styled from 'styled-components'

export const FilmsPageContainer = styled.div`
`

export const Title = styled.h1`
    color: var(--yellow);
    padding: 1rem;
    font-weight: 300;
    margin: 0 auto;
    align-items: center;
    text-transform: uppercase;
    font-size: clamp(1.5rem, 10vw, 2.5rem);
    box-shadow: 1.5px 1.5px var(--yellow);
`
export const ContentFilmPage = styled.div`
    display: flex;
    align-items: center;
    margin: 1.5rem;
`

export const FilmsPageInformation = styled.div`
    background: var(--background-light);
    width: 685px;
    height: 800px;
    margin-left: 1.5rem;
`

export const DescriptionTextFilmsInfo = styled.p`
    font-size: clamp(1rem, 10vw, 1.5rem);
    font-weight: 100;
    color : var(--text-body);
    margin: 0.5rem 1.5rem;
`

export const DescriptionTextFilmsCrawlInfo = styled.p`
    font-size: clamp(1.95rem, 10vw, 1.75rem);
    font-weight: 100;
    color: var(--yellow);
    text-align: justify;
    margin: 2.5rem;
`

export const TitleFilmsInfo = styled.h4`
    font-size: clamp(0.75rem, 10vw, 0.75rem);
    margin-bottom: 1.5rem;
    font-weight: 300;
    padding: 0.25rem;
    border-bottom: 0.5px solid;
`

export const FilmsDescriptionContainer = styled.div`
`

export const FilmsPageCoverImg = styled.img`
    width: 685px;
    height: 800px;
`