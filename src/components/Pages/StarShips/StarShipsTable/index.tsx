import { useState } from "react";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";
import { StarShipsBadge } from "./StarShipsBadge";

import {
    Title,
    TableArray,
    TableContainer,
} from "../../../../styles/global";


export const StarShipsTable = () => {
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
                    Star Ships 
                </Title>
                <TableArray>

                    <StarShipsBadge />

                </TableArray>
            </TableContainer>
        </>
    )
}