import { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";
import { PeopleBadge } from "./PeopleBadge";
import {
    PeopleTableArray,
    PeopleTableContainer,
    PeopleTableH1
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
                <PeopleTableH1>
                    People :
                </PeopleTableH1>
                <PeopleTableArray>
                    <Link to='/PeoplePage'>
                        <PeopleBadge />
                    </Link>
                </PeopleTableArray>
            </PeopleTableContainer>
        </>
    )
}