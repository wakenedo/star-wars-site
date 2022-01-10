import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from "../../../../services/api";

import isLoadingSVG from '../../../../assets/Loading/Spinner-1s-200px.svg';

import { NavBar } from '../../../../components/NavBar';
import { SideBar } from '../../../../components/SideBar';


import { Species } from './Species';
import { HomeWorld } from './HomeWorld';
import { Films } from './Films';

import {
    //Default Styles
    PageContainer,
    //Loading SVG
    IsLoadingImg,
} from '../../../../styles/global';

export interface SpeciesPageProps {
    index?: number,
    data: 
    {
        name?: string;
        classification?: string;
        average_height?: string;
        skin_colors?: string;
        hair_colors?: string;
        eye_colors?: string;
        average_lifespan?: string;
        homeworld?: string;
        language?: string;
        people: [] | string;
        films: [] | string;
    }
}


export const SpeciesPage = (
    people: string,
    films: string,
) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        people,
        films,
    })

    const { speciesUrl } = useParams()

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        if (!speciesUrl) return
        setLoading(true)
        api
            .get(
                `species/${speciesUrl}`
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
            <Species data={data} />
            <HomeWorld data={data} />
            <Films data={data} />
        </PageContainer>
            
        )
    }
}