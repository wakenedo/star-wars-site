import { useState } from "react";
import { NavBar } from "../../../components/NavBar";
import { SideBar } from "../../../components/SideBar";

import {
    FilmsBadge,  
} from "./FilmsBadge";

import {
    Title,
} from "../../../styles/global";

import {
    FilmsTableArray,
    FilmsTableContainer,
} from "./style";

export const FilmsTable = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <FilmsTableContainer>
                <Title>
                    Films 
                </Title>
                <FilmsTableArray>
                    <FilmsBadge />                  
                </FilmsTableArray>
            </FilmsTableContainer>
        </>

    )
}