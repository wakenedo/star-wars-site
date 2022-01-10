import { useState } from "react";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";
import { SpeciesBadge } from "./SpeciesBadge";

import {
    Title,
    TableArray,
    TableContainer,
} from "../../../../styles/global";


export const SpeciesTable = () => {
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
                    Species 
                </Title>
                <TableArray>

                    <SpeciesBadge />

                </TableArray>
            </TableContainer>
        </>
    )
}