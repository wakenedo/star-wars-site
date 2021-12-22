import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { api } from "../../../../../services/api"

import { BsGenderMale } from "react-icons/bs"
import { FaBirthdayCake, FaRegEye } from "react-icons/fa"
import { GiBodyHeight, GiHairStrands, GiWeight } from "react-icons/gi"
import { IoMdArrowRoundForward } from "react-icons/io"
import { HiUser } from "react-icons/hi"

import isLoadingSVG from '../../../../../assets/Loading/Spinner-1s-200px.svg';


import {
    DefaultTextP,
    BadgeTextContainerDiv,
    BadgeContainer,
    BadgeTitle,
    BadgeTitleContainer,
    BadgeTextContainer,

    //Loading SVG
    IsLoadingImg,
} from "../../../../../styles/global"


interface PeopleTableBadgeProps {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    url: string;
}


export const PeopleBadge = () => {
    const [loading, setLoading] = useState(false)
    const [peopleTable, setPeopleTable] = useState<PeopleTableBadgeProps[]>([])

    const getNextUrl = (url: string) => {

        url = url.replace('https://swapi.dev/api/people/', '')


        return url 
    }


    useEffect(() => {
        setLoading(true)

        let page = 1
        let arr = []

        const fetchItems = () => {

            api
                .get(
                    `people/?page=${page}&format=json`
                )
                .then(response => {
                    arr.push(...response.data.results)

                    if (response.data.next) {
                        page = page +1
                        fetchItems()
                    } else {
                        setPeopleTable(arr)
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
            {peopleTable.map((people) => (
                <BadgeTextContainer key={people.name}>
                    <BadgeTitleContainer>
                        <BadgeTitle> {people.name}  </BadgeTitle>
                        <Link to={`/PeoplePage/${getNextUrl(people.url)}`} key={people.name}>
                            <IoMdArrowRoundForward />
                        </Link>
                    </BadgeTitleContainer>
                    <BadgeTextContainerDiv>
                        <DefaultTextP >
                            <GiBodyHeight />
                            {people.height} cm
                        </DefaultTextP >
                        <DefaultTextP >
                            <GiWeight />
                            {people.mass} kg
                        </DefaultTextP >
                        <DefaultTextP >
                            <GiHairStrands />
                            {people.hair_color}
                        </DefaultTextP >
                        <DefaultTextP >
                            <HiUser />
                            {people.skin_color}
                        </DefaultTextP >
                        <DefaultTextP >
                            <FaRegEye />
                            {people.eye_color}
                        </DefaultTextP >
                        <DefaultTextP >
                            <FaBirthdayCake />
                            {people.birth_year}
                        </DefaultTextP >
                        <DefaultTextP >
                            <BsGenderMale />
                            {people.gender}
                        </DefaultTextP >
                    </BadgeTextContainerDiv>
                </BadgeTextContainer>


            ))
            }
        </BadgeContainer >

    )
} 