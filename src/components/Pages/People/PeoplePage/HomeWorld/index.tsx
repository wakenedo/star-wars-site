import { useEffect, useState } from 'react';
import axios from 'axios';

import {
    //Default Styles
    SectionNoBackground,
    Title,
    Content,
    SmallDefaultTextP,
    TextTitle,

} from '../../../../../styles/global';

import {
    TextContainerB
} from '../style';

import { PeoplePageProps } from '..';

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


export const HomeWorld = ({ data }: PeoplePageProps) => {
    const [homeWorld, setHomeWorld] = useState<HomeWorldProps>()

    useEffect(() => {

        axios
            .get(
                `${data?.homeworld}`
            )
            .then(response => {
                setHomeWorld(response.data)
            })

        console.log(
            'This is homeWorld 🌎 Data : ',
            homeWorld,
            'This is homeworld 🌎 URL : ',
            data?.homeworld,
        )

    }, []);

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

