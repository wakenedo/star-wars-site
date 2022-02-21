import { useEffect, useState } from "react"

import axios from "axios"

import {
    SectionNoBackground,
    Title,
    Content,
    TextTitle,
    SmallDefaultTextP,
} from "../../../../../styles/global"

import { 
    TextContainerB 
} from "../../../People/PeoplePage/style"

interface HomeWorldProps {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
}

import { SpeciesPageProps } from ".."

export const HomeWorld = ({ data }: SpeciesPageProps) => {
    const [homeWorld, setHomeWorld] = useState<HomeWorldProps>()

    useEffect(() => {
        axios
            .get(
                `${data.homeworld}`
            )
            .then(response => {
                setHomeWorld(response.data)
            })

        console.log(
            'data 🌎 homeWorld : ',
            homeWorld,
            data.homeworld
        )
    }, [])

    return (
        <SectionNoBackground>
            <Title>
                Home World
            </Title>
            <Content>
                <TextContainerB>
                    <TextTitle>
                        {homeWorld?.name}
                    </TextTitle>
                    <SmallDefaultTextP>
                        Rotation Period : {homeWorld?.rotation_period} Hours
                    </SmallDefaultTextP>
                    <SmallDefaultTextP>
                        Orbital Period : {homeWorld?.orbital_period} Days
                    </SmallDefaultTextP>
                    <SmallDefaultTextP>
                        Diameter : {homeWorld?.diameter} km
                    </SmallDefaultTextP>
                    <SmallDefaultTextP>
                        Climate : {homeWorld?.climate}
                    </SmallDefaultTextP>
                    <SmallDefaultTextP>
                        Gravity : {homeWorld?.gravity}
                    </SmallDefaultTextP>
                    <SmallDefaultTextP>
                        Terrain : {homeWorld?.terrain}
                    </SmallDefaultTextP>
                    <SmallDefaultTextP>
                        Surface Water : {homeWorld?.surface_water} %
                    </SmallDefaultTextP>
                    <SmallDefaultTextP>
                        Population : {homeWorld?.population} Habitants
                    </SmallDefaultTextP>
                </TextContainerB>
            </Content>
        </SectionNoBackground>
    )
}