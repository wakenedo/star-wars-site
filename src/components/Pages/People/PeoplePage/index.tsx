import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from "../../../../services/api";

import { NavBar } from '../../../../components/NavBar';
import { SideBar } from '../../../../components/SideBar';

import isLoadingSVG from '../../../../assets/Loading/Spinner-1s-200px.svg';

import {
    //Default Styles
    PageContainer,



    //Loading SVG
    IsLoadingImg,
} from '../../../../styles/global';

import { HomeWorld } from './HomeWorld'
import { Species } from './Species';
import { Films } from './Films';
import { StarShips } from './StarShips';
import { Vehicles } from './Vehicles';
import { Character } from './Character';


export interface PeoplePageProps {
    index?: number,
    data:
    {
        name?: string;
        height?: string;
        mass?: string;
        hair_color?: string;
        skin_color?: string;
        eye_color?: string;
        birth_year?: string;
        gender?: string;
        homeworld?: string;
        starships: [] | string ;
        vehicles:  [] | string ;
        species?: string,
        
    }
    ;
}



export const PeoplePage = (
    species: string,
    vehicles: string,
    homeworld: string,
    starships: string 

) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        species,
        vehicles,
        homeworld,
        starships,
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
        setData
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
            <PageContainer >
                <NavBar toggle={toggle} />
                <SideBar isOpen={isOpen} toggle={toggle} />
                <Character data={data} />
                <HomeWorld data={data} />
                <Species data={data} />
                <Films />
                <StarShips data={data} />
                <Vehicles data={data} />
            </PageContainer>
        )

    }

}