import { useState } from "react";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";

import Episode6 from '../../../../assets/moviescover/star-wars-episode-vi-return-of-the-jedi_v2.jpg'

import {
    Title,
    TextTitle,
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




export const FilmPageEP6 = () => {
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
                    Film : Episode VI - Return of the Jedi
                </Title>
                <ContentFilmPage>
                    <FilmPageCoverImg src={Episode6} />
                    <FilmPageInformation>
                        <TextTitle>
                            Characteristics
                        </TextTitle>
                        <DescriptionTextFilmsInfo>
                            Director : Richard Marquand
                        </DescriptionTextFilmsInfo>
                        <DescriptionTextFilmsInfo>
                            Producers : Howard G. Kazanjian, George Lucas, Rick McCallum
                        </DescriptionTextFilmsInfo>
                        <DescriptionTextFilmsInfo>
                            Crawl :
                        </DescriptionTextFilmsInfo>
                        <DescriptionTextFilmsCrawlInfo>
                        "Luke Skywalker has returned to his home planet of Tatooine in an attempt 
                        to rescue his friend Han Solo from the clutches of the vile gangster Jabba 
                        the Hutt. Little does Luke know that the GALACTIC EMPIRE has secretly begun 
                        construction on a new armored space station even more powerful than the first 
                        dreaded Death Star. When completed, this ultimate weapon will spell certain 
                        doom for the small band of rebels struggling to 
                        restore freedom to the galaxy..."
                        </DescriptionTextFilmsCrawlInfo>
                        <DescriptionTextFilmsInfo>
                            Release Date : 1980/05/17
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