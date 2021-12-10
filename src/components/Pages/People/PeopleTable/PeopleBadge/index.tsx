import { useEffect, useState } from "react"
import { BsGenderMale } from "react-icons/bs"
import { FaBirthdayCake, FaRegEye } from "react-icons/fa"
import { GiBodyHeight, GiHairStrands, GiWeight } from "react-icons/gi"
import { HiUser } from "react-icons/hi"
import { api } from "../../../../../services/api"
import {
    DescriptionText,
    IsLoadingImg,
    PeopleBadgeContainer,
    PeopleBadgeTitle,
    TextContainer
} from "./style"

import isLoadingSVG from '../../../../../assets/Loading/Spinner-1s-200px.svg';

interface PeopleTableBadgeProps {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
}


export const PeopleBadge = () => {
    const [loading, setLoading] = useState(false)
    const [peopleTable, setPeopleTable] = useState<PeopleTableBadgeProps[]>([])

    useEffect(() => {
        setLoading(true)
        api
            .get('people/?page=1&format=json')
            .then(response => {
                setLoading(false)
                setPeopleTable(response.data.results)
            })
    }, []);
    
    if (loading) {
        return (
            <>
            <IsLoadingImg src={isLoadingSVG}/>            
            </>
        )
    }

    return (
        <PeopleBadgeContainer>
            {peopleTable.map(people => (
                <TextContainer key={people.name}>
                    <PeopleBadgeTitle> {people.name} : </PeopleBadgeTitle>
                    <DescriptionText>
                        <GiBodyHeight />
                        {people.height} cm
                    </DescriptionText>
                    <DescriptionText>
                        <GiWeight />
                        {people.mass} kg
                    </DescriptionText>
                    <DescriptionText>
                        <GiHairStrands />
                        {people.hair_color}
                    </DescriptionText>
                    <DescriptionText>
                        <HiUser />
                        {people.skin_color}
                    </DescriptionText>
                    <DescriptionText>
                        <FaRegEye />
                        {people.eye_color}
                    </DescriptionText>
                    <DescriptionText>
                        <FaBirthdayCake />
                        {people.birth_year}
                    </DescriptionText>
                    <DescriptionText>
                        <BsGenderMale />
                        {people.gender}
                    </DescriptionText>
                </TextContainer>

            ))}
        </PeopleBadgeContainer>
    )
} 