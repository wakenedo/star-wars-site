import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from "../../../../services/api";

import { NavBar } from '../../../NavBar';
import { SideBar } from '../../../SideBar';

import { HomeWorld } from './HomeWorld'
import { Species } from './Species';
import { Films } from './Films';
import { StarShips } from './StarShips';
import { Vehicles } from './Vehicles';
import { Character } from './Character';

import isLoadingSVG from '../../../../assets/Loading/Spinner-1s-200px.svg';

import {
    //Default Styles
    PageContainer,
    //Loading SVG
    IsLoadingImg,
} from '../../../../styles/global';

export interface DataProps {
    name?: string;
    height?: string;
    mass?: string;
    hair_color?: string;
    skin_color?: string;
    eye_color?: string;
    birth_year?: string;
    gender?: string;
    homeworld: string;
    starships: string | string[];
    vehicles: string | string[];
    films: string | string[];
    species: string | string[],
}

export interface PeoplePageProps {
    index?: number,
    data: DataProps
}

export const PeoplePage = (
    species: string | string[],
    vehicles: string | string[],
    homeworld: string ,
    starships: string | string[],
    films: string | string[],
) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        species,
        vehicles,
        homeworld,
        starships,
        films,
    })

    const { url } = useParams()

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if (!url) return
        setLoading(true)
        api
            .get(
                `people/${url}`
            )
            .then(response => {
                setLoading(false)
                setData(response.data)
            })
    }, []);


    if (loading) {
        return (
            <>
                <IsLoadingImg src={isLoadingSVG} />
            </>
        )
    }
    if (!data) {
        return (
            setLoading(true)
        )
    }
    else {
        return (
            <PageContainer >
                <NavBar toggle={toggle} />
                <SideBar isOpen={isOpen} toggle={toggle} />
                <Character data={data} />
                <HomeWorld data={data} />
                <Species data={data} />
                <Films data={data} />
                <StarShips data={data} />
                <Vehicles data={data} />
            </PageContainer>
        )

    }

}