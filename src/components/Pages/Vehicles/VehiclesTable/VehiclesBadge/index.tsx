import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { api } from "../../../../../services/api"

import { IoMdArrowRoundForward } from "react-icons/io"

import isLoadingSVG from '../../../../../assets/Loading/Spinner-1s-200px.svg';

import {
    BadgeTextContainerDiv,
    BadgeContainer,
    BadgeTitleContainer,

    //Loading SVG
    IsLoadingImg,
} from "../../../../../styles/global"

import {
    VehiclesBadgeTitle,
    VehiclesBadgeTextContainer,
    VehiclesBadgeTextP,
} from "./style"

interface VehiclesTableBadgeProps {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    lenght: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    url: string;
}


export const VehiclesBadge = () => {
    const [loading, setLoading] = useState(false)
    const [vehiclesTable, setVehiclesTable] = useState<VehiclesTableBadgeProps[]>([])

    const getNextUrl = (url: string) => {

        url = url.replace('https://swapi.dev/api/vehicles/', '')


        return url
    }


    useEffect(() => {
        setLoading(true)

        let page = 1
        let arr = []

        const fetchItems = () => {

            api
                .get(
                    `starships/?page=${page}&format=json`
                )
                .then(response => {
                    arr.push(...response.data.results)

                    if (response.data.next) {
                        page = page + 1
                        fetchItems()
                    } else {
                        setVehiclesTable(arr)
                        return setLoading(false)
                    }
                })

                .catch(error => {
                    console.error(error)
                    // instalar tostify alert 
                })
        }
        fetchItems();
    }, []);

    if (loading) {
        return (
            <>
                <IsLoadingImg src={isLoadingSVG} />
            </>
        )
    }

    return (
        <BadgeContainer>
            {vehiclesTable.map((vehicles) => (
                <VehiclesBadgeTextContainer key={vehicles.name}>
                    <BadgeTitleContainer>
                        <VehiclesBadgeTitle> {vehicles.name}  </VehiclesBadgeTitle>
                        <Link to={`/VehiclesPage/${getNextUrl(vehicles.url)}`} key={vehicles.name}>
                            <IoMdArrowRoundForward />
                        </Link>
                    </BadgeTitleContainer>
                    <BadgeTextContainerDiv>
                        <VehiclesBadgeTextP>
                            Model : {vehicles.model}
                        </VehiclesBadgeTextP>
                        <VehiclesBadgeTextP>
                            Manufacturer : {vehicles.manufacturer}
                        </VehiclesBadgeTextP>
                        <VehiclesBadgeTextP>
                            Cost In Credits : {vehicles.cost_in_credits} 
                        </VehiclesBadgeTextP>
                        <VehiclesBadgeTextP>
                            Lenght : {vehicles.lenght}
                        </VehiclesBadgeTextP>
                        <VehiclesBadgeTextP>
                            Max Atmosphering Speed : {vehicles.max_atmosphering_speed}
                        </VehiclesBadgeTextP>
                        <VehiclesBadgeTextP>
                            Crew : {vehicles.crew}
                        </VehiclesBadgeTextP>
                        <VehiclesBadgeTextP>
                            Cargo Capacity : {vehicles.cargo_capacity}
                        </VehiclesBadgeTextP>
                        <VehiclesBadgeTextP>
                            Passenger : {vehicles.passengers}
                        </VehiclesBadgeTextP>
                        <VehiclesBadgeTextP>
                            Consumables : {vehicles.consumables}
                        </VehiclesBadgeTextP>
                        <VehiclesBadgeTextP>
                            Vehicle Class : {vehicles.vehicle_class}
                        </VehiclesBadgeTextP>
                    </BadgeTextContainerDiv>
                </VehiclesBadgeTextContainer>
            ))
            }
        </BadgeContainer >

    )
} 