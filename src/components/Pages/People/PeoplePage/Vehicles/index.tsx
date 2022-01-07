import { useEffect, useState } from 'react';
import axios from 'axios';

import {
    //Default Styles
    SectionNoBackground,
    Title,
    TextTitle,
    Content,
    DefaultSectionDiv,

} from '../../../../../styles/global';

import {
    VehiclesText,
    VehiclesBadge,
} from '../style'

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
                    Vehicles
                </Title>
                <Content>
                    <DefaultSectionDiv>
                        <VehiclesBadge>
                            <TextTitle>
                                {vehicles?.name}
                            </TextTitle>
                            <VehiclesText>
                                Model : {vehicles?.model}
                            </VehiclesText>
                            <VehiclesText>
                                Manufacturer : {vehicles?.manufacturer}
                            </VehiclesText>
                            <VehiclesText>
                                Cost in Credits : {vehicles?.cost_in_credits}
                            </VehiclesText>
                            <VehiclesText>
                                Length : {vehicles?.length} Meters
                            </VehiclesText>
                            <VehiclesText>
                                Max Atmosphering Speed : {vehicles?.max_atmosphering_speed}
                            </VehiclesText>
                            <VehiclesText>
                                Crew : {vehicles?.crew}
                            </VehiclesText>
                            <VehiclesText>
                                Passengers : {vehicles?.passengers}
                            </VehiclesText>
                            <VehiclesText>
                                Cargo Capacity : {vehicles?.cargo_capacity}
                            </VehiclesText>
                            <VehiclesText>
                                Consumables : {vehicles?.consumables}
                            </VehiclesText>
                            <VehiclesText>
                                Vehicle Class : {vehicles?.vehicle_class}
                            </VehiclesText>
                        </VehiclesBadge>
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

                            <VehiclesBadge key={vehiclesUrl?.data.name}>
                                <TextTitle>
                                    {vehiclesUrl?.data.name}
                                </TextTitle>
                                <VehiclesText>
                                    Model : {vehiclesUrl?.data.model}
                                </VehiclesText>
                                <VehiclesText>
                                    Manufacturer : {vehiclesUrl?.data.manufacturer}
                                </VehiclesText>
                                <VehiclesText>
                                    Cost in Credits : {vehiclesUrl?.data.cost_in_credits}
                                </VehiclesText>
                                <VehiclesText>
                                    Length : {vehiclesUrl?.data.length} Meters
                                </VehiclesText>
                                <VehiclesText>
                                    Max Atmosphering Speed : {vehiclesUrl?.data.max_atmosphering_speed}
                                </VehiclesText>
                                <VehiclesText>
                                    Crew : {vehiclesUrl?.data.crew}
                                </VehiclesText>
                                <VehiclesText>
                                    Passengers : {vehiclesUrl?.data.passengers}
                                </VehiclesText>
                                <VehiclesText>
                                    Cargo Capacity : {vehiclesUrl?.data.cargo_capacity}
                                </VehiclesText>
                                <VehiclesText>
                                    Consumables : {vehiclesUrl?.data.consumables}
                                </VehiclesText>
                                <VehiclesText>
                                    Vehicle Class : {vehiclesUrl?.data.vehicle_class}
                                </VehiclesText>
                            </VehiclesBadge>

                        ))}
                    </DefaultSectionDiv>
                </Content>
            </SectionNoBackground>
        )
    }
}