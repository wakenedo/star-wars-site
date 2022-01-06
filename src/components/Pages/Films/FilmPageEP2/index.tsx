import { useState } from "react";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";

import {
    //Default Styles
    Title,
    PageContainer,
    FilmPageDiv,
} from '../../../../styles/global'

import { FilmCover } from "./FilmCover";
import { FilmCharacters } from "./FilmCharacters";
import { FilmPlanets } from "./FilmPlanets";
import { FilmStarShips } from "./FilmStarShips";
import { FilmVehicles } from "./FilmVehicles";
import { FilmSpecies } from "./FilmSpecies";

export const FilmPageEP2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <PageContainer>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <FilmPageDiv>
                <Title>
                    Film : Episode II - Attack of the Clones
                </Title>
                <FilmCover />
                <FilmCharacters />
                <FilmPlanets />
                <FilmStarShips />
                <FilmVehicles />
                <FilmSpecies />
            </FilmPageDiv>
        </PageContainer>
    )
}