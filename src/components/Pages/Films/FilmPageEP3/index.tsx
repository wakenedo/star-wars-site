import { useState } from "react";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";

import Episode3 from '../../../../assets/moviescover/star-wars-episode-iii-revenge-of-the-sith_v2.jpg'

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
} from "./style";

import { FilmPagePlanetsBadge } from "./FilmPagePlanetsBadge";
import { FilmPageCharactersBadge } from "./FilmPageCharactersBadge";




export const FilmPageEP3 = () => {
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
                    Film : Episode III - Revenge of the Sith
                </Title>
                <ContentFilmPage>
                    <FilmPageCoverImg src={Episode3} />
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
                        "War! The Republic is crumbling under attacks by the ruthless 
                        Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere.
                        In a stunning move, the fiendish droid leader, General Grievous, has swept 
                        into the Republic capital and kidnapped Chancellor Palpatine, 
                        leader of the Galactic Senate. As the Separatist Droid Army leader 
                        attempts to flee the besieged capital with their valuable hostage, 
                        two Jedi Knights lead desperate mission to rescue the captive 
                        Chancellor....",
                        </DescriptionTextFilmsCrawlInfo>
                        <DescriptionTextFilmsInfo>
                            Release Date : 2005/05/19
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