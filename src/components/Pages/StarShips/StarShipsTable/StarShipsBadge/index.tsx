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
    StarShipsBadgeTextContainer,
    StarShipsBadgeTextP,
} from "./style"

interface StarShipsTableBadgeProps {
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
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    url: string;
}


export const StarShipsBadge = () => {
    const [loading, setLoading] = useState(false)
    const [starShipsTable, setStarShipsTable] = useState<StarShipsTableBadgeProps[]>([])

    const getNextUrl = (url: string) => {

        url = url.replace('https://swapi.dev/api/starships/', '')


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
                        setStarShipsTable(arr)
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
            {starShipsTable.map((starShips) => (
                <StarShipsBadgeTextContainer key={starShips.name}>
                    <BadgeTitleContainer>
                        <VehiclesBadgeTitle> {starShips.name}  </VehiclesBadgeTitle>
                        <Link to={`/StarShipsPage/${getNextUrl(starShips.url)}`} key={starShips.name}>
                            <IoMdArrowRoundForward />
                        </Link>
                    </BadgeTitleContainer>
                    <BadgeTextContainerDiv>
                        <StarShipsBadgeTextP>
                            Model : {starShips.model}
                        </StarShipsBadgeTextP>
                        <StarShipsBadgeTextP>
                            Manufacturer : {starShips.manufacturer}
                        </StarShipsBadgeTextP>
                        <StarShipsBadgeTextP>
                            Cost In Credits : {starShips.cost_in_credits} 
                        </StarShipsBadgeTextP>
                        <StarShipsBadgeTextP>
                            Lenght : {starShips.lenght}
                        </StarShipsBadgeTextP>
                        <StarShipsBadgeTextP>
                            Max Atmosphering Speed : {starShips.max_atmosphering_speed}
                        </StarShipsBadgeTextP>
                        <StarShipsBadgeTextP>
                            Crew : {starShips.crew}
                        </StarShipsBadgeTextP>
                        <StarShipsBadgeTextP>
                            Cargo Capacity : {starShips.cargo_capacity}
                        </StarShipsBadgeTextP>
                        <StarShipsBadgeTextP>
                            Passenger : {starShips.passengers}
                        </StarShipsBadgeTextP>
                        <StarShipsBadgeTextP>
                            Consumables : {starShips.consumables}
                        </StarShipsBadgeTextP>
                        <StarShipsBadgeTextP>
                            Hyperdrive Rating : {starShips.hyperdrive_rating}
                        </StarShipsBadgeTextP>
                        <StarShipsBadgeTextP>
                            MGLT : {starShips.MGLT}
                        </StarShipsBadgeTextP>
                        <StarShipsBadgeTextP>
                            Star Ship Class : {starShips.starship_class}
                        </StarShipsBadgeTextP>
                    </BadgeTextContainerDiv>
                </StarShipsBadgeTextContainer>
            ))
            }
        </BadgeContainer >

    )
} 