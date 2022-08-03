import { useState } from "react";
import { NavBar } from "../../../components/NavBar";
import { SideBar } from "../../../components/SideBar";
import { VehiclesBadge } from "./VehiclesBadge";

import {
    Title,
    TableArray,
    TableContainer,
} from "../../../styles/global";


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