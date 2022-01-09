import axios from "axios"
import { useEffect, useState } from "react"
import { FilmsPageProps } from ".."
import {
    Content,
    SectionBackground1,
    PlanetResidentsSectionDiv,
    Title,
    ResidentsBadge,
    PlanetResidentsBadgeTextContainer,
    PlanetResidentsBadgeText,
    PlanetsResidentsBadgeContainerImage,
    PlanetResidentsBadgeImage,
} from "../../../../../styles/global"

import CharacterImg from '../../../../../assets/CharacterImg.png'

interface CharacterProps {
    name: string;
}
interface CharacterUrlProps {
    name: string;
    url: string;
    data: data;
}

export const FilmCharacters = ({ data }: FilmsPageProps) => {
    const [characters, setCharacters] = useState<CharacterProps[]>([])
    const [charactersUrl, setCharactersUrl] = useState<CharacterUrlProps[]>([])

    useEffect(() => {
        var urlStrings = data?.characters
        var arrayLenght = urlStrings.length

        for (var i = 0; i < arrayLenght; i++) {
            for (var i = 0; i < arrayLenght; i++) {
                axios
                    .all(
                        urlStrings.map((urlStrings) =>
                            axios.get(urlStrings)
                        )
                    )
                    .then(
                        (response) => setCharactersUrl(response)
                    )
            }
        }

        console.log(
            'data 😋 charactersUrl :',
            charactersUrl,
        )
        console.log(
            'data URLs : ',
            urlStrings,
        )
    }, []);

    return (
        <SectionBackground1>
            <Title>
                Characters
            </Title>
            <Content>
                <PlanetResidentsSectionDiv>
                    {charactersUrl.map((charactersUrl) => (
                        <ResidentsBadge>
                            <PlanetsResidentsBadgeContainerImage>
                                <PlanetResidentsBadgeImage src={CharacterImg} />
                            </PlanetsResidentsBadgeContainerImage>
                            <PlanetResidentsBadgeTextContainer key={charactersUrl?.data.name}>
                                <PlanetResidentsBadgeText key={charactersUrl?.data.name}>
                                    {charactersUrl?.data.name}
                                </PlanetResidentsBadgeText>
                            </PlanetResidentsBadgeTextContainer>
                        </ResidentsBadge>
                    ))}
                </PlanetResidentsSectionDiv>
            </Content>
        </SectionBackground1>
    )
}