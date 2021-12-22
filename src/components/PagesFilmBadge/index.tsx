
import {
    FilmsBadgeContainer,
    FilmsBadgeImg,
    FilmsBadgeTitle,
} from "./style"


import Episode1 from '../../assets/moviescover/small/star-wars-episode-i-the-phantom-menace_v2.jpg'
import Episode2 from '../../assets/moviescover/small/star-wars-episode-ii-attack-of-the-clones_v2.jpg'
import Episode3 from '../../assets/moviescover/small/star-wars-episode-iii-revenge-of-the-sith_v2.jpg'
import Episode4 from '../../assets/moviescover/small/star-wars-episode-iv-a-new-hope_v2.jpg'
import Episode5 from '../../assets/moviescover/small/star-wars-episode-v-the-empire-strikes-back_v2.jpg'
import Episode6 from '../../assets/moviescover/small/star-wars-episode-vi-return-of-the-jedi_v2.jpg'
import Episode7 from '../../assets/moviescover/small/star-wars-episode-vii-the-force-awakens_v2.jpg'
import { Link } from "react-router-dom"

export const FilmsBadge1 = () => {
    return (
        <FilmsBadgeContainer>
            <FilmsBadgeTitle>  Star Wars Episode I - The Phantom Menace </FilmsBadgeTitle>
            <Link to='/Films/Episode_1'>
                <FilmsBadgeImg src={Episode1} />
            </Link>
        </FilmsBadgeContainer>

    )
}

export const FilmsBadge2 = () => {
    return (
        <FilmsBadgeContainer>
            <FilmsBadgeTitle>  Star Wars Episode II - Attack of the Clones </FilmsBadgeTitle>
            <Link to=''>
                <FilmsBadgeImg src={Episode2} />
            </Link>
        </FilmsBadgeContainer>

    )
}

export const FilmsBadge3 = () => {
    return (
        <FilmsBadgeContainer>
            <FilmsBadgeTitle>  Star Wars Episode III - Revenge of the Sith </FilmsBadgeTitle>
            <Link to=''>
                <FilmsBadgeImg src={Episode3} />
            </Link>
        </FilmsBadgeContainer>

    )
}

export const FilmsBadge4 = () => {
    return (
        <FilmsBadgeContainer>
            <FilmsBadgeTitle>  Star Wars Episode IV - A New Hope </FilmsBadgeTitle>
            <Link to='/Films/Episode_4'>
                <FilmsBadgeImg src={Episode4} />
            </Link>
        </FilmsBadgeContainer>

    )
}

export const FilmsBadge5 = () => {
    return (
        <FilmsBadgeContainer>
            <FilmsBadgeTitle>  Star Wars Episode V - The Empire Strikes Back </FilmsBadgeTitle>
            <Link to=''>
                <FilmsBadgeImg src={Episode5} />
            </Link>
        </FilmsBadgeContainer>

    )
}

export const FilmsBadge6 = () => {
    return (
        <FilmsBadgeContainer>
            <FilmsBadgeTitle>  Star Wars Episode VI - Return of Jedi </FilmsBadgeTitle>
            <Link to=''>
                <FilmsBadgeImg src={Episode6} />
            </Link>
        </FilmsBadgeContainer>

    )
}

export const FilmsBadge7 = () => {
    return (
        <FilmsBadgeContainer>
            <FilmsBadgeTitle>  Star Wars Episode VII - The Force Awakens </FilmsBadgeTitle>
            <Link to=''>
                <FilmsBadgeImg src={Episode7} />
            </Link>
        </FilmsBadgeContainer>

    )
}