import { useEffect, useState } from 'react';
import axios from 'axios';

import {
    //Default Styles
    SectionNoBackground,
    Title,
    TextTitle,
    Content,
    DefaultSectionDiv,
    DefaultTextP,
    PlanetContainerText,
} from '../../../../../styles/global';

import { PeoplePageProps } from '..';

interface VehiclesProps {
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
}
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

export const Vehicles = ({ data }: PeoplePageProps) => {
    const [vehicles, setVehicles] = useState<VehiclesProps>();
    const [vehiclesUrl, setVehiclesUrl] = useState<VehiclesUrlProps[]>([]);

    useEffect(() => {
        axios
            .get(
                `${data?.vehicles}`
            )
            .then(response => {
                setVehicles(response.data)
            })

        console.log(
            'data 🚲 vehicles :',
            vehicles,
        )
    }, []);

    useEffect(async () => {
        var urlStrings = data?.vehicles
        var arrayLength = urlStrings.length

        for (var i = 0; i < arrayLength; i++) {
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

        axios
            .get(
                `${urlStrings}`
            )
            .then(response => {
                setVehiclesUrl([response.data])
            })
        console.log(
            'This is vehiclesUrl 🚲 response Data :',
            vehiclesUrl,
        )
        console.log(
            'data URLs :',
            urlStrings,
        )
    }, []);

    if (vehicles) {
        return (
            <SectionNoBackground>
                <Title>
                    Vehicle
                </Title>
                <Content>
                    <DefaultSectionDiv>
                        <PlanetContainerText>
                            <TextTitle>
                                {vehicles?.name}
                            </TextTitle>
                            <DefaultTextP>
                                Model : {vehicles?.model}
                            </DefaultTextP>
                            <DefaultTextP>
                                Manufacturer : {vehicles?.manufacturer}
                            </DefaultTextP>
                            <DefaultTextP>
                                Cost in Credits : {vehicles?.cost_in_credits}
                            </DefaultTextP>
                            <DefaultTextP>
                                Length : {vehicles?.length} Meters
                            </DefaultTextP>
                            <DefaultTextP>
                                Max Atmosphering Speed : {vehicles?.max_atmosphering_speed}
                            </DefaultTextP>
                            <DefaultTextP>
                                Crew : {vehicles?.crew}
                            </DefaultTextP>
                            <DefaultTextP>
                                Passengers : {vehicles?.passengers}
                            </DefaultTextP>
                            <DefaultTextP>
                                Cargo Capacity : {vehicles?.cargo_capacity}
                            </DefaultTextP>
                            <DefaultTextP>
                                Consumables : {vehicles?.consumables}
                            </DefaultTextP>
                            <DefaultTextP>
                                Vehicle Class : {vehicles?.vehicle_class}
                            </DefaultTextP>
                        </PlanetContainerText>
                    </DefaultSectionDiv>
                </Content>
            </SectionNoBackground>
        )
    }
    else {
        return (
            <SectionNoBackground>
                <Title>
                    Vehicles
                </Title>
                <Content>
                    <DefaultSectionDiv>
                        {vehiclesUrl.map((vehiclesUrl) => (

                            <PlanetContainerText key={vehiclesUrl?.data.name}>
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
                    </DefaultSectionDiv>
                </Content>
            </SectionNoBackground>
        )
    }
}