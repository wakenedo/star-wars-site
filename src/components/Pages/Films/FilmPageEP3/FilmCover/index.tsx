import Episode3 from '../../../../../assets/moviescover/star-wars-episode-iii-revenge-of-the-sith_v2.jpg'

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
                <FilmImg src={Episode3} />
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
                        "War! The Republic is crumbling under attacks by the ruthless
                        Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere.
                        In a stunning move, the fiendish droid leader, General Grievous, has swept
                        into the Republic capital and kidnapped Chancellor Palpatine,
                        leader of the Galactic Senate. As the Separatist Droid Army leader
                        attempts to flee the besieged capital with their valuable hostage,
                        two Jedi Knights lead desperate mission to rescue the captive
                        Chancellor....",
                    </CrawlTextP>
                    <FilmCoverContainerTextP>
                    Release Date : 2005/05/19
                    </FilmCoverContainerTextP>
                </FilmCoverContainer>
            </DefaultSectionDiv>
        </Content>
    )

}