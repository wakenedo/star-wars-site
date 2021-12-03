
import {
    FilmsBadgeContainer,
    FilmsBadgeImg,
    FilmsBadgeTitle,
} from "./style"

import Episode1 from '../../../../assets/moviescover/small/star-wars-episode-i-the-phantom-menace_v2.jpg'
import Episode2 from '../../../../assets/moviescover/small/star-wars-episode-ii-attack-of-the-clones_v2.jpg'
import Episode3 from '../../../../assets/moviescover/small/star-wars-episode-iii-revenge-of-the-sith_v2.jpg'
import Episode4 from '../../../../assets/moviescover/small/star-wars-episode-iv-a-new-hope_v2.jpg'
import Episode5 from '../../../../assets/moviescover/small/star-wars-episode-v-the-empire-strikes-back_v2.jpg'
import Episode6 from '../../../../assets/moviescover/small/star-wars-episode-vi-return-of-the-jedi_v2.jpg'
import Episode7 from '../../../../assets/moviescover/small/star-wars-episode-vii-the-force-awakens_v2.jpg'

export const FilmsBadge1 = () => {
    return (
        <FilmsBadgeContainer>


            <FilmsBadgeTitle>  Star Wars Episode I - The Phantom Menace </FilmsBadgeTitle>
            <FilmsBadgeImg src={Episode1}/>


        </FilmsBadgeContainer>

    )
}
export const FilmsBadge2 = () => {
    return (
        <FilmsBadgeContainer>


            <FilmsBadgeTitle>  Star Wars Episode II - Attack of the Clones </FilmsBadgeTitle>
            <FilmsBadgeImg src={Episode2}/>


        </FilmsBadgeContainer>

    )
}
export const FilmsBadge3 = () => {
    return (
        <FilmsBadgeContainer>


            <FilmsBadgeTitle>  Star Wars Episode III - Revenge of the Sith </FilmsBadgeTitle>
            <FilmsBadgeImg src={Episode3}/>


        </FilmsBadgeContainer>

    )
}



export const FilmsBadge4 = () => {
    return (
        <FilmsBadgeContainer>


            <FilmsBadgeTitle>  Star Wars Episode IV - A New Hope </FilmsBadgeTitle>
            <FilmsBadgeImg src={Episode4}/>


        </FilmsBadgeContainer>

    )
}

export const FilmsBadge5 = () => {
    return (
        <FilmsBadgeContainer>


            <FilmsBadgeTitle>  Star Wars Episode V - The Empire Strikes Back </FilmsBadgeTitle>
            <FilmsBadgeImg src={Episode5}/>


        </FilmsBadgeContainer>

    )
}

export const FilmsBadge6 = () => {
    return (
        <FilmsBadgeContainer>


            <FilmsBadgeTitle>  Star Wars Episode VI - Return of Jedi </FilmsBadgeTitle>
            <FilmsBadgeImg src={Episode6}/>


        </FilmsBadgeContainer>

    )
}

export const FilmsBadge7 = () => {
    return (
        <FilmsBadgeContainer>


            <FilmsBadgeTitle>  Star Wars Episode VII - The Force Awakens </FilmsBadgeTitle>
            <FilmsBadgeImg src={Episode7}/>


        </FilmsBadgeContainer>

    )
}