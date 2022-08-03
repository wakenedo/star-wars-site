import { useEffect, useState } from 'react';
import axios from 'axios';

import {
    //Default Styles
    Content,
    PlanetResidentsSectionDiv,
    SectionNoBackground,
    Title,
    ResidentsBadge,
    PlanetResidentsBadgeTextContainer,
    PlanetResidentsBadgeText,
    PlanetsResidentsBadgeContainerImage,
    PlanetResidentsBadgeImage,
} from "../../../../styles/global"

import { VehiclesPageDataProps, VehiclesPageProps } from '..';

import CharacterImg from '../../../../assets/CharacterImg.png'

interface PilotsProps {
    name: string;
}
interface PilotsUrlProps {
    name: string;
    data: VehiclesPageDataProps;
}

export const Pilots = ({ data }: VehiclesPageProps) => {
    const [pilots, setPilots] = useState<PilotsProps>()
    const [pilotsUrl, setPilotsUrl] = useState<PilotsUrlProps[]>([])

    useEffect(() => {
        if (!data || !data.pilots) return

        if (typeof data.pilots === 'string') {
            fetchSinglePilot(data.pilots)
        } else {
            fetchMultiplePilot(data.pilots as string[])
        }

    }, [data])

    const fetchSinglePilot = (url: string) => {
        axios
            .get(
                `${url}`
            )
            .then(response => {
                setPilots(response.data)
            })

        console.log(
            'data 😋 Pilots :',
            pilots,
        )
    };

    const fetchMultiplePilot = (urlStrings: string[]) => {
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
                        let _response: PilotsUrlProps[] = []

                        response.forEach(res => {
                            _response.push(res.data)
                        })

                        setPilotsUrl(_response)
                    }
                )
        }
    };

    if (pilots) {
        return (
            <SectionNoBackground>
                <Title>
                    Pilots
                </Title>
                <Content>
                    <PlanetResidentsSectionDiv>
                        <ResidentsBadge>
                            <PlanetsResidentsBadgeContainerImage>
                                <PlanetResidentsBadgeImage src={CharacterImg} />
                            </PlanetsResidentsBadgeContainerImage>
                            <PlanetResidentsBadgeTextContainer>
                                <PlanetResidentsBadgeText>
                                    {pilots?.name}
                                </PlanetResidentsBadgeText>
                            </PlanetResidentsBadgeTextContainer>
                        </ResidentsBadge>
                    </PlanetResidentsSectionDiv>
                </Content>
            </SectionNoBackground>
        )
    } else {
        return (
            <SectionNoBackground>
                <Title>
                    Pilots
                </Title>
                <Content>
                    <PlanetResidentsSectionDiv>
                        {pilotsUrl.map((pilotsUrl) => (
                            <ResidentsBadge>
                                <PlanetsResidentsBadgeContainerImage>
                                    <PlanetResidentsBadgeImage src={CharacterImg} />
                                </PlanetsResidentsBadgeContainerImage>
                                <PlanetResidentsBadgeTextContainer key={pilotsUrl?.name}>
                                    <PlanetResidentsBadgeText key={pilotsUrl?.name}>
                                        {pilotsUrl?.name}
                                    </PlanetResidentsBadgeText>
                                </PlanetResidentsBadgeTextContainer>
                            </ResidentsBadge>
                        ))}
                    </PlanetResidentsSectionDiv>
                </Content>
            </SectionNoBackground>
        )
    }

}