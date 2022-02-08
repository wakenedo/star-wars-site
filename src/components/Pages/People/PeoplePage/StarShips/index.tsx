import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    //Default Styles
    SectionBackground3,
    Title,
    TextTitle,
    Content,
    DefaultSectionDiv,
    DefaultTextP,
    PlanetContainerText,

} from '../../../../../styles/global';

import { PeoplePageProps } from '..';

interface StarShipsProps {
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
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    url: string;
}

interface StarShipsUrlProps {
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
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    url: string;
    data: data;
}



export const StarShips = ({ data }: PeoplePageProps) => {
    const [starShips, setStarShips] = useState<StarShipsProps>();
    const [starShipsUrl, setStarShipsUrl] = useState<StarShipsUrlProps[]>([])

    useEffect(() => {
        axios
            .get(
                `${data?.starships}`
            )
            .then(response => {
                setStarShips(response.data)
            })
        console.log(
            'data 🚀 starShips :',
            starShips,
        )
    }, []);

    useEffect(async () => {
        var urlStrings = data?.starships
        var arrayLenght = urlStrings.length

        for (var i = 0; i < arrayLenght; i++) {
            axios
                .all(
                    urlStrings.map(
                        (urlStrings) =>
                            axios
                                .get(urlStrings)
                    )
                )

                .then(
                    (response) => setStarShipsUrl(response)
                )
        }

        axios
            .get(
                `${urlStrings}`
            )
            .then(response => {
                setStarShipsUrl([response.data])
            })
        console.log(
            'This is starShipsUrl 🚀 response Data :',
            starShipsUrl,
        )
        console.log(
            'data 🚀 URLs :',
            urlStrings,

        )
    }, []);

    if (starShips) {
        return (
            <SectionBackground3>
                <Title>
                    Star Ship
                </Title>
                <Content>
                    <DefaultSectionDiv>
                        <PlanetContainerText>
                            <TextTitle>
                                {starShips?.name}
                            </TextTitle>
                            <DefaultTextP>
                                Model : {starShips?.model}
                            </DefaultTextP>
                            <DefaultTextP>
                                Manufacturer : {starShips?.manufacturer}
                            </DefaultTextP>
                            <DefaultTextP>
                                Cost in credits : {starShips?.cost_in_credits}
                            </DefaultTextP>
                            <DefaultTextP>
                                Length : {starShips?.length} Meters
                            </DefaultTextP>
                            <DefaultTextP>
                                Max atmosphering speed : {starShips?.max_atmosphering_speed}
                            </DefaultTextP>
                            <DefaultTextP>
                                Crew : {starShips?.crew}
                            </DefaultTextP>
                            <DefaultTextP>
                                Passengers : {starShips?.passengers}
                            </DefaultTextP>
                            <DefaultTextP>
                                Cargo Capacity : {starShips?.cargo_capacity}
                            </DefaultTextP>
                            <DefaultTextP>
                                Consumables : {starShips?.consumables}
                            </DefaultTextP>
                            <DefaultTextP>
                                Hyperdrive Rating : {starShips?.hyperdrive_rating}
                            </DefaultTextP>
                            <DefaultTextP>
                                MGLT : {starShips?.MGLT}
                            </DefaultTextP>
                            <DefaultTextP>
                                Starship Class : {starShips?.starship_class}
                            </DefaultTextP>
                        </PlanetContainerText>
                    </DefaultSectionDiv>
                </Content>
            </SectionBackground3>
        )
    }
    else {
        return (
            <SectionBackground3>
                <Title>
                    Star Ships
                </Title>
                <Content>
                    <DefaultSectionDiv>
                        {starShipsUrl.map((starShipsUrl) => (
                            <PlanetContainerText key={starShipsUrl?.data.name}>
                                <TextTitle>
                                    {starShipsUrl?.data.name}
                                </TextTitle>
                                <DefaultTextP>
                                    Model : {starShipsUrl?.data.model}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Manufacturer : {starShipsUrl?.data.manufacturer}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Cost in credits : {starShipsUrl?.data.cost_in_credits}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Length : {starShipsUrl?.data.length} Meters
                                </DefaultTextP>
                                <DefaultTextP>
                                    Max atmosphering speed : {starShipsUrl?.data.max_atmosphering_speed}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Crew : {starShipsUrl?.data.crew}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Passengers : {starShipsUrl?.data.passengers}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Cargo Capacity : {starShipsUrl?.data.cargo_capacity}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Consumables : {starShipsUrl?.data.consumables}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Hyperdrive Rating : {starShipsUrl?.data.hyperdrive_rating}
                                </DefaultTextP>
                                <DefaultTextP>
                                    MGLT : {starShipsUrl?.data.MGLT}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Starship Class : {starShipsUrl?.data.starship_class}
                                </DefaultTextP>
                            </PlanetContainerText>

                        ))}
                    </DefaultSectionDiv>
                </Content>
            </SectionBackground3>
        )
    }

}