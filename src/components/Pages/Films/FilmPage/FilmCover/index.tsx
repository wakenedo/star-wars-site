import Episode1 from '../../../../../assets/moviescover/star-wars-episode-i-the-phantom-menace_v2.jpg'

import {
    //Default Styles
    SectionNoBackgroundNoVh,
    Content,
    Title,
    TextTitle,
    DefaultSectionDiv,
    CrawlTextP,
    FilmCoverContainerTextP,
    FilmCoverContainer,
    FilmImg,
} from "../../../../../styles/global"

export const FilmCover = ({ data }) => {
    console.log(data)
    return (
        <SectionNoBackgroundNoVh>
            <Title>
                Film : Episode {data.episode_id} - {data.title}
            </Title>
            <Content>
                <DefaultSectionDiv>
                    <FilmImg src={Episode1} />
                    <FilmCoverContainer>
                        <TextTitle>
                            Characteristics
                        </TextTitle>
                        <FilmCoverContainerTextP>
                            Director : {data.director}
                        </FilmCoverContainerTextP>
                        <FilmCoverContainerTextP>
                            Producers : {data.producer}
                        </FilmCoverContainerTextP>
                        <FilmCoverContainerTextP>
                            Crawl :
                        </FilmCoverContainerTextP>
                        <CrawlTextP>
                            {data.opening_crawl}
                        </CrawlTextP>
                        <FilmCoverContainerTextP>
                            Release Date : {data.release_date}
                        </FilmCoverContainerTextP>
                    </FilmCoverContainer>
                </DefaultSectionDiv>
            </Content>
        </SectionNoBackgroundNoVh>
    )

}