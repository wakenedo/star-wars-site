import { useEffect, useState } from 'react';
import axios from 'axios';

import {
    //Default Styles
    SectionBackground2,
    Title,
    Content,
    FilmsBadgeContainer,
    FilmsBadgeTitle,
    FilmsBadgeImg,
    PlanetFilmSectionDiv,
    BadgePlanetFilmsContainer,

} from '../../../../../styles/global';

import Episode1 from '../../../../../assets/moviescover/star-wars-episode-i-the-phantom-menace_v2.jpg'

import { PlanetPageProps } from '..';

interface FilmsProps {
    title: string
    episode_id: string
}
interface FilmsUrlProps {
    title: string
    episode_id: string
    url: string
    data: data;
}


export const Films = ({ data }: PlanetPageProps) => {
    const [films, setFilms] = useState<FilmsProps>()
    const [filmsUrl, setFilmsUrl] = useState<FilmsUrlProps[]>([])

    useEffect(() => {
        axios
            .get(
                `${data?.films}`
            )
            .then(response => {
                setFilms(response.data)
            })

        console.log(
            'data 🎦 films : ',
            films,
            data?.films,
        )
    }, []);

    useEffect(async () => {
        var urlStrings = data?.films
        var arrayLenght = urlStrings.length

        for (var i = 0; i < arrayLenght; i++) {
            axios
                .all(
                    urlStrings.map((urlStrings) =>
                        axios.get(urlStrings)
                    )
                )

                .then(
                    (response) => setFilmsUrl(response)
                )
        }

        axios
            .get(
                `${urlStrings}`
            )
            .then(response => {
                setFilmsUrl([response.data])
            })
        console.log(
            'This is filmsUrl 🎦 response Data : ',
            filmsUrl,
        )
        console.log(
            'data URLs : ',
            urlStrings,
        )
    }, []);

    if (films) {
        return (
            <SectionBackground2>
                <Title>
                    Films
                </Title>
                <Content>
                    <PlanetFilmSectionDiv>
                        <BadgePlanetFilmsContainer>
                            <FilmsBadgeContainer>
                                <FilmsBadgeTitle>
                                    Star Wars - Episode {films.episode_id} - {films.title}
                                </FilmsBadgeTitle>
                                <FilmsBadgeImg src={Episode1} />
                            </FilmsBadgeContainer>
                        </BadgePlanetFilmsContainer>
                    </PlanetFilmSectionDiv>
                </Content>
            </SectionBackground2>
        )
    } else {
        return (
            <SectionBackground2>
                <Title>
                    Films
                </Title>
                <Content>
                    <PlanetFilmSectionDiv>
                        {filmsUrl.map((filmsUrl) => (
                            <BadgePlanetFilmsContainer>
                                <FilmsBadgeContainer>
                                    <FilmsBadgeTitle>
                                        Star Wars - Episode {filmsUrl.data.episode_id} - {filmsUrl.data.title}
                                    </FilmsBadgeTitle>
                                    <FilmsBadgeImg src={Episode1} />
                                </FilmsBadgeContainer>
                            </BadgePlanetFilmsContainer>
                        ))}
                    </PlanetFilmSectionDiv>
                </Content>
            </SectionBackground2>
        )

    }
}