import { useState } from "react";
import { NavBar } from "../../../components/NavBar";
import { SideBar } from "../../../components/SideBar";
import { SpeciesBadge } from "./SpeciesBadge";

import {
    Title,
    TableArray,
    TableContainer,
} from "../../../styles/global";


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