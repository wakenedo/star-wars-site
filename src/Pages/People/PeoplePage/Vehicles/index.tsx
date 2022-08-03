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
} from '../../../../styles/global';

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
}

export const Vehicles = ({ data }: PeoplePageProps) => {
    const [vehicles, setVehicles] = useState<VehiclesProps>();
    const [vehiclesUrl, setVehiclesUrl] = useState<VehiclesUrlProps[]>([]);

    useEffect(() => {
        if (!data || !data.vehicles) return

        if (typeof data.vehicles === 'string') {
            fetchSingleVehicle(data.vehicles)
        } else {
            fetchMultipleVehicle(data.vehicles as string[])
        }

    }, [data])

    const fetchSingleVehicle = (url: string) => {
        axios
            .get(
                `${url}`
            )
            .then(response => {
                setVehicles(response.data)
            })

        console.log(
            'data 🚲 vehicles :',
            vehicles,
            data?.vehicles
        )
    };

    const fetchMultipleVehicle = (urlStrings: string[]) => {

        var arrayLength = urlStrings.length

        for (var i = 0; i < arrayLength; i++) {
            if (typeof urlStrings === 'string') return

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
    };

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
                        {vehiclesUrl.map((vehiclesUrl) => {
                            console.log("VehiclesUrl", vehiclesUrl)
                            return (
                                <PlanetContainerText key={vehiclesUrl?.name}>
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

                            )
                        })}
                    </DefaultSectionDiv>
                </Content>
            </SectionNoBackground>
        )
    }
}