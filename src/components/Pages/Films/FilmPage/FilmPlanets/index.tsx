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
}

export const FilmPlanets = ({ data }: FilmsPageProps) => {
    const [planetsUrl, setPlanetsUrl] = useState<PlanetsUrlProps[]>([])

    useEffect(() => {
        if (!data || !data.planets) return

        if (typeof data.planets === 'string') {
            return
        } else {
            fetchMultiplePlanets(data.planets as string[])
        }

    }, [data])

    const fetchMultiplePlanets = (urlStrings: string[]) => {
        var arrayLenght = urlStrings.length


        for (var i = 0; i < arrayLenght; i++) {
            axios
                .all(
                    urlStrings.map((urlStrings) =>
                        axios.get(urlStrings)
                    )
                )
                .then(
                    (response) => {
                        let _response: PlanetsUrlProps[] = []

                        response.forEach(res => {
                            _response.push(res.data)
                        })

                        setPlanetsUrl(_response)
                    }
                )
        }


        console.log(
            'data 🌎  planetsUrl :',
            planetsUrl,
        )
        console.log(
            'data URLs : ',
            urlStrings,
        )
    }
    return (
        <SectionNoBackground>
            <Title>
                Planets
            </Title>
            <Content>
                <PlanetResidentsSectionDiv>
                    {planetsUrl.map((planetsUrl) => {
                        return (
                        <PlanetContainerText>
                            <TextTitle>
                                {planetsUrl?.name}
                            </TextTitle>
                            <DefaultTextP>
                                Climate : {planetsUrl?.climate}
                            </DefaultTextP>
                            <DefaultTextP>
                                Diameter : {planetsUrl?.diameter} Km
                            </DefaultTextP>
                            <DefaultTextP>
                                Gravity : {planetsUrl?.gravity}
                            </DefaultTextP>
                            <DefaultTextP>
                                Orbital Period : {planetsUrl?.orbital_period} Days
                            </DefaultTextP>
                            <DefaultTextP>
                                Population : {planetsUrl?.population}
                            </DefaultTextP>
                            <DefaultTextP>
                                Rotation Period : {planetsUrl?.rotation_period} Hours
                            </DefaultTextP>
                            <DefaultTextP>
                                Surface Water : {planetsUrl?.surface_water} %
                            </DefaultTextP>
                            <DefaultTextP>
                                Terrain : {planetsUrl?.terrain}
                            </DefaultTextP>
                        </PlanetContainerText>
                    )})}

                </PlanetResidentsSectionDiv>
            </Content>
        </SectionNoBackground>

    )
}