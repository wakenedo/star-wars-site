import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    //Default Styles
    SectionBackground3,
    Title,
    TextTitle,
    Content,
    DefaultSectionDiv,

} from '../../../../../styles/global';

import {
    StarShipsText,
    StarShipsBadge,
} from '../style'

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
                    Star Ships
                </Title>
                <Content>
                    <DefaultSectionDiv>
                        <StarShipsBadge>
                            <TextTitle>
                                {starShips?.name}
                            </TextTitle>
                            <StarShipsText>
                                Model : {starShips?.model}
                            </StarShipsText>
                            <StarShipsText>
                                Manufacturer : {starShips?.manufacturer}
                            </StarShipsText>
                            <StarShipsText>
                                Cost in credits : {starShips?.cost_in_credits}
                            </StarShipsText>
                            <StarShipsText>
                                Length : {starShips?.length} Meters
                            </StarShipsText>
                            <StarShipsText>
                                Max atmosphering speed : {starShips?.max_atmosphering_speed}
                            </StarShipsText>
                            <StarShipsText>
                                Crew : {starShips?.crew}
                            </StarShipsText>
                            <StarShipsText>
                                Passengers : {starShips?.passengers}
                            </StarShipsText>
                            <StarShipsText>
                                Cargo Capacity : {starShips?.cargo_capacity}
                            </StarShipsText>
                            <StarShipsText>
                                Consumables : {starShips?.consumables}
                            </StarShipsText>
                            <StarShipsText>
                                Hyperdrive Rating : {starShips?.hyperdrive_rating}
                            </StarShipsText>
                            <StarShipsText>
                                MGLT : {starShips?.MGLT}
                            </StarShipsText>
                            <StarShipsText>
                                Starship Class : {starShips?.starship_class}
                            </StarShipsText>
                        </StarShipsBadge>
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
                            <StarShipsBadge key={starShipsUrl?.data.name}>
                                <TextTitle>
                                    {starShipsUrl?.data.name}
                                </TextTitle>
                                <StarShipsText>
                                    Model : {starShipsUrl?.data.model}
                                </StarShipsText>
                                <StarShipsText>
                                    Manufacturer : {starShipsUrl?.data.manufacturer}
                                </StarShipsText>
                                <StarShipsText>
                                    Cost in credits : {starShipsUrl?.data.cost_in_credits}
                                </StarShipsText>
                                <StarShipsText>
                                    Length : {starShipsUrl?.data.length} Meters
                                </StarShipsText>
                                <StarShipsText>
                                    Max atmosphering speed : {starShipsUrl?.data.max_atmosphering_speed}
                                </StarShipsText>
                                <StarShipsText>
                                    Crew : {starShipsUrl?.data.crew}
                                </StarShipsText>
                                <StarShipsText>
                                    Passengers : {starShipsUrl?.data.passengers}
                                </StarShipsText>
                                <StarShipsText>
                                    Cargo Capacity : {starShipsUrl?.data.cargo_capacity}
                                </StarShipsText>
                                <StarShipsText>
                                    Consumables : {starShipsUrl?.data.consumables}
                                </StarShipsText>
                                <StarShipsText>
                                    Hyperdrive Rating : {starShipsUrl?.data.hyperdrive_rating}
                                </StarShipsText>
                                <StarShipsText>
                                    MGLT : {starShipsUrl?.data.MGLT}
                                </StarShipsText>
                                <StarShipsText>
                                    Starship Class : {starShipsUrl?.data.starship_class}
                                </StarShipsText>
                            </StarShipsBadge>

                        ))}
                    </DefaultSectionDiv>
                </Content>
            </SectionBackground3>
        )
    }

}