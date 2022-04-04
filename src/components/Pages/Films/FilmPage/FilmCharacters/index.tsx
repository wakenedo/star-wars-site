import axios from "axios"
import { useEffect, useState } from "react"
import { FilmsPageDataProps, FilmsPageProps } from ".."
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


interface FilmCharacterUrlProps {
    name: string;
    data: FilmsPageDataProps
}

export const FilmCharacters = ({ data }: FilmsPageProps) => {
    const [charactersUrl, setCharactersUrl] = useState<FilmCharacterUrlProps[]>([])

    useEffect(() => {
        if (!data || !data.characters) return

        if (typeof data.characters === 'string') {
            return
        } else {
            fetchMultipleFilm(data.characters as string[])
        }
    }, [data])

    const fetchMultipleFilm = (urlStrings: string[]) => {
        var arrayLenght = urlStrings.length

        for (var i = 0; i < arrayLenght; i++) {
            if (typeof urlStrings === 'string') return

            axios
                .all(
                    urlStrings.map((urlStrings) =>
                        axios.get(urlStrings)
                    )
                )
                .then(
                    (response) => {
                        let _response: FilmCharacterUrlProps[] = []

                        response.forEach(res => {
                            _response.push(res.data)
                        })

                        setCharactersUrl(_response)
                    }
                )
        }

        console.log(
            'data 😋 charactersUrl :',
            charactersUrl,
        )
        console.log(
            'data URLs : ',
            urlStrings,
        )
    };

    return (
        <SectionBackground1>
            <Title>
                Characters
            </Title>
            <Content>
                <PlanetResidentsSectionDiv>
                    {charactersUrl.map((charactersUrl) => {
                        return (
                            <ResidentsBadge key={charactersUrl?.name}>
                                <PlanetsResidentsBadgeContainerImage>
                                    <PlanetResidentsBadgeImage src={CharacterImg} />
                                </PlanetsResidentsBadgeContainerImage>
                                <PlanetResidentsBadgeTextContainer >
                                    <PlanetResidentsBadgeText>
                                        {charactersUrl?.name}
                                    </PlanetResidentsBadgeText>
                                </PlanetResidentsBadgeTextContainer>
                            </ResidentsBadge>
                        )
                    })}
                </PlanetResidentsSectionDiv>
            </Content>
        </SectionBackground1>
    )
}