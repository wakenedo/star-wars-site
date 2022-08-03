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

} from '../../../../styles/global';

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
}



export const StarShips = ({ data }: PeoplePageProps) => {
    const [starShips, setStarShips] = useState<StarShipsProps>();
    const [starShipsUrl, setStarShipsUrl] = useState<StarShipsUrlProps[]>([])

    useEffect(() => {
        if (!data || !data.starships) return

        if (typeof data.starships === 'string') {
            fetchSingleStarship(data.starships)
        } else {
            fetchMultipleStarship(data.starships as string[])
        }

    }, [data])


    const fetchSingleStarship = (url: string) => {
        axios
            .get(
                `${url}`
            )
            .then(response => {
                setStarShips(response.data)
            })
        console.log(
            'data 🚀 starShips :',
            starShips,
            data?.starships
        )
    };

    const fetchMultipleStarship = (urlStrings: string[]) => {

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
                        let _response: StarShipsUrlProps[] = []

                        response.forEach(res => {
                            _response.push(res.data)
                        })

                        setStarShipsUrl(_response)
                    }
                )
        }
    }

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
                        {starShipsUrl.map((starShipsUrl) => {
                            return (
                                <PlanetContainerText key={starShipsUrl.name}>
                                    <TextTitle>
                                        {starShipsUrl.name}
                                    </TextTitle>
                                    <DefaultTextP>
                                        Model : {starShipsUrl?.model}
                                    </DefaultTextP>
                                    <DefaultTextP>
                                        Manufacturer : {starShipsUrl?.manufacturer}
                                    </DefaultTextP>
                                    <DefaultTextP>
                                        Cost in credits : {starShipsUrl?.cost_in_credits}
                                    </DefaultTextP>
                                    <DefaultTextP>
                                        Length : {starShipsUrl?.length} Meters
                                    </DefaultTextP>
                                    <DefaultTextP>
                                        Max atmosphering speed : {starShipsUrl?.max_atmosphering_speed}
                                    </DefaultTextP>
                                    <DefaultTextP>
                                        Crew : {starShipsUrl?.crew}
                                    </DefaultTextP>
                                    <DefaultTextP>
                                        Passengers : {starShipsUrl?.passengers}
                                    </DefaultTextP>
                                    <DefaultTextP>
                                        Cargo Capacity : {starShipsUrl?.cargo_capacity}
                                    </DefaultTextP>
                                    <DefaultTextP>
                                        Consumables : {starShipsUrl?.consumables}
                                    </DefaultTextP>
                                    <DefaultTextP>
                                        Hyperdrive Rating : {starShipsUrl?.hyperdrive_rating}
                                    </DefaultTextP>
                                    <DefaultTextP>
                                        MGLT : {starShipsUrl?.MGLT}
                                    </DefaultTextP>
                                    <DefaultTextP>
                                        Starship Class : {starShipsUrl?.starship_class}
                                    </DefaultTextP>
                                </PlanetContainerText>

                            )
                        })}
                    </DefaultSectionDiv>
                </Content>
            </SectionBackground3>
        )
    }

}