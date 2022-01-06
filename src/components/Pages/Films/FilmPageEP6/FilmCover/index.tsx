import Episode6 from '../../../../../assets/moviescover/star-wars-episode-vi-return-of-the-jedi_v2.jpg'

import {
    //Default Styles
    Content,
    TextTitle,
    DefaultSectionDiv,
    CrawlTextP,
    FilmCoverContainerTextP,
    FilmCoverContainer,
    FilmImg,
} from "../../../../../styles/global"

export const FilmCover = () => {
    return (
        <Content>
            <DefaultSectionDiv>
                <FilmImg src={Episode6} />
                <FilmCoverContainer>
                    <TextTitle>
                        Characteristics
                    </TextTitle>
                    <FilmCoverContainerTextP>
                        Director : Richard Marquand
                    </FilmCoverContainerTextP>
                    <FilmCoverContainerTextP>
                        Producers : Howard G. Kazanjian, George Lucas, Rick McCallum
                    </FilmCoverContainerTextP>
                    <FilmCoverContainerTextP>
                        Crawl :
                    </FilmCoverContainerTextP>
                    <CrawlTextP>
                        "Luke Skywalker has returned to his home planet of Tatooine in an attempt
                        to rescue his friend Han Solo from the clutches of the vile gangster Jabba
                        the Hutt. Little does Luke know that the GALACTIC EMPIRE has secretly begun
                        construction on a new armored space station even more powerful than the first
                        dreaded Death Star. When completed, this ultimate weapon will spell certain
                        doom for the small band of rebels struggling to
                        restore freedom to the galaxy..."
                    </CrawlTextP>
                    <FilmCoverContainerTextP>
                        Release Date : 1983/05/25
                    </FilmCoverContainerTextP>
                </FilmCoverContainer>
            </DefaultSectionDiv>
        </Content>
    )
}