import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from "../../../../services/api";

import isLoadingSVG from '../../../../assets/Loading/Spinner-1s-200px.svg';

import { NavBar } from '../../../../components/NavBar';
import { SideBar } from '../../../../components/SideBar';

import { Planet } from './Planet'
import { Residents } from './Residents';
import { Films } from './Films';

import {
    //Default Styles
    PageContainer,
    //Loading SVG
    IsLoadingImg,
} from '../../../../styles/global';

export interface PlanetPageDataProps {
    name?: string;
    climate?: string;
    diameter?: string;
    gravity?: string;
    orbital_period?: string;
    population?: string;
    rotation_period?: string;
    surface_water?: string;
    terrain?: string;
    residents: [] | string;
    films: [] | string;
}

export interface PlanetPageProps {
    index?: number,
    data: PlanetPageDataProps
}



export const PlanetsPage = (
    residents: string,
    films: string,
) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        residents,
        films,
    })

    const { planetsUrl } = useParams()

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        if (!planetsUrl) return
        setLoading(true)
        api
            .get(
                `planets/${planetsUrl}`
            )
            .then(response => {
                setLoading(false)
                setData(response.data)
            })
    }, []);

    if (!data) {
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
                <Planet data={data} />
                <Residents data={data} />
                <Films data={data} />
            </PageContainer>

        )
    }
}