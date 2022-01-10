import { useState } from "react";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";
import { VehiclesBadge } from "./VehiclesBadge";

import {
    Title,
    TableArray,
    TableContainer,
} from "../../../../styles/global";


export const VehiclesTable = () => {
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
                    Vehicles
                </Title>
                <TableArray>

                    <VehiclesBadge />

                </TableArray>
            </TableContainer>
        </>
    )
}