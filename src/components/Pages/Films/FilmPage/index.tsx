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

export interface FilmsPageProps {
    index?: number;
    data: {
        title?: string;
        episode_id?: string;
        url?: string;
        characters: [] | string | Map;
        planets: [] | string | Map;
        starships: [] | string | Map;
        vehicles: [] | string | Map;
        species: [] | string | Map;
    }
}

export const FilmPage = (
    characters: string,
    planets: string,
    starships: string,
    vehicles: string,
    species: string,
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
        if(!filmsUrl) return
        setLoading(true)

        api
        .get(
            `films/${filmsUrl}`
        )
        .then(response => {
            setLoading(false)
            setData(response.data)
        })
        
    },[]);

    if(!data) {
        return setLoading(true)
    }

    if (loading) {
        return (
            <>
                <IsLoadingImg src={isLoadingSVG} />
            </>
        )
    }
    if (data) {
        return (
            <PageContainer>
                <NavBar toggle={toggle} />
                <SideBar isOpen={isOpen} toggle={toggle} />
                <FilmCover data={data}/>
                <FilmCharacters data={data}/>
                <FilmPlanets data={data}/>
                <FilmStarShips data={data}/>
                <FilmVehicles data={data}/>
                <FilmSpecies data={data}/>
            </PageContainer>
        )
    }
}