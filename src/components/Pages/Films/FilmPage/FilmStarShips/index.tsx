import { useEffect, useState } from "react";

import axios from "axios";

import {
    Content,
    Title,
    SectionBackground3,
    PlanetResidentsSectionDiv,
    PlanetContainerText,
    TextTitle,
    DefaultTextP,
} from "../../../../../styles/global"

import { FilmsPageDataProps, FilmsPageProps } from "..";

interface StarShipsUrlProps {
    name?: string;
    model?: string;
    manufacturer?: string;
    cost_in_credits?: string;
    lenght?: string;
    max_atmosphering_speed?: string;
    crew?: string;
    passengers?: string;
    cargo_capacity?: string;
    consumables?: string;
    hyperdrive_rating?: string;
    MGLT?: string;
    starship_class?: string;
    data: FilmsPageDataProps
}

export const FilmStarShips = ({ data }: FilmsPageProps) => {
    const [starShipsUrl, setStarShipsUrl] = useState<StarShipsUrlProps[]>([])

    useEffect(() => {
        if (!data || !data.starships) return

        if (typeof data.starships === 'string') {
            return
        } else {
            fetchMultipleStarShips(data.starships as string[])
        }
    }, [data])

    const fetchMultipleStarShips = (urlStrings: string[]) => {
        var arrayLength = urlStrings.length


        for (var i = 0; i < arrayLength; i++) {
            axios
                .all(
                    urlStrings.map((urlStrings) =>
                        axios.get(urlStrings)
                    )
                )
                .then(
                    (response) => {
                        let _response: StarShipsUrlProps[] = []

                        response.forEach(res => {
                            _response.push(res.data)
                        })

                        setStarShipsUrl(_response)
                    }
                )
        }


        console.log(
            'data 🛸 :',
            starShipsUrl,
        )
        console.log(
            'data URLs : ',
            urlStrings,
        )
    };
    return (
        <SectionBackground3>
            <Title>
                Star Ships
            </Title>
            <Content>
                <PlanetResidentsSectionDiv>
                    {starShipsUrl.map((starShipUrl) => {
                        return (
                            <PlanetContainerText key={starShipUrl?.name}>
                                <TextTitle>
                                    {starShipUrl?.name}
                                </TextTitle>
                                <DefaultTextP>
                                    Model : {starShipUrl?.model}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Cost In Credits : {starShipUrl?.cost_in_credits}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Lenght : {starShipUrl?.lenght}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Max Atmosphering Speed: {starShipUrl?.max_atmosphering_speed}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Crew : {starShipUrl?.crew}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Passengers : {starShipUrl?.passengers}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Cargo Capacity: {starShipUrl?.cargo_capacity}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Consumables: {starShipUrl?.consumables}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Hyper Drive Rating: {starShipUrl?.hyperdrive_rating}
                                </DefaultTextP>
                                <DefaultTextP>
                                    MGLT: {starShipUrl?.MGLT}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Star Ship Class: {starShipUrl?.starship_class}
                                </DefaultTextP>
                            </PlanetContainerText>
                        )
                    })}
                </PlanetResidentsSectionDiv>
            </Content>
        </SectionBackground3>
    )
}