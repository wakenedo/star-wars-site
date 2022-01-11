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

import { FilmsPageProps } from ".."

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
    data: data;
}

export const FilmSpecies = ({ data }: FilmsPageProps) => {
    const [speciesUrl, setSpeciesUrl] = useState<SpeciesUrlProps[]>([])

    useEffect(async () => {
        var urlStrings = data?.species
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
                        (response) => setSpeciesUrl(response)
                    )
            }
        }

        console.log(
            'data 🐛  :',
            speciesUrl,
        )
        console.log(
            'data URLs : ',
            urlStrings,
        )
    }, []);
    return (
        <SectionBackground2>
            <Title>
                Species
            </Title>
            <Content>
                <PlanetResidentsSectionDiv>
                    {speciesUrl.map((speciesUrl) => (
                        <PlanetContainerText>
                            <TextTitle>
                                {speciesUrl?.data.name}
                            </TextTitle>
                            <DefaultTextP>
                                Classification : {speciesUrl?.data.classification}
                            </DefaultTextP>
                            <DefaultTextP>
                                Average Height : {speciesUrl?.data.average_height} Cm
                            </DefaultTextP>
                            <DefaultTextP>
                                Skin Colors : {speciesUrl?.data.skin_colors}
                            </DefaultTextP>
                            <DefaultTextP>
                                Hair Colors : {speciesUrl?.data.hair_colors}
                            </DefaultTextP>
                            <DefaultTextP>
                                Eye Colors : {speciesUrl?.data.eye_colors}
                            </DefaultTextP>
                            <DefaultTextP>
                                Average Lifespan : {speciesUrl?.data.average_lifespan} Years
                            </DefaultTextP>
                            <DefaultTextP>
                                Language : {speciesUrl?.data.language}
                            </DefaultTextP>
                        </PlanetContainerText>
                    ))}
                </PlanetResidentsSectionDiv>
            </Content>
        </SectionBackground2>

    )
}