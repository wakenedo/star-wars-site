import Episode5 from '../../../../../assets/moviescover/star-wars-episode-v-the-empire-strikes-back_v2.jpg'

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
                <FilmImg src={Episode5} />
                <FilmCoverContainer>
                    <TextTitle>
                        Characteristics
                    </TextTitle>
                    <FilmCoverContainerTextP>
                        Director : Irvin Kershner
                    </FilmCoverContainerTextP>
                    <FilmCoverContainerTextP>
                        Producers : Gary Kurtz, Rick McCallum
                    </FilmCoverContainerTextP>
                    <FilmCoverContainerTextP>
                        Crawl :
                    </FilmCoverContainerTextP>
                    <CrawlTextP>
                        "It is a dark time for the Rebellion. Although the Death Star has been destroyed,
                        Imperial troops have driven the Rebel forces from their hidden base and pursued
                        them across the galaxy. Evading the dreaded Imperial Starfleet, a group of freedom
                        fighters led by Luke Skywalker has established a new secret base on the remote ice
                        world of Hoth. The evil lord Darth Vader, obsessed with finding young Skywalker,
                        has dispatched thousands of remote probes
                        into the far reaches of space...."
                    </CrawlTextP>
                    <FilmCoverContainerTextP>
                        Release Date : 1980/05/17
                    </FilmCoverContainerTextP>
                </FilmCoverContainer>
            </DefaultSectionDiv>
        </Content>
    )
}