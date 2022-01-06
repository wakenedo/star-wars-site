import Episode4 from '../../../../../assets/moviescover/star-wars-episode-iv-a-new-hope_v2.jpg'

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
                <FilmImg src={Episode4} />
                <FilmCoverContainer>
                    <TextTitle>
                        Characteristics
                    </TextTitle>
                    <FilmCoverContainerTextP>
                        Director : George Lucas
                    </FilmCoverContainerTextP>
                    <FilmCoverContainerTextP>
                        Producers : Gary Kurtz, Rick McCallum
                    </FilmCoverContainerTextP>
                    <FilmCoverContainerTextP>
                        Crawl :
                    </FilmCoverContainerTextP>
                    <CrawlTextP>
                        "It is a period of civil war.
                        Rebel spaceships, striking from a hidden base,
                        have won their first victory against the evil Galactic Empire.
                        During the battle, Rebel spies managed to steal secret plans to the Empire
                        ultimate weapon, the DEATH STAR, an armored space station with enough power
                        to destroy an entire planet. Pursued by the Empire's sinister agents,
                        Princess Leia races home aboard her starship, custodian of the stolen
                        plans that can save her people and restore freedom to the galaxy...."
                    </CrawlTextP>
                    <FilmCoverContainerTextP>
                        Release Date : 1977/05/25
                    </FilmCoverContainerTextP>
                </FilmCoverContainer>
            </DefaultSectionDiv>
        </Content>
    )

}