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
} from '../../../PagesFilmBadge';

import {
    //Default Styles
    SectionNoBackground,
    SectionBackground1,
    SectionBackground2,
    SectionBackground3,
    Title,
    TextTitle,
    DefaultTextP,
    PageContainer,
    Content,
    BadgeText,
    

    //Loading SVG
    IsLoadingImg,
} from '../../../../styles/global';

import {
    CharacterPlaceholderImg,
    HomeWorldPlaceholderImage,
    StarShipsBadge,
    VehiclesBadge,
    TextContainerA,
    TextContainerB,
    TextContainerLarge,
} from './style'



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
        <PageContainer>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <SectionBackground1 key={character?.name}>
                <Title>
                    Character : {character?.name}
                </Title>
                <Content>
                    <CharacterPlaceholderImg src={CharacterImg} />
                    <TextContainerA>
                        <TextTitle>
                            Characteristics
                        </TextTitle>
                        <DefaultTextP>
                            <GiBodyHeight />
                            {character?.height} cm
                        </DefaultTextP>
                        <DefaultTextP>
                            <GiWeight />
                            {character?.mass} kg
                        </DefaultTextP>
                        <DefaultTextP>
                            <GiHairStrands />
                            {character?.hair_color}
                        </DefaultTextP>
                        <DefaultTextP>
                            <HiUser />
                            {character?.skin_color}
                        </DefaultTextP>
                        <DefaultTextP>
                            <FaRegEye />
                            {character?.eye_color}
                        </DefaultTextP>
                        <DefaultTextP>
                            <FaBirthdayCake />
                            {character?.birth_year}
                        </DefaultTextP>
                        <DefaultTextP>
                            <BsGenderMale />
                            {character?.gender}
                        </DefaultTextP>
                    </TextContainerA>
                </Content>
            </SectionBackground1>
            <SectionNoBackground>
                <Title>
                    Planet: Tatooine
                </Title>
                <Content>
                    <TextContainerB>
                        <TextTitle>
                            Description
                        </TextTitle>
                        <DefaultTextP>
                            Rotation Period : 23 Hours
                        </DefaultTextP>
                        <DefaultTextP>
                            Orbital Period : 304 Days
                        </DefaultTextP>
                        <DefaultTextP>
                            Diameter : 10465 Kilometers
                        </DefaultTextP>
                        <DefaultTextP>
                            Climate : Arid
                        </DefaultTextP>
                        <DefaultTextP>
                            Gravity : 1 Standard
                        </DefaultTextP>
                        <DefaultTextP>
                            Terrain : Desert
                        </DefaultTextP>
                        <DefaultTextP>
                            Surface Water : 1 %
                        </DefaultTextP>
                        <DefaultTextP>
                            Population : 200.000
                        </DefaultTextP>
                    </TextContainerB>
                    <HomeWorldPlaceholderImage src={PlanetImg} />
                </Content>
            </SectionNoBackground>
            <SectionBackground2>
                <Title>
                    Species : Human
                </Title>
                <Content>
                    <TextContainerLarge >
                        <TextTitle>
                            Features
                        </TextTitle>
                        <DefaultTextP>
                            Classification : Mammal
                        </DefaultTextP>
                        <DefaultTextP>
                            Designation : Sentient
                        </DefaultTextP>
                        <DefaultTextP>
                            Average Height : 180 cm
                        </DefaultTextP>
                        <DefaultTextP>
                            Skin Colors : Caucasian, Black, Asian, Hispanic
                        </DefaultTextP>
                        <DefaultTextP>
                            Hair Colors : Blonde, Brown, Black, Red
                        </DefaultTextP>
                        <DefaultTextP>
                            Eye Colors : Brown, Blue, Green, Hazel, Gray, Amber
                        </DefaultTextP>
                        <DefaultTextP>
                            Average Lifespan : 120 years
                        </DefaultTextP>
                        <DefaultTextP>
                            Home World : Earth
                        </DefaultTextP>
                        <DefaultTextP>
                            Language : Galatic Basic
                        </DefaultTextP>
                    </TextContainerLarge>
                </Content>
            </SectionBackground2>
            <SectionNoBackground>
                <Title>
                    Films :
                </Title>
                <Content>
                    <FilmsBadge4 />
                    <FilmsBadge5 />
                    <FilmsBadge6 />
                </Content>
            </SectionNoBackground>
            <SectionBackground3>
                <Title>
                    Star Ships :
                </Title>
                <Content>
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
                </Content>
            </SectionBackground3>
            <SectionNoBackground>
                <Title>
                    Vehicles :
                </Title>
                <Content>
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
                </Content>
            </SectionNoBackground>
        </PageContainer>
    )
}