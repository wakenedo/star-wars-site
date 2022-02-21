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

import { PlanetPageDataProps, PlanetPageProps } from '..';

interface FilmsProps {
    title: string
    episode_id: string
}
interface FilmsUrlProps {
    title: string
    episode_id: string
    url: string
    data: PlanetPageDataProps;
}


export const Films = ({ data }: PlanetPageProps) => {
    const [films, setFilms] = useState<FilmsProps>()
    const [filmsUrl, setFilmsUrl] = useState<FilmsUrlProps[]>([])

    useEffect(() => {
        if (!data || !data.films) return

        if (typeof data.films === 'string') {
            fetchSingleFilm(data.films)
        } else {
            fetchMultipleFilm(data.films)
        }

    }, [data])

    const fetchSingleFilm = (url: string) => {
        axios
            .get(
                `${url}`
            )
            .then(response => {
                setFilms(response.data)
            })

        console.log(
            'data 🎦 films : ',
            films,
            data?.films,
        )
    };

    const fetchMultipleFilm = (urlStrings: string[]) => {

        let arrayLength = urlStrings.length

        for (let i = 0; i < arrayLength; i++) {
            if (typeof urlStrings === 'string') return

            axios
                .all(
                    urlStrings.map((urlStrings) =>
                        axios.get(urlStrings)
                    )
                )
                .then(
                    (response) => {
                        let _response: FilmsUrlProps[] = []

                        response.forEach(res => {
                            _response.push(res.data)
                        })

                        setFilmsUrl(_response)
                    }
                )
        }
    }

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
                        {filmsUrl.map((filmsUrl) => {
                            return (
                            <BadgePlanetFilmsContainer>
                                <FilmsBadgeContainer>
                                    <FilmsBadgeTitle>
                                        Star Wars - Episode {filmsUrl.episode_id} - {filmsUrl.title}
                                    </FilmsBadgeTitle>
                                    <FilmsBadgeImg src={Episode1} />
                                </FilmsBadgeContainer>
                            </BadgePlanetFilmsContainer>
                        )})}
                    </PlanetFilmSectionDiv>
                </Content>
            </SectionBackground2>
        )

    }
}