import { useState } from "react";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";

import Episode5 from '../../../../assets/moviescover/star-wars-episode-v-the-empire-strikes-back_v2.jpg'

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




export const FilmPageEP5 = () => {
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
                    Film : Episode V - The Empire Strikes Back
                </Title>
                <ContentFilmPage>
                    <FilmPageCoverImg src={Episode5} />
                    <FilmPageInformation>
                        <TextTitle>
                            Characteristics
                        </TextTitle>
                        <DescriptionTextFilmsInfo>
                            Director : Irvin Kershner
                        </DescriptionTextFilmsInfo>
                        <DescriptionTextFilmsInfo>
                            Producers : Gary Kurtz, Rick McCallum
                        </DescriptionTextFilmsInfo>
                        <DescriptionTextFilmsInfo>
                            Crawl :
                        </DescriptionTextFilmsInfo>
                        <DescriptionTextFilmsCrawlInfo>
                        "It is a dark time for the Rebellion. Although the Death Star has been destroyed, 
                        Imperial troops have driven the Rebel forces from their hidden base and pursued 
                        them across the galaxy. Evading the dreaded Imperial Starfleet, a group of freedom 
                        fighters led by Luke Skywalker has established a new secret base on the remote ice 
                        world of Hoth. The evil lord Darth Vader, obsessed with finding young Skywalker, 
                        has dispatched thousands of remote probes 
                        into the far reaches of space...."
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