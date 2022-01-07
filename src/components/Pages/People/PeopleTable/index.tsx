import { useState } from "react";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";
import { PeopleBadge } from "./PeopleBadge";

import {
    Title,
    TableArray,
    TableContainer,
} from "../../../../styles/global";


export const PeopleTable = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <TableContainer>
                <Title>
                    People
                </Title>
                <TableArray>
                    <PeopleBadge />
                </TableArray>
            </TableContainer>
        </>
    )
}