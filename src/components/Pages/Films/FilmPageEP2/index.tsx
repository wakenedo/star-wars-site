import { useState } from "react";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";

import Episode2 from '../../../../assets/moviescover/star-wars-episode-ii-attack-of-the-clones_v2.jpg'

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




export const FilmPageEP2 = () => {
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
                    Film : Episode II - Attack of the Clones
                </Title>
                <ContentFilmPage>
                    <FilmPageCoverImg src={Episode2} />
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
                        "There is unrest in the Galactic Senate. 
                        Several thousand solar systems have declared their intentions to leave the Republic. 
                        This separatist movement, under the leadership of the mysterious Count Dooku, 
                        has made it difficult for the limited number of Jedi Knights to maintain peace 
                        and order in the galaxy. Senator Amidala, the former Queen of Naboo, is returning 
                        to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC 
                        to assist the overwhelmed Jedi...."
                        </DescriptionTextFilmsCrawlInfo>
                        <DescriptionTextFilmsInfo>
                            Release Date : 2002/05/16
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