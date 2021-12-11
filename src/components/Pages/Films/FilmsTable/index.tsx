import { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";
import { FilmsBadge1, FilmsBadge2, FilmsBadge3, FilmsBadge4, FilmsBadge5, FilmsBadge6, FilmsBadge7 } from "../FilmsBadge";

import {
    FilmsTableArray,
    FilmsTableContainer,
    FilmsTableH1
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
                <FilmsTableH1>
                    Films :
                </FilmsTableH1>
                <FilmsTableArray>
                    <Link to='/FilmPage'>
                        <FilmsBadge1 />

                    </Link>
                    <Link to='/FilmPage'>
                        <FilmsBadge2 />

                    </Link>
                    <Link to='/FilmPage'>
                        <FilmsBadge3 />

                    </Link>

                    <Link to='/FilmPage'>
                        <FilmsBadge4 />

                    </Link>

                    <Link to='/FilmPage'>
                        <FilmsBadge5 />

                    </Link>

                    <Link to='/FilmPage'>
                        <FilmsBadge6 />

                    </Link>

                    <Link to='/FilmPage'>
                        <FilmsBadge7 />

                    </Link>

                </FilmsTableArray>
            </FilmsTableContainer>
        </>

    )
}