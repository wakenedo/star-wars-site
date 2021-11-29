import React, { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";
import { PeopleBadge } from "./PeopleBadge";
import {
    PeopleTableArray,
    PeopleTableContainer,
    PeopleTableH1
} from "./style";

export const PeopleTable = () => {
    const [peopleTable, setPeopleTable] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        api.get('people')
            .then(response => setPeopleTable(response.data.people))
    }, []);

    return (
        <>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />

            <PeopleTableContainer>
                <PeopleTableH1>
                    People :
                </PeopleTableH1>
                <PeopleTableArray>
                    <PeopleBadge />
                </PeopleTableArray>
            </PeopleTableContainer>
        </>
    )
}