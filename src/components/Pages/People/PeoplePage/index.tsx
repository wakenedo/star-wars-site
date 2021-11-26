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
    HomeWorldContent,
    FilmsContainer,
    PeoplePageContainer,
    SpeciesContainer,
    StarShipsContainer,
    VehiclesContainer,
    HomeWorldText,
    HomeWorldImage,
    TextContainerLarge,
    SpeciesContent,
    SpeciesText
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
                    Character : Luke Skywalker
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
                <HomeWorldContent>
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
            </FilmsContainer>
            <StarShipsContainer>
                <Title>
                    Star Ships :
                </Title>
                
            </StarShipsContainer>
            <VehiclesContainer>
                <Title>
                    Vehicles :
                </Title>
            </VehiclesContainer>
        </PeoplePageContainer>
    )
}