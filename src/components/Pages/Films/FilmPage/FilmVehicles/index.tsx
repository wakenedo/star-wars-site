import { useEffect, useState } from "react";
import axios from "axios";


import {
    Content,
    Title,
    SectionNoBackground,
    PlanetContainerText,
    PlanetResidentsSectionDiv,
    DefaultTextP,
    TextTitle,
} from "../../../../../styles/global"

interface VehiclesUrlProps {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    url: string;
    data: data;
}


import { FilmsPageProps } from "..";

export const FilmVehicles = ({ data }: FilmsPageProps) => {
    const [vehiclesUrl, setVehiclesUrl] = useState<VehiclesUrlProps[]>([])

    useEffect(async() => {
        var urlStrings = data?.vehicles
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
                        (response) => setVehiclesUrl(response)
                    )
            }
        }

        console.log(
            'data 🚲 :',
            vehiclesUrl,
        )
        console.log(
            'data URLs : ',
            urlStrings,
        )
    }, []);
    return (
        <SectionNoBackground>
            <Title>
                Vehicles
            </Title>
            <Content>
                <PlanetResidentsSectionDiv>
                    {vehiclesUrl.map((vehiclesUrl) => (
                        <PlanetContainerText>
                            <TextTitle>
                                {vehiclesUrl?.data.name}
                            </TextTitle>
                            <DefaultTextP>
                                Model : {vehiclesUrl?.data.model}
                            </DefaultTextP>
                            <DefaultTextP>
                                Manufacturer : {vehiclesUrl?.data.manufacturer}
                            </DefaultTextP>
                            <DefaultTextP>
                                Cost in Credits : {vehiclesUrl?.data.cost_in_credits}
                            </DefaultTextP>
                            <DefaultTextP>
                                Length : {vehiclesUrl?.data.length} Meters
                            </DefaultTextP>
                            <DefaultTextP>
                                Max Atmosphering Speed : {vehiclesUrl?.data.max_atmosphering_speed}
                            </DefaultTextP>
                            <DefaultTextP>
                                Crew : {vehiclesUrl?.data.crew}
                            </DefaultTextP>
                            <DefaultTextP>
                                Passengers : {vehiclesUrl?.data.passengers}
                            </DefaultTextP>
                            <DefaultTextP>
                                Cargo Capacity : {vehiclesUrl?.data.cargo_capacity}
                            </DefaultTextP>
                            <DefaultTextP>
                                Consumables : {vehiclesUrl?.data.consumables}
                            </DefaultTextP>
                            <DefaultTextP>
                                Vehicle Class : {vehiclesUrl?.data.vehicle_class}
                            </DefaultTextP>
                        </PlanetContainerText>
                    ))}
                </PlanetResidentsSectionDiv>
            </Content>
        </SectionNoBackground>

    )
}