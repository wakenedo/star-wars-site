import Episode2 from '../../../../../assets/moviescover/star-wars-episode-ii-attack-of-the-clones_v2.jpg'

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
                <FilmImg src={Episode2} />
                <FilmCoverContainer>
                    <TextTitle>
                        Characteristics
                    </TextTitle>
                    <FilmCoverContainerTextP>
                        Director : George Lucas
                    </FilmCoverContainerTextP>
                    <FilmCoverContainerTextP>
                        Producers : Rick McCallum
                    </FilmCoverContainerTextP>
                    <FilmCoverContainerTextP>
                        Crawl :
                    </FilmCoverContainerTextP>
                    <CrawlTextP>
                        "There is unrest in the Galactic Senate.
                        Several thousand solar systems have declared their intentions to leave the Republic.
                        This separatist movement, under the leadership of the mysterious Count Dooku,
                        has made it difficult for the limited number of Jedi Knights to maintain peace
                        and order in the galaxy. Senator Amidala, the former Queen of Naboo, is returning
                        to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC
                        to assist the overwhelmed Jedi...."
                    </CrawlTextP>
                    <FilmCoverContainerTextP>
                        Release Date : 2002/05/16
                    </FilmCoverContainerTextP>
                </FilmCoverContainer>
            </DefaultSectionDiv>
        </Content>
    )

}