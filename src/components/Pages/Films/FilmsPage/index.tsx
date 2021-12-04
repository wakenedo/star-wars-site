import { useState } from "react";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";

import Episode4 from '../../../../assets/moviescover/star-wars-episode-iv-a-new-hope_v2.jpg'

import {
    FilmsDescriptionContainer,
    FilmsPageContainer,
    FilmsPageCoverImg,
} from "./style";



export const FilmsPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <FilmsPageContainer>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <FilmsDescriptionContainer>
                <FilmsPageCoverImg src={Episode4} />
            </FilmsDescriptionContainer>
        </FilmsPageContainer>
    )
}