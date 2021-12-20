import { useState } from "react";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";

import Episode1 from '../../../../assets/moviescover/star-wars-episode-i-the-phantom-menace_v2.jpg'

import {
    TextTitle,
    Title,
} from '../../../../styles/global'

import {
    ContentFilmPage,
    DescriptionTextFilmsCrawlInfo,
    DescriptionTextFilmsInfo,
    FilmDescriptionContainer,
    FilmPageCharactersColumn,
    FilmPageCharactersContainer,
    FilmPageCharactersContent,
    FilmPageContainer,
    FilmPageCoverImg,
    FilmPageInformation,
    FilmPagePlanetsContainer,
    FilmPagePlanetsContent,
    FilmPagePlanetsText,
    FilmPagePlanetsTextContainer,
    FilmPageSpeciesContainer,
    FilmPageStarShipsContainer,
    FilmPageVehiclesContainer,
    TitleFilmsInfo,
} from "./style";

import { FilmPagePlanetsBadge } from "./FilmPagePlanetsBadge";
import { FilmPageCharactersBadge } from "./FilmPageCharactersBadge";




export const FilmPageEP1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <FilmPageContainer>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <FilmDescriptionContainer>
                <Title>
                    Film : Episode I - The Phantom Menace
                </Title>
                <ContentFilmPage>
                    <FilmPageCoverImg src={Episode1} />
                    <FilmPageInformation>
                        <TextTitle>
                            Characteristics
                        </TextTitle>
                        <DescriptionTextFilmsInfo>
                            Director : George Lucas
                        </DescriptionTextFilmsInfo>
                        <DescriptionTextFilmsInfo>
                            Producers : Rick McCallum
                        </DescriptionTextFilmsInfo>
                        <DescriptionTextFilmsInfo>
                            Crawl :
                        </DescriptionTextFilmsInfo>
                        <DescriptionTextFilmsCrawlInfo>
                        "Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems 
                        is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy 
                        Trade Federation has stopped all shipping to the small planet of Naboo. 
                        While the Congress of the Republic endlessly debates this alarming chain of events, 
                        the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace 
                        and justice in the galaxy, to settle the conflict...."
                        </DescriptionTextFilmsCrawlInfo>
                        <DescriptionTextFilmsInfo>
                            Release Date : 1999/05/19
                        </DescriptionTextFilmsInfo>
                    </FilmPageInformation>
                </ContentFilmPage>
                <FilmPageCharactersContainer>
                    <Title>
                        Characters :
                    </Title>
                    <FilmPageCharactersContent>
                        <FilmPageCharactersColumn>
                        <FilmPageCharactersBadge />
                        <FilmPageCharactersBadge />
                        <FilmPageCharactersBadge />
                        <FilmPageCharactersBadge />
                        <FilmPageCharactersBadge />
                        <FilmPageCharactersBadge />
                        <FilmPageCharactersBadge />
                        <FilmPageCharactersBadge />
                        <FilmPageCharactersBadge />
                        </FilmPageCharactersColumn>
                        <FilmPageCharactersColumn>
                        <FilmPageCharactersBadge />
                        <FilmPageCharactersBadge />
                        <FilmPageCharactersBadge />
                        <FilmPageCharactersBadge />
                        <FilmPageCharactersBadge />
                        <FilmPageCharactersBadge />
                        <FilmPageCharactersBadge />
                        <FilmPageCharactersBadge />
                        <FilmPageCharactersBadge />
                        </FilmPageCharactersColumn>
                    </FilmPageCharactersContent>
                </FilmPageCharactersContainer>
                <FilmPagePlanetsContainer>
                    <Title>
                        Planets :
                    </Title>
                    <FilmPagePlanetsContent>
                        <FilmPagePlanetsBadge />
                        <FilmPagePlanetsBadge />
                        <FilmPagePlanetsBadge />                        
                    </FilmPagePlanetsContent>
                </FilmPagePlanetsContainer>
                <FilmPageStarShipsContainer>
                    <Title>
                        Starships :
                    </Title>
                </FilmPageStarShipsContainer>
                <FilmPageVehiclesContainer>
                    <Title>
                        Vehicles :
                    </Title>
                </FilmPageVehiclesContainer>
                <FilmPageSpeciesContainer>
                    <Title>
                        Species :
                    </Title>
                </FilmPageSpeciesContainer>
            </FilmDescriptionContainer>
        </FilmPageContainer>
    )
}