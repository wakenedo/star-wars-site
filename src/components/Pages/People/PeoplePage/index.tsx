import { useState } from 'react';
import { NavBar } from '../../../../components/NavBar';
import { SideBar } from '../../../../components/SideBar';

import {
    Title,
    TextTitle,
    Content,
    TextContainerRight,
    TextContainerLeft,
    DescriptionContainer,
    DescriptionImage,
    DescriptionText,
    HomeWorldContainer,
    FilmsContainer,
    PeoplePageContainer,
    SpeciesContainer,
    StarShipsContainer,
    VehiclesContainer,
    HomeWorldText,
    HomeWorldImage
} from './style'

import CharacterImg from '../../../../assets/CharacterImg.png'
import PlanetImg from '../../../../assets/PlanetImg.png'

import { GiBodyHeight, GiHairStrands, GiWeight } from 'react-icons/gi'
import { HiUser } from 'react-icons/hi'
import { FaBirthdayCake, FaRegEye } from 'react-icons/fa'
import { BsGenderMale } from 'react-icons/bs'

export const PeoplePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (

        <PeoplePageContainer>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <DescriptionContainer>
                <Title>
                    Luke Skywalker
                </Title>
                <Content>
                    <DescriptionImage src={CharacterImg} />
                    <TextContainerRight>
                        <TextTitle>
                            Characteristics
                        </TextTitle>
                        <DescriptionText>
                            <GiBodyHeight />
                            172 cm
                        </DescriptionText>
                        <DescriptionText>
                            <GiWeight />
                            72 kg
                        </DescriptionText>
                        <DescriptionText>
                            <GiHairStrands />
                            Blond
                        </DescriptionText>
                        <DescriptionText>
                            <HiUser />
                            Fair
                        </DescriptionText>
                        <DescriptionText>
                            <FaRegEye />
                            Blue
                        </DescriptionText>
                        <DescriptionText>
                            <FaBirthdayCake />
                            19 BBY
                        </DescriptionText>
                        <DescriptionText>
                            <BsGenderMale />
                            Male
                        </DescriptionText>
                    </TextContainerRight>
                </Content>
            </DescriptionContainer>

            <HomeWorldContainer>
                <Title>
                    Planet: Tatooine
                </Title>
                <Content>
                    <TextContainerLeft>
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
                    </TextContainerLeft>
                    <HomeWorldImage src={PlanetImg} />
                </Content>
            </HomeWorldContainer>

            <FilmsContainer>
                This is FilmsContainer
            </FilmsContainer>

            <SpeciesContainer>
                This is SpeciesContainer
            </SpeciesContainer>

            <VehiclesContainer>
                This is VehicleContainer
            </VehiclesContainer>

            <StarShipsContainer>
                This is StarShipsContainer
            </StarShipsContainer>
        </PeoplePageContainer>

    )
}