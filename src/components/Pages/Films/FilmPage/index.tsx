import { useState } from "react";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";

import Episode4 from '../../../../assets/moviescover/star-wars-episode-iv-a-new-hope_v2.jpg'

import {
    ContentFilmPage,
    DescriptionTextFilmsCrawlInfo,
    DescriptionTextFilmsInfo,
    FilmsDescriptionContainer,
    FilmsPageContainer,
    FilmsPageCoverImg,
    FilmsPageInformation,
    Title,
    TitleFilmsInfo,
} from "./style";



export const FilmPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <FilmsPageContainer>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <FilmsDescriptionContainer>
                <Title>
                    Film : Episode I - A New Hope
                </Title>
                <ContentFilmPage>
                    <FilmsPageCoverImg src={Episode4} />
                    <FilmsPageInformation>
                        <TitleFilmsInfo>
                            Characteristics
                        </TitleFilmsInfo>
                        <DescriptionTextFilmsInfo>
                            Director : George Lucas
                        </DescriptionTextFilmsInfo>
                        <DescriptionTextFilmsInfo>
                            Producers : Gary Kurtz, Rick McCallum
                        </DescriptionTextFilmsInfo>
                        <DescriptionTextFilmsInfo>
                            Crawl :
                        </DescriptionTextFilmsInfo>
                        <DescriptionTextFilmsCrawlInfo>
                            "It is a period of civil war.
                            Rebel spaceships, striking from a hidden base,
                            have won their first victory against the evil Galactic Empire.
                            During the battle, Rebel spies managed to steal secret plans to the Empire
                            ultimate weapon, the DEATH STAR, an armored space station with enough power
                            to destroy an entire planet. Pursued by the Empire's sinister agents,
                            Princess Leia races home aboard her starship, custodian of the stolen
                            plans that can save her people and restore freedom to the galaxy...."
                        </DescriptionTextFilmsCrawlInfo>
                        <DescriptionTextFilmsInfo>
                            Release Date : 1977-05-25
                        </DescriptionTextFilmsInfo>
                    </FilmsPageInformation>
                    {/*FilmPageCharactersDiv*/}
                    {/*FilmPagePlanetsDiv*/}
                    {/*FilmPageVehiclesDiv*/}
                    {/*FilmPageSpeciesDiv*/}

                </ContentFilmPage>
            </FilmsDescriptionContainer>
        </FilmsPageContainer>
    )
}