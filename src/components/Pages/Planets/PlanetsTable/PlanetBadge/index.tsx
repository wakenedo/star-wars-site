import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { api } from "../../../../../services/api"

import { IoMdArrowRoundForward } from "react-icons/io"

import isLoadingSVG from '../../../../../assets/Loading/Spinner-1s-200px.svg';

import {
    BadgeTextContainerDiv,
    BadgeContainer,
    BadgeTitle,
    BadgeTitleContainer,

    //Loading SVG
    IsLoadingImg,
} from "../../../../../styles/global"

import {
    PlanetsBadgeTextContainer, 
    PlanetsBadgeTextP,
 } from "./style"

interface PlanetsTableBadgeProps {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    url: string;
}


export const PlanetBadge = () => {
    const [loading, setLoading] = useState(false)
    const [planetsTable, setPlanetsTable] = useState<PlanetsTableBadgeProps[]>([])

    const getNextUrl = (url: string) => {

        url = url.replace('https://swapi.dev/api/planets/', '')


        return url
    }


    useEffect(() => {
        setLoading(true)

        let page = 1
        let arr : PlanetsTableBadgeProps[] = []

        const fetchItems = () => {

            api
                .get(
                    `planets/?page=${page}&format=json`
                )
                .then(response => {
                    arr.push(...response.data.results)

                    if (response.data.next) {
                        page = page + 1
                        fetchItems()
                    } else {
                        setPlanetsTable(arr)
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
            {planetsTable.map((planets) => (
                <PlanetsBadgeTextContainer key={planets.name}>
                    <BadgeTitleContainer>
                        <BadgeTitle> {planets.name}  </BadgeTitle>
                        <Link to={`/PlanetsPage/${getNextUrl(planets.url)}`} key={planets.name}>
                            <IoMdArrowRoundForward />
                        </Link>
                    </BadgeTitleContainer>
                    <BadgeTextContainerDiv>
                        <PlanetsBadgeTextP>
                            Rotation Period : {planets.rotation_period} Hours
                        </PlanetsBadgeTextP>
                        <PlanetsBadgeTextP>
                            Orbital Period : {planets.orbital_period} Days
                        </PlanetsBadgeTextP>
                        <PlanetsBadgeTextP>
                            Diameter : {planets.diameter} km
                        </PlanetsBadgeTextP>
                        <PlanetsBadgeTextP>
                            Climate : {planets.climate}
                        </PlanetsBadgeTextP>
                        <PlanetsBadgeTextP>
                            Gravity : {planets.gravity}
                        </PlanetsBadgeTextP>
                        <PlanetsBadgeTextP>
                            Terrain : {planets.terrain}
                        </PlanetsBadgeTextP>
                        <PlanetsBadgeTextP>
                            Surface Water : {planets.surface_water} %
                        </PlanetsBadgeTextP>
                        <PlanetsBadgeTextP>
                            Population : {planets.population} Habitants
                        </PlanetsBadgeTextP>
                    </BadgeTextContainerDiv>
                </PlanetsBadgeTextContainer>
            ))
            }
        </BadgeContainer >

    )
} 