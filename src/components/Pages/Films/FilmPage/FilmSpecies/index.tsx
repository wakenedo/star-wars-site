import { useEffect, useState } from "react";

import axios from "axios";

import {
    Content,
    Title,
    SectionBackground2,
    PlanetContainerText,
    TextTitle,
    DefaultTextP,
    PlanetResidentsSectionDiv,
} from "../../../../../styles/global"

import { FilmsPageDataProps, FilmsPageProps } from ".."

interface SpeciesUrlProps {
    name: string;
    classification: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
    data: FilmsPageDataProps
}

export const FilmSpecies = ({ data }: FilmsPageProps) => {
    const [speciesUrl, setSpeciesUrl] = useState<SpeciesUrlProps[]>([])

    useEffect(() => {
        if (!data || !data.species) return

        if (typeof data.species === 'string') {
            return
        } else {
            fetchMultipleSpecies(data.species as string[])
        }
    }, [data])

    const fetchMultipleSpecies = (urlStrings: string[]) => {
        var arrayLength = urlStrings.length


        for (var i = 0; i < arrayLength; i++) {
            axios
                .all(
                    urlStrings.map((urlStrings) =>
                        axios.get(urlStrings)
                    )
                )
                .then(
                    (response) => {
                        let _response: SpeciesUrlProps[] = []

                        response.forEach(res => {
                            _response.push(res.data)
                        })

                        setSpeciesUrl(_response)
                    }
                )
        }


        console.log(
            'data 🐛  :',
            speciesUrl,
        )
        console.log(
            'data URLs : ',
            urlStrings,
        )
    };
    return (
        <SectionBackground2>
            <Title>
                Species
            </Title>
            <Content>
                <PlanetResidentsSectionDiv>
                    {speciesUrl.map((speciesUrl) => {
                        return (
                            <PlanetContainerText key={speciesUrl?.name}>
                                <TextTitle>
                                    {speciesUrl?.name}
                                </TextTitle>
                                <DefaultTextP>
                                    Classification : {speciesUrl?.classification}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Average Height : {speciesUrl?.average_height} Cm
                                </DefaultTextP>
                                <DefaultTextP>
                                    Skin Colors : {speciesUrl?.skin_colors}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Hair Colors : {speciesUrl?.hair_colors}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Eye Colors : {speciesUrl?.eye_colors}
                                </DefaultTextP>
                                <DefaultTextP>
                                    Average Lifespan : {speciesUrl?.average_lifespan} Years
                                </DefaultTextP>
                                <DefaultTextP>
                                    Language : {speciesUrl?.language}
                                </DefaultTextP>
                            </PlanetContainerText>
                        )
                    })}
                </PlanetResidentsSectionDiv>
            </Content>
        </SectionBackground2>

    )
}