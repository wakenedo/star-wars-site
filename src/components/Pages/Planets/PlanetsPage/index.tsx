import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from "../../../../services/api";

import { NavBar } from '../../../../components/NavBar';
import { SideBar } from '../../../../components/SideBar';

import isLoadingSVG from '../../../../assets/Loading/Spinner-1s-200px.svg';

import PlanetsImg from '../../../../assets/PlanetImg.png'


import {
    FilmsBadge4,
    FilmsBadge5,
    FilmsBadge6,
} from '../../../PagesFilmBadge';

import {
    Title,
    TextTitle,
    Content,

    IsLoadingImg,
} from '../../../../styles/global';

import {
    PlanetBadgeTextContainer,
    PlanetBadgeTextP,
    DescriptionContainer,
    DescriptionImage,
    PlanetsPageContainer,
} from './style'




interface PlanetProps {
    name: string;
    climate: string;
    diameter: string;
    gravity: string;
    orbital_period: string;
    population: string;
    rotation_period: string;
    surface_water: string;
    terrain: string;
}




export const PlanetsPage = () => {
    const [loading, setLoading] = useState(false)
    const [planets, setPlanets] = useState<PlanetProps>()
    

    const { PlanetsUrl } = useParams()

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!PlanetsUrl) return
        setLoading(true)
        api
            .get(
                `planets/${PlanetsUrl}`

            )
            .then(response => {
                setLoading(false)
                setPlanets(response.data)
                


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
        <PlanetsPageContainer>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <DescriptionContainer key={planets?.name}>
                <Title>
                    Planets : {planets?.name}
                </Title>
                <Content>
                    <DescriptionImage src={PlanetsImg} />
                    <PlanetBadgeTextContainer>
                        <TextTitle>
                            Characteristics
                        </TextTitle>
                        <PlanetBadgeTextP>
                            Rotation Period : {planets?.rotation_period} Hours
                        </PlanetBadgeTextP>
                        <PlanetBadgeTextP>
                            Orbital Period : {planets?.orbital_period} Days
                        </PlanetBadgeTextP>
                        <PlanetBadgeTextP>
                            Diameter : {planets?.diameter} km
                        </PlanetBadgeTextP>
                        <PlanetBadgeTextP>
                            Climate : {planets?.climate}
                        </PlanetBadgeTextP>
                        <PlanetBadgeTextP>
                            Gravity : {planets?.gravity}
                        </PlanetBadgeTextP>
                        <PlanetBadgeTextP>
                            Terrain : {planets?.terrain}
                        </PlanetBadgeTextP>
                        <PlanetBadgeTextP>
                            Surface Water : {planets?.surface_water} %
                        </PlanetBadgeTextP>
                        <PlanetBadgeTextP>
                            Population : {planets?.population}
                        </PlanetBadgeTextP>
                    </PlanetBadgeTextContainer>
                </Content>
            </DescriptionContainer>
        </PlanetsPageContainer>
    )
}