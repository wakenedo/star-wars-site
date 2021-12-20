import { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";
import { PeopleBadge } from "./PeopleBadge";

import {
    Title,
} from "../../../../styles/global";

import {
    PeopleTableArray,
    PeopleTableContainer,
} from "./style";

export const PeopleTable = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <PeopleTableContainer>
                <Title>
                    People :
                </Title>
                <PeopleTableArray>
                    
                        <PeopleBadge />
                    
                </PeopleTableArray>
            </PeopleTableContainer>
        </>
    )
}