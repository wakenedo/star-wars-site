import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../../../services/api";

import { NavBar } from "../../../NavBar";
import { SideBar } from "../../../SideBar";

import { FilmCover } from "./FilmCover";
import { FilmCharacters } from "./FilmCharacters";
import { FilmPlanets } from "./FilmPlanets";
import { FilmStarShips } from "./FilmStarShips";
import { FilmVehicles } from "./FilmVehicles";
import { FilmSpecies } from "./FilmSpecies";

import isLoadingSVG from '../../../../assets/Loading/Spinner-1s-200px.svg';

import {
    //Default Styles
    PageContainer,
    //Loading SVG
    IsLoadingImg,
} from '../../../../styles/global'


export interface FilmsPageDataProps {
    title?: string;
    director?: string;
    producer?: string;
    opening_crawl?: string;
    release_date?: string;
    episode_id?: string;
    characters: {} | string[];
    planets: {} | string[];
    starships: {} | string[];
    vehicles: {} | string[];
    species: {} | string[];

}

export interface FilmsPageProps {
    data: FilmsPageDataProps
}


export const FilmPage = (
    characters: {} | string[],
    planets: {} | string[],
    starships: {} | string[],
    vehicles: {} | string[],
    species: {} | string[],
) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        characters,
        planets,
        starships,
        vehicles,
        species,
    })

    const { filmsUrl } = useParams()

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if (!filmsUrl) return
        setLoading(true)

        api
            .get(
                `films/${filmsUrl}`
            )
            .then(response => {
                setLoading(false)
                setData(response.data)
            })

    }, [data]);

    if (loading) {
        return (
            <>
                <IsLoadingImg src={isLoadingSVG} />
            </>
        )
    }

    return (
        <>
            <PageContainer>
                <NavBar toggle={toggle} />
                <SideBar isOpen={isOpen} toggle={toggle} />
                <FilmCover data={data} />
                <FilmCharacters data={data} />
                <FilmPlanets data={data} />
                <FilmStarShips data={data} />
                <FilmVehicles data={data} />
                <FilmSpecies data={data} />
            </PageContainer>
        </>
    )

}