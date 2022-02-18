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
    data: FilmsPageDataProps
}


import { FilmsPageDataProps, FilmsPageProps } from "..";

export const FilmVehicles = ({ data }: FilmsPageProps) => {
    const [vehiclesUrl, setVehiclesUrl] = useState<VehiclesUrlProps[]>([])

    useEffect(() => {
        if (!data || !data.vehicles) return

        if (typeof data.vehicles === 'string') {
            return
        } else {
            fetchMultipleVehicles(data.vehicles)
        }
    }, [data])

    const fetchMultipleVehicles = (urlStrings: string[]) => {
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
                        let _response: VehiclesUrlProps[] = []

                        response.forEach(res => {
                            _response.push(res.data)
                        })

                        setVehiclesUrl(_response)
                    }
                )
        }

        console.log(
            'data 🚲 :',
            vehiclesUrl,
        )
        console.log(
            'data URLs : ',
            urlStrings,
        )
    };
    return (
        <SectionNoBackground>
            <Title>
                Vehicles
            </Title>
            <Content>
                <PlanetResidentsSectionDiv>
                    {vehiclesUrl.map((vehiclesUrl) => {
                        return (
                        <PlanetContainerText>
                            <TextTitle>
                                {vehiclesUrl?.name}
                            </TextTitle>
                            <DefaultTextP>
                                Model : {vehiclesUrl?.model}
                            </DefaultTextP>
                            <DefaultTextP>
                                Manufacturer : {vehiclesUrl?.manufacturer}
                            </DefaultTextP>
                            <DefaultTextP>
                                Cost in Credits : {vehiclesUrl?.cost_in_credits}
                            </DefaultTextP>
                            <DefaultTextP>
                                Length : {vehiclesUrl?.length} Meters
                            </DefaultTextP>
                            <DefaultTextP>
                                Max Atmosphering Speed : {vehiclesUrl?.max_atmosphering_speed}
                            </DefaultTextP>
                            <DefaultTextP>
                                Crew : {vehiclesUrl?.crew}
                            </DefaultTextP>
                            <DefaultTextP>
                                Passengers : {vehiclesUrl?.passengers}
                            </DefaultTextP>
                            <DefaultTextP>
                                Cargo Capacity : {vehiclesUrl?.cargo_capacity}
                            </DefaultTextP>
                            <DefaultTextP>
                                Consumables : {vehiclesUrl?.consumables}
                            </DefaultTextP>
                            <DefaultTextP>
                                Vehicle Class : {vehiclesUrl?.vehicle_class}
                            </DefaultTextP>
                        </PlanetContainerText>
                    )})}
                </PlanetResidentsSectionDiv>
            </Content>
        </SectionNoBackground>

    )
}