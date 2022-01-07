import { useState } from "react";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";
import { PlanetBadge } from "./PlanetBadge";

import {
    Title,
    TableArray,
    TableContainer,
} from "../../../../styles/global";


export const PlanetsTable = () => {
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
                    Planets 
                </Title>
                <TableArray>

                    <PlanetBadge />

                </TableArray>
            </TableContainer>
        </>
    )
}