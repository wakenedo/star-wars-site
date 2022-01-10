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
} from "../../../../../styles/global"

import { VehiclesPageProps } from '..';

import CharacterImg from '../../../../../assets/CharacterImg.png'

interface PilotsProps {
    name: string;
}
interface PilotsUrlProps {
    name: string;
    url: string;
    data: data;
}

export const Pilots = ({ data }: VehiclesPageProps) => {
    const [pilots, setPilots] = useState<PilotsProps>()
    const [pilotsUrl, setPilotsUrl] = useState<PilotsUrlProps[]>([])

    useEffect(() => {
        axios
            .get(
                `${data?.pilots}`
            )
            .then(response => {
                setPilots(response.data)
            })

        console.log(
            'data 😋 Pilots :',
            pilots,
        )
    }, []);

    useEffect(async () => {
        var urlStrings = data?.pilots
        var arrayLenght = urlStrings.length

        for (var i = 0; i < arrayLenght; i++) {
            axios
                .all(
                    urlStrings.map((urlStrings) =>
                        axios.get(urlStrings)
                    )
                )
                .then(
                    (response) => setPilotsUrl(response)
                )
        }

        axios
            .get(
                `${urlStrings}`
            )
            .then(response => {
                setPilotsUrl([response.data])
            })
        console.log(
            'This is PilotsUrl 😋 response Data : ',
            pilotsUrl,
        )
        console.log(
            'data URLs : ',
            urlStrings,
        )
    }, []);

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
                                <PlanetResidentsBadgeImage src={CharacterImg}/>
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
                                <PlanetResidentsBadgeTextContainer key={pilotsUrl?.data.name}>
                                    <PlanetResidentsBadgeText key={pilotsUrl?.data.name}>
                                        {pilotsUrl?.data.name}
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