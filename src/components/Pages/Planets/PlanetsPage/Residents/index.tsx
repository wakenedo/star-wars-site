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

import { PlanetPageDataProps, PlanetPageProps } from '..';

import CharacterImg from '../../../../../assets/CharacterImg.png'

interface ResidentsProps {
    name: string;
}
interface ResidentsUrlProps {
    name: string;
    url: string;
    data: PlanetPageDataProps;
}

export const Residents = ({ data }: PlanetPageProps) => {
    const [residents, setResidents] = useState<ResidentsProps>()
    const [residentsUrl, setResidentsUrl] = useState<ResidentsUrlProps[]>([])

    useEffect(() => {
        if (!data || !data.residents) return

        if (typeof data.residents === 'string') {
            fetchSingleResident(data.residents)
        } else {
            fetchMultipleResident(data.residents as string[])
        }

    }, [data])

    const fetchSingleResident = (url: string) => {
        axios
            .get(
                `${url}`
            )
            .then(response => {
                setResidents(response.data)
            })

        console.log(
            'data 😋 residents :',
            residents,
        )
    };

    const fetchMultipleResident = (urlStrings: string[]) => {
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
                        let _response: ResidentsUrlProps[] = []

                        response.forEach(res => {
                            _response.push(res.data)
                        })

                        setResidentsUrl(_response)
                    }
                )
        }
    }
        
    if (residents) {
        return (
            <SectionNoBackground>
                <Title>
                    Residents
                </Title>
                <Content>
                    <PlanetResidentsSectionDiv >
                        <ResidentsBadge >
                            <PlanetsResidentsBadgeContainerImage>
                                <PlanetResidentsBadgeImage src={CharacterImg} />
                            </PlanetsResidentsBadgeContainerImage>
                            <PlanetResidentsBadgeTextContainer>
                                <PlanetResidentsBadgeText  >
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
            <SectionNoBackground>
                <Title>
                    Residents
                </Title>
                <Content>
                    <PlanetResidentsSectionDiv>
                        {residentsUrl.map((residentsUrl) => {
                            return (
                            <ResidentsBadge key={residentsUrl?.name}>
                                <PlanetsResidentsBadgeContainerImage>
                                    <PlanetResidentsBadgeImage src={CharacterImg} />
                                </PlanetsResidentsBadgeContainerImage>
                                <PlanetResidentsBadgeTextContainer >
                                    <PlanetResidentsBadgeText >
                                        {residentsUrl?.name}
                                    </PlanetResidentsBadgeText>
                                </PlanetResidentsBadgeTextContainer>
                            </ResidentsBadge>
                        )})}
                    </PlanetResidentsSectionDiv>
                </Content>
            </SectionNoBackground>
        )
    }

}