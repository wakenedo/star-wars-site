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
    SpeciesBadgeTextContainer, 
    SpeciesBadgeTextP,
 } from "./style"

interface SpeciesTableBadgeProps {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
    url: string;
}


export const SpeciesBadge = () => {
    const [loading, setLoading] = useState(false)
    const [speciesTable, setSpeciesTable] = useState<SpeciesTableBadgeProps[]>([])

    const getNextUrl = (url: string) => {

        url = url.replace('https://swapi.dev/api/species/', '')


        return url
    }


    useEffect(() => {
        setLoading(true)

        let page = 1
        let arr : SpeciesTableBadgeProps[] = []

        const fetchItems = () => {

            api
                .get(
                    `species/?page=${page}&format=json`
                )
                .then(response => {
                    arr.push(...response.data.results)

                    if (response.data.next) {
                        page = page + 1
                        fetchItems()
                    } else {
                        setSpeciesTable(arr)
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
            {speciesTable.map((species) => (
                <SpeciesBadgeTextContainer key={species.name}>
                    <BadgeTitleContainer>
                        <BadgeTitle> {species.name}  </BadgeTitle>
                        <Link to={`/SpeciesPage/${getNextUrl(species.url)}`} key={species.name}>
                            <IoMdArrowRoundForward />
                        </Link>
                    </BadgeTitleContainer>
                    <BadgeTextContainerDiv>
                        <SpeciesBadgeTextP>
                            Classification : {species.classification} 
                        </SpeciesBadgeTextP>
                        <SpeciesBadgeTextP>
                            Designation : {species.designation} 
                        </SpeciesBadgeTextP>
                        <SpeciesBadgeTextP>
                            Average Height : {species.average_height} Cm
                        </SpeciesBadgeTextP>
                        <SpeciesBadgeTextP>
                            Skin Colors : {species.skin_colors}
                        </SpeciesBadgeTextP>
                        <SpeciesBadgeTextP>
                            Hair Colors : {species.hair_colors}
                        </SpeciesBadgeTextP>
                        <SpeciesBadgeTextP>
                            Eye Colors : {species.eye_colors}
                        </SpeciesBadgeTextP>
                        <SpeciesBadgeTextP>
                            Average Lifespan : {species.average_lifespan} Years
                        </SpeciesBadgeTextP>
                        <SpeciesBadgeTextP>
                            Language : {species.language} 
                        </SpeciesBadgeTextP>
                    </BadgeTextContainerDiv>
                </SpeciesBadgeTextContainer>
            ))
            }
        </BadgeContainer >

    )
} 