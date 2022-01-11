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
    url: string;
    data: data;
}
import { FilmsPageProps } from "..";

export const FilmStarShips = ({ data }: FilmsPageProps) => {
    const [starShipsUrl, setStarShipsUrl] = useState<StarShipsUrlProps[]>([])

    useEffect( async() => {
        var urlStrings = data?.starships
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
                        (response) => setStarShipsUrl(response)
                    )
            }
        }

        console.log(
            'data 🛸 :',
            starShipsUrl,
        )
        console.log(
            'data URLs : ',
            urlStrings,
        )
    }, []);
    return (
        <SectionBackground3>
            <Title>
                Star Ships
            </Title>
            <Content>
                <PlanetResidentsSectionDiv>
                    {starShipsUrl.map((starShipUrl) => (
                        <PlanetContainerText>
                            <TextTitle>
                                {starShipUrl?.data.name}
                            </TextTitle>
                            <DefaultTextP>
                                Model : {starShipUrl?.data.model}
                            </DefaultTextP>
                            <DefaultTextP>
                                Cost In Credits : {starShipUrl?.data.cost_in_credits}
                            </DefaultTextP>
                            <DefaultTextP>
                                Lenght : {starShipUrl?.data.lenght}
                            </DefaultTextP>
                            <DefaultTextP>
                                Max Atmosphering Speed: {starShipUrl?.data.max_atmosphering_speed}
                            </DefaultTextP>
                            <DefaultTextP>
                                Crew : {starShipUrl?.data.crew}
                            </DefaultTextP>
                            <DefaultTextP>
                                Passengers : {starShipUrl?.data.passengers}
                            </DefaultTextP>
                            <DefaultTextP>
                                Cargo Capacity: {starShipUrl?.data.cargo_capacity}
                            </DefaultTextP>
                            <DefaultTextP>
                                Consumables: {starShipUrl?.data.consumables}
                            </DefaultTextP>
                            <DefaultTextP>
                                Hyper Drive Rating: {starShipUrl?.data.hyperdrive_rating}
                            </DefaultTextP>
                            <DefaultTextP>
                                MGLT: {starShipUrl?.data.MGLT}
                            </DefaultTextP>
                            <DefaultTextP>
                                Star Ship Class: {starShipUrl?.data.starship_class}
                            </DefaultTextP>
                        </PlanetContainerText>
                    ))}
                </PlanetResidentsSectionDiv>
            </Content>
        </SectionBackground3>
    )
}