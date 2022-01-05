
import Episode1 from '../../../../../assets/moviescover/star-wars-episode-i-the-phantom-menace_v2.jpg'

import {
    Content,
    TextTitle,
    DefaultSectionDiv
} from "../../../../../styles/global"

import {
    CrawlTextP,
    FilmCoverContainerTextP,
    FilmCoverImg,
    FilmCoverContainer
} from "../../style"



export const FilmCover = () => {
    return (
        <Content>
            <DefaultSectionDiv>
                <FilmCoverImg src={Episode1} />
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
                        "Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems
                        is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy
                        Trade Federation has stopped all shipping to the small planet of Naboo.
                        While the Congress of the Republic endlessly debates this alarming chain of events,
                        the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace
                        and justice in the galaxy, to settle the conflict...."
                    </CrawlTextP>
                    <FilmCoverContainerTextP>
                        Release Date : 1999/05/19
                    </FilmCoverContainerTextP>
                </FilmCoverContainer>
            </DefaultSectionDiv>
        </Content>
    )

}