import { useEffect, useState } from 'react';
import axios from 'axios';

import {
    //Default Styles
    Content,
    PlanetResidentsSectionDiv,
    SectionNoBackground,
    SectionNoBackgroundNoVh,
    Title,
    ResidentsBadge,
    PlanetResidentsBadgeTextContainer,
    PlanetResidentsBadgeText,
    PlanetsResidentsBadgeContainerImage,
    PlanetResidentsBadgeImage,
} from "../../../../../styles/global"

import { PlanetPageProps } from '..';

import CharacterImg from '../../../../../assets/CharacterImg.png'

interface ResidentsProps {
    name: string;
}
interface ResidentsUrlProps {
    name: string;
    url: string;
    data: data;
}

export const Residents = ({ data }: PlanetPageProps) => {
    const [residents, setResidents] = useState<ResidentsProps>()
    const [residentsUrl, setResidentsUrl] = useState<ResidentsUrlProps[]>([])

    useEffect(() => {
        axios
            .get(
                `${data?.residents}`
            )
            .then(response => {
                setResidents(response.data)
            })

        console.log(
            'data 😋 residents :',
            residents,
        )
    }, []);

    useEffect(async () => {
        var urlStrings = data?.residents
        var arrayLenght = urlStrings.length

        for (var i = 0; i < arrayLenght; i++) {
            axios
                .all(
                    urlStrings.map((urlStrings) =>
                        axios.get(urlStrings)
                    )
                )
                .then(
                    (response) => setResidentsUrl(response)
                )
        }

        axios
            .get(
                `${urlStrings}`
            )
            .then(response => {
                setResidentsUrl([response.data])
            })
        console.log(
            'This is residentsUrl 😋 response Data : ',
            residentsUrl,
        )
        console.log(
            'data URLs : ',
            urlStrings,
        )
    }, []);

    if (residents) {
        return (
            <SectionNoBackground>
                <Title>
                    Residents
                </Title>
                <Content>
                    <PlanetResidentsSectionDiv>
                        <ResidentsBadge>
                            <PlanetsResidentsBadgeContainerImage>
                                <PlanetResidentsBadgeImage src={CharacterImg}/>
                            </PlanetsResidentsBadgeContainerImage>
                            <PlanetResidentsBadgeTextContainer>
                                <PlanetResidentsBadgeText>
                                    {residents?.name}
                                </PlanetResidentsBadgeText>
                            </PlanetResidentsBadgeTextContainer>
                        </ResidentsBadge>
                    </PlanetResidentsSectionDiv>
                </Content>
            </SectionNoBackground>
        )
    } else {
        return (
            <SectionNoBackgroundNoVh>
                <Title>
                    Residents
                </Title>
                <Content>
                    <PlanetResidentsSectionDiv>
                        {residentsUrl.map((residentsUrl) => (
                            <ResidentsBadge>
                                <PlanetsResidentsBadgeContainerImage>
                                    <PlanetResidentsBadgeImage src={CharacterImg} />
                                </PlanetsResidentsBadgeContainerImage>
                                <PlanetResidentsBadgeTextContainer key={residentsUrl?.data.name}>
                                    <PlanetResidentsBadgeText key={residentsUrl?.data.name}>
                                        {residentsUrl?.data.name}
                                    </PlanetResidentsBadgeText>
                                </PlanetResidentsBadgeTextContainer>
                            </ResidentsBadge>
                        ))}
                    </PlanetResidentsSectionDiv>
                </Content>
            </SectionNoBackgroundNoVh>
        )
    }

}