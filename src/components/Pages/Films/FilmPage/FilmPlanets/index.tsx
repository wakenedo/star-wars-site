import { useEffect, useState } from "react"
import axios from "axios";

import {
    Content,
    Title,
    SectionNoBackground,
    TextTitle,
    PlanetContainerText,
    PlanetResidentsSectionDiv,
    DefaultTextP,
} from "../../../../../styles/global"

import { FilmsPageProps } from "..";

interface PlanetsUrlProps {
    name?: string;
    climate?: string;
    diameter?: string;
    gravity?: string;
    orbital_period?: string;
    population?: string;
    rotation_period?: string;
    surface_water?: string;
    terrain?: string;
    url: string;
    data: data;
}

export const FilmPlanets = ({ data }: FilmsPageProps) => {
    const [planetsUrl, setPlanetsUrl] = useState<PlanetsUrlProps[]>([])

    useEffect(() => {
        var urlStrings = data?.planets
        var arrayLenght = urlStrings.length

        for (var i = 0; i < arrayLenght; i++) {
            for (var i = 0; i < arrayLenght; i++) {
                axios
                    .all(
                        urlStrings.map((urlStrings) =>
                            axios.get(urlStrings)
                        )
                    )
                    .then(
                        (response) => setPlanetsUrl(response)
                    )
            }
        }

        console.log(
            'data 🌎  planetsUrl :',
            planetsUrl,
        )
        console.log(
            'data URLs : ',
            urlStrings,
        )
    }, []);
    return (
        <SectionNoBackground>
            <Title>
                Planets
            </Title>
            <Content>
                <PlanetResidentsSectionDiv>
                    {planetsUrl.map((planetsUrl) => (
                        <PlanetContainerText>
                            <TextTitle>
                                {planetsUrl?.data.name}
                            </TextTitle>
                            <DefaultTextP>
                                Climate : {planetsUrl?.data.climate}
                            </DefaultTextP>
                            <DefaultTextP>
                                Diameter : {planetsUrl?.data.diameter} Km
                            </DefaultTextP>
                            <DefaultTextP>
                                Gravity : {planetsUrl?.data.gravity}
                            </DefaultTextP>
                            <DefaultTextP>
                                Orbital Period : {planetsUrl?.data.orbital_period} Days
                            </DefaultTextP>
                            <DefaultTextP>
                                Population : {planetsUrl?.data.population}
                            </DefaultTextP>
                            <DefaultTextP>
                                Rotation Period : {planetsUrl?.data.rotation_period} Hours
                            </DefaultTextP>
                            <DefaultTextP>
                                Surface Water : {planetsUrl?.data.surface_water} %
                            </DefaultTextP>
                            <DefaultTextP>
                                Terrain : {planetsUrl?.data.terrain}
                            </DefaultTextP>
                        </PlanetContainerText>
                    ))}

                </PlanetResidentsSectionDiv>
            </Content>
        </SectionNoBackground>

    )
}