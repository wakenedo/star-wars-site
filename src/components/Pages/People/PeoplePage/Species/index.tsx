

import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    //Default Styles
    SectionBackground2,
    Title,
    TextTitle,
    SmallDefaultTextP,
    Content,
    NoDataFromApi,

} from '../../../../../styles/global';

import {
    TextContainerLarge,
} from '../style'

import NoDataFromApiSVG from '../../../../../assets/ErrorSVG/noDataApi.svg'
import { PeoplePageProps } from '..';

interface SpeciesProps {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
}

interface SpeciesHomeWorldProps {
    name: string;
}


export const Species = ({ data }: PeoplePageProps) => {
    const [species, setSpecies] = useState<SpeciesProps>();
    const [speciesHomeWorld, setSpeciesHomeWorld] = useState<SpeciesHomeWorldProps>()

    useEffect(() => {

        axios
            .get(
                `${data?.species}`
            )
            .then(response => {
                setSpecies(response.data)
            })

        console.log(
            'This is species 👾 URL : ',
            data?.species
        )
    }, []);

    useEffect(async() => {
        axios
            .get(
                `${species?.homeworld}`
            )
            .then(response => {
                setSpeciesHomeWorld(response.data)
            })
        console.log(
            'This is species 👾 Data : ',
            species,
            'This is species homeworld 👾 URL : ',
            species?.homeworld
        )
    }, []);

    if (!species) {
        return (
            <SectionBackground2>
                <Title>
                    Species
                </Title>
                <Content>
                    <NoDataFromApi src={NoDataFromApiSVG} />
                </Content>
            </SectionBackground2>
        )
    } else {
        return (
            <SectionBackground2>
                <Title>
                    Species
                </Title>
                <Content>
                    <TextContainerLarge >
                        <TextTitle>
                            {species?.name}
                        </TextTitle>
                        <SmallDefaultTextP>
                            Classification : {species?.classification}
                        </SmallDefaultTextP>
                        <SmallDefaultTextP>
                            Designation : {species?.designation}
                        </SmallDefaultTextP>
                        <SmallDefaultTextP>
                            Average Height : {species?.average_height} Cm
                        </SmallDefaultTextP>
                        <SmallDefaultTextP>
                            Skin Colors : {species?.skin_colors}
                        </SmallDefaultTextP>
                        <SmallDefaultTextP>
                            Hair Colors : {species?.hair_colors}
                        </SmallDefaultTextP>
                        <SmallDefaultTextP>
                            Eye Colors : {species?.eye_colors}
                        </SmallDefaultTextP>
                        <SmallDefaultTextP>
                            Average Lifespan : {species?.average_lifespan} Years
                        </SmallDefaultTextP>
                        <SmallDefaultTextP>
                            Home World : {speciesHomeWorld?.name}
                        </SmallDefaultTextP>
                        <SmallDefaultTextP>
                            Language : {species?.language}
                        </SmallDefaultTextP>
                    </TextContainerLarge>
                </Content>
            </SectionBackground2>
        )
    }



}