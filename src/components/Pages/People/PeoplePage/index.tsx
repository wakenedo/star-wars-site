import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from "../../../../services/api";

import { GiBodyHeight, GiHairStrands, GiWeight } from 'react-icons/gi'
import { HiUser } from 'react-icons/hi'
import { FaBirthdayCake, FaRegEye } from 'react-icons/fa'
import { BsGenderMale } from 'react-icons/bs'

import { NavBar } from '../../../../components/NavBar';
import { SideBar } from '../../../../components/SideBar';

import isLoadingSVG from '../../../../assets/Loading/Spinner-1s-200px.svg';

import CharacterImg from '../../../../assets/CharacterImg.png'
import PlanetImg from '../../../../assets/PlanetImg.png'

import {
    FilmsBadge4,
    FilmsBadge5,
    FilmsBadge6,
} from '../PeoplePageFilmBadge';

import {
    Title,
    TextTitle,
    Content,
    BadgeText,
    TextContainerA,
    TextContainerB,
    TextContainerLarge,
    IsLoadingImg,
} from '../../../../styles/global';

import {
    DescriptionContainer,
    DescriptionImage,
    DescriptionText,
    HomeWorldContainer,
    HomeWorldContent,
    FilmsContainer,
    PeoplePageContainer,
    SpeciesContainer,
    StarShipsContainer,
    VehiclesContainer,
    HomeWorldText,
    HomeWorldImage,
    SpeciesContent,
    SpeciesText,
    StarShipsContent,
    StarShipsBadge,
    VehiclesContent,
    VehiclesBadge,
    FilmsContent
} from './style'
import axios from 'axios';


interface CharacterProps {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
}

export const PeoplePage = () => {
    const [loading, setLoading] = useState(false)
    const [character, setCharacter] = useState<CharacterProps>()

    const { url } = useParams()

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!url) return
        setLoading(true)
        api
            .get(
                `people/${url}`

            )
            .then(response => {
                setLoading(false)
                setCharacter(response.data)


            })
    }, []);

    if (loading) {
        return (
            <>
                <IsLoadingImg src={isLoadingSVG} />
            </>
        )
    }

    const toggle = () => {
        setIsOpen(!isOpen);
    }


    return (
        <PeoplePageContainer>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
                <DescriptionContainer key={character?.name}>
                    <Title>
                        Character : {character?.name}
                    </Title>
                    <Content>
                        <DescriptionImage src={CharacterImg} />
                        <TextContainerA>
                            <TextTitle>
                                Characteristics
                            </TextTitle>
                            <DescriptionText>
                                <GiBodyHeight />
                                {character?.height} cm
                            </DescriptionText>
                            <DescriptionText>
                                <GiWeight />
                                {character?.mass} kg
                            </DescriptionText>
                            <DescriptionText>
                                <GiHairStrands />
                                {character?.hair_color}
                            </DescriptionText>
                            <DescriptionText>
                                <HiUser />
                                {character?.skin_color}
                            </DescriptionText>
                            <DescriptionText>
                                <FaRegEye />
                                {character?.eye_color}
                            </DescriptionText>
                            <DescriptionText>
                                <FaBirthdayCake />
                                {character?.birth_year}
                            </DescriptionText>
                            <DescriptionText>
                                <BsGenderMale />
                                {character?.gender}
                            </DescriptionText>
                        </TextContainerA>
                    </Content>
                </DescriptionContainer>
            <HomeWorldContainer>
                <Title>
                    Planet: Tatooine
                </Title>
                <HomeWorldContent>
                    <TextContainerB>
                        <TextTitle>
                            Description
                        </TextTitle>
                        <HomeWorldText>
                            Rotation Period : 23 Hours
                        </HomeWorldText>
                        <HomeWorldText>
                            Orbital Period : 304 Days
                        </HomeWorldText>
                        <HomeWorldText>
                            Diameter : 10465 Kilometers
                        </HomeWorldText>
                        <HomeWorldText>
                            Climate : Arid
                        </HomeWorldText>
                        <HomeWorldText>
                            Gravity : 1 Standard
                        </HomeWorldText>
                        <HomeWorldText>
                            Terrain : Desert
                        </HomeWorldText>
                        <HomeWorldText>
                            Surface Water : 1 %
                        </HomeWorldText>
                        <HomeWorldText>
                            Population : 200.000
                        </HomeWorldText>
                    </TextContainerB>
                    <HomeWorldImage src={PlanetImg} />
                </HomeWorldContent>
            </HomeWorldContainer>
            <SpeciesContainer>
                <Title>
                    Species : Human
                </Title>
                <SpeciesContent>
                    <TextContainerLarge >
                        <TextTitle>
                            Features
                        </TextTitle>
                        <SpeciesText>
                            Classification : Mammal
                        </SpeciesText>
                        <SpeciesText>
                            Designation : Sentient
                        </SpeciesText>
                        <SpeciesText>
                            Average Height : 180 cm
                        </SpeciesText>
                        <SpeciesText>
                            Skin Colors : Caucasian, Black, Asian, Hispanic
                        </SpeciesText>
                        <SpeciesText>
                            Hair Colors : Blonde, Brown, Black, Red
                        </SpeciesText>
                        <SpeciesText>
                            Eye Colors : Brown, Blue, Green, Hazel, Gray, Amber
                        </SpeciesText>
                        <SpeciesText>
                            Average Lifespan : 120 years
                        </SpeciesText>
                        <SpeciesText>
                            Home World : Earth
                        </SpeciesText>
                        <SpeciesText>
                            Language : Galatic Basic
                        </SpeciesText>
                    </TextContainerLarge>
                </SpeciesContent>
            </SpeciesContainer>
            <FilmsContainer>
                <Title>
                    Films :
                </Title>
                <FilmsContent>
                    <FilmsBadge4 />
                    <FilmsBadge5 />
                    <FilmsBadge6 />
                </FilmsContent>
            </FilmsContainer>
            <StarShipsContainer>
                <Title>
                    Star Ships :
                </Title>
                <StarShipsContent>
                    <StarShipsBadge>
                        <TextTitle>
                            Characteristics
                        </TextTitle>
                        <BadgeText>
                            Name : X-Wing
                        </BadgeText>
                        <BadgeText>
                            Model : T-65 X-Wing
                        </BadgeText>
                        <BadgeText>
                            Manufacturer : Incom Corporation
                        </BadgeText>
                        <BadgeText>
                            Cost in credits : 149.999
                        </BadgeText>
                        <BadgeText>
                            Length : 12.5 Meters
                        </BadgeText>
                        <BadgeText>
                            Max atmosphering speed : 1050
                        </BadgeText>
                        <BadgeText>
                            Crew : 1
                        </BadgeText>
                        <BadgeText>
                            Passengers : 0
                        </BadgeText>
                        <BadgeText>
                            Cargo capacity : 110
                        </BadgeText>
                        <BadgeText>
                            Consumables : 1 weeek
                        </BadgeText>
                        <BadgeText>
                            Hyperdrive rating : 1.0
                        </BadgeText>
                        <BadgeText>
                            MGLT : 100
                        </BadgeText>
                        <BadgeText>
                            Starship class : Starfighter
                        </BadgeText>
                    </StarShipsBadge>
                    <StarShipsBadge>
                        <TextTitle>
                            Characteristics
                        </TextTitle>
                        <BadgeText>
                            Name : X-Wing
                        </BadgeText>
                        <BadgeText>
                            Model : T-65 X-Wing
                        </BadgeText>
                        <BadgeText>
                            Manufacturer : Incom Corporation
                        </BadgeText>
                        <BadgeText>
                            Cost in credits : 149.999
                        </BadgeText>
                        <BadgeText>
                            Length : 12.5 Meters
                        </BadgeText>
                        <BadgeText>
                            Max atmosphering speed : 1050
                        </BadgeText>
                        <BadgeText>
                            Crew : 1
                        </BadgeText>
                        <BadgeText>
                            Passengers : 0
                        </BadgeText>
                        <BadgeText>
                            Cargo capacity : 110
                        </BadgeText>
                        <BadgeText>
                            Consumables : 1 weeek
                        </BadgeText>
                        <BadgeText>
                            Hyperdrive rating : 1.0
                        </BadgeText>
                        <BadgeText>
                            MGLT : 100
                        </BadgeText>
                        <BadgeText>
                            Starship class : Starfighter
                        </BadgeText>
                    </StarShipsBadge>
                </StarShipsContent>
            </StarShipsContainer>
            <VehiclesContainer>
                <Title>
                    Vehicles :
                </Title>
                <VehiclesContent>
                    <VehiclesBadge>
                        <TextTitle>
                            Characteristics
                        </TextTitle>
                        <BadgeText>
                            Name : Snowspeeder
                        </BadgeText>
                        <BadgeText>
                            Model : T-47 Airspeeder
                        </BadgeText>
                        <BadgeText>
                            Manufacturer : Incom Corporation
                        </BadgeText>
                        <BadgeText>
                            Cost in credits : Unknown
                        </BadgeText>
                        <BadgeText>
                            Length : 4.5 Meters
                        </BadgeText>
                        <BadgeText>
                            Max atmosphering speed : 650
                        </BadgeText>
                        <BadgeText>
                            Crew : 2
                        </BadgeText>
                        <BadgeText>
                            Passengers : 0
                        </BadgeText>
                        <BadgeText>
                            Cargo capacity : 10
                        </BadgeText>
                        <BadgeText>
                            Consumables : None
                        </BadgeText>
                        <BadgeText>
                            Vehicle class : Airspeeder
                        </BadgeText>
                    </VehiclesBadge>
                    <VehiclesBadge>
                        <TextTitle>
                            Characteristics
                        </TextTitle>
                        <BadgeText>
                            Name : Snowspeeder
                        </BadgeText>
                        <BadgeText>
                            Model : T-47 Airspeeder
                        </BadgeText>
                        <BadgeText>
                            Manufacturer : Incom Corporation
                        </BadgeText>
                        <BadgeText>
                            Cost in credits : Unknown
                        </BadgeText>
                        <BadgeText>
                            Length : 4.5 Meters
                        </BadgeText>
                        <BadgeText>
                            Max atmosphering speed : 650
                        </BadgeText>
                        <BadgeText>
                            Crew : 2
                        </BadgeText>
                        <BadgeText>
                            Passengers : 0
                        </BadgeText>
                        <BadgeText>
                            Cargo capacity : 10
                        </BadgeText>
                        <BadgeText>
                            Consumables : None
                        </BadgeText>
                        <BadgeText>
                            Vehicle class : Airspeeder
                        </BadgeText>
                    </VehiclesBadge>
                </VehiclesContent>
            </VehiclesContainer>
        </PeoplePageContainer>
    )
}