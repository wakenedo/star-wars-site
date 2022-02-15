import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import {
    //Default Styles
    SectionNoBackground,
    Title,
    Content,
    PlanetFilmSectionDiv,
    BadgePlanetFilmsContainer,
    FilmsBadgeContainer,
    FilmsBadgeTitle,
    FilmsBadgeImg,

} from '../../../../../styles/global';

import Episode1 from '../../../../../assets/moviescover/star-wars-episode-i-the-phantom-menace_v2.jpg'

import { DataProps, PeoplePageProps } from '..';


interface FilmsProps {
    title: string
    episode_id: string
}
interface FilmsUrlProps {
    title: string
    episode_id: string
    url: string
    data: DataProps;
}

export const Films = ({ data }: PeoplePageProps) => {
    const [films, setFilms] = useState<FilmsProps>()
    const [filmsUrl, setFilmsUrl] = useState<FilmsUrlProps[]>([])


    // Simplified the code merging the two UseEffects into a single one, 
    // transforming the previous UseEffect structures
    // into functions, to be iterated by the new unique UseEffect.
    useEffect(() => {
        if (!data || !data.films) return

        if(typeof data.films === 'string') {
            fetchSingleFilm(data.films)
        } else {
            fetchMultipleFilm(data.films)
        }

    },[data])

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
    }

    const fetchMultipleFilm = (urlStrings: string[]) => {

        let arrayLenght = urlStrings.length

        for (let i = 0; i < arrayLenght; i++) {
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
            <SectionNoBackground>
                <Title>
                    Film
                </Title>
                <Content>
                    <PlanetFilmSectionDiv>
                        <BadgePlanetFilmsContainer>
                            <FilmsBadgeContainer key={films.episode_id}>
                                <FilmsBadgeTitle>
                                    Star Wars - Episode {films.episode_id} - {films.title}
                                </FilmsBadgeTitle>
                                <FilmsBadgeImg src={Episode1} />
                            </FilmsBadgeContainer>
                        </BadgePlanetFilmsContainer>
                    </PlanetFilmSectionDiv>
                </Content>
            </SectionNoBackground>
        )
    } else {
        return (
            <SectionNoBackground>
                <Title>
                    Films
                </Title>
                <Content>
                    <PlanetFilmSectionDiv>
                        {filmsUrl.map((filmsUrl) => {
                            console.log("FilmsUrl", filmsUrl)
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
            </SectionNoBackground>
        )

    }
}