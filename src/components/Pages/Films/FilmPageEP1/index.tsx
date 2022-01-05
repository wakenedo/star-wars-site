import { useState } from "react";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";


import {
    Title,
    PageContainer,
} from '../../../../styles/global'

import {
    FilmPageContainer,
} from "../style";


import { FilmCover } from "./FilmCover";
import { FilmCharacters } from "./FilmCharacters";
import { FilmPlanets } from "./FilmPlanets";
import { FilmStarShips } from "./FilmStarShips";
import { FilmVehicles } from "./FilmVehicles";
import { FilmSpecies } from "./FilmSpecies";




export const FilmPageEP1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <PageContainer>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <FilmPageContainer>
                <Title>
                    Film : Episode I - The Phantom Menace
                </Title>
                <FilmCover />
                <FilmCharacters />
                <FilmPlanets />
                <FilmStarShips />
                <FilmVehicles />
                <FilmSpecies />    
            </FilmPageContainer>
        </PageContainer>
    )
}