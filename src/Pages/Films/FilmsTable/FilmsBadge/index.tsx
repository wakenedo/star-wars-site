import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import { api } from "../../../../services/api"

import {
    //Default Styles 
    BadgeContainer, 
    BadgeTitleContainer,
    //Loading SVG 
    IsLoadingImg } 
from "../../../../styles/global"

import { 
    FilmsBadgeContainer,
    FilmsBadgeImg,
    FilmsBadgeTitle 
} from "./style";

import { IoMdArrowRoundForward } from "react-icons/io";

import isLoadingSVG from '../../../../assets/Loading/Spinner-1s-200px.svg';

import Episode1 from '../../../../assets/moviescover/star-wars-episode-i-the-phantom-menace_v2.jpg'

interface FilmsTableBadgeProps {
    title: string;
    episode_id: string;
    url: string;
}

export const FilmsBadge = () => {
    const [loading, setLoading] = useState(false)
    const [filmsTable, setFilmsTable] = useState<FilmsTableBadgeProps[]>([])
    
    const getNextUrl = (url: string) => {

        url = url.replace('https://swapi.dev/api/films/', '')


        return url
    }

    useEffect(() => {
        setLoading(true)
        
        api

            .get(
                `films`
            )
            .then(response => {
                setFilmsTable(response.data.results)
                setLoading(false)
            })
        console.log(
            filmsTable
        )
    }, [])

    if (loading) {
        return (
            <>
                <IsLoadingImg src={isLoadingSVG} />
            </>
        )
    }

    return (
        <BadgeContainer>
            {filmsTable.map((films) => (
                <FilmsBadgeContainer key={films.title}>
                    <BadgeTitleContainer>
                        <FilmsBadgeTitle> 
                            Star Wars - Episode {films.episode_id} - {films.title}  
                        </FilmsBadgeTitle>
                        <Link to={`/FilmsPage/${getNextUrl(films.url)}`} key={films.title}>
                            <IoMdArrowRoundForward />
                        </Link>
                    </BadgeTitleContainer>
                    <FilmsBadgeImg src={Episode1} />
                </FilmsBadgeContainer>
            ))}
        </BadgeContainer>
    )
}