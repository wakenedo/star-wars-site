import { useState } from "react";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";
import {
    FilmsBadge1,
    FilmsBadge2,
    FilmsBadge3,
    FilmsBadge4,
    FilmsBadge5,
    FilmsBadge6,
} from "../FilmsBadge";

import {
    Title,
} from "../../../../styles/global";

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
                    Films :
                </Title>
                <FilmsTableArray>
                    <FilmsBadge1 />
                    <FilmsBadge2 />
                    <FilmsBadge3 />
                    <FilmsBadge4 />
                    <FilmsBadge5 />
                    <FilmsBadge6 />
                </FilmsTableArray>
            </FilmsTableContainer>
        </>

    )
}